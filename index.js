const { Telegraf } = require('telegraf');

// Create a new bot instance with your bot token
const bot = new Telegraf('Toekn'); // Replace YOUR_BOT_TOKEN_HERE with your actual bot token


let secondLargestElement = `
    
lst = [5,3,4,7,8,9,1,2]

smallest_number = lst[0]
second_smallest_number = lst[1]
if lst[0] > lst[1]:
    smallest_number = lst[0]
    second_smallest_number = lst[1]
else:
    smallest_number = lst[1]
    second_smallest_number = lst[0]

for i in range(2, len(lst)):
    if lst[i] > smallest_number:
        second_smallest_number = smallest_number
        smallest_number = lst[i]
    elif lst[i] > second_smallest_number:
        second_smallest_number = lst[i]

print(second_smallest_number)
print(smallest_number)
`;

bot.start((ctx) => {
    ctx.reply('Welcome to Digobot')
});

bot.command('secondlarge' , (ctx) => ctx.reply(secondLargestElement));

bot.on('sticker', (ctx) => ctx.reply('👍'));

bot.launch();