angular.module('dft').controller('StandardInputCtrl', [
  '$scope', 'standardInputConstructor', function($scope, StandardInput){
    'use strict';
    console.log($scope.obj);

    this.instance = new StandardInput($scope.obj);
    this.showDebug = true;
  }
]);
