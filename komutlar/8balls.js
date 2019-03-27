const Discord = require('discord.js');

const cevaplar = [
    "Evet",
    "Hayır",
    "Belki",
    "Olabilir",
    "İmkansız",
    "Kesin Doğrudur"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir Soru Belir **Örneğin = ** !soru  <sorulacak soru> ')
    else message.channel.send('**'+soru+ '** Soruldu Cevabım Ve Son Kararım  = **'+ cevap +'**')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sor',
  description: 'Sorduğunuz Soruya Rastgele Cevap Verir.',
  usage: 'sor [soru]'
};
