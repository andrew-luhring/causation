angular.module ('dft')
  .controller ('MenuCtrl', [
  '$scope',
  'menuPicker',
  function ($scope, menuPicker) {
    'use strict';
    var menuInstance = menuPicker ($scope.instance);
    this.links = menuInstance.list;
  }]);
