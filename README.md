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

This program uses momgodb and the collection name is `quotes`. The document in the colleciton should have the following structure:

    {
      _id: ObjectId("..."),
      src: "source of the text",
      msg: "text message. blah blah..."
    }

## Run

    $ node tweetbot.js

This will fetch a random message from the database you specified in `config.js` and tweet it, periodically. You can specify the interval by setting `tweet-interval` property in the config file.
