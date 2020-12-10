import { Message } from "discord.js";

const { SERVER_ID } = process.env;
if (!SERVER_ID || SERVER_ID === "REPLACE_IN_PRODUCTION")
  console.error("No server ID was provided; did you set SERVER_ID in env?"),
    process.exit(1);

export default function onMessageMiddleware(
  message: Message,
  fn: (Message: Message) => void
) {
  if (message.guild.id !== SERVER_ID)
    console.warn("Ignoring message not in SERVER_ID");
  else if (message.author.bot) console.log("Ignoring bot authored message.");
  else fn(message);
}
