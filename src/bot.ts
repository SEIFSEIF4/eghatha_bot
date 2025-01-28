import { Bot } from "grammy";

export function createBot(token: string) {
  const bot = new Bot(token);

  bot.api.setMyCommands([
    { command: "start", description: "Start the bot" },
    { command: "help", description: "Show help text" },
    { command: "settings", description: "Open settings" },
  ]);

  bot.catch((err) => {
    console.error("Bot error:", err);
  });

  bot.command("start", async (ctx) => {
    await ctx.reply("مرحبا! البوت يعمل بنجاح 🎉");
  });

  bot.command("help", async (ctx) => {
    await ctx.reply("🏓 Pong!");
  });

  return bot;
}

export async function handleUpdate(bot: Bot, update: any) {
  try {
    await bot.handleUpdate(update);
  } catch (error) {
    console.error("Update handling failed:", error);
  }
}
