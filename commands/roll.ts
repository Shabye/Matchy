import { ICommand } from "wokcommands";

export default {
  category: "Gamba",
  description: "Replies with pong", // Required for slash commands

  slash: "both", // Create both a slash and legacy command
  //testOnly: true, // Only register a slash command for the testing guilds
  expectedArgs: "<number1>",
  callback: ({ message, interaction, args }) => {
    let reply = "";
    console.log(args[0]);
    if (args[0] != undefined) {
      reply = `You rolled ${Math.floor(Math.random() * parseInt(args[0]))}`;
    } else {
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
} as ICommand;
