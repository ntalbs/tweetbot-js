var fs = require('fs'),
    filename = process.argv[2],
    mongoose = require('mongoose'),
    quotesSchema = new mongoose.Schema({msg:String, src:String}, {versionKey:false});
    quotes = mongoose.model('quotes', quotesSchema);

mongoose.connect('mongodb://tweetbot:kdznbmfsib@paulo.mongohq.com:10098/ntalbs-mongodb');

fs.readFile(filename, 'utf8', function (err, data) {
  var docs = JSON.parse(data);

  quotes.create(docs, function(err) {
    if (err) throw err;
  });

  mongoose.disconnect();
});
