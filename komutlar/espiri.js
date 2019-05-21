const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Espirimi İstiyorsun Hemen Geliyor Bir Tane...').then(message => {
   var espriler = ['**Ayda 500 dolar kazmak istermis o zaman aya Çık... Espiri Sahibi = ** __**Erkan - ByBaGo / 15**__', '**Rock yapmayan kişiye ne denir? - Yaprock. ** ' , '**Sinemada on dakika ara dedi, aradım aradım açmadı. ** ' ,'**En kahraman il hangisidir ? Cevap= Batman Espiri Sahibi = ** __**İbrahim / 14** ','**Tem yoluna muz düşerse ne olur ? ==temmuz... Espiri Sahibi = ** __**Erdem / 13**__','**Adamın biri varmış 2.dönem düzeltş... Espiri Sahibi = ** __**^ Kaan / 16**__','**Tebrikler kazandınız, şimdi tencere oldunuz! Espiri Sahibi = **__**Yusuf Akif / 14**__ ','**İshal olmuş böceğe ne denir? -CIRCIR böceği Espiri Sahibi = ** __**Yusuf Akif / 14**__'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espiri', 'espiriyap', 'espiri-yap', 'espri'],
  permLevel: 0
};

exports.help = {
  name: 'espiri',
  description: 'Espiri Yapar.',
  usage: 'espiri'
};
