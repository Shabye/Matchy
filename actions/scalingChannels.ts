import {
  Client,
  GuildChannel,
  Permissions,
  Message,
  Guild,
  Role,
  VoiceChannel,
} from "discord.js";

const channelName = "+ Create channel 🆕";
var createdChs: { ch: VoiceChannel; member: String }[] = [];

export class scalingChannels {
  scaleChannel(client: Client) {
    client.on("voiceStateUpdate", (oldstate, newState) => {
      const { guild } = oldstate;
      const joined = !!newState.channelId;
      let everyone = guild.roles.cache.find(
        (r) => r.name === "@everyone"
      ) as Role;
      let memberRole = guild.roles.cache.find(
        (r) => r.name === "member"
      ) as Role;
      let mods = guild.roles.cache.find(
        (r) => r.name === "KING'S BITCHES"
      ) as Role;

      const channelId = joined ? newState.channelId : oldstate.channelId;
      const channel = guild.channels.cache.get(
        channelId as string
      ) as GuildChannel;

      console.log(newState.member?.user.username);

      if (channel.name === channelName) {
        if (joined) {
          let allowCreate = true;
          createdChs.forEach((e) => {
            if (e.member === (newState.member?.user.id as String)) {
              allowCreate = false;
            }
          });
          if (createdChs.length == 10) {
            allowCreate = false;
          }
          if (allowCreate) {
            var createChName = `${newState.member?.user.username} Fanclub`;
            var createdCh = guild.channels.create(createChName, {
              type: "GUILD_VOICE",
              parent: "934980418489434163",
            });
            let member: String = newState.member?.user.id as String;
            createdCh?.then((val) => {
              newState.member?.voice.setChannel(val);
              createdChs.push({ ch: val, member: member });
            });
          } else {
            console.log(`${newState.member?.user.username} already has a ch`);
          }
        }
      } else {
        createdChs.forEach((e, index, object) => {
          console.log(e.ch.members.size);
          if (e.ch.members.size == 0) {
            object.splice(index, 1);
            e.ch.delete();
          }
        });
      }
    });
  }

  deleteScaledChannel(client: Client) {
    createdChs;
  }
}
