const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

client.once('ready', () => {
    console.log('Da Futurist Boi is online!');
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    } else if(command === 'yt'){
        message.channel.send("**The Futurist Tom's Youtube Channel** - https://bit.ly/YT-The_Futurist_Tom");
    }
});




client.login('Nzc5MzM0MTkwMTc2OTI3NzQ0.X7fBhg.neLu1j42V8LJqpHGNamRNtREMDM');
