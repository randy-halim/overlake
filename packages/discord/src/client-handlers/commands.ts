import { Message } from "discord.js";
import Command from "@Classes/Command";
import AboutCommand from "@ClientCommands/about";
import HelpCommand from "@ClientCommands/help";
import CreateGroupCommand from "./commands/create-group";
import { COMMAND_PREFIX } from "config-env";

export const commands: Command[] = [
  new HelpCommand(),
  new AboutCommand(),
  new CreateGroupCommand(),
];

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
