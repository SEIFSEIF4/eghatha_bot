import { Bot } from "grammy";
import { setupPollSchedulers } from "./helpers/corn/jobs";

// Ensure your bot token is set in environment variables
const token = process.env.BOT_TOKEN;

if (!token) {
  throw new Error("BOT_TOKEN environment variable is required");
}

const bot = new Bot(token);

export default async function handler(req: any, res: any) {
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    await setupPollSchedulers();
    res.status(200).json({ message: "Cron job completed successfully" });
  } catch (error) {
    console.error("Error executing cron job:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
