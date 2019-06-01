const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", '\n\n!tekmeat = Etiketlediğiniz Kişiye Tekme Atar...','\n\n!hapishane = profil fotonuza hapishane efekti verir...',`\n\n!balıktut = balıktutarsınız \n\n!çayiç = çay içersiniz... \n\n!roliste = rol verir :D yada oyle sanarsın :D \n\n!bilgi = Benim Hakkımda Bilgi Verir... \n\n!efkar-vs = 2 kullanıcı etiketleyip hangisi daha efkarlı test eder... \n\n!hacked = Profil resminize Hacked yazısını ekler... \n\n!kralol = Kral Olursunuz... \n\n!öldür = Etiketlediğiniz Kişiyi Öldürür... \n\n!tokat = etiketlediğiniz kişiye tokat atar...\n\n!espiri = random espiri yapar...\n\n!sor = sordugunuz soruya cevap verir...\n\n!öp = Etiketlediğin Kişiyi Öper...\n\n! `)
  .addField("**Discord Sunucu İle İlgili Komutlar :**",'\n\n!davet = Davet Linkini Verir... ')
  //.addField("**Yetkili Komutları**", " **\n\n!uyar = Kullanıcıya Özel Mesaj Olarak Uyarı Gönderir...\n\n!temizlee = Mesajları Siler (En Fazla 100 Yazınız Lütfen)...\n\n!hazır-sunucu = Botu Tasarlayan Trafından Ayarlanan Odaları Kurar...\n\n!yazzdır = Belirtilen Mesajı Yazdırır...\n\n!oyundeğiş = Bu Komutu Sadece BOT Sahibi Kullanabilir...\n\n!ban = Belirtilen Kişiyi Sunucudan Banlar (kullanım !ban <kişi-etiket> <sebep>\n\n!kick = Belirtilen Kişyi Sunucudan Atar (kullanım !kick <kişi-etiket> <sebep>** ")
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
  name: 'dyardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
