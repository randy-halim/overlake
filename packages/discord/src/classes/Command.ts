import { Message } from "discord.js";

export default abstract class Command {
  public abstract command: string;
  public abstract description: string;
  public abstract execute(
    Message: Message,
    args: string[]
  ): Promise<void> | void;
}
