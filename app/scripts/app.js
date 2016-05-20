'use strict';

/**
 * @ngdoc overview
 * @name tattiFrontEndApp
 * @description
 * # tattiFrontEndApp
 *
 * Main module of the application.
 */
var app = angular.module('tattiFrontEndApp', [
    'ngAnimate',
    'ngRoute',
    'satellizer'
  ])
  app.config(['$routeProvider', '$authProvider', function ($routeProvider, $authProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/:id', {
        templateUrl: 'views/profile.html',
        controller: 'profileController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });

    $authProvider
        .facebook({
        clientId: '1716247038662898',
        url: 'http://localhost:3000/auth/facebook',
        scope: ['email'],
        scopeDelimiter: ',',
        profileFields: ['name', 'id', 'picture.type(large)', 'emails']
      });

  }]);
