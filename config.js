exports.oauth_creds = {
  consumer_key: process.env.TWEETBOT_TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWEETBOT_TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWEETBOT_TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWEETBOT_TWITTER_ACCESS_TOKEN_SECRET
}

exports.tweet_interval = 1000 * 60 * 60 // one hour
