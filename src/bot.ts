import "dotenv/config";
import { Bot } from "grammy";
import { setupPollSchedulers } from "./helpers/corn/index.ts";

const token = process.env.BOT_TOKEN;

if (!token) {
  throw new Error("BOT_TOKEN environment variable is required");
}

export const bot = new Bot(token);

await bot.api.setMyCommands([
  { command: "start", description: "Start the bot" },
  { command: "help", description: "Show help text" },
  { command: "settings", description: "Open settings" },
]);

bot.on("message", async (ctx) => {
  if (ctx.message?.text === "/start") {
    const chatId = ctx.chat.id;
    console.log(`Your Chat ID is: ${chatId}`);
    await ctx.reply(`Your Chat ID is: ${chatId}`);
  }
});

(async () => {
  try {
    console.log("Bot starting...");

    // Start all polls schedulers
    await setupPollSchedulers();

    await bot.start();
    console.log("Bot started successfully.");
  } catch (error) {
    console.error("Failed to start bot:", error);
    process.exit(1);
  }
})();
