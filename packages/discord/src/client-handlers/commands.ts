import { Message } from "discord.js";
import Command from "@Classes/Command";
import AboutCommand from "@ClientCommands/about";
import HelpCommand from "@ClientCommands/help";
import CreateGroupCommand from "./commands/create-group";

export const commands: Command[] = [
  new HelpCommand(),
  new AboutCommand(),
  new CreateGroupCommand(),
];
export let { COMMAND_PREFIX } = process.env;
if (!COMMAND_PREFIX) {
  console.warn(
    'Unable to find a custom command prefix (did you set COMMAND_PREFIX in env?) - using default prefix "!"'
  );
  COMMAND_PREFIX = "!";
}

export default function handleCommand(Message: Message) {
  if (!Message.content.startsWith(COMMAND_PREFIX)) return;
  const args = Message.content.slice(COMMAND_PREFIX.length).trim().split(/ +/);
  const requestedCommand = args.shift().toLowerCase();
  const command = commands.find((val) => {
    return val.command === requestedCommand;
  });
  if (!command)
    Message.reply(
      "that isn't a valid command. Try SOME_HELP_COMMAND for a list of all commands."
    );
  else command.execute(Message, args);
}
