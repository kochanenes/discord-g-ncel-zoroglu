const Discord = require('discord.js');
exports.run = (client, message, args) => {

   if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0x808080)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(':fire: Üzgünüm, bunu yapamazsınız!')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild;
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  if (reason.length < 1) return message.reply('Uyarı sebebini, belirtmelisiniz!');
  if (message.mentions.users.size < 1) return message.reply('Kimi uyarmam gerekiyor?').catch(console.error);
  message.delete();
  message.reply('Kişi Uyarıldı...!!!')
  const embed = new Discord.RichEmbed()
  .setColor('0x808080')
  .setTitle(`**DİKKAT ET COCUK ADAM..!!!**`)
  .setTimestamp()
  .setDescription('Kural İhlali Nedeniyle Uyarıldınız Bir Dahaki Hatanızda @Muted Cezası Alacaksınız Tekrarlanması Durumunda Banlanacaksınız...')
  .addField('Belirtilen, sebep;', reason)
  .setFooter('Enes Reis İyi Eğlenceler Diler...', client.user.avatarURL)
  return user.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pm','öm'],
  permlevel: 2
};

exports.help = {
  name: 'uyar',
  description: 'Belirtilen kullanıcıyı, uyarır!',
  usage: 'uyar'
};
