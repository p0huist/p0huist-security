const Discord = require('discord.js')
const { Color } = require("../../config.js");

module.exports = {
  name: "unlock",
  description: "Unlocks the current or selected text channels",
  usage: ["unlock"],
  category: ["Moderation"],
  enabled: true,			  
  memberPermissions: [ "MANAGE_CHANNELS" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","MANAGE_CHANNELS" ],		
  ownerOnly: false,			
  cooldown: 6000,
  run: async (bot, message, args, dev, data) => {
 message.channel
      .updateOverwrite(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`
p0huist | **UnLocked Channel**
**Channel Name** : <#${message.channel.id}>
**Locked By** : <@${message.author.id}>
**Channel Status : Send Message :** ✅`
     ));
     });
   }
}
