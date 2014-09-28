'use strict';

angular.module('fyi-styles')
.controller('NavSideCtrl', function ($scope, $timeout) {

	$scope.menu = [
    {
      title: 'Typography',
      link: '/developer-guide/typography',
      submenu: [
      	{
      		title: 'Headings'
      	}
      ]
    },
    {
      title: 'Colors',
      link: '/developer-guide/colors',
      submenu: [
      	{
      		title: 'Brand'
      	},
      	{
      		title: 'Pelette'
      	}
      ]
    },
    {
      title: 'Buttons',
      link: '/developer-guide/buttons',
      submenu: [
      	{
      		title: 'Button variant'
      	},
      	{
      		title: 'Disabled state'
      	},
      	{
      		title: 'Active state'
      	}
      ]
    }
  ];

  // TODO: fix this
  $timeout(function() {
	  $('.nav--side__submenu').hide();
	  $('.nav--side__item a').on('click', function () {
	    var content = $(this).next('.nav--side__submenu');
	    if(!content.is(':visible')) {
	      content.slideDown();
	    }
	    else {
	      content.slideUp();
	    }
	  });
  }, 100);

});