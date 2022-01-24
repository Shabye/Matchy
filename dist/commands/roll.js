"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: "Gamba",
    description: "Replies with pong",
    slash: "both",
    //testOnly: true, // Only register a slash command for the testing guilds
    expectedArgs: "<number1>",
    callback: ({ message, interaction, args }) => {
        let reply = "";
        if (args[0] != "") {
            reply = `You rolled ${Math.floor(Math.random() * parseInt(args[0]))}`;
        }
        else {
            reply = `You rolled ${Math.floor(Math.random() * 11)}`;
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
//# sourceMappingURL=roll.js.map