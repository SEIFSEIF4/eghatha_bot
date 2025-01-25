import { Bot, GrammyError } from "grammy";
import cron, { ScheduledTask } from "node-cron";
import { cronToHumanReadable } from "./cronToHumanReadable.ts";

const { CHANNEL_USERNAME = "-1002313808274" } = process.env;

// Poll Scheduler Manager
const pollSchedulers: { [key: string]: ScheduledTask[] } = {};
const activePolls = new Map<string, ActivePoll[]>();

type PollType = "daily" | "weekly" | "quiz";
type ActivePoll = {
  messageId: number;
  timer: NodeJS.Timeout;
  stopTime?: number;
};

/**
 * Generates poll content dynamically.
 * Will be Replace or customize as needed.
 */
const getPollContent = (
  type: string
): {
  question: string;
  options: { text: string }[];
  isQuiz?: boolean;
  correctOptionIndex?: number;
} => {
  const now = new Date();
  const isDaily = type === "daily";
  const isQuiz = type === "quiz";

  if (isQuiz) {
    return {
      question: `Weekly Quiz (${now.toLocaleDateString()}): What is 2 + 2?`,
      options: [{ text: "3" }, { text: "4" }, { text: "5" }, { text: "6" }],
      isQuiz: true,
      correctOptionIndex: 1, // Correct answer is "4"
    };
  }

  return {
    question: `${
      isDaily ? "Daily" : "Weekly"
    } Poll (${now.toLocaleDateString()}): What do you prefer?`,
    options: [{ text: "Option A" }, { text: "Option B" }, { text: "Option C" }],
  };
};

/**
 * Starts a poll scheduler.
 *
 * @param bot - The Bot instance
 * @param type - The type or identifier of the poll (e.g., "daily", "weekly", or "quiz")
 * @param scheduleTime - Cron schedule string (e.g., "0 22 * * *")
 * @returns A promise that resolves to the message ID of the poll
 */
export const startPollScheduler = async (
  bot: Bot,
  type: PollType,
  scheduleTime: string,
  duration?: number,
  timeZone: string = "Europe/Istanbul"
): Promise<number | null> => {
  if (!["daily", "weekly", "quiz"].includes(type)) {
    throw new Error(`Invalid poll type: '${type}'`);
  }

  // Initialize array for this poll type if not exists
  pollSchedulers[type] = pollSchedulers[type] || [];
  activePolls.set(type, activePolls.get(type) || []);

  const humanReadableSchedule = cronToHumanReadable(scheduleTime);

  return new Promise((resolve) => {
    const scheduler = cron.schedule(
      scheduleTime,
      async () => {
        const { question, options, isQuiz, correctOptionIndex } =
          getPollContent(type);

        try {
          const pollMessage = await bot.api.sendPoll(
            CHANNEL_USERNAME,
            question,
            options,
            {
              is_anonymous: true,
              type: isQuiz ? "quiz" : "regular",
              correct_option_id: isQuiz ? correctOptionIndex : undefined,
            }
          );

          const activePoll: ActivePoll = {
            messageId: pollMessage.message_id,
            timer: setTimeout(() => {}, 0),
          };

          // Optional poll duration stop
          if (duration) {
            activePoll.timer = setTimeout(async () => {
              try {
                await bot.api.stopPoll(
                  CHANNEL_USERNAME,
                  pollMessage.message_id
                );
                console.log(
                  `Poll ${pollMessage.message_id} stopped after ${
                    duration / 1000
                  } seconds`
                );
              } catch (error) {
                console.error(
                  `Failed to stop poll ${pollMessage.message_id}:`,
                  error
                );
              }
            }, duration);
          }

          // Add to active polls
          activePolls.get(type)!.push(activePoll);

          console.log(
            `${
              type.charAt(0).toUpperCase() + type.slice(1)
            } poll sent successfully.`
          );
          resolve(pollMessage.message_id);
        } catch (error) {
          console.error(`Failed to send ${type} poll:`, error);
          resolve(null);
        }
      },
      { timezone: timeZone }
    );

    // Track the scheduler
    pollSchedulers[type].push(scheduler);
    console.log(
      `Poll scheduler for '${type}' started. Will start at ${humanReadableSchedule}${
        duration
          ? ` and will stop after ${duration / 1000} seconds`
          : " poll won't close automatically"
      }`
    );
  });
};

/**
 * Stops a poll using Telegram API after a specified duration.
 *
 * @param bot - The Bot instance
 * @param messageId - The ID of the poll message
 * @param duration - Time in milliseconds after which the poll will be stopped
 */
export const schedulePollStop = (
  bot: Bot,
  messageId: number,
  duration: number
): void => {
  setTimeout(async () => {
    try {
      await bot.api.stopPoll(CHANNEL_USERNAME, messageId);
      console.log(`Poll with message ID ${messageId} stopped successfully.`);
    } catch (error) {
      console.error(`Failed to stop poll with message ID ${messageId}:`, error);
    }
  }, duration);
};

/**
 * Stops a poll scheduler.
 *
 * @param type - The type or identifier of the poll
 */
export const stopPollScheduler = (type: string, index?: number): void => {
  const schedulers = pollSchedulers[type];
  if (!schedulers || schedulers.length === 0) {
    console.warn(`No poll schedulers for '${type}' are running.`);
    return;
  }

  // Stop specific scheduler or all if no index provided
  if (index !== undefined && index < schedulers.length) {
    schedulers[index].stop();
    schedulers.splice(index, 1);
  } else {
    schedulers.forEach((scheduler) => scheduler.stop());
    pollSchedulers[type] = [];
  }

  console.log(`Poll scheduler(s) for '${type}' stopped.`);
};
