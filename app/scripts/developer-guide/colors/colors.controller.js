'use strict';

angular.module('fyi-styles')
.controller('ColorsCtrl', function ($rootScope, $scope) {
  
	$rootScope.$broadcast('colors');

	$scope.colors = [
		{
			name: 'Red',
			ranges: {
				50:   '#fde0dc',
			  100:  '#f9bdbb',
			  200:  '#f69988',
			  300:  '#f36c60',
			  400:  '#e84e40',
			  500:  '#e51c23',
			  600:  '#dd191d',
			  700:  '#d01716',
			  800:  '#c41411',
			  900:  '#b0120a'
			}
		},
		{
			name: 'Blue',
			ranges: {
				50:   '#e5edf0',
			  100:  '#ccdbe2',
			  200:  '#99b8c6',
			  300:  '#6695a9',
			  400:  '#32728d',
			  500:  '#004f71',
			  600:  '#003f5a',
			  700:  '#00374f',
			  800:  '#002f43',
			  900:  '#002738'
			}
		},
		{
			name: 'Cyan',
			ranges: {
				50:  '#e0f7fa',
			  100: '#b2ebf2',
			  200: '#80deea',
			  300: '#4dd0e1',
			  400: '#26c6da',
			  500: '#00bcd4',
			  600: '#00acc1',
			  700: '#0097a7',
			  800: '#00838f',
			  900: '#006064'
			}
		},
		{
			name: 'Teal',
			ranges: {
				50:   '#e0f2f1',
			  100:  '#b2dfdb',
			  200:  '#80cbc4',
			  300:  '#4db6ac',
			  400:  '#26a69a',
			  500:  '#009688',
			  600:  '#00897b',
			  700:  '#00796b',
			  800:  '#00695c',
			  900:  '#004d40'
			}
		},
		{
			name: 'Light Green',
			ranges: {
				50:   '#f1f8e9',
			  100:  '#dcedc8',
			  200:  '#c5e1a5',
			  300:  '#aed581',
			  400:  '#9ccc65',
			  500:  '#8bc34a',
			  600:  '#7cb342',
			  700:  '#689f38',
			  800:  '#558b2f',
			  900:  '#33691e'
			}
		},
		{
			name: 'Amber',
			ranges: {
				50:   '#fff8e1',
			  100:  '#ffecb3',
			  200:  '#ffe082',
			  300:  '#ffd54f',
			  400:  '#ffca28',
			  500:  '#ffc107',
			  600:  '#ffb300',
			  700:  '#ffa000',
			  800:  '#ff8f00',
			  900:  '#ff6f00'
			}
		},
		{
			name: 'Light Orange',
			ranges: {
				50:   '#fff3e0',
			  100:  '#ffe0b2',
			  200:  '#ffcc80',
			  300:  '#ffb74d',
			  400:  '#ffa726',
			  500:  '#ff9800',
			  600:  '#fb8c00',
			  700:  '#f57c00',
			  800:  '#ef6c00',
			  900:  '#e65100'
			}
		},
		{
			name: 'Deep Orange',
			ranges: {
				50:   '#fbe9e7',
			  100:  '#ffccbc',
			  200:  '#ffab91',
			  300:  '#ff8a65',
			  400:  '#ff7043',
			  500:  '#ff5722',
			  600:  '#f4511e',
			  700:  '#e64a19',
			  800:  '#d84315',
			  900:  '#bf360c'
			}
		},
		{
			name: 'Blue Grey',
			ranges: {
				50:   '#eceff1',
			  100:  '#cfd8dc',
			  200:  '#b0bec5',
			  300:  '#90a4ae',
			  400:  '#78909c',
			  500:  '#607d8b',
			  600:  '#546e7a',
			  700:  '#455a64',
			  800:  '#37474f',
			  900:  '#263238'
			}
		},
		{
			name: 'Grey',
			ranges: {
				50:   '#fafafa',
			  100:  '#f5f5f5',
			  200:  '#eeeeee',
			  300:  '#e0e0e0',
			  400:  '#bdbdbd',
			  500:  '#9e9e9e',
			  600:  '#757575',
			  700:  '#616161',
			  800:  '#424242',
			  900:  '#212121',
			  1000: '#000000'
			}
		}
	];

	$scope.ranges = function (obj) {
	  return obj ? Object.keys(obj) : [];
	};

});