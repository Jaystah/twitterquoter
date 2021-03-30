const Twitter = require('twitter')
const client = new Twitter({
    consumer_key: 'yynNvCthh8luOYBwJQxCCnTCQ',
    consumer_secret: 'sKIcWHZQscY2bYCAGPKWT3IrnzZc7oNFUEhspErcYJDWVqTv8N',
    // bearer_token: 'AAAAAAAAAAAAAAAAAAAAAEuXOAEAAAAAbpwV9ZoWZ0ajiMwSG6unuvkjfe0%3DZoRcu5UyQC2pLxgabagsSm9AQzF0gRLFmIkHvVtls7BGkRS9Cg',
    access_token_key: '1033768931096453121-yhnRZUngJYHPP0LOwO0vTXQoQDJaFI',
    access_token_secret: 'xxBHUqSdJPNEdTKWW0SZQslZhDFeNZ5e5wWirapD2PZLN'
});
const Quote = require('inspirational-quotes');
let isRandom = false;
let body = "Twitter for android/iOS? Lmao, ik gebruik goat shit"




// client.post('statuses/update', { status: body }, function (error, tweet, response) {
//     if (error) throw error;
//     console.log(tweet);  // Tweet body.
//     //console.log(response);  // Raw response object.
// });

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

