'use strict';

var pagination = (function () {
    var pageLeft    = document.getElementById('page-left');
    var pageRight   = document.getElementById('page-right');

    var pages = new Array();

    for (var i = 0; i < 5; i++) {
        pages.push(document.getElementById('page' + i.toString()))
    };

    var pageTracker = document.getElementById('page-tracker');

    var hide = function (element) {
        element.style.display = 'none';
    };

    var show = function (element) {
        element.style.display = 'block';
    };

    var shiftRight = function (i) {
        hide(pages[i]);
        show(pages[i + 1]);
    };

    var shiftLeft = function (i) {
        hide(pages[i + 1]);
        show(pages[i]);
    }

    var write = function (number) {
        pageTracker.innerHTML = number.toString();
    };

    var init = function () {

        var page = 1;

        pageRight.addEventListener('click', function () {
            switch (page) {
                case 1:
                    shiftRight(0);
                    break;
                case 2:
                    shiftRight(1);
                    break;
                case 3:
                    shiftRight(2);
                    break;
                case 4:
                    shiftRight(3);
                    break;
            };

            if (page < 5) {
                page += 1;
            }

            write(page);
        });

        pageLeft.addEventListener('click', function () {
            switch (page) {
                case 2:
                    shiftLeft(0);
                    break;
                case 3:
                    shiftLeft(1);
                    break;
                case 4:
                    shiftLeft(2);
                    break;
                case 5:
                    shiftLeft(3);
                    break;
            };

          if (page > 1) {
              page -= 1;
          }

          write(page);
        });

    };

    return {
        init: init
    };
}());
