angular.module ('dft')
  .directive ('global', function () {
  'use strict';
  return {
    scope: {
      instance: '@'
    }
    , restrict: 'E'
    , templateUrl: '/views/test.dir.html'
    , controller: 'GlobalController'
    , controllerAs: 'globalCtrl'
  };
});
