import "dotenv/config";
import { Bot, webhookCallback } from "grammy";

const token = process.env.BOT_TOKEN;
if (!token) throw new Error("Missing BOT_TOKEN");

export const bot = new Bot(token);

// Basic commands

bot.command("start", async (ctx) => {
  await ctx.reply("Hello, world!");
});

bot.on("message", (ctx) => ctx.reply("Got another message!"));

export default webhookCallback(bot, "https");
