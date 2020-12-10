import { Message } from "discord.js";
import Command from "@Classes/Command";
import AboutCommand from "@ClientCommands/about";
import HelpCommand from "@ClientCommands/help";

const commands: Command[] = [new AboutCommand()];
let { COMMAND_PREFIX } = process.env;
if (!COMMAND_PREFIX) {
  console.warn(
    'Unable to find a custom command prefix (did you set COMMAND_PREFIX in env?) - using default prefix "!"'
  );
  COMMAND_PREFIX = "";
}

export default function handleCommand(Message: Message) {
  if (!Message.content.startsWith(COMMAND_PREFIX)) return;
  const args = Message.content.slice(COMMAND_PREFIX.length).trim().split(/ +/);
  const requestedCommand = args.shift().toLowerCase();
  const command = commands.find((val) => val.command === requestedCommand);
  if (!command)
    Message.reply(
      "that isn't a valid command. Try SOME_HELP_COMMAND for a list of all commands."
    );
  else if (command instanceof HelpCommand)
    command.execute(Message, args, commands);
  else command.execute(Message, args);
}
