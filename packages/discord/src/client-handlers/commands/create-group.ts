import Command from "@Classes/Command";
import { Message, PermissionOverwrites } from "discord.js";
import { generatePassphrase } from "niceware";

export default class CreateGroupCommand implements Command {
  command = "creategroup";
  description = 'Creates a "DM-like" channel with you and specified members.';
  async execute(message: Message, args: string[]) {
    const mentions = message.mentions.members;
    if (mentions.size < 1) {
      message.reply("you need to mention one or more users.");
      return;
    }

    const memberPermissions = mentions.map((member) => ({
      id: member.id,
      allow: ["VIEW_CHANNEL"],
    }));

    const channelName = (generatePassphrase(4) as string[]).join("-");

    await message.guild.createChannel(channelName, {
      permissionOverwrites: [
        {
          id: message.guild.roles.find((role) => role.name === "everyone").id,
          deny: ["VIEW_CHANNEL"],
        },
        ...((memberPermissions as unknown) as PermissionOverwrites[]),
      ],
    });

    await message.react("✅");
  }
}
