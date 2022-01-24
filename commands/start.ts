import { ICommand } from "wokcommands";
import { GuildChannel, GuildMember, VoiceChannel } from "discord.js";

export default {
  category: "matcher",
  description: "Starts matcher", // Required for slash commands
  slash: "both", // Create both a slash and legacy command
  //testOnly: true, // Only register a slash command for the testing guilds
  permissions: ['ADMINISTRATOR'],
  
  callback: ({ message, interaction, client }) => {
    const reply = "Matcher has started!";
    var getMembers = [] as Array<GuildMember>;
    var intva = setInterval(startSearch, 5000);
    var guild = client.guilds.cache.get("932374576770461726");
    function startSearch() {
      getMembers = [];

      var voiceChannel = guild?.channels.cache.get(
        "932374577210851389"
      ) as GuildChannel;

      voiceChannel.members.forEach((m) => {
        getMembers.push(m);
      });
      var matchFound = false;
      if (getMembers.length >= 2) {
        matchFound = true;
        stopSearch();
        if (matchFound) {
          let channelName = `${getMembers[0].user.username} + ${getMembers[1].user.username}`;
          var createdCh = guild?.channels.create(channelName, {
            type: "GUILD_VOICE",
            userLimit: 2,
          });
          createdCh?.then((val) => {
            getMembers[0].voice.setChannel(val);
            getMembers[1].voice.setChannel(val);
            console.log(val.createdAt);
            deleteCh(val, getMembers[0], getMembers[1]);
          });
          intva = setInterval(startSearch, 5000);
        }
      }
    }

    function stopSearch() {
      clearInterval(intva);
    }

    function deleteCh(val: VoiceChannel, Mem1: GuildMember, Mem2: GuildMember) {
      setTimeout(() => {
        Mem1.voice.setChannel("932374577210851389").catch((error) => {
          console.error(error);
        });
        Mem2.voice.setChannel("932374577210851389").catch((error) => {
          console.error(error);
        });
      }, 9000);

      setTimeout(() => {
        val.delete();
      }, 15000);
    }

    // message is provided for a legacy command
    if (message) {
      message.reply({
        content: reply,
      });
      return;
    }

    // interaction is provided for slash commands
    interaction.reply({
      content: reply,
    });
  },
} as ICommand;
