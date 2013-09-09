require('date-utils');
var config = require('./config'),
    fs = require('fs'),
    filename = process.argv[2] + Date.today().toFormat('YYYY-MM-DD'),
    out = fs.createWriteStream(filename),
    mongoose = require('mongoose'),
    quotes = mongoose.model('quotes', {msg: String, src: String});

out.on('open', function (fd) {
  mongoose.connect(config.db_uri);
  var q_stream = quotes.find().stream();
  q_stream.on('data', function (q) {
    out.write('{msg: "' + q.msg + ', src: "' + q.src +'"}\n');
  }).on('error', function (err) {
    throw err;
  }).on('close', function () {
    mongoose.disconnect();
    out.end();
    console.log('backup completed...');
    console.log('database contents have been written to ' + filename + '.');
  });
});
