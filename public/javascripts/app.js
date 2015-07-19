var app = angular.module("lemonaide", ['ui.router']);

app.config(function($stateProvider, $locationProvider) {
	// $locationProvider.html5Mode(true);
	$stateProvider
		.state("splashPage", {
			url: "/",
			templateUrl: '/templates/splashPage.html'
		})
		// .state("login", {})
		// .state("signup",{})
		// .state("signup.section1", {})
		// .state("signup.section2", {})
		.state("overview", {
			url: "/overview",
			controller: "managerCtrl",
			templateUrl: '/templates/overview.html'
		})
		// .state("dashboard.update", {
		// 	url: '/update',
		// 	templateUrl: '/templates/update.html',
		// 	controller: "updateCtrl"
		// })
		.state("todo", {
			url: '/todo',
			templateUrl: '/templates/todo.html',
			controller: "todoCtrl"
		})
})