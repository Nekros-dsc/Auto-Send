// By https://github.com/Nekros-dsc

const { Client } = require('discord.js-selfbot-v13');
const config = require('./config');
const prefix = config.client.prefix;
const messageCount = config.client.messageCount || 5;

const client = new Client({
  checkUpdate: false,
});

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// By https://github.com/Nekros-dsc

client.on('message', async message => {
  if (message.author.bot || !message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // By https://github.com/Nekros-dsc

  if (command === 'send') {
    for (let i = 0; i < messageCount; i++) {
      setTimeout(() => {
        message.channel.send('*Message sent !*').then(msg => {
          msg.delete({ timeout: 2000 });
        });
      }, i * 5000);
    }
  }
});

client.login(config.client.token);
// By https://github.com/Nekros-dsc