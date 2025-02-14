import { Bot, Context } from "grammy";
import { Env } from "@/types";

function isAdmin(ctx: Context, env: Env): boolean {
  return ctx.from?.id.toString() === env.ADMIN_ID;
}

export function setupAdminCommands(bot: Bot, env: Env) {
  bot.command("startAdmin", async (ctx) => {
    if (!isAdmin(ctx, env)) return ctx.reply("❌ لا يمكنك استخدام هذا الأمر.");
    await ctx.reply("Admin مرحبا! البوت يعمل بنجاح 🎉");
  });

  bot.command("list_all", async (ctx) => {
    if (!isAdmin(ctx, env)) return ctx.reply("❌ لا يمكنك استخدام هذا الأمر.");

    const kvList = await env.SUBSCRIBED_CHATS_STORE.list();
    if (kvList.keys.length === 0)
      return ctx.reply("📭 لا يوجد أي مجموعات أو قنوات مشتركة.");

    let message = "📋 القنوات والمجموعات المشتركة:\n";
    kvList.keys.forEach((key: { name: string }, index: number) => {
      message += `${index + 1}. ${key.name}\n`;
    });

    ctx.reply(message);
  });

  bot.command("unsubscribe_all", async (ctx) => {
    if (!isAdmin(ctx, env)) return ctx.reply("❌ لا يمكنك استخدام هذا الأمر.");

    const kvList = await env.SUBSCRIBED_CHATS_STORE.list();
    let deletedCount = 0;

    for (const key of kvList.keys) {
      await env.SUBSCRIBED_CHATS_STORE.delete(key.name);
      deletedCount++;
    }

    ctx.reply(`✅ تم إلغاء الاشتراك من ${deletedCount} قنوات/مجموعات.`);
  });
}
