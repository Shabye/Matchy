"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: "Testing",
    description: "Replies with pong",
    slash: "both",
    testOnly: true,
    callback: ({ message, interaction }) => {
        const reply = "Pong!";
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
//# sourceMappingURL=ping.js.map