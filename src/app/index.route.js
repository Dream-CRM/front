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
			.state('translate', {
				url: '/translate',
				templateUrl: 'app/translate/translate.html',
				controller: 'TranslateController',
				controllerAs: 'translate',
				access: [1]
			})
			.state('signup', {
				url: '/signup',
				templateUrl: 'app/signup/signup.html',
				controller: 'SignupController',
				controllerAs: 'signup',
				access: [1, 2]
			});

			/* TODO Add access to documentation*/
			// User access-levels:
			// 0: Nothing
			// 1: Admin
			// 2: User


		$urlRouterProvider.otherwise('signup');
		$locationProvider.html5Mode(true);
	}

})();
