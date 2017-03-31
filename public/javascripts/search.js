'use strict';

var search = (function () {
    var searchBar   = document.getElementById('search-box');
    var searchIcon  = document.getElementById('search-icon');
    var searchClose = document.getElementById('close-search');

    var hide = function (element) {
        element.style.display = 'none';
    };

    var show = function (element) {
        element.style.display = 'block';
    };

    var init = function () {
        searchIcon.addEventListener('click', function () {
            show(searchBar);
        });

        searchClose.addEventListener('click', function () {
            hide(searchBar);
        });
    };

    return {
        init: init
    };
}());
