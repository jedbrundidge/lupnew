/**
 * Created by jed on 6/19/2016.
 */
(function () {

    var lupus = angular.module('lupus', ['ngRoute', 'ngResource']);

    lupus.config(function ($routeProvider, $resourceProvider) {
        $routeProvider

            .when('/', {
                templateUrl: '/views/home.html'
            })

            .when('/home', {
                templateUrl: '/views/home.html'
            })

            .when('/register', {
                templateUrl: '/views/register.html'
            })

            .when('/teams', {
                templateUrl: '/views/teams.html'
            })

            .when('/skips', {
                templateUrl: '/views/skips.html'
            })

            .when('/donate', {
                templateUrl: '/views/donate.html'
            })

            .when('/directions', {
                templateUrl: '/views/directions.html'
            })
    })

        .controller('teamsController', function ($scope, $http) {
            $http.get('http://localhost:3000/teams').success(function (response) {
                $scope.teams = response
            });
        });

})();



