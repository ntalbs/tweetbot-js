TweetBot-js
===========

Simple tweet bot written in JavaScript.

## Setup
Clone this project, copy `_config.js` to `config.js`.

    $ git clone https://github.com/ntalbs/tweetbot-js.git
    $ cd tweetbot-js
    $ cp _config.js config.js

After this, edit `config.js` to fill the oauth credentials and database uri.

You should run the following command to install dependant modules.

    $ npm install

## Load data
This program uses momgodb and the collection name is `quotes`. The document in the colleciton should have the following structure:

    {
      _id: ObjectId("..."),
      src: "source of the text",
      msg: "text message. blah blah..."
    }

You can make a JSON file containing an array of documents and load it into database using `loader.js`. JSON file should have the following structure:

    [
      {"src": "...", "msg": ...},
      {"src": "...", "msg": ...},
      {"src": "...", "msg": ...},
      ...
      {"src": "...", "msg": ...}
    ]

After you prepared the JSON file, you can run the following command:

    $ node loader.js data.json

where `data.json` is the data file.

## Run

    $ node tweetbot.js

This will fetch a random message from the database you specified in `config.js` and tweet it, periodically. You can specify the interval by setting `tweet-interval` property in the config file.
