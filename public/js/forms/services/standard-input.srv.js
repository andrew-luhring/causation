angular.module('dft').service('standardInputConstructor', function(){
  'use strict';
  return function StandardInput(obj){
    console.log(obj);
    console.trace();
    this.class = obj.class || '';
    this.label = obj.label || '';
    this.model = obj.model;
    this.name = obj.name;
    this.placeholder = obj.placeholder || obj.label;
    this.required = obj.required || false;
    this.type = obj.type || 'text';
    if (!this.model || !this.name) {
      throw new TypeError('model: ' + this.model + ' or name: ' + this.name + ' is null or undefined.');
    }
  };
});
