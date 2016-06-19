/**
 * Created by jed on 6/19/2016.
 */

(function () {

    var lupus = angular.module('lupus', ['ngResource']);

    lupus.controller('teamsController', function ($scope, $resource, teamsService) {
        teamsService.then(function (success) {
            $scope.teams = success.data;
        }, function (error) {

        });
    })
        .factory('teamsService', function ($http) {
            return $http.get('http://localhost:3000/teams');
        });

}());