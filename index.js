// require ('dotenv').config()

const telegram = require('node-telegram-bot-api')

const bot = new telegram(process.env.TELEGRAM_TOKEN, {polling: true})

bot.on('message', msg => {
   const text = msg.text;
   const chatId = msg.chat.id;

   if {text === '/start')
   bot.sendMessage(chatId, 'добро пожаловать в чат ${text}')
// const getRandomTip = async () => {
//   var data = require('./tips.json')
//   var obj = JSON.parse(JSON.stringify(data))
//   var randomNumber = Math.floor(Math.random() * 68)
//   return `Tip ${randomNumber} : ${obj.tips[randomNumber].name}
// ${obj.tips[randomNumber].text}`;
// }
//
// const main = async () => {
//   const randomTip = await getRandomTip();
//   bot.sendMessage(process.env.TELEGRAM_CHAT_ID, randomTip);
//   console.log(randomTip);
}

// main();
