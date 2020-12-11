import Command from "@Classes/Command";
import { Message, RichEmbed } from "discord.js";
import { commands } from "@ClientHandlers/commands";
import { COMMAND_PREFIX } from "config-env";

export default class HelpCommand implements Command {
  public command = "help";
  public description = "Gets a list of commands supported by the bot.";
  async execute(Message: Message, _: string[]) {
    const embed = new RichEmbed().setTitle("Help");
    commands.forEach((command) =>
      embed.addField(
        `\`${COMMAND_PREFIX}${command.command}\``,
        command.description,
        false
      )
    );
    await Message.channel.send(embed);
  }
}
