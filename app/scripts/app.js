'use strict';

angular
  .module('lukegarycomApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
