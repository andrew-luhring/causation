angular.module('dft').controller('SignupCtrl', function($scope) {
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


});
