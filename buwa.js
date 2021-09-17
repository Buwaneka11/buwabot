Amdi.applyCMD({ pattern: 'yts ?(.*)', fromMe: LOL, deleteCommand: false, desc: Lang.YT_DESC }, (async(message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, Lang.NEED_WORDS, MessageType.text);
    var searching = await message.client.sendMessage(message.jid, Lang.GETTING_VIDEOS, MessageType.text, { quoted: message.data });

    try {
        var arama = await yts(match[1]);
    } catch {
        return await message.client.sendMessage(message.jid, Lang.NOT_FOUND, MessageType.text);
    }

    var ytgot = '';
    arama.all.map((video) => {
        ytgot += '▶️ *' + video.title + '* - ' + video.url + '\n\n'
    });

    await message.client.sendMessage(message.jid, '*❖ Queen Amdi Search Engine ❖*\n' + Lang.YTS + '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n' + ytgot, MessageType.text, { quoted: message.data });
    return await message.client.deleteMessage(message.jid, { id: searching.key.id, remoteJid: message.jid, fromMe: true })
}));