import { Message } from "discord.js";
import fs from "fs";
import day from "dayjs";
import { interval } from "rxjs";
import { map } from "rxjs/operators";
import { SERVER_ID } from "config-env";

const logPath = "/tmp/log/overlake/discord/latest.txt";

fs.mkdirSync("/tmp/log/overlake/discord", {
  recursive: true,
});
let latestLog = fs.createWriteStream(logPath);
latestLog.on("error", (error) => console.error(error.stack));

// hr * min * sec * ms
const timer$ = interval(1000 * 60);
timer$.pipe(
  map(() => {
    try {
      const data = fs.readFileSync(logPath);
      fs.writeFileSync(
        `/tmp/log/overlake/discord/${day().format("YYYY-MM-DD_HH-mm")}`,
        data
      );
      latestLog.close();
      latestLog = fs.createWriteStream(logPath);
      console.log("Log dumped.");
    } catch (error) {
      console.error("Unable to save log.");
    }
  })
);

export default function messageLog(message: Message) {
  let logLine = `[${day().format()}] `;

  const member =
    message.client.guilds.get(SERVER_ID).member(message.author).displayName ||
    message.author.username;
  logLine += `${member}: `;
  logLine += `${message.cleanContent} \n`;

  latestLog.write(logLine);
  console.log("Message logged.");
}
