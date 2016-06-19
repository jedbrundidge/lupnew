/**
 * Created by jed on 6/19/2016.
 */

var lupus = angular.module('lupus', ['ngRoute']);

lupus.config(function ($routeProvider) {
    $routeProvider
        
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
});