import { Bot } from "grammy";
import cron from "node-cron";

const { BOT_TOKEN: token = "", CHANNEL_USERNAME = "-1002313808274" } =
  process.env;

const bot = new Bot(token);

// Middleware for handling messages
bot.on("message", async (ctx) => {
  try {
    await bot.api.sendMessage(CHANNEL_USERNAME, "Hello from the bot!");
    await bot.api.sendPoll(
      CHANNEL_USERNAME,
      "Daily Poll: What do you prefer?",
      [{ text: "Option A" }, { text: "Option B" }, { text: "Option C" }],
      { is_anonymous: true, allows_multiple_answers: true }
    );
  } catch (error) {
    console.error("Failed to send scheduled poll:", error);
  }
});

cron.schedule("*/10 * * * *", async () => {
  try {
    await bot.api.sendPoll(
      CHANNEL_USERNAME,
      "Daily Poll: What do you prefer?",
      [{ text: "Option A" }, { text: "Option B" }, { text: "Option C" }],
      { is_anonymous: true }
    );
  } catch (error) {
    console.error("Failed to send scheduled poll:", error);
  }
});

// Start the bot
bot.start();
console.log("Bot started successfully.");
