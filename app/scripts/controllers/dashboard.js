'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('DashboardCtrl',function($scope, $state,SampleService) {

	SampleService.query(function(data) {
		$scope.data = data;
		alert('Hurray !!! it working');
		console.dir(data);
	});
		
		
    $scope.state = $state;
	

  });
