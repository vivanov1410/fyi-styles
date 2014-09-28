'use strict';

angular.module('fyi-styles')
.controller('TypographyCtrl', function ($rootScope, $scope) {
	
	$rootScope.$broadcast('typography');

});