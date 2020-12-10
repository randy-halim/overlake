import { SERVER_ID } from "config-env";
import { Message } from "discord.js";

export default function onMessageMiddleware(
  message: Message,
  fn: (Message: Message) => void
) {
  if (message.guild.id !== SERVER_ID)
    console.warn("Ignoring message not in SERVER_ID");
  else if (message.author.bot) console.log("Ignoring bot authored message.");
  else fn(message);
}
