const TelegramBot = require('node-telegram-bot-api');

const token = '7405600803:AAFxVFolA16sDico2W_RObtiA6_Q5zl4Lpc';
const webAppUrl = 'https://www.google.com/';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {
      reply_markup: {
        keyboard: [[{ text: 'Заполнить форму', web_app: { url: webAppUrl } }]],
      },
    });

    await bot.sendMessage(chatId, 'Переходи в наш интернет магазин', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Сделать заказ', web_app: { url: webAppUrl } }],
        ],
      },
    });
  }
});
