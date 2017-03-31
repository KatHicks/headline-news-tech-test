'use strict';

var chai        = require('chai');
var expect      = chai.expect;
var request     = require("request");
var options     = require("../../data/api.js");
var nock        = require('nock');
var apiResponse = require('../assets/response.json');

describe('api request', function () {
    beforeEach(function () {
      nock('http://api.ft.com/')
        .post('/content/search/v1')
        .reply(200, apiResponse);
    });

    it('returns a headline for each article', function (done) {
        this.timeout(3000);
        var apiParams = options();
        request(apiParams, function (error, response, body) {
            body.forEach(function (item) {
                expect(item.title.title).to.be.a('string');
            });
            done();
        });
    });

    it('returns the correct headline for each article', function (done) {
        this.timeout(3000);
        var apiParams = options();
        request(apiParams, function (error, response, body) {
            expect(body[0].title.title).to.equal("Three quick wins for Brexit talks");
            done();
        });
    });

    it('returns a summary for each article', function (done) {
        this.timeout(3000);
        var apiParams = options();
        request(apiParams, function (error, response, body) {
            body.forEach(function (item) {
                expect(item.summary.excerpt).to.be.a('string');
            });
            done();
        });
    });

    it('returns the correct headline for each article', function (done) {
        this.timeout(3000);
        var apiParams = options();
        request(apiParams, function (error, response, body) {
            expect(body[0].summary.excerpt).to.equal("We have now seen Theresa May’s Article 50 notification letter and Donald Tusk’s brief and sombre response. Brexit is");
            done();
        });
    });
});
