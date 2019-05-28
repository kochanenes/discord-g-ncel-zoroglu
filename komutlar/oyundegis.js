const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if(message.author.id !== '431438124347031552') return message.reply('**Sadece Beni Kodlayan Enes Reis Kullanabilir Bu Komutu !!!** ');
      const sayMessage = args.join(` `);
      client.user.setGame(sayMessage);
      message.channel.send(`Oyun ismi __**${sayMessage}**__ olarak değiştirildi :ok_hand:`)
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'oyundeğiş',
  description: 'Oynuyor Yazısını Değişir...',
  usage: 'oyundeğiş'
};
