const settings = require('../settings');

async function menuCommand(sock, chatId, message) {
    const menuMessage = `
    ╔════════════════════════════════════╗
    ║ 🤖 ${settings.botName || 'Artoria Bot V1'}
    ║ Version: ${settings.version || '1.0.0'}
    ║ Owner: ${settings.botOwner || 'SantStyle'}
    ╚════════════════════════════════════╝
    
💠 🔒 OWNER
• .mode
• .autostatus
• .clearsession
• .antidelete
• .cleartmp
• .update
• .setpp <reply image>
• .autoreact
• .autotyping <on/off>
• .autoread <on/off>
• .bc

💠 🗺️ LANGUAGE
• .setlang id
• .setlang en


💠 🌐 GENERAL
• .help
• .menu
• .ping
• .alive
• .owner
• .tts <text>
• .joke
• .quote
• .fact
• .weather <city>
• .news
• .attp <text>
• .lyrics <song_title>
• .8ball <question>
• .groupinfo
• .staff
• .vv
• .trt <text> <lang>
• .ss <link>
• .jid

💠 👮 ADMIN
• .ban @user
• .promote @user
• .demote @user
• .mute <minutes>
• .unmute
• .delete
• .kick @user
• .warnings @user
• .warn @user
• .antilink
• .antibadword
• .clear
• .tag <message>
• .tagall
• .chatbot
• .resetlink
• .antitag <on/off>
• .welcome <on/off>
• .goodbye <on/off>


💠 🎨 IMAGE/STICKER
• .blur <image>
• .simage <sticker>
• .sticker <image>
• .removebg
• .remini
• .crop <image>
• .tgsticker <link>
• .meme
• .take <packname>
• .emojimix <emj1>+<emj2>

💠 🎮 GAME
• .tictactoe @user
• .hangman
• .guess <letter>
• .trivia
• .answer <answer>
• .truth
• .dare

💠 🤖 AI
• .gpt <question>
• .gemini <question>
• .imagine <prompt>
• .flux <prompt>

💠 🎯 FUN
• .compliment @user
• .insult @user
• .flirt
• .shayari
• .goodnight
• .roseday
• .character @user
• .wasted @user
• .ship @user
• .simp @user
• .stupid @user [text]

💠 📥 DOWNLOADER
• .play <song_name>
• .song <song_name>
• .instagram <link>
• .facebook <link>
• .tiktok <link>
• .video <song_name>
• .ytmp4 <link>


`;

    try {
        await sock.sendMessage(chatId, { text: menuMessage }, { quoted: message });
    } catch (error) {
        console.error('Error in menu command:', error);
        await sock.sendMessage(chatId, { text: menuMessage });
    }
}

module.exports = menuCommand;
