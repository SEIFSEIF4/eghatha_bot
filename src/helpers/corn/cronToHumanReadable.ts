import cronParser from "cron-parser";

/**
 * Converts a cron expression into a human-readable format.
 *
 * @param cronTime - The cron expression (e.g., "* * * * *")
 * @returns A human-readable description of the cron schedule.
 */
export const cronToHumanReadable = (cronTime: string): string => {
  try {
    const interval = cronParser.parseExpression(cronTime);
    const nextRun = interval.next().toString();
    const [dayOfWeek, dayOfMonth, month, hour, minute] = nextRun.split(" ");

    return `Every ${
      minute === "0" ? "hour" : minute === "1" ? "minute" : minute + " minutes"
    }, at ${hour}:${minute} on ${dayOfWeek}, ${dayOfMonth} of ${month}.`;
  } catch (error) {
    return "Invalid cron expression";
  }
};
