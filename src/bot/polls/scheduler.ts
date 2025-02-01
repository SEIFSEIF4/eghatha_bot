import { Bot, Context } from "grammy";
import { Env } from "@/types";
import { PollType, pollConfigurations } from "./content";

interface ActivePoll {
  messageId: number;
  stopTime: number;
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

      // ✅ Only add users who are subscribed to "polls"
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

  const content = pollConfigurations.find((c) => c.type === type)?.content();
  if (!content) return;

  const { question, options } = content;
  try {
    for (const chatId of subscribedChats) {
      try {
        const chatInfo = await bot.api.getChat(chatId); // Get chat details
        const isGroup =
          chatInfo.type === "group" || chatInfo.type === "supergroup";

        await bot.api.sendPoll(chatId, question, options, {
          is_anonymous: !isGroup,
          allows_multiple_answers: true,
        });
        console.log(`✅ Poll sent to ${chatId}`);
      } catch (error) {
        console.error(`❌ Failed to send poll to ${chatId}:`, error);
      }
    }
  } catch (error) {
    console.error(`Failed to broadcast ${type} poll:`, error);
  }
}

// Add this to periodically check for polls to stop
export async function checkExpiredPolls(bot: Bot, env: Env) {
  const now = Date.now();

  // Get all active polls from KV
  const kvList = await env.POLL_STORE.list();
  for (const key of kvList.keys) {
    if (!key.name.startsWith("poll:")) continue;

    const pollData = await env.POLL_STORE.get(key.name);
    if (!pollData) continue;

    const poll: ActivePoll = JSON.parse(pollData);
    if (poll.stopTime <= now) {
      const [_, chatId, type] = key.name.split(":");

      try {
        await bot.api.stopPoll(chatId, poll.messageId);
        await env.POLL_STORE.delete(key.name);
        console.log(`✅ Stopped ${type} poll in ${chatId}: ${poll.messageId}`);
      } catch (error) {
        console.error(`❌ Error stopping poll in ${chatId}:`, error);
      }
    }
  }
}

export async function handleSubscription(bot: Bot, env: Env) {
  // 📌 Subscribe/Unsubscribe Logic (MUST COME FIRST)
  bot.command(
    [
      "subscribe",
      "subscribe@eghatha_bot",
      "unsubscribe",
      "unsubscribe@eghatha_bot",
    ],
    async (ctx: Context) => {
      if (!ctx.chat) {
        console.error("❌ Error: ctx.chat is undefined");
        return ctx.reply("❌ لا يمكن العثور على معلومات الدردشة.");
      }

      const chatId = ctx.chat.id.toString();
      console.log(`📌 Processing subscription for chat ID: ${chatId}`);

      const envStore = (ctx as any).env?.SUBSCRIBED_CHATS_STORE;
      if (!envStore) {
        console.error("❌ Error: env.SUBSCRIBED_CHATS_STORE is undefined");
        return ctx.reply("⚠️ خطأ داخلي: لا يمكن الوصول إلى قاعدة البيانات.");
      }

      const args =
        ctx.message?.text
          ?.replace(/@\S+/, "")
          .split(" ")
          .slice(1)
          .join(" ")
          .trim()
          .toLowerCase() ?? "";
      if (!["polls", "alerts"].includes(args)) {
        return ctx.reply(
          "⚠️ الرجاء تحديد ميزة صحيحة! استخدم `/subscribe` لرؤية القائمة."
        );
      }

      const isSubscribing =
        ctx.message?.text?.startsWith("/subscribe") ?? false;
      const existingData = await envStore.get(chatId);
      console.log(`📌 Retrieved existing data: ${existingData}`);

      const subscriptions = existingData ? JSON.parse(existingData) : {};
      subscriptions[args] = isSubscribing;

      console.log(`📌 Storing to KV: ${chatId} ->`, subscriptions);
      await envStore.put(chatId, JSON.stringify(subscriptions));

      ctx.reply(
        isSubscribing
          ? `✅ تم الاشتراك بنجاح في ميزة: ${args}`
          : `❌ تم إلغاء الاشتراك من ميزة: ${args}`
      );
    }
  );

  // 📌 Subscribe Help Menu (Fallback)
  bot.command(["subscribe", "subscribe@eghatha_bot"], async (ctx: Context) => {
    const text =
      "📝 *الميزات المتاحة للاشتراك:*\n\n" +
      "📊 /subscribe polls - الاشتراك في استطلاعات الرأي\n" +
      "🚨 /subscribe alerts - الاشتراك في التنبيهات\n\n" +
      "🚫 *للإلغاء:* \n" +
      "❌ /unsubscribe polls\n" +
      "❌ /unsubscribe alerts\n\n" +
      "📌 استخدم الأمر المناسب للاشتراك أو الإلغاء.";
    await ctx.reply(text, { parse_mode: "Markdown" });
  });

  // 📌 My Subscriptions Command
  bot.command(
    ["my_subscriptions", "my_subscriptions@eghatha_bot"],
    async (ctx: Context) => {
      if (!ctx.chat) {
        console.error("❌ Error: ctx.chat is undefined");
        return ctx.reply("❌ لا يمكن العثور على معلومات الدردشة.");
      }

      const chatId = ctx.chat.id.toString();
      console.log(`📌 Checking subscriptions for chat ID: ${chatId}`);

      const envStore = (ctx as any).env?.SUBSCRIBED_CHATS_STORE;
      if (!envStore) {
        console.error("❌ Error: env.SUBSCRIBED_CHATS_STORE is undefined");
        return ctx.reply("⚠️ خطأ داخلي: لا يمكن الوصول إلى قاعدة البيانات.");
      }

      try {
        const existingData = await envStore.get(chatId);
        console.log(`📌 Retrieved data from KV: ${existingData}`);

        if (!existingData) {
          return ctx.reply("📭 لم تشترك في أي ميزات بعد.");
        }

        const subscriptions = JSON.parse(existingData);
        let message = "🔔 *اشتراكاتك الحالية:*\n\n";

        for (const feature in subscriptions) {
          if (subscriptions[feature]) message += `✅ ${feature}\n`;
        }

        console.log(`📌 Final message to send: ${message}`);
        ctx.reply(message, { parse_mode: "Markdown" });
      } catch (error) {
        console.error("❌ Error retrieving subscriptions:", error);
        ctx.reply("⚠️ حدث خطأ أثناء جلب الاشتراكات.");
      }
    }
  );
}
