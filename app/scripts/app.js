'use strict';

angular.module('fyi-styles', [
  'ngAnimate',
  'ui.router',
  'hljs'])
.config(function ($stateProvider, $urlRouterProvider, $locationProvider, hljsServiceProvider) {

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
      abstract: true,
      url: '/developer-guide',
      templateUrl: 'scripts/developer-guide/developer-guide.html',
      controller: 'DeveloperGuideCtrl'
    })
    .state('developer-guide.grid-system', {
      url: '/grid-system',
      templateUrl: 'scripts/developer-guide/grid-system/grid-system.html',
      controller: 'GridSystemCtrl'
    })
    .state('developer-guide.typography', {
      url: '/typography',
      templateUrl: 'scripts/developer-guide/typography/typography.html',
      controller: 'TypographyCtrl'
    })
    .state('developer-guide.buttons', {
      url: '/buttons',
      templateUrl: 'scripts/developer-guide/buttons/buttons.html',
      controller: 'ButtonsCtrl'
    })
    .state('developer-guide.colors', {
      url: '/colors',
      templateUrl: 'scripts/developer-guide/colors/colors.html',
      controller: 'ColorsCtrl'
    })
    .state('developer-guide.tables', {
      url: '/tables',
      templateUrl: 'scripts/developer-guide/tables/tables.html',
      controller: 'TablesCtrl'
    });

  hljsServiceProvider.setOptions({
    tabReplace: '    '
  });
});