var config = {
  oauth_creds: {
    consumer_key: 'consumer_key',
    consumer_secret: 'cumsumer_secret',
    access_token: 'access_token',
    access_token_secret: 'access_token_secret'
  },
  db_uri: 'database-uri',
  tweet_peroid: 1000 * 60 * 60 // one hour
};

exports.oauth_creds = config.oauth_creds;
exports.db_uri = config.db_uri;
exports.tweet_peroid = config.tweet_peroid;
