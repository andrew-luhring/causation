angular.module('dft').directive('standardInput', function(){
  'use strict';

  return {
    restrict: 'E'
  , templateUrl: '/js/common/views/standard-input.html'
  , scope: { obj: '=' }
  , controllerAs: 'inputCtrl'
  , controller: function ($scope){
      function StandardInput(obj){
        this.class = obj.class || '';
        this.label = obj.label || '';
        this.model = obj.model;
        this.name = obj.name;
        this.placeholder = obj.placeholder || obj.label;
        this.required = obj.required || false;
        this.type = obj.type || 'text';
        if( !this.model || !this.name){
          throw new TypeError('model: ' + this.model + ' or name: ' + this.name + ' is null or undefined.');
        }
      }

      this.instance = new StandardInput($scope.obj);
    }
  , link: function (scope, elem, attr, ctrls){
      console.log(arguments);
      scope.$watch('inputCtrl.instance.model', function (){
        console.log(scope);
        
      })
    }
  };

});
