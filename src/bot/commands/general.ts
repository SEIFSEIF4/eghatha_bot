import { Bot } from "grammy";

export function setupGeneralCommands(bot: Bot) {
  bot.api.setMyCommands([
    { command: "start", description: "ابدأ تشغيل البوت" },
    { command: "help", description: "عرض المساعدة" },
    { command: "usage", description: "كيفية استخدام البوت" },
    { command: "subscription", description: "إدارة الاشتراكات" },
    { command: "subscribe_help", description: "مساعدة نظام الاشتراكات" },
    { command: "about", description: "معلومات عن المطور" },
  ]);

  bot.command("start", async (ctx) => {
    await ctx.reply("مرحبا! البوت يعمل بنجاح 🎉");
  });

  bot.command("help", async (ctx) => {
    await ctx.reply(
      ("🤖 أوامر البوت:\n" +
        "/start - تشغيل البوت\n" +
        "/help - عرض المساعدة\n" +
        "/about - عن المطور\n" +
        "/usage - كيفية استخدام البوت\n" +
        { parse_mode: "Markdown" }) as any
    );
  });

  bot.command("about", async (ctx) => {
    await ctx.reply(
      "👨‍💻 *عن المطور:*\n" +
        "أنا سيف الإسلام سيف، مبرمج من مصر، بحب البرمجة والتطوير، ولو محتاج مساعدة في البوت أو أي مشروع تاني، أنا موجود ✌️\n\n" +
        "📂 *المشروع مفتوح المصدر:*\n" +
        "الكود متاح على GitHub، ولو حابب تساهم في تطويره، اتفضل من هنا:\n" +
        "[🔗 رابط المشروع](https://github.com/SEIFSEIF4/eghatha_bot)",
      { parse_mode: "Markdown", disable_web_page_preview: true } as any
    );
  });

  bot.command("usage", async (ctx) => {
    await ctx.reply(
      "💡 *كيفية استخدام البوت:* \n\n" +
        "1. **دعوة البوت للمجموعة أو القناة:**\n" +
        "   - قم بدعوة البوت إلى مجموعة أو قناة على **تيليجرام**.\n" +
        "   - تأكد أن **أنت والبوت** كلكما مسؤولين (Admins) في المجموعة أو القناة.\n\n" +
        "2. **بدء الاشتراك:**\n" +
        "   - استخدم الأمر `/subscription` لاختيار ميزة الاشتراك التي ترغب فيها.\n\n" +
        "3. **الاشتراك في الميزات المتاحة:**\n" +
        "   - هناك ميزتان متاحتان للاشتراك:\n" +
        `     - *polls* (استطلاعات الرأي)\n` +
        `     - *alerts* (التنبيهات)\n` +
        "   - اختر الميزة التي ترغب في تفعيلها وابدأ استخدام البوت!\n\n" +
        "بكل بساطة، يمكنك متابعة الخطوات وسهولة الاشتراك في المزايا التي تحتاجها. استمتع بالخدمات!"
    );
  });
}
