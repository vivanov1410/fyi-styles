'use strict';

angular.module('fyi-styles')
.controller('GridSystemCtrl', function ($rootScope, $scope) {
  
  $rootScope.$broadcast('grid-system');

});