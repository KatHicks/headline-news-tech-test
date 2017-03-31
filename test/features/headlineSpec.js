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
        this.timeout(8000);
        this.browser.visit('/', done);
    });

    it('should have a title', function () {
        expect(this.browser.text('a.navbar-brand')).to.equal('Headline News');
    });

    it('should have a headline element', function (done) {
        done();
        expect(this.browser.text('h1.headline')).to.exist;
    });

    it('should have a summary element', function (done) {
        done();
        expect(this.browser.text('p.summary')).to.exist;
    });

    it('should have a search bar', function (done) {
        done();
        expect(this.browser.text('form.search-box')).to.exist;
    });

    it('should persist the search term in the url', function (done) {
        this.browser.fill('search', 'Brexit');
        this.browser.pressButton('Search');
        this.browser.wait();
        done();
        expect(this.browser.location.href).to.equal('http://localhost:8000/brexit');
    });

    it('should change the content after search', function (done) {
        var initialHeadline;
        var filteredHeadline;

        initialHeadline = this.browser.text('h1.headline');
        this.browser.fill('search', 'Brexit');
        this.browser.pressButton('Search');
        this.browser.wait();
        done();
        filteredHeadline = this.browser.text('h1.headline');

        expect(initialHeadline).to.not.equal(filteredHeadline);
    });

    it('should not include the email sign up text in summaries', function () {
        expect(this.browser.text('p.summary')).to.not.contain('Sign up to receive FirstFT by email here');
    });

    it('should have results header at top of page', function () {
        expect(this.browser.text('h3')).to.contain('Results');
    });

    it('should have a left button at the bottom of the page', function () {
        expect(this.browser.text('i.fa-chevron-left')).to.exist;
    });

    it('should have a right button at the bottom of the page', function () {
        expect(this.browser.text('i.fa-chevron-right')).to.exist;
    });

    after(function (done) {
        this.server.close(done);
    });

});
