'use strict';

angular.module('lukegarycomApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.isActive = function(route) {
        return route === $location.path();
      };
  });
