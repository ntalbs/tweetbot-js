var config = require('./config'),
    Twit = require('twit'),
    mongoose = require('mongoose');

var T = new Twit(config.oauth_creds),
    quotes = mongoose.model('quotes', {msg: String, src: String});

var tweet = function () {
  var promise = quotes.count().exec();
  promise.then(function (cnt) {
    var n = Math.floor(Math.random() * cnt);
    return quotes.findOne({}).skip(n).exec();
  }).then(function (quote) {
    var msg = quote.msg + '\n' + quote.src;
    T.post('statuses/update', {status: msg}, function (err, reply) {
      if (err) console.dir(err);
      console.log('--->>>');
      console.log(new Date);
      console.log(msg);
    });
  }).end();
};

mongoose.connect('mongodb://tweetbot:kdznbmfsib@paulo.mongohq.com:10098/ntalbs-mongodb');
setInterval(tweet, 5000);
