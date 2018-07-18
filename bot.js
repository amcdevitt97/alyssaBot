var TelegramBot = require('node-telegram-bot-api');

var token = require('./config/config.js').authToken;

const bot = new TelegramBot(token, {polling: true});

var catPics=["https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&h=350",
"https://images.pexels.com/photos/62321/kitten-cat-fluffy-cat-cute-62321.jpeg?auto=compress&cs=tinysrgb&h=350",
"https://yt3.ggpht.com/wm5LCci89chQvQ0oeDl-QxDMwCFTu6v0YiSEytYinTbG-hU_iLP9Jqc6cC57SbNLGxIlOfAhsrfE7BG_HO8=s900-mo-c-c0xffffffff-rj-k-no",
"https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
"https://i.ytimg.com/vi/dGFSjKuJfrI/maxresdefault.jpg"];

var lovePics=["https://pbs.twimg.com/media/Dbkox04WkAEriQs.jpg",
"https://data.whicdn.com/images/293746589/superthumb.jpg?t=1501841461",
"https://pbs.twimg.com/media/DO0B8_sUQAAte-S.jpg",
"https://i.pinimg.com/originals/0f/18/48/0f18480a9a31430acc6e25808b5fa440.jpg"];



bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "YEET. Hello lovely"+
  "ladies and welcome to AlyssaBot. What does this bot do?"+
  " We're not sure yet. But it's gonna be awesome. ", {
  });
});

bot.on('text', function (msg) {
  var chatId = msg.chat.id;
  if(msg.text.toString().includes("grapefruit")){
    bot.sendMessage(chatId, "we don't discuss grapefruit in this chat");
  }

  if(msg.text.toString().includes("blockchain") || msg.text.toString().includes("Blockchain") ){
    bot.sendMessage(chatId, "i still don't understand the blockchain");
  }

  if(msg.text.toString().includes("WWDC")){
    bot.sendMessage(chatId, "WWDC SUPER SLAM 3005 FEATURING JOHN CENA");
  }

});

bot.onText(/\/grapefruit/, (msg) => {
  //bot.sendPhoto(msg.chat.id, 'assets/angerey.jpg')
  bot.sendMessage(msg.chat.id, "https://www.youtube.com/watch?v=bvf6OaqPPo4")
});

bot.onText(/\/catpics/, (msg) => {
  var i =Math.floor(Math.random() * 5);
  bot.sendMessage(msg.chat.id, catPics[i])
});

bot.onText(/\/party/, (msg) => {
  bot.sendMessage(msg.chat.id, "i'm gonna put a dumb gif here")
});

bot.onText(/\/love/, (msg) => {
  var i =Math.floor(Math.random() * 4);
  bot.sendMessage(msg.chat.id, lovePics[i])
});

bot.onText(/\/hellnawh/, (msg) => {
  bot.sendMessage(msg.chat.id, "https://www.youtube.com/watch?v=JdKI1wj-JpI")
});