'use strict';

angular.module('fyi-styles')
.controller('GetStartedCtrl', function ($rootScope, $scope) {
	$rootScope.$broadcast('get-started');
});