import { Bot } from "grammy";
import { Env } from "@/types";
import { PollContent, PollType, pollConfigurations } from "./content";
import { cronToHumanReadable } from "@/helpers/corn/cronToHumanReadable";

interface ActivePoll {
  messageId: number;
  stopTime: number;
}

export async function setupPollSchedulers(bot: Bot, env: Env, type: PollType) {
  const config = pollConfigurations.find((c) => c.type === type);
  if (!config) return;

  console.log(`[DEBUG] Starting ${type} poll at ${new Date().toISOString()}`);
  console.log(
    `[DEBUG] Will auto-stop at ${new Date(
      Date.now() + (config.duration ?? 0)
    ).toISOString()}`
  );

  try {
    const { question, options } = config.content;
    const pollMessage = await bot.api.sendPoll(
      env.CHANNEL_ID,
      question,
      options,
      {
        is_anonymous: true,
        allows_multiple_answers: true,
      }
    );

    // Store in KV for later stop
    const activePoll: ActivePoll = {
      messageId: pollMessage.message_id,
      stopTime: Date.now() + (config.duration ?? 0),
    };

    await env.POLL_STORE.put(`poll:${type}`, JSON.stringify(activePoll));
    console.log(`${type} poll started: ${pollMessage.message_id}`);
  } catch (error) {
    console.error(`Failed to start ${type} poll:`, error);
  }
}

// Add this to periodically check for polls to stop
export async function checkExpiredPolls(bot: Bot, env: Env) {
  const now = Date.now();

  for (const type of ["daily", "weekly", "custom"]) {
    const pollData = await env.POLL_STORE.get(`poll:${type}`);
    if (!pollData) continue;

    const poll: ActivePoll = JSON.parse(pollData);
    if (poll.stopTime <= now) {
      try {
        await bot.api.stopPoll(env.CHANNEL_ID, poll.messageId);
        await env.POLL_STORE.delete(`poll:${type}`);
        console.log(`Stopped ${type} poll: ${poll.messageId}`);
      } catch (error) {
        console.error(`Error stopping ${type} poll:`, error);
      }
    }
  }
}
