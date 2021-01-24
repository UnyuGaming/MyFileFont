const Discord = require("discord.js")
const client = new Discord.Client()
const db = require("quick.db")

client.on('ready', async () => {
  console.log("Bot sudah online!")
})

client.on('message', async message => {
  if(message.content === "Asadqwe") {
    const status = db.get(`mod-${message.author.id}`);
    if(status) {
      message.channel.send("Work")
    }else {
      message.channel.send("Didn't Work")
    }
  }
})

client.login("")
