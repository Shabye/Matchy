import DiscordJS, { Client, GuildChannel, Intents } from "discord.js";
import dotenv from "dotenv";
import WOKCommands from "wokcommands";
import path from "path";
import { scalingChannels } from "./actions/scalingChannels";
dotenv.config();

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],
});

client.on("ready", () => {
  let scale = new scalingChannels();
  scale.scaleChannel(client)

  new WOKCommands(client, {
    commandsDir: path.join(__dirname, "commands"),
    testServers: ["932374576770461726"],
  });
});

client.login(process.env.TOKEN);
