const config = require('./config')
const tweet = require('./tweet')

setInterval(tweet.tweetRandom, config.tweet_interval) // tweet peoridically
