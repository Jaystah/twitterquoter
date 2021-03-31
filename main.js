const Twitter = require('twitter')
require('dotenv').config()
const client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});
const Quote = require('inspirational-quotes');
let isRandom = false;
let body = "Twitter for android/iOS? Lmao, ik gebruik goat shit"

const hours = 12;

function tweetQuote() {
    if (isRandom) {
        body = Quote.getRandomQuote()
        console.log(body)
        client.post('statuses/update', { status: body }, function (error, tweet, response) {
            if (error) throw error;
            console.log(tweet);  // Tweet body.
            //console.log(response);  // Raw response object.
        });
        isRandom = false;
    } else {
        body = Quote.getQuote()
        console.log(`'${body.text}' ~ ${body.author}`)
        client.post('statuses/update', { status: `'${body.text}' ~ ${body.author}` }, function (error, tweet, response) {
            if (error) throw error;
            console.log(tweet);  // Tweet body.
            //console.log(response);  // Raw response object.
        });
        isRandom = true;
    }

}


setInterval(function(){
    tweetQuote()
},1000 * 60 * 60 * hours)

