
const Discord = require('discord.js');

exports.run = function(client, message, args) {
 let user = message.mentions.users.first();


    if (message.mentions.users.size < 1) return message.reply('Herhangi birini, belirtmelisin!').catch(console.error);

    const oldur=new Discord.RichEmbed()
    .setColor("0x808080")
    .setDescription(message.author.username + ` ${user}` + ' adlı kişiyi, Tokatladı! :hand_splayed: ')
    .setImage('https://media0.giphy.com/media/o0slfP7NJC70A/giphy.gif')
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
  name: 'tokat',
  description: 'Belirtilen kişiyi, Tokatlar!',
  usage: 'tokat'
};
