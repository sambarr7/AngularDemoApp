'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.event = {
            name: 'Angular Boot Camp',
            date: '8/16/16',
            time: '5:30 pm'
        }
    }
);