import { bot } from "@/bot.ts";

const { VERCEL_URL: host, WEBHOOK: webhook = `https://${host}/api/webhook` } =
  process.env;

if (!webhook) {
  throw new Error("WEBHOOK environment variable is required");
}

(async () => {
  try {
    console.log(`Setting webhook to: ${webhook}`);
    await bot.api.setWebhook(webhook);
    console.log("Webhook set successfully.");
  } catch (error) {
    console.error("Failed to set webhook:", error);
    process.exit(1);
  }
})();
