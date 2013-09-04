// mongodb test.

var MongoClient = require('mongodb').MongoClient,
    format = require('util').format;

MongoClient.connect('mongodb://tweetbot:kdznbmfsib@paulo.mongohq.com:10098/ntalbs-mongodb', function (err, db) {
  if (err) throw err;

  var collection = db.collection('quotes');
  collection.count(function (err, count) {
    var rnd = Math.floor(Math.random() * count);
    db.collection('quotes').find({}).limit(1).skip(rnd).toArray(function (err, results) {
      console.dir(results);
      db.close();
    });
  });
});
