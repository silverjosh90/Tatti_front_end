'use strict';

/**
 * @ngdoc function
 * @name tattiFrontEndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tattiFrontEndApp
 */

  app.controller('MainCtrl', ['$scope', '$auth', function ($scope, $auth) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.authenticate = function(provider) {
      console.log($auth);
      $auth.authenticate(provider).then(function(results){
        console.log(results.data[0]);
        window.location = '/#/'+ results.data[0].fb_id;
      })
  };

  }]);
  app.controller('profileController', ['$scope', function ($scope) {
    console.log('YOLO')

  }]);
