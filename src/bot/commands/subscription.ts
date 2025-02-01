import { Bot, Context } from "grammy";
import { Env } from "@/types";

export function setupSubscriptionCommands(bot: Bot, env: Env) {
  bot.command(["subscribe", "subscribe@eghatha_bot"], async (ctx: Context) => {
    await ctx.reply(
      "📝 *الميزات المتاحة للاشتراك:*\n\n" +
        "📊 /subscribe polls - الاشتراك في استطلاعات الرأي\n" +
        "🚨 /subscribe alerts - الاشتراك في التنبيهات\n\n" +
        "🚫 *للإلغاء:* \n" +
        "❌ /unsubscribe polls\n" +
        "❌ /unsubscribe alerts\n\n" +
        "📌 استخدم الأمر المناسب للاشتراك أو الإلغاء.",
      { parse_mode: "Markdown" }
    );
  });

  bot.command(["subscribe", "unsubscribe"], async (ctx: Context) => {
    if (!ctx.chat) return ctx.reply("❌ لا يمكن العثور على معلومات الدردشة.");

    const chatId = ctx.chat.id.toString();
    const envStore = (ctx as any).env?.SUBSCRIBED_CHATS_STORE;
    if (!envStore)
      return ctx.reply("⚠️ خطأ داخلي: لا يمكن الوصول إلى قاعدة البيانات.");

    const args =
      ctx.message?.text?.split(" ").slice(1).join(" ").trim().toLowerCase() ??
      "";
    if (!["polls", "alerts"].includes(args)) {
      return ctx.reply(
        "⚠️ الرجاء تحديد ميزة صحيحة! استخدم `/subscribe` لرؤية القائمة."
      );
    }

    const isSubscribing = ctx.message?.text?.startsWith("/subscribe") ?? false;
    const existingData = await envStore.get(chatId);
    const subscriptions = existingData ? JSON.parse(existingData) : {};

    subscriptions[args] = isSubscribing;
    await envStore.put(chatId, JSON.stringify(subscriptions));

    ctx.reply(
      isSubscribing
        ? `✅ تم الاشتراك بنجاح في ميزة: ${args}`
        : `❌ تم إلغاء الاشتراك من ميزة: ${args}`
    );
  });
}
