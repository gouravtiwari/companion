'use strict';

angular.module('companionApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/newview', {
        templateUrl: 'views/newview.html',
        controller: 'NewviewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
