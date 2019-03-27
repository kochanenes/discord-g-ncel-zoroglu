const Discord = require('discord.js');

exports.run = function(client, message, args) {
 let user = message.mentions.users.first();


    if (message.mentions.users.size < 1) return message.reply('Herhangi birini, belirtmelisin!').catch(console.error);

    const oldur=new Discord.RichEmbed()
    .setColor("0x808080")
    .setDescription(message.author.username + ` ${user}` + ' adlı kişiyi, öldürdü! :gun:')
    .setImage('https://cdn.discordapp.com/attachments/363746758083477505/400337232625401856/animation_2.gif')
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
  name: 'öldür',
  description: 'Belirtilen kişiyi, öldürür!',
  usage: 'öldür'
};
