const fs = require("fs");
const Discord = require("discord.js")
const { MessageButton, MessageActionRow } = require("discord-buttons");
const { Color } = require("../../config.js");

module.exports = {
  name: "invite",

  description: "Use this command to get the invite link",
  usage: ["e!invite"],
  category: ["General"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 2000,
  run: async (bot, message, args, dev, data) => {
 

   let invite = new Discord.MessageEmbed()
   .setColor(Color)
   .setTitle(`<@${bot.user.id}>`)
   .setThumbnail(bot.user.displayAvatarURL())
   .setDescription(`Apasa bai pulo!`)

  let butn = new MessageButton()
  .setStyle('url')
  .setURL('https://discord.com/oauth2/authorize?client_id=805324635121778728&scope=bot&permissions=2146958847') 
  .setEmoji(`🔗`)
  .setLabel('Invite Link!')
 
let row = new MessageActionRow()
      .addComponents(butn)

   return message.channel.send(invite,row);
     }
 }
