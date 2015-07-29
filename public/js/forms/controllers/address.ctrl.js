angular.module('dft').controller('AddressCtrl', ['$scope', 'MapService', function ($scope, MapService) {
  'use strict';
  var accessor = this;
  this.label = $scope.label;
  this.modelobj = $scope.modelobj;

  this.tryGetState = function addctrlTryGetState(){
    if(accessor.modelobj.address.postal.length === 5){
      var ms = new MapService();
      ms.getState(accessor.modelobj.address.postal).then(function(state){
        accessor.modelobj.address.state = state['long_name'];
      });
    }
  }
}]);
