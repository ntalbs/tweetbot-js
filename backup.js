require('date-utils');
var config = require('./config'),
    fs = require('fs'),
    filename = process.argv[2] + Date.today().toFormat('YYYY-MM-DD')+'.json',
    out = fs.createWriteStream(filename),
    mongoose = require('mongoose'),
    quotes = mongoose.model('quotes', {msg: String, src: String});

var escapeQuotes = function (str) {
  return str.replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
};

out.on('open', function (fd) {
  mongoose.connect(config.db_uri);
  var q_stream = quotes.find().stream();
  out.write('[\n');
  q_stream.on('data', function (q) {
    out.write('{"msg": "' + escapeQuotes(q.msg) + '", "src": "' + escapeQuotes(q.src) +'"}\n');
  }).on('error', function (err) {
    throw err;
  }).on('close', function () {
    mongoose.disconnect();
    out.write(']\n');
    out.end();
    console.log('backup completed...');
    console.log('database contents have been written to ' + filename + '.');
  });
});
