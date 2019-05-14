client.on('message', message => {
    if (message.content === prefix + "sunucubilgi") {
        const embed = new Discord.RichEmbed()
            .addField ("Sunucu Adı", message.guild.name, true)
            
            .addField ("Sunucu ID", message.guild.id, true)
            .addField ("Sunucu Sahibi", message.guild.owner)
            .addField ("Toplam Üye Sayısı", message.guild.memberCount)
            .setFooter("Olusturma Tarihi " + message.guild.createdAt)
            .setColor(0x000001)
        return message.channel.sendEmbed(embed)
    }   
});




