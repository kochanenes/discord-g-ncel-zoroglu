const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Lüten Komutu Boşa Kullanmayın !!!');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 3
};

exports.help = {
  name: 'yazz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yazdır [yazdırmak istediğiniz şey]'
};
