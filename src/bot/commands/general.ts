import { Bot } from "grammy";

export function setupGeneralCommands(bot: Bot) {
  bot.api.setMyCommands([
    { command: "start", description: "ابدأ تشغيل البوت" },
    { command: "help", description: "عرض المساعدة" },
    {
      command: "subscribe",
      description: "إضافة هذه المجموعة أو القناة إلى الإرسال",
    },
    {
      command: "unsubscribe",
      description: "إزالة هذه المجموعة أو القناة من الإرسال",
    },
  ]);

  bot.command("start", async (ctx) => {
    await ctx.reply("مرحبا! البوت يعمل بنجاح 🎉");
  });

  bot.command("help", async (ctx) => {
    await ctx.reply(
      "🤖 أوامر البوت:\n" +
        "/start - تشغيل البوت\n" +
        "/help - عرض المساعدة\n" +
        "/subscribe - الاشتراك في الإرسال\n" +
        "/unsubscribe - إلغاء الاشتراك\n"
    );
  });
}
