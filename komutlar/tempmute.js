
const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("**Birini Etiketle...**");
  if(tomute.hasPermission("BAN_MEMBERS")) return message.reply("**Yetkililere Veremem...**");
  let muterole = message.guild.roles.find(`name`, "Muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("**Lütfen Zaman Belirt...**\n**NOT: 1saat vereceksen 1h , 1dakika vereceksen 1m, 1gün vereceksen 1d  yazman yeterli 1 yerine İstediğin Bir Değer Yazabilirsin... **");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> **Adlı Kullanıcıya Mute Verildi Verilen Zaman :** __** ${ms(ms(mutetime))} **__ `);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> **Mutedi Kaldırıldı...**`);
  }, ms(mutetime));


//end of module
}
exports.conf = {
    aliases: [],
    permLevel: 0
};

module.exports.help = {
    name: "tempmute",
    description: "Etiketlenen Kişiye Sürel Mute Atar",
    usage: "tempmute [kullanıcı] [zaman]"
}
