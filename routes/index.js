'use strict';

var express = require('express');
var request = require("request");

var router = express.Router();

router.get('/', function (req, res) {
    var options = {
      method: 'POST',
      url: 'http://api.ft.com/content/search/v1',
      headers: {
        'x-api-key': process.env.FT_API_KEY,
        'content-type': 'application/json'
      },
      body: {
        queryString: '',
        queryContext: {
          curations: [ 'ARTICLES' ]
        },
        resultContext: {
          aspects: [ 'title', 'summary', 'lifecycle' ]
        }
      },
      json: true
    };

    request(options, function (error, response, body) {
      if (error) console.log(error);

      res.render('index', { results : body.results[0].results });
    });
});

module.exports = router;
