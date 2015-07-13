angular.module ('dft')
  .service ('helpers', [
  function () {
    'use strict';
    function Helpers() {
      this.constructor = Helpers;
    }

    Helpers.prototype.checkInstance = function hlpCheckInstance(obj, expected) {
      return (obj instanceof expected === true || obj.constructor === expected);
    };

    return new Helpers ();
  }
]);
