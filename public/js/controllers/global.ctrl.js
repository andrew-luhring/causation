angular.module ('dft')
	.controller ('GlobalController', ['$scope','languageData', function ($scope, data) {
	'use strict';

	$scope.globalCtrl = this;
	return $scope.globalCtrl;
}]);
