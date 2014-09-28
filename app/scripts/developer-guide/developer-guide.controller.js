'use strict';

angular.module('fyi-styles')
.controller('DeveloperGuideCtrl', function ($rootScope, $scope) {
	$rootScope.$broadcast('developer-guide');
});