const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Yetkili Komutları**", " **\n/ban = etiketlediğiniz kişiyi sunucudan banlar...(Kullanım = /ban <kişi-etket> <sebep>)\n/kick = Etiketlediğiniz Kişiyi sunucudan atar...(Kullanım = /kick <kişi-etket> <sebep>)\n/reklamtara = Sunucdaki Üyelerin Adlarını Ve Oynuyor Mesajlarını Tarar Reklam İçeriği Varsa Gösterir...\n/uyar = Kullanıcıya Özel Mesaj Olarak Uyarı Gönderir...\n/temizlee = Mesajları Siler (En Fazla 100 Yazınız Lütfen)...\n/yazzdır = Belirtilen Mesajı Yazdırır...\n/oyundeğiş = Bu Komutu Sadece BOT Sahibi Kullanabilir...\n** ")
  .addField("**Discord Sunucu İle İlgili Komutlar :**",'\n/sikayet = Şikayetinizi Yetkililere İletir...\n/davet = Davet Linkini Verir...\n/ses-kanal-aç = Ses Kanalı Açar (Kullanım = /ses-kanal-aç <açılacak-kanal-ad>) \n/kanal = Kanal Linkine Ulaşırsınız...\n/hazır-sunucu = Botu Tasarlayan Trafından Ayarlanan Odaları Kurar...\n ')
.addField("**Renk Komutları**","**\n/renksarı = Sarı Renk Alırsınız...\n/renkmavi = Mavi Renk Alırsınız...\n/renkmor = Mor Renk Alırsınız...\n/renkkırmızı = Kırmızı Renk Alırsınız...\n/renkyeşil = Yeşil Renk Alırsınız...\n/renkpembe = Sarı Renk Alırsınız...\n**__**NOT:Renklerin Belirli Bir Sıralanması Vardır. : 1. Sarı 2. Kırmızı 3. Mavi 4. Yeşil 5. Mor 6. Pembe - NOT 2: En Fazla 1 Renk Alabilirsiniz Başka Renk İsterseniz Yazabilirsiniz Fakat Sıralamaya Göre Hareket Edin...**__")
  .addField("**Eğlence ve Kullanıcı Komutları:**", `\n/hackle = etiketlediğiniz kişiyi hackler...\n/havadurumu = Havadurumunu Gösterir (Kullanım /havadurumu <şehir>\n/balıktut = balıktutarsınız \n/çayiç = çay içersiniz... \n/roliste = rol verir :D yada oyle sanarsın :D \n/bilgi = Benim Hakkımda Bilgi Verir... \n/efkar-vs = 2 kullanıcı etiketleyip hangisi daha efkarlı test eder... \n/hacked = Profil resminize Hacked yazısını ekler... \n/kralol = Kral Olursunuz... \n/öldür = Etiketlediğiniz Kişiyi Öldürür... \n/tokat = etiketlediğiniz kişiye tokat atar...\n/espiri = random espiri yapar...\n/sor = sordugunuz soruya cevap verir...\n/öp = Etiketlediğin Kişiyi Öper...\n/aşkölçer = etiketledğiniz 2 kişinin arasındaki aşkı ölçer...\n/hapis = Profil resminize hapisdeymiş gibi hava katar...\n/tekme = etiketlediğiniz kişiye tekme atar...\n/wanted = kendinize veya etiketledğiniz kişiye Aranıyor havası katar... `)
  
  .addField("**Yapımcı**", " __**Kochanenes**__ ")
  .setFooter('***************************************')
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
