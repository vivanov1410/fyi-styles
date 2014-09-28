'use strict';

angular.module('fyi-styles')
.controller('ButtonsCtrl', function ($rootScope, $scope) {
	
	$rootScope.$broadcast('buttons');
	
});