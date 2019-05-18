const Discord = require('discord.js');

exports.run = function(client, message, args) {
 let user = message.mentions.users.first();


    if (message.mentions.users.size < 1) return message.reply('Herhangi birini, belirtmelisin!').catch(console.error);

    const oldur=new Discord.RichEmbed()
    .setColor("0x808080")
    .setDescription(message.author.username + ` ${user}` + ' adlı kişiyi, Öpücükledi! :hearts: ')
    .setImage('https://media1.tenor.com/images/22d4bc30f194005e82af8576b79a7ba9/tenor.gif?itemid=6280005')
    .setFooter("Enes İyi Eğlenceler Diler...", client.user.avatarURL)
     return message.channel.send(oldur);




};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'öp',
  description: 'Belirtilen kişiyi, Öper!',
  usage: 'öp'
};
