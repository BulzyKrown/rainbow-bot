const http = require('http');const express = require('express');const app = express();app.get("/", (request, response) => {console.log(Date.now() + "Ping Recivido!");response.sendStatus(200);});app.listen(process.env.PORT);setInterval(() => {http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);}, 280000);
const Discord = require('discord.js');
const client = new Discord.Client();
const version = '0.1.0';
var cul = require("./json/color.json");


client.on("ready", async () => {
    console.log(`${client.user.tag}!`);
    console.log(`Hay ${client.users.size} usuarios.`);
    client.user.setGame(`By: BulzyKrown`);
});
client.on('guildCreate', guild =>  {
        const channelini = guild.channels.filter(c => c.permissionsFor(guild.me).has('SEND_MESSAGES') && c.type === 'text').first();
        let idc = channelini.id;
        client.channels.get(idc).send(`Gracias por invitarme a **${guild.name}**`);
          const embed = new Discord.RichEmbed()
          .setThumbnail(guild.iconURL != null ? guild.iconURL: 'https://goo.gl/75BnnM')
          .setTitle ("Me añadieron en un Nuevo Servidor")
          .addField('ID', guild.id, true)
          .addField('Region', guild.region, true)
          .addField('Roles', guild.roles.size, true)
          .addField('Miembros', guild.memberCount, true)
          .addField('Dueño', guild.owner.user.username+'#'+guild.owner.user.discriminator+'\n('+guild.owner.user.id+')', true)
          .addField('Creado', guild.createdAt.toDateString(), true)
          //.addField('enlace', `https://discord.gg/${invite.code}`)
          .setTimestamp()
          .setColor(0x000001)
          .setFooter(guild.name+' | '+client.guilds.size, guild.iconURL)
          client.channels.get('415055464045346827').send({embed});
        });
client.on("message", async (message) => {
  //if (message.author.id !== '401946440332476426'  && message.author.id !== '316244029723639810' && message.author.id !== '318846432994131969') return;
    if(message.content.startsWith("on")){
        if (message.author.id !== '401946440332476426'  && message.author.id !== '316244029723639810' && message.author.id !== '318846432994131969') return;
      message.delete()
message.channel.send("Rainbow activado con exito.").then(m => m.delete(5000));
function multicolor() {
            let colores = cul.color;
            let role = message.guild.roles.find("name", "#RainBow");
            role.edit({color: colores[Math.floor(colores.length * Math.random())]})
            }
            setInterval(multicolor, 90000);
        };
    if(message.content.startsWith("miembro")){
        if (message.author.id !== '401946440332476426'  && message.author.id !== '316244029723639810' && message.author.id !== '318846432994131969') return;

      message.delete()
message.channel.send("Tome su RainBow Prro").then(m => m.delete(5000));
function multicolor() {
            let colores = cul.color;
            let role = message.guild.roles.get("401573097854992384");
            role.edit({color: colores[Math.floor(colores.length * Math.random())]})
            }
            setInterval(multicolor, 90000);
        };
  if(message.content.startsWith('sensual')){
  message.channel.send("<a:sensual:446848408616173570>").then(m => m.delete(5000));
  };
  if (message.content.startsWith("hex")){
    message.channel.send(Math.random().toString(16).slice(2, 8).toUpperCase());
  }
});
client.login(process.env.TOKEN);