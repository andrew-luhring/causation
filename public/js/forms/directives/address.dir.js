angular.module('dft')
  .directive('address', function() {
  'use strict';
  return {
    scope: {
      modelobj: '='
    , label: '@'
    }
    , restrict: 'E'
    , templateUrl: '/js/forms/views/partials/address.html'
    , controller: 'AddressCtrl'
    , controllerAs: 'address'
  };
});
