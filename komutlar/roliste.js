const Discord = require('discord.js');



exports.run = async (client, message) => {
    let dönme = await message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `${message.author.tag} **Rolünüz Yükleniyor Lütfen Bekleyiniz . . .**`
        }
    });

    let bitiş = (Math.random() * (60 - 5 +1)) + 5;
    setTimeout(() => {
        dönme.edit({
            embed: {
                color: 0x00AE86,
                description: `${message.author.tag}, **Kusura Bakma Kardeşim Rol Veremem Hak Etmen Lazım**`,
                image: {
                    url: "https://tenor.com/view/milkandmocha-cry-sad-tears-upset-gif-11667710"
                }
            }
        });
    }, 5 * 1000);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'roliste',
  description: 'Bu komut ile sigara içebilirsiniz!',
  usage: 'roliste'
};
