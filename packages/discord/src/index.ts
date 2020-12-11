import "./config-env";
import { Client } from "discord.js";
import onMessageMiddleware from "@Common/wrap-message";
import messageLog from "@ClientHandlers/message-log";
import handleCommand from "@ClientHandlers/commands";

const Discord = new Client();
Discord.on("ready", () => {
  console.log("Joined!");
});

Discord.on("message", (message) => onMessageMiddleware(message, messageLog));
Discord.on("message", (message) => onMessageMiddleware(message, handleCommand));

const { DISCORD_TOKEN } = process.env;
if (!DISCORD_TOKEN || DISCORD_TOKEN === "REPLACE_IN_PRODUCTION") {
  console.error(
    "Unable to login with invalid Bot Token; did you set DISCORD_TOKEN in env?"
  );
  process.exit(1);
}
Discord.login(DISCORD_TOKEN);
