const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");
});


client.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#credits')
    }
});



client.on("ready", () => {
let channel =     client.channels.get("538911343252733952")
setInterval(function() {
channel.send(`طز في اللي يلعب فورت ويستعمل هاك زي النوب والكلب البلديXD`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
