'use strict';

var express     = require('express');
var request     = require('request');
var promRequest = require('request-promise');
var options     = require('../data/api.js');

var router = express.Router();

router.get('/', function (req, res) {
    var pages = new Array();

    for (var i = 0; i < 100; i += 20) {
      var count = 0;
      promRequest(options(i.toString()))
          .then(function (body) {
              count += 1;
              pages.push(body.results[0].results);
              if (count === 5) {
                res.render('index', { results : pages });
              }
          })
          .catch(function (error) {
              if (error) {
                  console.log(error);
              };
          });
    };
});

router.post('/search', function (req, res) {
    var searchTerm = req.body.search.toLowerCase();
    res.redirect('/' + searchTerm);
});

router.get('/:term', function (req, res) {
    var searchTerm = req.params.term;
    var pages = new Array();

    for (var i = 0; i < 100; i += 20) {
      var count = 0;
      promRequest(options(i.toString(), searchTerm))
          .then(function (body) {
              count += 1;
              pages.push(body.results[0].results);
              if (count === 5) {
                res.render('index', { results : pages });
              }
          })
          .catch(function (error) {
              if (error) {
                  console.log(error);
              };
          });
    };
});

module.exports = router;
