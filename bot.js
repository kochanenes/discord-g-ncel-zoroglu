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

client.on("guildMemberAdd", member => {
	
	var channel = member.guild.channels.find("name", "gєℓєη-gι∂єη");
	if (!channel) return;
	
	var role = member.guild.roles.find("name", "Üye");
	if (!role) return;
	
	member.addRole(role); 
	
	channel.send(member + " artık " + role + " rolü ile aramızda");
	
	member.send("Aramıza hoş geldin! Artık @üye rolüne sahipsin!")
	
});

client.on('guildBanAdd' , (guild, user) => {
  let aramızakatılanlar = guild.channels.find('name', 'aramıza-katılanlar');
  if (!aramızakatılanlar) return;
  aramızakatılanlar.send('https://media.giphy.com/media/8njotXALXXNrW/giphy.gif **Adalet dağıtma zamanı gelmiş!** '+ user.username +'**Bakıyorum da suç işlemiş,Yargı dağıtmaya devam** :fist: :writing_hand:  :spy:' );
});

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
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


    client.on('message', msg => {
      if (msg.content.toLowerCase() === '!müslümkanal') {
       msg.delete(30)
        msg.reply('__**Müslüm ün Youtube Kanal Linki = **__ https://www.youtube.com/channel/UCtlBqFl5Bn0lyeCQ2bIkn3w');
      }
    });﻿

    client.on('message', msg => {
      if (msg.content.toLowerCase() === '!davet') {
       msg.delete(30)
        msg.reply('__**Discord Davet Linkimiz Budur = **__ https://discord.gg/FtABxyK __**Arkadaşlarını Bu Link den Davet Edebilirsin...**__');
      }
    });﻿
    client.on('message', msg => {
      if (msg.content.toLowerCase() === '!hazarkanal') {
       msg.delete(30)
        msg.reply('__**Hazar ın Youtube Kanal Linki = **__ https://www.youtube.com/channel/UCN-NwDYX_SY1TXDxI3bBX6Q');
      }
    });﻿

    client.on('message', msg => {
      if (msg.content.toLowerCase() === '!kanal') {
       msg.delete(30)
        msg.reply('**Kanal Linki** = https://www.youtube.com/channel/UCTBrraG-rHWYt0KGs_2dKKg __**Abone Olup Like Atmayı Unutma :heart: **__');
      }
    });﻿

    client.on('message', msg => {
      if (msg.content.toLowerCase() === 'amk') {
       msg.delete(30)
        msg.reply('**Küfür Engellendi Küfür Etme Banlanırsın Kardeşim...** ``Uyarı``');
      }
    });﻿
    client.on('message', msg => {
      if (msg.content.toLowerCase() === 'Ananı sikem') {
       msg.delete(30)
        msg.reply('**Küfür Engellendi Küfür Etme Banlanırsın Kardeşim...** ``Uyarı``');
      }
    });﻿
    client.on('message', msg => {
      if (msg.content.toLowerCase() === 'Ananı sikerim') {
       msg.delete(30)
        msg.reply('**Küfür Engellendi Küfür Etme Banlanırsın Kardeşim...** ``Uyarı``');
      }
    });﻿
    client.on('message', msg => {
      if (msg.content.toLowerCase() === 'amq') {
       msg.delete(30)
        msg.reply('**Küfür Engellendi Küfür Etme Banlanırsın Kardeşim...** ``Uyarı``');
      }
    });﻿
    client.on('message', msg => {
      if (msg.content.toLowerCase() === 'skm') {
       msg.delete(30)
        msg.reply('**Küfür Engellendi Küfür Etme Banlanırsın Kardeşim...** ``Uyarı``');
      }
    });﻿
    client.on('message', msg => {
      if (msg.content.toLowerCase() === 'piç') {
       msg.delete(30)
        msg.reply('**Küfür Engellendi Küfür Etme Banlanırsın Kardeşim...** ``Uyarı``');
      }
    });﻿
    client.on('message', msg => {
      if (msg.content.toLowerCase() === 'pic') {
       msg.delete(30)
        msg.reply('**Küfür Engellendi Küfür Etme Banlanırsın Kardeşim...** ``Uyarı``');
      }
    });﻿
    client.on('message', msg => {
      if (msg.content.toLowerCase() === 'sikerim') {
       msg.delete(30)
        msg.reply('**Küfür Engellendi Küfür Etme Banlanırsın Kardeşim...** ``Uyarı``');
      }
    });﻿

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
if (msg.content === 'Sergen abi') {
    msg.reply('__**Sergen Zoroglu Suan Müsait Değil Müsait Olunca Yazcağım İyi Oyunlar...**__');
}
});
client.on('message', msg => {
if (msg.content === 'sergen abi') {
    msg.reply('__**Sergen Zoroglu Suan Müsait Değil Müsait Olunca Yazcağım İyi Oyunlar...**__');
}
});
client.on('message', msg => {
if (msg.content === 'Sergen Abi') {
    msg.reply('__**Sergen Zoroglu Suan Müsait Değil Müsait Olunca Yazcağım İyi Oyunlar...**__');
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
if (msg.content === 'Müslüm') {
    msg.reply('__**Biri Tutuberemi Seslendi ? https://tenor.com/view/what-wat-wat-lady-confused-huh-gif-8314795**__');
}
});

client.on('message', msg => {
if (msg.content === 'müslüm') {
    msg.reply('__**Biri Tutuberemi Seslendi ? https://tenor.com/view/what-wat-wat-lady-confused-huh-gif-8314795**__');
}
});

client.on('message', msg => {
if (msg.content === 'MÜSLÜM') {
    msg.reply('__**Biri Tutuberemi Seslendi ? https://tenor.com/view/what-wat-wat-lady-confused-huh-gif-8314795**__');
}
});




client.on('message', msg =>{
if (!msg.content.startsWith(prefix)) {
  return;
}

if (msg.content.toLowerCase() === prefix+'adam'){
  msg.reply('Sunucudaki Adam Gibi Adam Sergen Zorogludur...')
}
});

client.login('NTQ0MjIxMzU0NzE1Nzc1MDEx.D0dPHg.zrtd4Pzk62dDqP1lfbmt2UsVVSM');


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
