"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: "Gamba",
    description: "Replies with pong",
    slash: "both",
    //testOnly: true, // Only register a slash command for the testing guilds
    callback: ({ message, interaction }) => {
        let reply = `You rolled ${Math.floor(Math.random() * 11)}`;
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