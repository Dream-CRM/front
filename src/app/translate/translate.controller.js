(function() {
	'use strict';

	angular
		.module('dreamCrm')
		.controller('TranslateController', TranslateController);

	/** @ngInject */
	function TranslateController($scope, _) {
		$scope._ = _;
		$scope.testArray = [];
		$scope.model = {};

		$scope.changeMode = function(el, bool) {
			el.isEdit = bool;
		};

		$scope.addItem = function(model) {
			if(model.$valid) {
				$scope.testArray.unshift($scope.model);
				$scope.model = {};
			}
		};

		$scope.removeElement = function(element) {
			var idx = $scope.testArray.indexOf(element);
			$scope.testArray.splice(idx, 1);
		};
		
		function fillArray() {
			for(var i = 0; i < 10; i++) {
				$scope.testArray.push({
					key: 'key' + i,
					'ru-RU': ('ru-RU' + i),
					'en-EN': ('en-EN' + i)
				});
			}
		}

		function init() {
			fillArray();
		}

		init();

	}
})();
