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

        message.guild.createChannel(`Muhammed`);
        message.guild.createChannel(`Enes`);
        message.guild.createChannel(`Koçhan`);
        message.guild.createChannel(`Hacked`);
        message.guild.createChannel(`Sunucu`);
        message.guild.createChannel(`Hacked`);
      
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
