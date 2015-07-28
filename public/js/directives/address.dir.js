angular.module('dft')
  .directive('address', function() {
  'use strict';
  return {
    scope: {
      modelobj: '='
    , label: '@'
    }
    , restrict: 'E'
    , templateUrl: '/views/partials/form-partials/address.html'
    , controller : function($scope){
      this.label = $scope.label;
      this.modelobj = $scope.modelobj;
    }
    , controllerAs: 'address'
  };
});
