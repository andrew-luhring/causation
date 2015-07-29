angular.module('dft').service('MapService', ['$q', function($q) {
  'use strict';

  function MapService() {
    this.geocoder = new google.maps.Geocoder();
  }

  function triggerError(response, err) {
    console.log(response);
    console.log(err);
  }

  MapService.prototype.getCoords = function MSGetCoords(address) {
    var deferred = $q.defer();

    this.geocoder.geocode({'address': address}, function(res, status) {
      if (status !== 'OK') {
        triggerError(res, status);
      }
      deferred.resolve(res[0].geometry.location);
    });
    return deferred.promise;
  };

  /**
   * @param {string} - address - the address to search for
   * @param {string} - addressComponentType -
   *     @link https://developers.google.com/maps/documentation/geocoding/intro#Types
   * @returns {Promise}
   */
  MapService.prototype.getType = function(address, addressComponentType) {
    //jscs:disable requireDotNotation
    var deferred = $q.defer();
    this.geocoder.geocode({'address': address}, function(res, status) {
      var components;
      if (status !== 'OK') {
        triggerError(res, status);
      }
      components = res[0]['address_components'];
      for (var prop = 0; prop < components.length; prop++) {
        if (components[prop]['short_name'].length === 2) {
          var componentType = components[prop].types;
          for (var i = 0; i < componentType.length; i++) {
            if (componentType[i] === addressComponentType) {
              deferred.resolve(components[prop]);
            }
          }
        }
      }
    });
    return deferred.promise;
    //jscs:enable requireDotNotation
  };

  /**
   * get the state of a given address/ address component
   * @param {string} address
   * @returns {Promise}
   */
  MapService.prototype.getState = function(address) {
    return this.getType(address, 'administrative_area_level_1');
  };

  return MapService;
}]);
