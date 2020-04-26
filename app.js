var Discord = require("discord.js");

var prefix = "!";

var client = new Discord.Client();

const ytdl = require("ytdl-core");

const CLEAR_MESSAGES = '!clear';

const userID = '<@443166863996878878>'

const { RichEmbed } = require("discord.js");


client.on("ready", () => {
  console.log("10%");
  console.log("20%");
  console.log("30%");
  console.log("40%");
  console.log("50%");
  console.log("60%");
  console.log("70%");
  console.log("80%");
  console.log("90%");
  console.log("Fully Booted With 0 Errors");
  client.user.setActivity("!settings"); 
});

var bannedwords = "i want to kys,kys,kill yourself".split(",");
client.on("message", msg => {
  if (msg.guild === null) return;

  for (i=0;i<bannedwords.length;i++) {
    if (msg.content.toLowerCase().includes(bannedwords[i])) {
      msg.delete();
      msg.channel.send("Please Go Visit This Website");
      msg.channel.send("<https://suicidepreventionlifeline.org/>")
      msg.channel.send("Remember We're Here For You :hearts:")
      return;
    }
  
}
  if (msg.author.bot) return;
  if (!msg.member.hasPermission("Moderator")) return;

  if (!msg.content.toLowerCase().startsWith(prefix)) return;
  if (msg.content.toLowerCase().startsWith(prefix + "kick ")) {
    var mem = msg.mentions.members.first();
    mem.kick().then(() => {
      msg.channel.send(":white_check_mark: " + mem.displayName + " has been kicked ");
    }).catch(e => {
      msg.channel.send(":x: User is either a moderator or doesn't exist");
    });
  }
  if (msg.content.toLowerCase().startsWith(prefix + "ban ")) {
    var mem = msg.mentions.members.first();
    var mc = msg.content.split(" ")[2];
    mem.ban(mc).then(() => {
      msg.channel.send(mem.displayName + " banned " + " for " + mc + " days!");
    }).catch(e => {
      msg.channel.send(":x: User is either a moderator or doesn't exist");
    });
  }
  
  if (msg.content.toLowerCase().startsWith(prefix + "mute")) {
    var mem = msg.mentions.members.first();
    if (msg.guild.roles.fetch("name", "Muted")) {
      mem.addRole(msg.guild.roles.find("name", "Muted")).then(() => {
        msg.channel.send(mem.displayName + " has successfully been muted!");
      }).catch(e => {
        msg.channel.send(":x: User is either a moderator or doesn't exist");
        console.log(e);
      });

    }
  }
  if (msg.content.toLowerCase().startsWith(prefix + "unmute")) {
    var mem = msg.mentions.members.first();
    if (msg.guild.roles.fetch("name", "Muted")) {
      mem.removeRole(msg.guild.roles.find("name", "Muted")).then(() => {
        msg.channel.send(mem.displayName + " has successfully been unmuted!");
      }).catch(e => {
        msg.channel.send(":x: User Doesn't Exist");
        console.log(e);
      });
    }
    }
    if (msg.content.toLowerCase().startsWith(prefix + "purge")) {
      var mc = msg.content.split(" ")[1];
      msg.channel.bulkDelete(mc);
      msg.channel.send("Successfully Deleted Messages!");
    

    }
    
  

if (msg.content.toLowerCase().startsWith(prefix + "death")) {
  msg.channel.send(":x: This has not been coded in yet!");
  return;
}


if (msg.content.toLowerCase().startsWith(prefix + "dashboard")) {
  msg.channel.send(":x: The Dashboard Is Offline");
  return;
}

if (msg.content.toLowerCase().startsWith(prefix + "settings")) {
  msg.channel.send("https://em.0x71.cc/d1fprn");
  return;
}

if (msg.content.toLowerCase().startsWith(prefix + "fuckoff")) {
  msg.channel.send("https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif");
 
  return;

}
if (msg.content.toLowerCase().startsWith(prefix + "reboot")) {
  msg.channel.send("Please Wait 2 Minutes While I Reboot...");
  return;
  fake
}
if (msg.content.toLowerCase().startsWith(prefix + "appearonline")) {
  msg.channel.send("https://em.0x71.cc/ciizh1");
  client.user.setStatus('Online')
  return;

}
if (msg.content.toLowerCase().startsWith(prefix + "dnd")) {
  client.user.setStatus('dnd')


  
      
}
client.on('message' , message => {

  let args = message.content.substring(prefix.length).split(" ");

     switch (args[0]) {
        case'react':
              message.react('✅');
        break;
        
     }



});
if (msg.content.toLowerCase().startsWith(prefix + "code")) {
  msg.channel.send("https://imgur.com/a/LwaSIlw");
  return;
}
client.on('message', message => {
  if (message.content == CLEAR_MESSAGES) {

    if (!message.channel.permissionsFor(message.author).HasPermission("Moderator")) {
      message.channel.sendMessage("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
      console.log("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
      return;
    } else if (!message.channel.permissionsFor(bot.user).hasPermission("Moderator")) {
      message.channel.sendMessage("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
      console.log("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
      return;
    }

    if (message.channel.type == 'text') {
      message.channel.fetchMessages()
        .then(messages => {
          message.channel.bulkDelete(messages);
          messagesDeleted = messages.array().length;

          
          message.channel.sendMessage("Deletion of messages successful. Total messages deleted: "+messagesDeleted);
          console.log('Deletion of messages successful. Total messages deleted: '+messagesDeleted)
        })
        .catch(err => {
          console.log('Error while doing Bulk Delete');
          console.log(err);
        });
      }
    }
  });
});
 




module.exports = {
  name: "whois",
  aliases: ["who", "user", "info"],
  description: "Returns user information",
  usage: "[username | id | mention]",
  run: (client, message, args) => {
      const member = getMember(message, args.join(" "));

      
      const joined = formatDate(member.joinedAt);
      const roles = member.roles
          .filter(r => r.id !== message.guild.id)
          .map(r => r).join(", ") || 'none';

      
      const created = formatDate(member.user.createdAt);

      const embed = new RichEmbed()
          .setFooter(member.displayName, member.user.displayAvatarURL)
          .setThumbnail(member.user.displayAvatarURL)
          .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

          .addField('Member information:', stripIndents`**- Display name:** ${member.displayName}
          **- Joined at:** ${joined}
          **- Roles:** ${roles}`, true)

          .addField('User information:', stripIndents`**- ID:** ${member.user.id}
          **- Username**: ${member.user.username}
          **- Tag**: ${member.user.tag}
          **- Created at**: ${created}`, true)
          
          .setTimestamp()

      if (member.user.presence.game) 
          embed.addField('Currently playing', stripIndents`** Name:** ${member.user.presence.game.name}`);

      message.channel.send(embed);
  }
}
module.exports.run = async (bot, message, args) => {

 

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "muted");
  
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
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
 
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));



}

module.exports.help = {
  name: "tempmute"
}
module.exports = {
  description: "Get the latency of the bot.",
  usage: {},
  examples: {},
  aliases: [ "pong", "latency", "uptime" ],
  permissionRequired: 0, 
  checkArgs: (args) => !args.length
}

module.exports.run = async function(client, message, args, config, gdb, prefix, permissionLevel, db) {
  let botMsg = await message.channel.send("〽️ Pinging")

  botMsg.edit({ embed: {
    title: "📶 Ping",
    description: [
      "**Server**: `" + (botMsg.createdAt - message.createdAt) + "ms`",
      "**API**: `" + Math.round(client.ping) + "ms`",
      "**Uptime**: `" + msToTime(client.uptime) + "`"
    ].join("\n"),
    color: config.color,
    footer: { text: "Requested by " + message.author.tag, icon_url: message.author.displayAvatarURL },
    timestamp: new Date()
  }}).catch(() => botMsg.edit("🆘 An unknown error occurred. Do I have permission? (Embed Links)"));
}

function msToTime(ms){
  days = Math.floor(ms / 86400000); 
  daysms = ms % 86400000; 
  hours = Math.floor(daysms / 3600000); 
  minutes = Math.floor(hoursms / 60000); 
  minutesms = ms % 60000; 
  sec = Math.floor(minutesms / 1000);

  let str = "";
  if (days) str = str + days + "d";
  if (hours) str = str + hours + "h";
  if (minutes) str = str + minutes + "m";
  if (sec) str = str + sec + "s";

  return str;
}
    module.exports.run = async (bot , message, args) => {
      if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You Don't Have The Role To Do That")
      let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
      if(rMember) return message.reply("User Does Not Exist!");
      let role = args.join(" ").slice(22);
      if(!role) return message.reply("Specify A Role!");
      let gRole = message.guild.roles.find('name' , role);
      if(!gRole) return message.reply("Couldn't Find That Role");

      if(rMember.roles.has(gRole.id));
      await(rMember.addRole(gRole.id));

      try{
        rMember.send('"Congrats, you have been given the role ${gRole.name}"')
      }catch(e){
         message.channel.send('Congrats, to <@${r.Member.id}> has been given the role ${gRole.name}. Dms Are Locked.')
    }
     module.exports.run = async (bot, message, args) => {


       if(!message.member.hasPermission("Moderator")) return message.reply("You Can't Do That");
       let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
       if(!rMember) return message.reply("Couldn't Find User.");
       let role = args.join(" ").slice(22);
       if(!role) return message.reply("Specify A Role!");
       let gRole = message.guild.roles.find('name', role);
       if(!gRole) return message.reply("Couldn't Find Role!");

      if(rMember.roles.has(gRole.id));
      await(rMember.addRole(gRole.id));

    try{
      rMember.send('You Have The Role ${gRole.name}')

           }catch(e){
           message.channel.send('<@${rMember.id}> Have The Role ${gRole.name}. Dms Of This User Is Closed')

            }
          }
    module.exports.help = {
        name: "addrole"
    }

  }
       
       
    
    
  



   client.login("Njk5MDA5NTA5MDQ1MzA1Mzc0.Xpahfg.t_X-SSR1Ww5--FBqSz5kY2KKgWM");

  

   