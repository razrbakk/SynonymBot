require('dotenv').config()
// const Discord = require('discord.js');
// const ytdl = require('ytdl-core');
// const client = new Discord.Client();

// client.once('ready', () => {
//     console.log('Ready!');
// });

// client.on('message', message => {
//     let words = message.content.split(" ");
//     const voiceChannel = message.member.voice.channel;

//     if (!voiceChannel) {
//         return message.reply('Bot joined voice chat');
//     }
// });

// client.login(process.env.TOKEN);

const axios = require('axios');
const url = "https://www.synonymer.se/sv-syn/hej";

axios.get(url)
    .then((response) => {
        console.log(response.data);
    })