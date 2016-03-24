angular.module('dft').directive('standardInput', function(){
  'use strict';

  return {
    restrict: 'E'
  , templateUrl: '/js/forms/views/partials/standard-input.html'
  , scope: { obj: '=' }
  , controllerAs: 'inputCtrl'
  , controller: 'StandardInputCtrl'
  , link: function (scope, elem, attr, ctrls){
      console.log(arguments);
      scope.$watch('inputCtrl.instance.model', function (){
        console.log(scope);
      });
    }
  };

});
