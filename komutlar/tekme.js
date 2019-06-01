const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Kime Tekme Atacağını Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`** ${mesaj} ` + message.author.username + ' Sana Tekme Attı!? Öcünü Alacak Mısın? :rage: **')
        .setImage(`https://media.giphy.com/media/l3V0j3ytFyGHqiV7W/giphy.gif`)
        .setFooter("Enes İyi Eğlenceler Diler...", client.user.avatarURL)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tekme-at','tekme at','tekme'],
  permLevel: 0
};

exports.help = {
  name: 'tekmeat',
  description: 'İstediğiniz Kişiye tekme Atarsınız.',
  usage: 'tekmeat'
};
