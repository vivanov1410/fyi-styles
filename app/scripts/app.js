'use strict';

angular.module('fyi-styles', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/get-started');

  $stateProvider
    .state('get-started', {
      url: '/get-started',
      templateUrl: 'scripts/get-started/get-started.html',
      controller: 'GetStartedCtrl'
    })
    .state('branding-guide', {
      url: '/branding-guide',
      templateUrl: 'scripts/branding-guide/branding-guide.html',
      controller: 'BrandingGuideCtrl'
    })
    .state('developer-guide', {
      url: '/developer-guide',
      templateUrl: 'scripts/developer-guide/developer-guide.html',
      controller: 'DeveloperGuideCtrl'
    });
});