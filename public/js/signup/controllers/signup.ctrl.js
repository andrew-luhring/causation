angular.module('dft').controller('SignupCtrl', ['$scope', '$http', function($scope, $http) {
  'use strict';

  this.person = {
    firstname: ''
  , lastname: ''
  , email: ''
  , phone : {
      number: ''
    , type: ''
    , context: ''
  }
  , address: {
    street: ''
    , unit: ''
    , city: ''
    , postal:''
  }
  };
  this.patient = {
    firstname: ''
  , lastname: ''
  , phone : {
      number: ''
    , type: ''
    , context: ''
    }
  , address: {
      street: ''
    , unit: ''
    , city: ''
    , postal:''
    }
  };


  this.submit = function(){

  };
}]);
