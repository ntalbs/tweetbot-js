// mongodb test.

var config = require('./config'),
    mongoose = require('mongoose'),
    quotes = mongoose.model('quotes', {msg: String, src: String});

mongoose.connect(config.db_uri);

setInterval(function () {
  console.log(">>>>>");
  var promise = quotes.count().exec();
  promise.then(function (cnt) {
    console.log("count=", cnt);
    var n = Math.floor(Math.random() * cnt);
    return quotes.findOne({}).skip(n).exec();
  }).then(function (quote) {
    console.log(quote);
  }).then(function () {
    // console.log("disconnect");
    // mongoose.disconnect();
  }).end();
}, 3000);
