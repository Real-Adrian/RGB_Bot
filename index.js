const { Client, version } = require('discord.js');
const { 
    token, 
    serverID, 
    roleID, 
    interval 
} = require('./config.json')
const bot = new Client();

bot.on("ready", async() => {
    console.log(`[ Client ] ${bot.user.tag} Good luck! You're connected to discord API`);

    let guild = bot.guilds.cache.get(serverID) 
    if(!guild) throw `[ Error ] The bot was not found on your server! Server ID: ${serverID}` 

    let role = guild.roles.cache.find(u => u.id === roleID) 
    if(!role) throw `[ Error ] The role was not found on the server name ${guild.name}` 
    
    if(interval < 10000) console.log(`\n[!!!] Oh, I'd be careful!`) 

    setInterval(() => {
        role.edit({color: 'RANDOM'}).catch(err => console.log(`[ Error ] An error occurred during the role change.`));
    }, interval)

    bot.user.setPresence({
        status: 'idle',
        activity: {
            name: 'With Colors',
            type: 'PLAYING',
        }
      })
})


bot.login(token)

// Create By Lok


