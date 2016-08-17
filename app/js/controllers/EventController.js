'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.event = {
            name: 'Angular Boot Camp',
            date: '8/16/16',
            time: '5:30 pm',
            address: {
                street: '123 Elm Street',
                city: 'Miami',
                state: 'Fl'
            },
            imageUrl: 'img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'Learn about directives.'
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John McDon',
                    duration: '30 min',
                    level: 'Intro',
                    abstract: 'Learn about scopes.'
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Jane Doe',
                    duration: '2 hrs',
                    level: 'Intermediate',
                    abstract: 'Learn about controllers.'
                }
            ]
        }
    }
);