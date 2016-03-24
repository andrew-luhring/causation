angular.module('dft').controller('SignupCtrl', [
  '$scope', '$http', 'standardInputConstructor', function($scope, $http, StandardInput) {
    'use strict';
    var accessor = this;
    this.nameInputs = [
      new StandardInput({
        label: 'First name.'
      , name: 'firstname'
      , model: 'signupctrl.person.firstname'
      , required: true
      }),
      new StandardInput({
        label: 'Last Name'
      , name: 'lastname'
      , model: 'signupctrl.person.lastname'
      , required: true
      })
    ];
    this.contactInputs = [
      new StandardInput({
        label: 'Email'
      , name: 'email'
      , model: 'signupctrl.person.email'
      , required: true
      })
    ]
  this.submit = function() {
    var data = {
      person: accessor.person
    , patient: accessor.patient
    };
    $http.post('/add', data).then(function(dat){
      console.log (dat);
    });
  };
  }
]);
