const Discord = require('discord.js');


exports.run = async (client, message, args) => {
  var bot = "586653060852482069"
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(':hayirr: | Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalisin!')
   let rol = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(rol => rol.name === args[0]);
  if (!rol) return message.channel.send('Herkese rol verebilmem için bir rol etiketlemelisin.')


   const embed = new Discord.RichEmbed()
     .setDescription(`Herkese ${rol} adl� rol verildi!`)
        .setColor(rol.hexColor)

   message.guild.members.forEach(u => {
u.addRole(rol)
})
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['herkeserol'],
    permLevel: 0
}

exports.help = {
    name: 'herkese-rol-ver',
    description: 'Log kanal�n� belirler.',
    usage: 'gkanal <#kanal>'
}
