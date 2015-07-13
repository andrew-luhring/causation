angular.module('dft')
  .controller('MapCtrl', ['$scope', '$http', function($scope, $http) {
  'use strict';
  var accessor = this;
  var home = new google.maps.LatLng(41.888281, -87.646572);
  var mapOptions = {
      center: home
    ,	zoom: 1
  };
  var geocoder = new google.maps.Geocoder();

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  this.map = map;
  this.address = '365 North Halsted Street, Chicago, IL, 60661';

  function triggerError(response, err) {
    console.log(response);
    console.log(err);
  }

  this.addAddress = function() {
    console.log(accessor.address);

    geocoder.geocode({'address': accessor.address}, function(res, status) {
      var coords;
      var position;
      if (status === 'OK') {
        coords = res[0].geometry.location;
        position = new google.maps.LatLng(coords.A, coords.F);
        var newMarker = new google.maps.Marker({
          map: map
        , position: position
        , draggable: true
        , animation: google.maps.Animation.DROP
        });
        map.setZoom(15);
      } else {
        triggerError(res, status);
      }
    });
  };

  (function initialize() {
    window.myMap = map;
    window.maps = google.maps;
  })();

  $scope.mapctrl = this;
  return $scope.mapctrl;
}]);
