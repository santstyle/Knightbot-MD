const settings = require('../settings');

async function menuCommand(sock, chatId, message) {
    const menuMessage = `
╔════════════════════════════════════════╗
║        ${settings.botName || 'Artoria Bot V1'}       
║        Version: ${settings.version || '1.0.0'}
║        Owner: ${settings.botOwner || 'SantStyle'}
╚════════════════════════════════════════╝

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💠 🌐 GENERAL COMMANDS 🌐 💠
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
│ • .help
│ • .menu
│ • .ping
│ • .alive
│ • .owner
│ • .tts <text>
│ • .joke
│ • .quote
│ • .fact
│ • .weather <city>
│ • .news
│ • .attp <text>
│ • .lyrics <song_title>
│ • .8ball <question>
│ • .groupinfo
│ • .staff
│ • .vv
│ • .trt <text> <lang>
│ • .ss <link>
│ • .jid

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💠 👮 ADMIN COMMANDS 👮 💠
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
│ • .ban @user
│ • .promote @user
│ • .demote @user
│ • .mute <minutes>
│ • .unmute
│ • .delete
│ • .kick @user
│ • .warnings @user
│ • .warn @user
│ • .antilink
│ • .antibadword
│ • .clear
│ • .tag <message>
│ • .tagall
│ • .chatbot
│ • .resetlink
│ • .antitag <on/off>
│ • .welcome <on/off>
│ • .goodbye <on/off>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💠 🔒 OWNER COMMANDS 🔒 💠
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
│ • .mode
│ • .autostatus
│ • .clearsession
│ • .antidelete
│ • .cleartmp
│ • .update
│ • .setpp <reply image>
│ • .autoreact
│ • .autotyping <on/off>
│ • .autoread <on/off>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💠 🎨 IMAGE/STICKER 🎨 💠
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
│ • .blur <image>
│ • .simage <sticker>
│ • .sticker <image>
│ • .removebg
│ • .remini
│ • .crop <image>
│ • .tgsticker <link>
│ • .meme
│ • .take <packname>
│ • .emojimix <emj1>+<emj2>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💠 🎮 GAME COMMANDS 🎮 💠
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
│ • .tictactoe @user
│ • .hangman
│ • .guess <letter>
│ • .trivia
│ • .answer <answer>
│ • .truth
│ • .dare

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💠 🎯 FUN COMMANDS 🎯 💠
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
│ • .compliment @user
│ • .insult @user
│ • .flirt
│ • .shayari
│ • .goodnight
│ • .roseday
│ • .character @user
│ • .wasted @user
│ • .ship @user
│ • .simp @user
│ • .stupid @user [text]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💠 📥 DOWNLOADER 📥 💠
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
│ • .play <song_name>
│ • .song <song_name>
│ • .instagram <link>
│ • .facebook <link>
│ • .tiktok <link>
│ • .video <song_name>
│ • .ytmp4 <link>

`;

    try {
        await sock.sendMessage(chatId, { text: menuMessage }, { quoted: message });
    } catch (error) {
        console.error('Error in menu command:', error);
        await sock.sendMessage(chatId, { text: menuMessage });
    }
}

module.exports = menuCommand;