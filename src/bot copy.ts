import { Bot } from "grammy";
import cron from "node-cron";
import dotenv from "dotenv";

dotenv.config();

const { BOT_TOKEN, CHANNEL_USERNAME, ADMIN_CHAT_ID } = process.env;

if (!BOT_TOKEN || !CHANNEL_USERNAME || !ADMIN_CHAT_ID) {
  throw new Error("Missing environment variables. Check your .env file.");
}

// Initialize the bot
export const bot = new Bot(BOT_TOKEN);

// In-memory storage for user points
const userPoints: Record<number, number> = {};

// Set up commands
await bot.api.setMyCommands([
  { command: "start", description: "Start the bot" },
  { command: "help", description: "Show help text" },
  { command: "settings", description: "Open settings" },
]);

// Middleware for handling messages
// bot.on("message", async (ctx) => {
//   try {
//     await ctx.api.sendPoll(
//       ctx.chat.id,
//       "What is your choice?",
//       [{ text: "Option 1" }, { text: "Option 2" }],
//       {
//         is_anonymous: true,
//         allows_multiple_answers: true,
//       }
//     );
//   } catch (error) {
//     console.error("Failed to send poll:", error);
//   }
// });

bot.on("message", async (ctx) => {
  const chatId = ctx.chat.id;
  console.log(`Your Chat ID is: ${chatId}`);
  await ctx.reply(`Your Chat ID is: ${chatId}`);
});

// Middleware for handling poll answers
bot.on("poll_answer", async (ctx) => {
  try {
    const userId = ctx.pollAnswer.user?.id;
    if (!userId) {
      console.error("User ID is undefined.");
      return;
    }
    const answerIndexes = ctx.pollAnswer.option_ids;

    console.log(`User ${userId} voted for options: ${answerIndexes}`);

    // Assign points (1 point per vote)
    userPoints[userId] = (userPoints[userId] || 0) + 1;
    console.log(`User ${userId} now has ${userPoints[userId]} points.`);

    // Notify admins
    await bot.api.sendMessage(
      ADMIN_CHAT_ID,
      `User ${userId} voted: ${answerIndexes}. Total points: ${userPoints[userId]}`
    );
  } catch (error) {
    console.error("Failed to process poll answer:", error);
  }
});

// Command to check user points
bot.command("points", async (ctx) => {
  const userId = ctx.from?.id;
  if (!userId) return;

  const points = userPoints[userId] || 0;
  await ctx.reply(`You have ${points} points.`);
});

// Schedule a daily poll using cron
cron.schedule("0 9 * * *", async () => {
  try {
    await bot.api.sendPoll(
      CHANNEL_USERNAME,
      "Daily Poll: What do you prefer?",
      [{ text: "Option A" }, { text: "Option B" }, { text: "Option C" }],
      { is_anonymous: false }
    );
  } catch (error) {
    console.error("Failed to send scheduled poll:", error);
  }
});

// Start the bot
bot.start();
