angular.module('dft').controller('SignupCtrl', ['$scope', '$http', function($scope, $http) {
  'use strict';
  var accessor = this;

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

  this.person = {
    firstname: 'andrew'
  , lastname: 'luhring'
  , email: 'andeqoo@gmail.com'
  , phone: {
      number: '4196804649'
    , type: 'cell'
    , context: 'home'
  }
  , address: {
    street: '365 N Halsted'
    , unit: '1509'
    , city: 'Chicago'
    , postal: '60661'
  }
  , notPatient: true
  , relationship: "parent"
  , alive: true
  };
  this.patient = {
    firstname: 'Clifton'
  , lastname: 'Stommel'
  , phone: {
      number: '3171231234'
    , type: 'cell'
    , context: 'home'
    }
  , address: {
      street: '445 e ohio st'
    , unit: '3605'
    , city: 'chicago'
    , postal: '60611'
    }
  };
  this.names = [{
    label: 'First name.'
  , name: 'firstname'
  , model: 'signupctrl.person.firstname'
  , required: true
  }];
  this.submit = function() {
    var data = {
      person: accessor.person
    , patient: accessor.patient
    };
    $http.post('/add', data).then(function(dat){
      console.log (dat);
    });
  };
}]);
