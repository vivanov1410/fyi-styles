'use strict';

angular.module('fyi-styles')
.controller('PagesCtrl', function ($rootScope, $scope) {
  
  $rootScope.$broadcast('pages');

});