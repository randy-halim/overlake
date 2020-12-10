import { Message, RichEmbed } from "discord.js";
import Command from "@Classes/Command";

export default class AboutCommand implements Command {
  public command = "about";
  public description = "Get metadata and stats of this bot.";
  async execute(message: Message, args: string[]) {
    const messageToSend = new RichEmbed()
      .setTitle("Overlake Discord Bot")
      .setURL("https://github.com/randy-halim/overlake#readme")
      .addField("Version", "0.0.1", true)
      .setFooter(`Arguments provided: ${args.join(", ")}`);
    await message.channel.sendEmbed(messageToSend);
  }
}
