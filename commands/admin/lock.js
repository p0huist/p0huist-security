const Discord = require('discord.js')
const { Color } = require("../../config.js");

module.exports = {
  name: "lock",
  aliases: ["lock"],
  description: "Locks the current or selected text channels",
  usage: ["lock"],
  category: ["Moderation"],
  enabled: true,			  
  memberPermissions: [ "MANAGE_CHANNELS" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","MANAGE_CHANNELS" ],		
  ownerOnly: false,			
  cooldown: 6000,
  run: async (bot, message, args, dev, data) => {
  


  message.channel
      .updateOverwrite(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(` 
p0huist | **Locked Channel**
**Channel Name** : <#${message.channel.id}>
**Locked By** : <@${message.author.id}>
**Channel Status : Send Message :** ❌
      `));
     });
   }
}
