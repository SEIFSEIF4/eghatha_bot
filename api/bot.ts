import "dotenv/config";
import { Bot, webhookCallback } from "grammy";
import { setupPollSchedulers } from "./helpers/corn/jobs";

const token = process.env.BOT_TOKEN;
let initialized = false;

if (!token) {
  throw new Error("BOT_TOKEN environment variable is required");
}

export const bot = new Bot(token);

await bot.api.setMyCommands([
  { command: "start", description: "Start the bot" },
  { command: "help", description: "Show help text" },
  { command: "settings", description: "Open settings" },
]);

bot.on("message", (ctx) => ctx.reply("Got another message!"));

bot.command("start", async (ctx) => {
  const chatId = ctx.chat.id;
  await ctx.api.sendMessage(chatId, "Hello, world!");
});

bot.command("help", async (ctx) => {
  const chatId = ctx.chat.id;
  await ctx.api.sendMessage(chatId, "Help message");
});

bot.command("settings", async (ctx) => {
  const chatId = ctx.chat.id;
  await ctx.api.sendMessage(chatId, "Settings message");
});

// TODO: Implement a skip for repeating initialization
await setupPollSchedulers();

export default webhookCallback(bot, "https");
