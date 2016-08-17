'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.sortOrder = 'name';
        $scope.mystyle = { color: 'red' };
        //$scope.filterSelections = ['name', '-upVoteCount'];//Not needed
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
                    name: 'Directives Masterclass Intro',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'Learn about directives.',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John McDon',
                    duration: 2,
                    level: 'Intro',
                    abstract: 'Learn about scopes.',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Jane Doe',
                    duration: 4,
                    level: 'Intermediate',
                    abstract: 'Learn about controllers.',
                    upVoteCount: 0
                }
            ]
        };

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    }
);