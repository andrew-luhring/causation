angular.module ('dft')
  .directive ('rooMap', [function () {
  "use strict";

  return {
    scope: {
      instance: '@'
    }
    , restrict: 'E'
    , controller: "MapCtrl"
    , controllerAs: "mapctrl"
    , templateUrl: '/views/partials/map.html'
  };
}]);
