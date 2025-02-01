import { Bot } from "grammy";
import { Env } from "@/types";
import { setupGeneralCommands } from "./general";
import { setupSubscriptionCommands } from "./subscription";
import { setupAdminCommands } from "./admin";

export function setupCommands(bot: Bot, env: Env) {
  setupGeneralCommands(bot);
  setupSubscriptionCommands(bot, env);
  setupAdminCommands(bot, env);
}
