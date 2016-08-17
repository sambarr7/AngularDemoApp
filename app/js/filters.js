'use strict';

eventsApp.filter('durFilter', function () {
    return function (duration) {
        switch (duration) {
            case 1:
                return "Half hour";
            case 2:
                return "One hour";
            case 3:
                return "Half day";
            case 4:
                return "Full day";
        }
    }
});