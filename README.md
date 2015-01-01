TweetBot-js
===========

Simple tweet bot written in JavaScript.

## Setup
Clone this project.

    $ git clone https://github.com/ntalbs/tweetbot-js.git
    $ cd tweetbot-js

`config.js` depends on the following environment variables. Set up the environment variables.

    $ export TWEETBOT_TWITTER_CONSUMER_KEY=...
    $ export TWEETBOT_TWITTER_CONSUMER_SECRET=...
    $ export TWEETBOT_TWITTER_ACCESS_TOKEN=...
    $ export TWEETBOT_TWITTER_ACCESS_TOKEN_SECRET=...
    $ export TWEETBOT_DB_URI=...

You should run the following command to install dependant modules.

    $ npm install

## Load data
This program uses **mongodb** and the collection name is `quotes`. The document in the colleciton should have the following structure:

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

## Backup
You can backup the database data into JSON file.

    $ node backup.js backup

where `backup` is the prefix of backup file name. The backup file name is specified as `backup-YYYY-MM-DD.json`.
