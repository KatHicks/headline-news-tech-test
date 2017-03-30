'use strict';

var express = require('express');
var request = require("request");
var options = require("../data/api.js")

var router = express.Router();

router.get('/', function (req, res) {
    var apiParams = options();

    request(apiParams, function (error, response, body) {
      if (error) console.log(error);
      
      res.render('index', { results : body.results[0].results });
    });
});

module.exports = router;
