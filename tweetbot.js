var config = require('./config'),
    Twit = require('twit'),
    MongoClient = require('mongodb').MongoClient;

var T = new Twit(config.oauth_creds);

var tweet = function() {
  MongoClient.connect(config.db_uri, function (err, db) {
    if (err) throw err;

    var collection = db.collection('quotes');
    collection.count(function (err, count) {
      var rnd = Math.floor(Math.random() * count);
      db.collection('quotes').find({}).limit(1).skip(rnd).toArray(function (err, results) {
        var quote = results[0],
            msg = quote.msg + '\n' + quote.src;
        T.post('statuses/update', {status: msg}, function (err, reply) {
          if (err) throw err;
          console.log(reply);
        });
        db.close();
      });
    });
  });
};

setInterval(tweet, config.tweet_interval);
