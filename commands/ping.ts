import { ICommand } from "wokcommands";

export default {
  category: "Testing",
  description: "Replies with pong", // Required for slash commands

  slash: "both", // Create both a slash and legacy command
  //testOnly: true, // Only register a slash command for the testing guilds

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
} as ICommand;
