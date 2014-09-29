'use strict';

angular.module('fyi-styles')
.controller('TablesCtrl', function ($rootScope, $scope) {
  
  $rootScope.$broadcast('tables');

});