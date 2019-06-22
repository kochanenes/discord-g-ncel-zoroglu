const Discord = require('discord.js');


exports.run = (client, message, args) => {
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut giriişi').setDescription('Gerekli Dosaylar Kurulsunmu?.').setFooter('Bu eylemi onaylıyorsan "Evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'Evet', {
max: 1,
time: 30000,
errors: ['time'],
})

.then((collected) => {
        message.guild.createChannel(`Duyurular`);
          message.guild.createChannel(`Kurallar`);
        message.guild.createChannel(`Sohbet`);
        message.guild.createChannel(`Resim`);
        message.guild.createChannel(`Rank_Sorgulama`);
        message.guild.createChannel(`Link-Paylaşım-Odası`);
        message.guild.createChannel(`Bot-Komut-Odası`);
        message.guild.createChannel('Counter Strike 1.6 -1','VOİCE');
      
       message.guild.deleteChannel();
        message.channel.send(`Odaları Oluşturdum Yetkileri Sen Ayarlarsın Başka İşim Varmı Reis...?`);
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'hazır-sunucu',
  description: 'Bot İçin gerekli kanlları kurar.',
  usage: '!kurulum'
};
