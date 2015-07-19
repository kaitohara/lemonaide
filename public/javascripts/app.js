var app = angular.module("lemonaide", ['ui.router']);

app.config(function($stateProvider, $locationProvider) {
	$stateProvider
		.state("splashPage", {
			url: "",
			templateUrl: '/templates/splashPage.html'
		})
		.state("login", {
			url: "/login",
			templateUrl: "/templates/login.html",
		})
		.state("signup", {
			url: "/signup",
			templateUrl: "/templates/signup.html"
		})
		.state("signup.name", {
			url: "/name",
			templateUrl: "/templates/signup-questions/name.html"
		})
		.state("signup.business-name", {
			url: "/business-name",
			templateUrl: "templates/signup-questions/business-name.html"
		})
		.state("signup.product", {
			url: "/product",
			templateUrl: "templates/signup-questions/product.html"
		})
		.state("signup.business-statement", {
			url: "/business-statement",
			templateUrl: "templates/signup-questions/business-statement.html"
		})
		// .state("dashboard", {})
})