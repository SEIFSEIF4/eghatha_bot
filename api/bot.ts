import "dotenv/config";
import { Bot, webhookCallback } from "grammy";
import { setupPollSchedulers } from "./helpers/corn/jobs";
const token = process.env.BOT_TOKEN;

if (!token) {
  throw new Error("BOT_TOKEN environment variable is required");
}

export const bot = new Bot(token);

// const initializeBot = async () => {
//   await bot.api.setMyCommands([
//     { command: "start", description: "Start the bot" },
//     { command: "help", description: "Show help text" },
//     { command: "settings", description: "Open settings" },
//   ]);

//   bot.on("message", (ctx) => ctx.reply("Got another message!"));

//   bot.command("start", async (ctx) => {
//     const chatId = ctx.chat.id;
//     await ctx.api.sendMessage(chatId, "Hello, world!");
//   });

//   bot.command("help", async (ctx) => {
//     const chatId = ctx.chat.id;
//     await ctx.api.sendMessage(chatId, "Help message");
//   });

//   bot.command("settings", async (ctx) => {
//     const chatId = ctx.chat.id;
//     await ctx.api.sendMessage(chatId, "Settings message");
//   });

//   await setupPollSchedulers();
// };

bot.on("message", (ctx) => ctx.reply("Got another message!"));

export default webhookCallback(bot, "https");
