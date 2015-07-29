angular.module('dft').directive('phone', function() {
 'use strict';
 return {
   scope: {
      modelobj: '='
   ,  label: '@'
   }
   , restrict: 'E'
   , templateUrl: '/js/forms/views/partials/phone.html'
   , controller: function($scope) {
     var that = this;
     this.label = $scope.label;
     this.modelobj = $scope.modelobj;
     this.formatNumber = function() {
       var str = that.modelobj.phone.number || '';

       if (str.length === 3) {
         str += ' ';
       }
       if (str.length === 7) {
         str += ' ';
       }

       if (str.length === 10) {
         var start = str.slice(0, 3);
         var mid = str.slice(3, 6);
         var end = str.slice(6);
         if (str[3] !== ' ') {
          start = start + ' ';
         }
         if (str[7] !== ' ') {
           mid = mid + ' ';
         }
         str = start + mid + end;
       }

       that.modelobj.phone.number = str;
     };
   }
   , controllerAs: 'phone'
 };
});
