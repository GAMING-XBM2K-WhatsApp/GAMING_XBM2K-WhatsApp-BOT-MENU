const { cmd } = require('../arslan');
const config = require('../config');


cmd({
    pattern: "anti-call",
    react: "👑",
    alias: ["anticall"],
    desc: "Enable or disable welcome messages for new members",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { from, args, isCreator, reply }) => {
    if (!isCreator) return reply("*GAMING_XBM2K best WhatsApp BOT 🇱🇰 🤝 🇦🇪 😎*");

    const status = args[0]?.toLowerCase();
    if (status === "on") {
        config.ANTI_CALL = "true";
        return reply("*👑 GAMING_XBM2K best WhatsApp BOT 🇱🇰 🤝 🇦🇪 😎 👑*");
    } else if (status === "off") {
        config.ANTI_CALL = "false";
        return reply("*👑 GAMING_XBM2K best WhatsApp BOT 🇱🇰 🤝 🇦🇪 😎 👑*");
    } else {
        return reply(`*ESE LIKHO ☺️*\n *❮GAMING_XBM2K best WhatsApp BOT 🇱🇰 🤝 🇦🇪 😎 ON❯*`);
    }
});
