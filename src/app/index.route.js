(function() {
	'use strict';

	angular
		.module('dreamCrm')
		.config(routeConfig);

	/** @ngInject */
	function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider
			// .state('home', {
			// 	url: '/',
			// 	templateUrl: 'app/main/main.html',
			// 	controller: 'MainController',
			// 	controllerAs: 'main'
			// })
			// .state('contacts', {
			// 	url: '/contacts',
			// 	templateUrl: 'app/contacts/contacts.html',
			// 	controller: 'ContactsController',
			// 	controllerAs: 'contacts'
			// })
			.state('signup', {
				url: '/signup',
				templateUrl: 'app/signup/signup.html',
				controller: 'SignupController',
				controllerAs: 'signup'
			});

		$urlRouterProvider.otherwise('signup');
		$locationProvider.html5Mode(true);
	}

})();
