'use strict';

angular.module('fyi-styles')
.controller('NavMainCtrl', function ($rootScope, $scope, $location) {

	$scope.menu = [
    {
      title: 'Getting Started',
      link: '/get-started',
      route: 'get-started'
    },
    {
      title: 'Branding Guide',
      link: '/branding-guide/logo',
      route: 'branding-guide'
    },
    {
      title: 'Developer Guide',
      link: '/developer-guide/grid-system',
      route: 'developer-guide'
    }
  ];

  /**
   * Checks if current link is active
   * @param  {string} route base route
   * @return {bool}
   */
  $scope.active = function (route) {
    return $location.path().indexOf(route) > -1;
  };

});