'use strict';

var options = function (searchTerm = "") {
    var query = {
        method: 'POST',
        url: 'http://api.ft.com/content/search/v1',
        headers: {
            'x-api-key': process.env.FT_API_KEY,
            'content-type': 'application/json'
        },
        body: {
            queryString: searchTerm,
            queryContext: {
                curations: [ 'ARTICLES' ]
            },
            resultContext: {
                aspects: [ 'title', 'summary', 'lifecycle' ]
            }
        },
        json: true
    };
    return query;
};

module.exports = options;
