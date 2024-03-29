"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: "matcher",
    description: "Starts matcher",
    slash: "both",
    //testOnly: true, // Only register a slash command for the testing guilds
    permissions: ['ADMINISTRATOR'],
    callback: ({ message, interaction, client }) => {
        const reply = "Matcher has started!";
        var getMembers = [];
        var intva = setInterval(startSearch, 5000);
        var guild = client.guilds.cache.get("932374576770461726");
        function startSearch() {
            getMembers = [];
            var voiceChannel = guild === null || guild === void 0 ? void 0 : guild.channels.cache.get("932374577210851389");
            voiceChannel.members.forEach((m) => {
                getMembers.push(m);
            });
            var matchFound = false;
            if (getMembers.length >= 2) {
                matchFound = true;
                stopSearch();
                if (matchFound) {
                    let channelName = `${getMembers[0].user.username} + ${getMembers[1].user.username}`;
                    var createdCh = guild === null || guild === void 0 ? void 0 : guild.channels.create(channelName, {
                        type: "GUILD_VOICE",
                        userLimit: 2,
                    });
                    createdCh === null || createdCh === void 0 ? void 0 : createdCh.then((val) => {
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
        function deleteCh(val, Mem1, Mem2) {
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
};
//# sourceMappingURL=start.js.map