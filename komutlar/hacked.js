const Discord = require(`discord.js`);
const Jimp = require(`jimp`);

exports.run = async (client, message, args) => {
 let member = message.mentions.members.first();
 var user = message.mentions.users.first() || message.author;
  message.channel.send(`**Aranıyor** filtresi uygulanıyor.\n**işlem \`5\` saniye içerisinde gerçekleştirilecek.**`).then(m => m.delete(3000));

  Jimp.read('ttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrevTbtXe93ry4I2SMuRUUqsmxJ8_ZfAae2_3mI_fOGou2fS59kg`, (err, image) => {
    image.resize(295, 295)

    Jimp.read(user.avatarURL, (err, avatar) => {
        avatar.resize(179, 135)
        image.composite(avatar, 56, 100).write(`./img/araniyor/discord.gg/B2Vz2ug-${user.username}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./img/araniyor/discord.gg/B2Vz2ug-${user.username}.png`));

        }, 1000);
      });
    });

};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['aranıyor'],
 permLevel: 0
};

exports.help = {
 name: 'wanted',
 description: 'wanted',
 usage: 'wanted'
};
