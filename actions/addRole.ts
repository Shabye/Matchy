import {
  Client,
  GuildMember,
  Interaction,
  MessageComponent,
  MessageSelectMenu,
} from "discord.js";

export class addRole {
  dropDownAdd(client: Client) {
    client.on("interactionCreate", (interaction) => {
      if (!interaction.isSelectMenu()) {
        return;
      }

      const { customId, values, member } = interaction;

      if (customId === "class_roles") {
        const component = interaction.component as MessageSelectMenu;
        const removed = component.options.filter((option) => {
          return !values.includes(option.value);
        });

        const m = member as GuildMember;
        for (const id of removed) {
          m.roles.remove(id.value);
        }

        for (const id of values) {
          m.roles.add(id);
        }

        interaction.reply({
          content: "Main class selected",
          ephemeral: true,
        });
      }
    });
  }
}
