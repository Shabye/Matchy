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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importStar(require("discord.js"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const client = new discord_js_1.default.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
        discord_js_1.Intents.FLAGS.GUILD_MEMBERS,
        discord_js_1.Intents.FLAGS.GUILD_PRESENCES,
        discord_js_1.Intents.FLAGS.GUILD_VOICE_STATES,
    ],
});
client.on("ready", () => {
    console.log("Bot is ready");
    const repeatFunction = setInterval(function () {
        var getMembers = [];
        var guild = client.guilds.cache.get("932374576770461726");
        var voiceChannel = guild === null || guild === void 0 ? void 0 : guild.channels.cache.get('932374577210851389');
        voiceChannel.members.forEach(m => {
            console.log(m.user.username);
        });
        //Array.from(voiceChannel)
        //getMembers.push(voiceChannel)
        //
        //getMembers.forEach(element => {
        //
        //  
        //});
        if (getMembers.length > 1) {
            console.log("No users in voicechannel");
        }
        else {
            console.log("Users in voicechannel");
        }
    }, 5000);
    repeatFunction;
});
client.on("messageCreate", (message) => {
    if (message.content === "ping") {
        message.reply({
            content: "pong",
        });
    }
});
client.login(process.env.TOKEN);
