const settings = require('../settings');

async function broadcastCommand(sock, chatId, message, args) {
    // Hanya owner yang bisa broadcast - verifikasi berdasarkan JID
    const sender = message.key?.participant || message.key?.remoteJid;
    const ownerJid = settings.ownerJid + '@s.whatsapp.net'; // Tambahkan suffix WhatsApp

    if (sender !== ownerJid) {
        await sock.sendMessage(chatId, { text: '❌ Kamu tidak punya akses untuk broadcast!' }, { quoted: message });
        return;
    }

    // Ambil teks broadcast dari args
    const bcText = args.join(' ');
    if (!bcText) {
        await sock.sendMessage(chatId, { text: '❌ Usage: .bc <pesan> atau .broadcast <pesan>' }, { quoted: message });
        return;
    }

    // Ambil semua grup yang bot join
    const allChats = await sock.groupFetchAllParticipating();
    const groups = Object.keys(allChats); // list groupId

    let success = 0;
    let failed = 0;

    // Format pesan broadcast sesuai spesifikasi
    const broadcastMessage = `📢 Broadcast

${bcText}`;

    for (const groupId of groups) {
        try {
            await sock.sendMessage(groupId, {
                text: broadcastMessage
            });
            success++;
        } catch (err) {
            console.error(`Gagal broadcast ke ${groupId}:`, err);
            failed++;
            // Continue to next group despite error
        }
    }

    // Kirim notifikasi ke owner
    await sock.sendMessage(chatId, { text: `✅ Broadcast selesai! Sukses: ${success}, Gagal: ${failed}` }, { quoted: message });
}

module.exports = broadcastCommand;