import { Bot, Context, GrammyError } from "grammy";
import { Env, PollType } from "@/types";
import { pollConfigurations } from "./content";

interface ActivePoll {
  messageId: number;
  stopTime: number;
  chatId: string;
  reminderTime: number; // ⬅️ Time to send reminder
  reminderSent: boolean; // ⬅️ Track if reminder was sent
  type: PollType; // ⬅️ Add type property
}

export async function setupPollSchedulers(bot: Bot, env: Env, type: PollType) {
  if (!env.SUBSCRIBED_CHATS_STORE) {
    console.error("❌ KV Namespace SUBSCRIBED_CHATS_STORE is missing!");
    return;
  }

  console.log(`[DEBUG] Starting ${type} poll at ${new Date().toISOString()}`);

  const subscribedChats: string[] = [];
  try {
    const kvList = await env.SUBSCRIBED_CHATS_STORE.list();
    for (const key of kvList.keys) {
      const chatData = await env.SUBSCRIBED_CHATS_STORE.get(key.name);
      const subscriptions = chatData ? JSON.parse(chatData) : {};

      if (subscriptions.polls) {
        subscribedChats.push(key.name);
      }
    }
  } catch (error) {
    console.error("❌ Error accessing KV:", error);
  }

  if (subscribedChats.length === 0) {
    console.warn("[DEBUG] No chats subscribed to polls. Skipping.");
    return;
  }

  console.log(`[DEBUG] Sending poll to ${subscribedChats.length} chats.`);

  // Ensure the poll configuration is properly retrieved
  const pollConfig = pollConfigurations.find((c) => c.type === type);
  if (!pollConfig || typeof pollConfig.content !== "function") {
    console.error(`❌ Poll configuration for '${type}' is missing or invalid!`);
    return;
  }

  const content = pollConfig.content();
  if (!content) {
    console.error(`❌ Poll content for '${type}' could not be generated!`);
    return;
  }

  const { question, options, duration, warning } = content;
  const warningTime = warning ?? 60 * 1000; // Default to 1 minute if not set

  try {
    for (const chatId of subscribedChats) {
      try {
        let isGroup = false;
        try {
          const chatInfo = await bot.api.getChat(chatId);
          isGroup = chatInfo.type === "group" || chatInfo.type === "supergroup";
        } catch (error) {
          console.warn(
            `⚠️ Could not retrieve chat type for ${chatId}, defaulting to anonymous.`
          );
        }

        const pollMessage = await bot.api.sendPoll(chatId, question, options, {
          is_anonymous: isGroup ? false : true,
          allows_multiple_answers: true,
        });

        console.log(`✅ Poll sent to ${chatId}`);

        if (isGroup) {
          const pollData: ActivePoll = {
            messageId: pollMessage.message_id,
            stopTime: Date.now() + duration,
            chatId,
            reminderTime: Date.now() + (duration - warningTime), // Pre-calculate
            reminderSent: false, // Not sent yet
            type,
          };

          await env.POLL_STORE.put(
            `poll:${chatId}:${type}:${pollMessage.message_id}`,
            JSON.stringify(pollData)
          );
        }
      } catch (error) {
        console.error(`❌ Failed to send poll to ${chatId}:`, error);
      }
    }
  } catch (error) {
    console.error(`Failed to broadcast ${type} poll:`, error);
  }
}

// Send reminder to non-participants dynamically (without storing users)
async function sendReminder(
  bot: Bot,
  env: Env,
  chatId: string,
  type: PollType,
  messageId: number
) {
  try {
    // Fetch poll data from KV Store
    const pollData = await env.POLL_STORE.get(
      `poll:${chatId}:${type}:${messageId}`
    );
    if (!pollData) return;

    let poll: ActivePoll = JSON.parse(pollData);

    // Fetch chat members (administrators or all members, depending on your needs)
    const members = await bot.api.getChatAdministrators(chatId);
    const allUsers = members.map((member) => member.user.id);

    // Fetch poll results to find participants
    const pollResults = await bot.api.stopPoll(chatId, messageId);
    const participants = new Set();
    pollResults.options.forEach((option) => {
      if (option.voter_count && option.voter_count > 0) {
        for (let i = 0; i < option.voter_count; i++) {
          participants.add(i);
        }
      }
    });

    // Find non-participants dynamically
    const nonParticipants = allUsers.filter((id) => !participants.has(id));

    // ✅ Fetch group details to check if it’s public or private
    let pollLink: string;
    try {
      const chatInfo = await bot.api.getChat(chatId);

      if (chatInfo.username) {
        // ✅ Public group: Use direct Telegram link
        pollLink = `https://t.me/${chatInfo.username}/${messageId}`;
      } else {
        // ✅ Private group: Use Telegram App link
        pollLink = `tg://privatepost?channel=${String(chatId).replace(
          /^(-100)/,
          ""
        )}&post=${messageId}`;
      }
    } catch (error) {
      console.error(`❌ Failed to get chat info for ${chatId}:`, error);
      pollLink = `⚠️ حدث خطأ أثناء جلب معلومات المجموعة. يرجى البحث يدويًا عن الاستطلاع.`;
    }

    if (nonParticipants.length > 0) {
      for (const userId of nonParticipants) {
        try {
          // Fetch user details
          const user = await bot.api.getChatMember(chatId, userId);
          const name = [user.user.first_name, user.user.last_name]
            .filter(Boolean)
            .join(" ");

          // ✅ Escape special characters for MarkdownV2
          const escapedName = name.replace(/[_*[\]()~`>#+-=|{}.!]/g, "\\$&");
          const escapedLink = pollLink.replace(
            /[_*[\]()~`>#+-=|{}.!]/g,
            "\\$&"
          );

          const message =
            `⏳ *مرحبًا ${escapedName},*\n\n` +
            `لم تشارك في الاستطلاع بعد! يمكنك المشاركة عبر الرابط أدناه:\n\n` +
            `[اضغط هنا للانتقال إلى الاستطلاع](${escapedLink})`;

          await bot.api.sendMessage(userId, message, {
            parse_mode: "HTML",
          });
        } catch (error) {
          console.error(`❌ Failed to send DM to user ${userId}:`, error);
        }
      }
    }

    // ✅ Cleanup poll data using the unique key
    await env.POLL_STORE.delete(`poll:${chatId}:${type}:${messageId}`);
  } catch (error) {
    console.error(`❌ Error sending poll reminder to ${chatId}:`, error);
  }
}

// Add this to periodically check for polls to stop
export async function checkRemindersAndExpiredPolls(bot: Bot, env: Env) {
  const now = Date.now();

  const kvList = await env.POLL_STORE.list();
  for (const key of kvList.keys) {
    if (!key.name.startsWith("poll:")) continue;

    const pollData = await env.POLL_STORE.get(key.name);
    if (!pollData) continue;

    const poll: ActivePoll = JSON.parse(pollData);

    // Check if reminder is due and not yet sent
    if (poll.reminderTime <= now && !poll.reminderSent) {
      try {
        await sendReminder(bot, env, poll.chatId, poll.type, poll.messageId);
        poll.reminderSent = true; // Mark as sent
        await env.POLL_STORE.put(key.name, JSON.stringify(poll));
      } catch (error) {
        console.error(`❌ Reminder failed for ${key.name}:`, error);
      }
    }

    // Check if poll is expired
    if (poll.stopTime <= now) {
      try {
        // ✅ Check if poll is already closed BEFORE calling stopPoll
        const pollStatus = await bot.api.stopPoll(poll.chatId, poll.messageId);
        if (pollStatus.is_closed) {
          console.log(
            `🗑 Poll already closed, deleting from store: ${key.name}`
          );
          await env.POLL_STORE.delete(key.name);
        } else {
          await bot.api.stopPoll(poll.chatId, poll.messageId);
          console.log(`✅ Poll stopped successfully: ${poll.messageId}`);
          await env.POLL_STORE.delete(key.name);
        }
      } catch (error) {
        console.error(`❌ Error stopping poll in ${poll.chatId}:`, error);
        if (
          error instanceof GrammyError &&
          error.description.includes("poll has already been closed")
        ) {
          console.log(
            `🗑 Poll already closed, deleting from store: ${key.name}`
          );
          await env.POLL_STORE.delete(key.name);
        }
      }
    }
  }
}
