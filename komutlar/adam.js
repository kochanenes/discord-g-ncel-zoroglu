const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
   message.channel.send('Sergen Zoroglu Adam...').then(message => {
   var adam2 = ['**Sergen Zoroglu Adamdır...  :heart: İtirazınız Varsa Bundan Bizene... https://gss.gs/UKP.jpg ** ','**Sergen Zoroglu Adamdır...  :heart: İtirazınız Varsa Bundan Bizene... ** https://gss.gs/fJr.jpg','**Sergen Zoroglu Adamdır...  :heart: İtirazınız Varsa Bundan Bizene... **https://gss.gs/UKP.jpg','**Sergen Zoroglu Adamdır...  :heart: İtirazınız Varsa Bundan Bizene... **https://gss.gs/MxW.jpg'];
      var adam = adam2[Math.floor(Math.random() * adam2.length)];
            message.edit(`${adam}`);
 });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'adam',
  description: 'Adamı Gosterır...',
  usage: 'adam'
};
