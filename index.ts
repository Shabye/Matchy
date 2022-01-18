import DiscordJS, { Client, GuildChannel, Intents } from "discord.js";
import dotenv from "dotenv";
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
  console.log("Bot is ready");
  const repeatFunction = setInterval(function () {
    var getMembers = [];

    var guild = client.guilds.cache.get("932374576770461726");
    var voiceChannel = guild?.channels.cache.get('932374577210851389') as GuildChannel;

    voiceChannel.members.forEach(m => {
      console.log(m.user.username);
    });
    
    //Array.from(voiceChannel)
    
    //getMembers.push(voiceChannel)
    //
    //getMembers.forEach(element => {
   //
    //  
    //});

    if (getMembers.length > 1) {
      console.log("No users in voicechannel");
    } else {
      console.log("Users in voicechannel");
    }
  }, 5000);

  repeatFunction
});

client.on("messageCreate", (message) => {
  if (message.content === "ping") {
    message.reply({
      content: "pong",
    });
  }
});

client.login(process.env.TOKEN);
