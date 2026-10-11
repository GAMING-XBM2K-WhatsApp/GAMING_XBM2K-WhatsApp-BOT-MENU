const { cmd } = require('../arslan');
const { setAntideleteStatus, getAntideleteStatus } = require('../data/Antidelete');

cmd({
    pattern: "antidelete",
    alias: ["antidel"],
    desc: "Turn Antidelete on/off",
    category: "owner",
    react: "🛡️"
},
async(conn, mek, m, { args, isOwner, reply, from }) => {
    if (!isOwner) return reply("*GAMING_XBM2K best WhatsApp BOT 🇱🇰 🤝 🇦🇪 😎*");
    const mode = args[0]?.toLowerCase();

    if (mode === 'on' || mode === 'enable') {
        await setAntideleteStatus(from, true);
        await reply("*👑 GAMING_XBM2K best WhatsApp BOT 🇱🇰 🤝 🇦🇪 😎 👑*");
    } else if (mode === 'off' || mode === 'disable') {
        await setAntideleteStatus(from, false);
        await reply("*👑 GAMING_XBM2K best WhatsApp BOT 🇱🇰 🤝 🇦🇪 😎 👑*");
    } else {
        const current = await getAntideleteStatus(from);
        await reply(`*GAMING_XBM2K best WhatsApp BOT* ${current ? "ON" : "OFF"} HI 😊*`);
    }
});
