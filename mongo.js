// mongodb test.

var mongoose = require('mongoose');
var quotes = mongoose.model('quotes', {msg: String, src: String});
mongoose.connect('mongodb://tweetbot:kdznbmfsib@paulo.mongohq.com:10098/ntalbs-mongodb');

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
