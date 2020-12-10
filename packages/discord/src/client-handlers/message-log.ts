import { Message } from "discord.js";

export default function messageLog(message: Message) {
  console.log(message.cleanContent);
  console.log("For now, we just log messages to console.");
}
