"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importStar(require("discord.js"));
exports.default = {
    category: "Roles",
    description: "Set role",
    slash: "both",
    //testOnly: true,
    callback: ({ message, interaction }) => {
        const reply = "Pong!";
        const options = [
            {
                label: "Berserker",
                value: "935221492617211994",
            },
            {
                label: "Paladin",
                value: "935221572124434612",
            },
            {
                label: "Gunlancer",
                value: "935221644958531654",
            },
            {
                label: "Striker",
                value: "935221717629009950",
            },
            {
                label: "Wardancer",
                value: "935221756766060574",
            },
            {
                label: "Scrapper",
                value: "935221777196539946",
            },
            {
                label: "Soulfist",
                value: "935221795949252608",
            },
            {
                label: "Gunslinger",
                value: "935221841755263077",
            },
            {
                label: "Artillerist",
                value: "935221871652245594",
            },
            {
                label: "Deadeye",
                value: "935221909249986620",
            },
            {
                label: "Sharpshooter",
                value: "935221929776939038",
            },
            {
                label: "Sorceress",
                value: "935221992532103199",
            },
            {
                label: "Bard",
                value: "935221971413778462",
            },
            {
                label: "Shadownhunter",
                value: "935222020831080549",
            },
            {
                label: "Deathblade",
                value: "935222103991541901",
            },
        ];
        const row = new discord_js_1.default.MessageActionRow();
        row.addComponents(new discord_js_1.MessageSelectMenu()
            .setCustomId("class_roles")
            .setMinValues(0)
            .setMaxValues(1)
            .setPlaceholder("Select your main class...")
            .addOptions(options));
        // message is provided for a legacy command
        if (message) {
            message.reply({
                content: "Select here your main class",
                components: [row],
            });
            return;
        }
        // interaction is provided for slash commands
        interaction.reply({
            content: "Select here your main class",
            components: [row],
        });
    },
};
//# sourceMappingURL=dropdown.js.map