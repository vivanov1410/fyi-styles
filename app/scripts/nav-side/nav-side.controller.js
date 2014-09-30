'use strict';

angular.module('fyi-styles')
.controller('NavSideCtrl', function ($scope, $timeout, $location, $anchorScroll) {

	var menus = {
    'get-started': [
      {
        title: 'Download'
      },
      {
        title: 'Boom'
      }
    ],
    'branding-guide': [
      {
        title: 'Logo',
        link: '/branding-guide/logo',
        opened: false,
        submenu: [
          { title: 'Our logo', anchor: 'our-logo' },
          { title: 'Logo colors', anchor: 'logo-colors' },
          { title: 'Logo misuse', anchor: 'logo-misuse' },
          { title: 'Spacing', anchor: 'spacing' },
          { title: 'In writing', anchor: 'in-writing' }
        ]
      }
    ],
    'developer-guide': [
      {
        title: 'Grid System',
        link: '/developer-guide/grid-system',
        opened: false,
        submenu: [
          { title: 'Introduction', anchor: 'introduction' },
          { title: 'Media queries', anchor: 'media-queries' },
          { title: 'Grid options', anchor: 'grid-options' }
        ]
      },
      {
        title: 'Typography',
        link: '/developer-guide/typography',
        opened: false,
        submenu: [
          { title: 'Headings' }
        ]
      },
      {
        title: 'Colors',
        link: '/developer-guide/colors',
        opened: false,
        submenu: [
          { title: 'Brand' },
          { title: 'Palette' }
        ]
      },
      {
        title: 'Buttons',
        link: '/developer-guide/buttons',
        opened: false,
        submenu: [
          { title: 'Types', anchor: 'types' },
          { title: 'Disabled', anchor: 'disabled' },
          { title: 'Active', anchor: 'active'}
        ]
      },
      {
        title: 'Tables',
        link: '/developer-guide/tables',
        opened: false,
        submenu: [
          { title: 'Basic',       anchor: 'tables-basic'      },
          { title: 'Centered',    anchor: 'tables-centered'   },
          { title: 'Condensed',   anchor: 'tables-condensed'  },
          { title: 'Contextual',  anchor: 'tables-contextual' },
          { title: 'Responsive',  anchor: 'tables-responsive' }
        ] 
      }
    ]
  };

  // Listens for broadcast messages from controllers to update menu
  $scope.$on('get-started', function () {
    $scope.menu = menus['get-started'];
  });

  $scope.$on('branding-guide', function () {
    $scope.menu = menus['branding-guide'];
  });

   $scope.$on('logo', function () {
    $scope.menu[0].opened = true;
  });

  $scope.$on('developer-guide', function () {
    $scope.menu = menus['developer-guide'];
  });

  $scope.$on('grid-system', function () {
    $scope.menu[0].opened = true;
  });

  $scope.$on('typography', function () {
    $scope.menu[1].opened = true;
  });

  $scope.$on('colors', function () {
    $scope.menu[2].opened = true;
  });

  $scope.$on('buttons', function () {
    $scope.menu[3].opened = true;
  });

  $scope.$on('tables', function () {
    $scope.menu[4].opened = true;
  });

  /**
   * Redirects to menu item and opens submenu
   * @param  {object} item selected item
   */
  $scope.select = function (item) {
    if(item.submenu) {
      item.opened = !item.opened; 
    }
    $location.url(item.link);
  };

  $scope.goto = function (subitem) {
    $location.hash(subitem.anchor);
    $anchorScroll();
  };

});