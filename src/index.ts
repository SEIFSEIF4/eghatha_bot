import { Bot } from "grammy";
import { checkExpiredPolls, setupPollSchedulers } from "./bot/polls/scheduler";
import type { Env } from "@/types";
import { createBot, handleUpdate } from "./bot";

async function handleLocalTesting(request: Request, env: Env) {
  const url = new URL(request.url);

  if (url.pathname === "/test-cron") {
    await setupPollSchedulers(new Bot(env.BOT_TOKEN), env, "daily");
    await setupPollSchedulers(new Bot(env.BOT_TOKEN), env, "weekly");
    return new Response("Test cron executed");
  }

  return new Response("Not Found", { status: 404 });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const bot = createBot(env.BOT_TOKEN);
    await bot.init();

    try {
      // Handle Telegram webhook
      if (request.method === "POST") {
        const update = await request.json();
        console.log("Received update:", JSON.stringify(update, null, 2));

        await handleUpdate(bot, update);
        await checkExpiredPolls(bot, env);

        return new Response("OK");
      }

      return new Response("Not Found", { status: 404 });
    } catch (error) {
      console.error("Global error:", error);
      return new Response("Internal Server Error", { status: 500 });
    }
  },

  async scheduled(event: ScheduledEvent, env: Env): Promise<void> {
    const bot = createBot(env.BOT_TOKEN);
    const cronType =
      event.cron === "0 21 * * *"
        ? "daily"
        : event.cron === "0 21 * * 5"
        ? "weekly"
        : "custom";

    console.log(`Running cron job: ${cronType}`);
    await setupPollSchedulers(bot, env, cronType);
  },
};
