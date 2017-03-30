'use strict';

var express = require('express');
var request = require("request");
var options = require("../data/api.js");

var router = express.Router();

router.get('/', function (req, res) {
    var apiParams = options();

    request(apiParams, function (error, response, body) {
        if (error) {
            console.log(error);
        };
        res.render('index', { results : body.results[0].results });
    });
});

router.post('/search', function (req, res) {
    var searchTerm = req.body.search.toLowerCase();
    res.redirect('/' + searchTerm);
});

router.get('/:term', function (req, res) {
    var searchTerm = req.params.term;
    var apiParams = options(searchTerm);

    request(apiParams, function (error, response, body) {
        if (error) {
            console.log(error);
        };
        res.render('index', { results : body.results[0].results });
    });
});

module.exports = router;
