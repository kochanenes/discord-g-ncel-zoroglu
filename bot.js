const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');

var prefix = ayarlar.json;
const moment = require('moment');
require('./util/eventLoader')(client);
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};



client.on('message', message => {
    if (message.content.startsWith("!virüs")) {
        if(!message.author.id === '') return;
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);

                   let virusname = args.join('Aktarma işlemi, iptal edildi!');
                 if (virusname < 1) {
                     return message.channel.send("Lütfen, bir isim belirtiniz!");
                 }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle(virusname + " hazırlanmakta!").setColor(0x808080)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 1%').setColor(0x808080)})
             }, 1000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 2%').setColor(0x808080)})
             }, 2000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 3%').setColor(0x808080)})
             }, 3000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 4%').setColor(0x808080)})
             }, 4000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 28%').setColor(0x808080)})
             }, 5000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 35%').setColor(0x808080)})
             }, 6000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 78%').setColor(0x808080)})
             }, 7000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 80%').setColor(0x808080)})
             }, 8000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 86%').setColor(0x808080)})
             }, 9000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 89%').setColor(0x808080)})
             }, 10000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 90%').setColor(0x808080)})
             }, 11000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 95%').setColor(0x808080)})
             }, 12000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 96%').setColor(0x808080)})
             }, 13000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 97%').setColor(0x808080)})
             }, 14000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor 98%').setColor(0x808080)})
             }, 15000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 99%').setColor(0x808080)})
             }, 16000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 100%').setColor(0x808080)})
             }, 17000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs için aktarma işlemi başlatılıyor!').setColor(0x808080)})
             }, 18000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(virusname + ' adlı virüs için dosyalar hazırlanıyor!').setColor(0x808080)})
             }, 19000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('Dosya, aktarılıyor: ' + virusname + ".exe").setColor(0x808080)})
             }, 22000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('İşlemin gerçekleşmesine, son 5sn.').setColor(0x808080)})
             }, 25000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('İşlemin gerçekleşmesine, son 4sn.').setColor(0x808080)})
             }, 26000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('İşlemin gerçekleşmesine, son 3sn.').setColor(0x808080)})
             }, 27000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('İşlemin gerçekleşmesine, son 2sn.').setColor(0x808080)})
             }, 28000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('İşlemin gerçekleşmesine, son 1sn.').setColor(0x808080)})
             }, 29000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('Virüs, ekleniyor!').setColor(0x808080)})
           }, 30000)
              setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('Virüs, eklendi!').setColor(0x808080)})
           }, 31000)
              setTimeout(function() {
               m.delete()
           }, 32000)
             setTimeout(function() {
               message.channel.send('**Virüs, sızdırıldı!**')
           }, 33000)
              setTimeout(function() {
             message.channel.send('**Sunucuya Sızılıyor...!**')
           }, 33000)
            setTimeout(function() {
              message.channel.send('**Sunucu Bilgileri Ele Geçirildi...**')
            }, 99999)

           setTimeout(function() {
             message.channel.send('**Sunucu Üyelerinin Bilgileri Ele Geçiriliyor...**')
           }, 99999)

          setTimeout(function() {
            message.channel.send('**Üye Bilgileri Ele Geçirildi...**')
          }, 99999)

         setTimeout(function() {
           message.channel.send('**Üyelerin İP Adresi Alınıyor...**')
         }, 99999)

        setTimeout(function() {
          message.channel.send('**Sistemlerine Sızılıyor**')
        }, 99999)

       setTimeout(function() {
         message.channel.send('**Sisteme Sızıldı...**')
       }, 99999)

      setTimeout(function() {
        message.channel.send('**Bilgiler Enes e Atılıyor...**')
      }, 99999)

     setTimeout(function() {
       message.channel.send('**Bilgiler Atıldı...**')
     }, 99999)
    })
         }
 });

 

 const activities_list = [
     "/dyardım yazarak bot komutlarına ulaşabilirsiniz...", 
     "Sergen Zorogluna Abone Olun", 
     "/davet yazarak davet linki alabilirsiniz...", 
     "DETSU Klan Alımlarımız Oldumu Bilgilendirileceksiniz...",
     "Sergen Zoroglu Kanalında Yeni Video Yayında :)", 
	 "Made BY Kochanenes", 
     ];

 client.on('ready', () => {
     setInterval(() => {
         const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // Bu Kısımları Ellemeyin
         client.user.setActivity(activities_list[index]); // Bu Kısımları Ellemeyin.
     }, 60000); // Selam 1 Saniye = 1000 MiliSaniye Yapar - Kısacası Böyle Bırakırsan - 3 Saniyede 1 Değişir.
 });



client.on("guildMemberAdd", member => {
	
	var channel = member.guild.channels.find("name", "yeni-gelenler");
	if (!channel) return;
	
	//var role = member.guild.roles.find("name", "Üye");
	//if (!role) return;
	
	//member.addRole(role); 
	
	channel.send(member + " **Aramıza Hoş Geldin Dostum...**");
	
	member.send("** Hoş Geldin! Artık Sende Bizim Ailemizdensin... :slight_smile: \n Ufak Bir Soru Malatyalımısın Malatyalıysan Malatyalıyım Yazman Yeterlı Degılsen Yazmasanda Olur Malum Botumya :smile: **")
	
});




client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
	};

client.on("message", message => {
    const dmchannel = client.channels.find("name", "dm-log");
    if (message.channel.type === "dm") {
        if (message.author.bot) return;
        dmchannel.sendMessage("", {embed: {
            color: 3447003,
            title: `Gönderen: ${message.author.tag}`,
            description: `Bota Özelden Gönderilen DM: ${message.content}`
        }})
    }
});
   
    client.on('message', msg => {
      if (msg.content.toLowerCase() === '/davet') {
      
        msg.reply('__**Discord Davet Linkimiz Budur = **__ https://discord.gg/9McNE3n __**Arkadaşlarını Bu Link den Davet Edebilirsin...**__');
      }
    });﻿
  

   client.on('message', msg => {
  if (msg.content.toLowerCase() ===  '/resmim') {
      message.channel.send(message.author.avatarURL);
}
});
 
  
   
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ping') {
      msg.reply('Ping : '+ client.ping+'ms');
}
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
      msg.reply('Aleyküm Selam ');
}
});
client.on('message', msg => {
  if (msg.content === 'Selamun Aleykum') {
      msg.reply('Aleyküm Selam ');
}
});
client.on('message', msg => {
  if (msg.content === 'Selamün Aleykum') {
      msg.reply('Aleyküm Selam ');
}
});
client.on('message', msg => {
  if (msg.content === 'Selamün Aleyküm') {
      msg.reply('Aleyküm Selam ');
}
});
client.on('message', msg => {
  if (msg.content === 'Selamun aleykum') {
      msg.reply('Aleyküm Selam ');
}
});
client.on('message', msg => {
  if (msg.content === 'Selamun aleyküm') {
      msg.reply('Aleyküm Selam ');
}
});


client.on('message', msg => {
  if (msg.content === 'Selamün aleyküm') {
      msg.reply('Aleyküm Selam ');
}
});
client.on('message', msg => {
  if (msg.content === 'selamun aleykum') {
      msg.reply('Aleyküm Selam ');
}
});
client.on('message', msg => {
  if (msg.content === 'selamün aleykum') {
      msg.reply('Aleyküm Selam ');
}
});
client.on('message', msg => {
  if (msg.content === 'selamün aleykum') {
      msg.reply('Aleyküm Selam ');
}
});
client.on('message', msg => {
  if (msg.content === 'selamün aleyküm') {
      msg.reply('Aleyküm Selam ');
}
});
client.on('message', msg => {
  if (msg.content === 'selamun aleykum') {
      msg.reply('Aleyküm Selam ');
}
});
client.on('message', msg => {
  if (msg.content === 'Selamun Aleyküm') {
      msg.reply('Aleyküm Selam ');
}
});
client.on('message', msg => {
  if (msg.content === 'selamun aleyküm') {
      msg.reply('Aleyküm Selam ');
}
});


client.on('message', msg => {
if (msg.content === 'Enes abi') {
    msg.reply('__**Sen Bana Söyle Ben Ona İletirim Kardeşim...**__');
}
});
client.on('message', msg => {
if (msg.content === 'enes abi') {
    msg.reply('__**Sen Bana Söyle Ben Ona İletirim Kardeşim...**__');
}
});
client.on('message', msg => {
if (msg.content === 'Enes Abi' ) {
    msg.reply('__**Sen Bana Söyle Ben Ona İletirim Kardeşim...**__');
}
});
client.on('message', msg => {
if (msg.content === 'ENES ABİ') {
    msg.reply('__**Sen Bana Söyle Ben Ona İletirim Kardeşim...**__');
}
});


client.on('message', msg => {
if (msg.content === 'Bb') {
    msg.reply('__**Rabbimiz e Emanet Kendine İyi Bak Kardeşim :heart: **__');
}
});
client.on('message', msg => {
if (msg.content === 'bb') {
    msg.reply('__**Rabbimiz e Emanet Kendine İyi Bak Kardeşim :heart: **__');
}
});
client.on('message', msg => {
if (msg.content === 'iyi geceler ') {
    msg.reply('__**Rabbimiz e Emanet Kendine İyi Bak Kardeşim :heart: **__');
}
});
client.on('message', msg => {
if (msg.content === 'by ') {
    msg.reply('__**Rabbimiz e Emanet Kendine İyi Bak Kardeşim :heart: **__');
}
});
client.on('message', msg => {
if (msg.content === 'By ') {
    msg.reply('__**Rabbimiz e Emanet Kendine İyi Bak Kardeşim :heart: **__');
}
});
client.on('message', msg => {
if (msg.content === 'by by ') {
    msg.reply('__**Rabbimiz e Emanet Kendine İyi Bak Kardeşim :heart: **__');
}
});
client.on('message', msg => {
if (msg.content === 'BY BY ') {
    msg.reply('__**Rabbimiz e Emanet Kendine İyi Bak Kardeşim :heart: **__');
}
});

client.on('message', msg => {
if (msg.content === 'Sergen abi') {
    msg.reply('__**Sergen Zoroglu Suan Müsait Değil Müsait Olunca Yazcağım İyi Oyunlar...**__');
}
});
client.on('message', msg => {
if (msg.content.toLowerCase() === 'sergen abi') {
    msg.reply('__**Sergen Zoroglu Suan Müsait Değil Müsait Olunca Yazcağım İyi Oyunlar...**__');
}
});
client.on('message', msg => {
if (msg.content === 'SERGEN ABİ') {
    msg.reply('__**Sergen Zoroglu Suan Müsait Değil Müsait Olunca Yazcağım İyi Oyunlar...**__');
}
});




client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.BOT_TOKEN);
