const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('Kullanım: h!sikayet <Şikayet>'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')

.setDescription('Şikayetiniz Bildirildi!')
message.delete();
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
message.delete(30000);
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının Şikayeti:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("Şikayet", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('584391302137774109').send(embed2); // Kanal ID

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['şikayet','sikayetet','şikayet et'],
  permLevel: 0
};

exports.help = {
  name: 'sikayet',
  description: 'Şikayet de bulunursunuz.',
  usage: 'sikayet <Şikayet>'
};
