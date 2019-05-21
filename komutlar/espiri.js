const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Espirimi istiyorsun Hemen Geliyor Bir Tane...').then(message => {
   var espriler = ['**Ayda 500 dolar kazmak istermis o zaman aya Çık... Espiri Sahibi = ** __**Erkan - ByBaGo / 15**__', '**Rock yapmayan ki�iye ne denir? - Yaprock. ** ' , '**Sinemada on dakika ara dedi, arad�m arad�m a�mad�. ** ' ,'**En kahraman il hangisidir ? Cevap= Batman Espiri Sahibi = ** __**�brahim / 14** ','**Tem yoluna muz d��m�� ne olmu� ==temmuz... Espiri Sahibi = ** __**Erdem / 13**__','**Adam�n biri varm�� 2.d�nem d�zelmti�... Espiri Sahibi = ** __**^ Kaan / 16**__'];
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
