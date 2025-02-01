import { Bot } from "grammy";
import { Env } from "@/types";

// Bot
import { setupCommands } from "./bot/commands";
import { handleSubscription } from "./bot/polls/scheduler";

export function createBot(token: string, env: Env) {
  const bot = new Bot(token);

  // Attach env to context
  bot.use(async (ctx, next) => {
    (ctx as any).env = env;
    await next();
  });

  bot.catch((err) => {
    console.error("Bot error:", err);
  });

  // Commands Setup ✅
  setupCommands(bot, env);

  // Register Subscription ✅
  handleSubscription(bot, env);

  return bot;
}

export async function handleUpdate(bot: Bot, update: any, env: Env) {
  try {
    (bot as any).env = env;
    await bot.handleUpdate(update);
  } catch (error) {
    console.error("Update handling failed:", error);
  }
}
