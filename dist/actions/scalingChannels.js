"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scalingChannels = void 0;
const channelName = "+ Create channel 🆕";
var createdChs = [];
class scalingChannels {
    scaleChannel(client) {
        client.on("voiceStateUpdate", (oldstate, newState) => {
            var _a, _b, _c, _d;
            const { guild } = oldstate;
            const joined = !!newState.channelId;
            let everyone = guild.roles.cache.find((r) => r.name === "@everyone");
            let memberRole = guild.roles.cache.find((r) => r.name === "member");
            let mods = guild.roles.cache.find((r) => r.name === "KING'S BITCHES");
            const channelId = joined ? newState.channelId : oldstate.channelId;
            const channel = guild.channels.cache.get(channelId);
            console.log((_a = newState.member) === null || _a === void 0 ? void 0 : _a.user.username);
            if (channel.name === channelName) {
                if (joined) {
                    let allowCreate = true;
                    createdChs.forEach((e) => {
                        var _a;
                        if (e.member === ((_a = newState.member) === null || _a === void 0 ? void 0 : _a.user.id)) {
                            allowCreate = false;
                        }
                    });
                    if (createdChs.length == 10) {
                        allowCreate = false;
                    }
                    if (allowCreate) {
                        const Fun = [
                            " Fanclub",
                            "'s Harem",
                            " at Queenstown",
                            " & Chill",
                            " Gang",
                            " Hideaway",
                            " Corner",
                            " Sleepover",
                        ];
                        var createChName = `${(_b = newState.member) === null || _b === void 0 ? void 0 : _b.user.username} ${Fun[Math.floor(Math.random() * Fun.length)]}`;
                        var createdCh = guild.channels.create(createChName, {
                            type: "GUILD_VOICE",
                            parent: "934980418489434163",
                        });
                        let member = (_c = newState.member) === null || _c === void 0 ? void 0 : _c.user.id;
                        createdCh === null || createdCh === void 0 ? void 0 : createdCh.then((val) => {
                            var _a;
                            (_a = newState.member) === null || _a === void 0 ? void 0 : _a.voice.setChannel(val);
                            createdChs.push({ ch: val, member: member });
                        });
                    }
                    else {
                        console.log(`${(_d = newState.member) === null || _d === void 0 ? void 0 : _d.user.username} already has a ch`);
                    }
                }
            }
            else {
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
    deleteScaledChannel(client) {
        createdChs;
    }
}
exports.scalingChannels = scalingChannels;
//# sourceMappingURL=scalingChannels.js.map