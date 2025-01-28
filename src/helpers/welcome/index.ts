import { Bot } from "grammy";

/**
 * Sends a welcome message to a specified channel.
 *
 * @param bot - The instance of the Bot
 * @param channelUsername - The username of the target channel (e.g., "@mychannel")
 */
export const setupWelcomeMessage = async (
  bot: Bot,
  channelUsername: string
): Promise<void> => {
  try {
    await bot.api.sendMessage(channelUsername, "Hello from the bot!");
    console.log(`Welcome message sent to ${channelUsername}`);
  } catch (error) {
    console.error(
      `Failed to send welcome message to ${channelUsername}:`,
      error
    );
  }
};
