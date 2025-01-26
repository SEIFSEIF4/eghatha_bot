import "dotenv/config";
import { Bot, webhookCallback } from "grammy";
import { setupPollSchedulers } from "./helpers/corn/jobs";

const token = process.env.BOT_TOKEN;

if (!token) {
  throw new Error("BOT_TOKEN environment variable is required");
}

export const bot = new Bot(token);

// Wrap initialization in an async function
const initializeBot = async () => {
  await setupPollSchedulers();

  bot.on("message", (ctx) => ctx.reply("Got another message!"));
};

// Initialize bot when the module is imported
initializeBot().catch(console.error);

export default webhookCallback(bot, "https");
