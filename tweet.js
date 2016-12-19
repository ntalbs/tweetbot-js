const quotes = JSON.parse(require('fs').readFileSync('./data/backup-2016-11-03.json', 'utf8'))
const config = require('./config')
const Twit = require('twit')
const T = new Twit(config.oauth_creds)

function randomQuote () {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

function tweetMessage (quote) {
  let msg = quote.msg + '\n' + quote.src
  T.post('statuses/update', {status: msg}, (err, res) => {
    if (err) {
      console.error('--->>>')
      console.error(msg)
      console.error(quote)
      console.dir(err)
    } else {
      console.log('tweet succeed at ', new Date())
      console.log(res.text)
    }
  })
}

tweetMessage(randomQuote())
