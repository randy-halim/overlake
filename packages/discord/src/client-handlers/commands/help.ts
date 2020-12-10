import Command from "@Classes/Command";
import { Message, RichEmbed } from "discord.js";

export default class HelpCommand {
  command: "help";
  description: "Gets a list of commands supported by the bot.";
  // the exception! needs to iterate through commands.
  execute(Message: Message, _: string[], commandList: Command[]) {
    const embed = new RichEmbed()
      .setTitle("Help")
      .setDescription("Note: all commands must be prefixed.");
    commandList.forEach((command) =>
      embed.addField(`\`${command.command}\``, command.description, false)
    );
    Message.channel.sendEmbed(embed);
  }
}
