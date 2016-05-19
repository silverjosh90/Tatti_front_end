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
    'ngRoute'
  ])
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
