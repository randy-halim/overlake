import { Client } from "discord.js";

const Discord = new Client();
Discord.on("ready", () => {
  console.log("Joined!");
});

const { DISCORD_TOKEN } = process.env;
if (!DISCORD_TOKEN || DISCORD_TOKEN === "REPLACE ME") {
  console.error("Discord token wasn't found, aborting!");
  process.exit(1);
}
Discord.login(DISCORD_TOKEN);
