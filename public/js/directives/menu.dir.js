angular.module ('dft')
  .directive ('rooMenu', [function () {
  'use strict';
  return {
    scope: {
      instance: '@'
    }
    , restrict: 'E'
    , controller: 'MenuCtrl'
    , controllerAs: 'menu'
    , templateUrl: '/views/partials/menu.html'
  };
}]);
