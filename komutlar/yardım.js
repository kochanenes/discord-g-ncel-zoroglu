const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `!balıktut = balıktutarsınız \!çayiç = çay içersiniz... \!bilgi = Benim Hakkımda Bilgi Verir... \!efkar-vs = 2 kullanıcı etiketleyip hangisi daha efkarlı test eder... \!hacked = Profil resminize Hacked yazısını ekler... \!kralol = Kral Olursunuz... \!öldür = Etiketlediğiniz Kişiyi Öldürür... \!tokat = etiketlediğiniz kişiye tokat atar... `)
  .addField("**Discord Sunucu İle İlgili Komutlar :**",'!davet = Davet Linkini Verir... \!Kanal = Kanal Linkine Ulaşırsınız... \!hazarkanal = Hazar ın Kanalının Linkini Verir... \!Müslümkanal = Müslüm ün Kanal Linkini Verir...')

  .addField("**Yapımcı**", " **Enes Reis** ")
  .setFooter('**--------------------------**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
