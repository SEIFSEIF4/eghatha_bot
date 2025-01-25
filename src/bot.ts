import { Bot } from "grammy";
import { startPollScheduler } from "./helpers/corn/index.ts";

const {
  BOT_TOKEN: token = "7904764998:AAGYYu_fXyIsqOh4b6c8Q9HDX-jMg55oQtc",
  CHANNEL_USERNAME = "-1002313808274",
} = process.env;

if (!token) {
  throw new Error("BOT_TOKEN environment variable is required");
}

const bot = new Bot(token);

// Configure poll schedules
const setupPolls = () => {
  startPollScheduler(bot, "daily", "* * * * *", 1 * 60 * 1000);
  startPollScheduler(bot, "weekly", "0 17 * * 5", 7 * 24 * 60 * 60 * 1000);
  startPollScheduler(bot, "quiz", "0 18 * * 3", 10 * 60 * 1000);
};

setupPolls();

bot.start().catch((error) => {
  console.error("Failed to start bot:", error);
  process.exit(1);
});

console.log("Bot started successfully");
