require('dotenv').config();
const $ = require('cheerio');
const axios = require('axios');
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (message.author.bot) return;

    let words = message.content.split(" ");

    getSynonyms(words).then((response) => {
        message.channel.send(response);
    })
        .catch((err) => {
            console.log(err);
        })
});

client.login(process.env.TOKEN);

const getSynonyms = async function (words) {
    let synonymed = "";

    for (let i = 0; i < words.length; i++) {
        const url = process.env.BASE_URL + words[i];

        await axios.get(url)
            .then((response) => {
                synonymed += $('div > ul > li > ol > li > a', response.data)[0].children[0].data;
                synonymed += " ";
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return synonymed;
}