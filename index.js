const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
]});

// Roast database

const roasts = [
    // Food & Drink Roasts
    "jou kombuis het minder spice as 'n bottle of Mrs Ball's sêblief!",
    "you’re slower than a koesister line at the mosque on Eid!",
    "jou tea is so weak, oomie would call it ‘rainwater’!",
    "you’ve got less flavour than a Gatsby without the slap chips!",
    "you’re the reason they put ‘Best Before’ dates on Redro cans!",
    
    // Slang & Culture Roasts
    "you’re more confused than a laanie at a Cape Flats braai!",
    "jou dance moves look like you’re stomping roaches in a council flat!",
    "you’re more lost than a Mitchells Plain tannie at Canal Walk!",
    "your WhatsApp forwards are older than ouma’s naartjie box!",
    "you’re the reason they say ‘Ag, shame, neh?’",
    
    // Playful Self-Deprecation
    "bru, your car’s louder than your tannie at a 5-a-side game!",
    "you’ve got more ‘ag, nee’ moments than a Kaapies watching the Proteas!",
    "you’re more basic than a white tekkie with jeans on a Sunday!",
    "your hairline’s receding faster than a taxi from the cops!",
    "you’re the human version of a ‘Netflix and chill’ invite… predictable!"
];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    // !roast @user
    if (message.content.startsWith('!roast')) {
        const user = message.mentions.users.first();
        if (!user) return message.reply('Mention someone to roast! 🔥');
        
        const roast = roasts[Math.floor(Math.random() * roasts.length)];
        message.channel.send(`Hey ${user}, ${roast}`);
    }

    // !roastme
    if (message.content === '!roastme') {
        const roast = roasts[Math.floor(Math.random() * roasts.length)];
        message.reply(`${roast} 🔥`);
    }
});

client.login('MTM3MTQ2NjU4NDc4NjIxMDgxNg.G9oEVc.aaBGKIa2S_aG43Nx9NXe8UWprtHGQWJa-6HkU4');