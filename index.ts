import DiscordJS, { Client, GuildChannel, Intents } from "discord.js";
import dotenv from "dotenv";
import WOKCommands from "wokcommands";
import path from "path";
import { scalingChannels } from "./actions/scalingChannels";
import { addRole } from "./actions/addRole";
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
  let addRoles = new addRole();

  scale.scaleChannel(client);
  addRoles.dropDownAdd(client);
  
  new WOKCommands(client, {
    commandsDir: path.join(__dirname, "commands"),
    testServers: ["932374576770461726"],
  });
});

//client.on("ready", () => {
//console.log("Bot is ready");
//let handler = require("./command-handler");
//if (handler.default) {
//  handler = handler.default;
//}
//handler(client);
//const repeatFunction = setInterval(function () {
//  var getMembers = [];
//
//  var guild = client.guilds.cache.get("932374576770461726");
//  var voiceChannel = guild?.channels.cache.get(
//    "932374577210851389"
//  ) as GuildChannel;
//
//  voiceChannel.members.forEach((m) => {
//    getMembers.push(m.user);
//  });
//
//  if (getMembers.length > 1) {
//    console.log("No users in voicechannel");
//  } else {
//    console.log("Users in voicechannel");
//  }
//}, 5000);
//
//repeatFunction;
//});

client.login(process.env.TOKEN);
