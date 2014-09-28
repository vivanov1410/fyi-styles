'use strict';

angular.module('fyi-styles')
.controller('BrandingGuideCtrl', function ($rootScope, $scope) {
	$rootScope.$broadcast('branding-guide');
});