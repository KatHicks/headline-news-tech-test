'use strict';

var Browser  = require('zombie');
var http     = require('http');
var chai     = require('chai');
var expect   = chai.expect;

var server   = require('../../app');

describe('index page', function () {

    before(function () {
        this.server = http.createServer(server).listen(8000);
        this.browser = new Browser({
            site: 'http://localhost:8000'
        });
    });

    beforeEach(function (done) {
        this.browser.visit('/', done);
    });

    it('should have a title', function () {
        expect(this.browser.text('h1')).to.equal('Headline News');
    });

    after(function (done) {
        this.server.close(done);
    });

});
