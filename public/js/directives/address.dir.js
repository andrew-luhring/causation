angular.module('dft')
  .directive('address', function() {
  'use strict';
  return {
    scope: {
      model: '='
    }
    , restrict: 'E'
    , templateUrl: '/views/partials/address.html'
  };
});
