import { Bot, Context, InlineKeyboard } from "grammy";
import { Env } from "@/types";

// List of available features
const FEATURES = {
  polls: "استطلاعات الرأي",
  alerts: "التنبيهات",
  news: "الأخبار",
};

export function setupSubscriptionCommands(bot: Bot, env: Env) {
  bot.command("subscription", async (ctx: Context) => {
    if (!(await isAdmin(ctx))) {
      return ctx.reply(
        "❌ *عذرًا، هذا الأمر متاح فقط للمسؤولين*\n\n🔹 لتجربة البوت، يمكنك طلب صلاحية المسؤول من أحد المسؤولين الحاليين، أو تجربته في مجموعة تكون أنت مسؤولًا فيها.",
        { parse_mode: "Markdown" }
      );
    }

    const keyboard = new InlineKeyboard();

    for (const [featureKey, featureName] of Object.entries(FEATURES)) {
      const isSubscribed = await isFeatureSubscribed(ctx, featureKey);
      keyboard
        .text(
          `${!isSubscribed ? "❌" : "✅"} ${featureName}`,
          `toggle_${featureKey}`
        )
        .row();
    }

    await ctx.reply("🛎️ *تم تنفيذ طلبك*", {
      parse_mode: "Markdown",
      reply_markup: keyboard,
    });
  });

  // Handle inline keyboard interactions
  bot.callbackQuery(/^toggle_(\w+)$/, async (ctx) => {
    const featureKey = ctx.match![1];
    const chatId = ctx.chat?.id.toString();

    if (!chatId)
      return ctx.answerCallbackQuery("❌ خطأ في التعرف على المحادثة");
    if (!FEATURES[featureKey as keyof typeof FEATURES]) {
      return ctx.answerCallbackQuery("❌ ميزة غير معروفة");
    }

    try {
      const newStatus = await toggleSubscription(
        chatId,
        featureKey,
        (ctx as any).env
      );
      const featureName = FEATURES[featureKey as keyof typeof FEATURES];

      await ctx.answerCallbackQuery(
        `${
          newStatus ? "✅ مشترك الآن في" : "❌ ألغي الاشتراك من"
        } ${featureName}`
      );

      // Update the message keyboard
      await ctx.editMessageReplyMarkup({
        reply_markup: createUpdatedKeyboard(chatId, (ctx as any).env),
      });
    } catch (error) {
      console.error("Subscription error:", error);
      ctx.answerCallbackQuery("❌ فشل في تحديث الاشتراك");
    }
  });

  // Help command
  bot.command("subscribe_help", async (ctx) => {
    await ctx.reply(
      "🌟 *كيفية استخدام نظام الاشتراكات:*\n\n" +
        "استخدم الأمر /subscription لعرض لوحة التحكم بالاشتراكات\n" +
        "اضغط على الأزرار لتبديل حالة الاشتراك\n\n" +
        "💡 يمكنك تحديث تفضيلاتك في أي وقت!",
      { parse_mode: "Markdown" }
    );
  });
}

// Helper functions
// 🛡 **Check if the user is Subscribed to specific feature**
async function isFeatureSubscribed(
  ctx: Context,
  featureKey: string
): Promise<boolean> {
  if (!ctx.chat) return false;

  const chatId = ctx.chat.id.toString();
  const store = (ctx as any).env.SUBSCRIBED_CHATS_STORE;
  const data = await store.get(chatId);

  return data ? JSON.parse(data)[featureKey] || false : false;
}

async function toggleSubscription(
  chatId: string,
  featureKey: string,
  env: Env
): Promise<boolean> {
  const store = env.SUBSCRIBED_CHATS_STORE;
  const data = await store.get(chatId);
  const subscriptions = data ? JSON.parse(data) : {};
  const newStatus = !subscriptions[featureKey];

  subscriptions[featureKey] = newStatus;
  await store.put(chatId, JSON.stringify(subscriptions));
  return newStatus;
}

function createUpdatedKeyboard(chatId: string, env: Env): InlineKeyboard {
  const keyboard = new InlineKeyboard();

  Object.entries(FEATURES).forEach(([key, name]) => {
    env.SUBSCRIBED_CHATS_STORE.get(chatId).then((data) => {
      const isSubscribed = data ? JSON.parse(data)[key] : false;
      keyboard
        .text(`${!isSubscribed ? "❌" : "✅"} ${name}`, `toggle_${key}`)
        .row();
    });
  });

  return keyboard;
}

// 🛡 **Check if the user is an admin**
async function isAdmin(ctx: Context): Promise<boolean> {
  if (!ctx.chat || !ctx.from) return false;

  const chatId = ctx.chat.id;
  const userId = ctx.from.id;

  try {
    const chatMember = await ctx.api.getChatMember(chatId, userId);
    return ["administrator", "creator"].includes(chatMember.status);
  } catch (error) {
    console.error("Admin check error:", error);
    return false;
  }
}
