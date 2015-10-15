(function() {
	'use strict';

	angular
		.module('dreamCrm')
		.run(runBlock);

	/** @ngInject */
	function runBlock($log, $rootScope, $injector) {
		$rootScope.$on('$stateChangeStart', function(event, next, params) {
			// console.log(route.access.indexOf(3));
			// if(next.access.indexOf(3) === -1) {
			// 	event.preventDefault();
			// 	$injector.get('$state').go('translate');
			// }
		});
		$log.debug('runBlock end');
	}

})();
