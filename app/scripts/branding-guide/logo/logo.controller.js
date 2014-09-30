'use strict';

angular.module('fyi-styles')
.controller('LogoCtrl', function ($rootScope, $scope) {
  
  $rootScope.$broadcast('logo');
  
});