(function() {
	'use strict';

	angular
		.module('dreamCrm')
		.controller('SignupController', SignupController);

	/** @ngInject */
	function SignupController($scope) {
		$scope.model = {};
		$scope.vm = {};

        $scope.signUp = function(form) {
			console.log(form);
		};
	}
})();
