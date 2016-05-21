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
      $auth.authenticate(provider).then(function(results){

        window.location = '/#/' + 'profile'
      })
  };

  }]);
  app.controller('profileController', ['$scope', '$auth', 'userInfo', 'locationRequest', function ($scope, $auth, userInfo, locationRequest) {
    if($auth.isAuthenticated()){
      userInfo.user().then(function(results){
        $scope.user = results.data
      })
    }
    else {
      window.location = '/#/'
    }
    locationRequest.locate().then(function(results){
      $scope.location = results.data.results[4].formatted_address
      console.log(results);
    })
  }]);

  app.controller('logoutController', ['$scope', '$auth', 'userInfo', function ($scope, $auth, userInfo) {
      if (!$auth.isAuthenticated()) { window.location = '/#/'; return }
      $auth.logout()
        .then(function() {
          window.location = '/#/'
        });
  }]);
