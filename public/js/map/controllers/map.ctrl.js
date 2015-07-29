//
/*
need to allow input of data
-> angular

-[ ] need to stylize the form
  -> bootstrap
  need to create form wording
    -> text file


need to store the data
  -> mongo


 */

angular.module('dft').controller('MapCtrl', ['$scope', 'MapService', function($scope, MapService) {
  'use strict';
  var accessor = this;
  var home = new google.maps.LatLng(0, 0);
  var mapOptions = {
      center: home
    ,	zoom: 1
  };
  var geocoder = new google.maps.Geocoder();
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  this.latlong = '';
  this.map = map;
  this.address = '';
  function triggerError(response, err) {
    console.log(response);
    console.log(err);
  }

  this.addAddress = function() {
    var ms = new MapService();
    ms.getCoords(accessor.address).then(function(coords) {
      var position = new google.maps.LatLng(coords.A, coords.F);
      accessor.latlong = position;
      var newMarker = new google.maps.Marker({
        map: map
      , position: position
      , draggable: true
      , animation: google.maps.Animation.DROP
      });
      map.setCenter(position);
      map.setZoom(15);
    });
  };

  (function initialize() {
    window.myMap = map;
    window.maps = google.maps;
  })();

  $scope.mapctrl = this;
  return $scope.mapctrl;
}]);
