'use strict'
app.service('userInfo', ['$http', function ($http) {
  this.user = function() {
    return $http.get('http://localhost:3000/users')
  }


}])
