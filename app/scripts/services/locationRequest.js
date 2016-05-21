'use strict'

app.service('locationRequest', ['$http', function ($http) {
  this.locate = function() {
    return $http.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBnecKhdZyneVbTTa4c0nwTg-2ra4ZJUZw').then(function(results){

      var lat = results.data.location.lat
      var lng = results.data.location.lng

      return $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+ ',' + lng+'&key=AIzaSyAE1IkCa3fg1A8O3JGJ0udQuWvQPGDwv7o')

    })
  }

  // 'https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyBnecKhdZyneVbTTa4c0nwTg-2ra4ZJUZw'


}])
