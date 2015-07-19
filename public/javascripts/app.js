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
			controller: "signupCtrl",
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
	.state("signup.charity-pick", {
			url: "/charity-picker",
			templateUrl: "templates/signup-questions/charityPick.html"
		})
		.state("dashboard", {
			url: "/dashboard",
			controller: 'dashboardCtrl',
			templateUrl: '/templates/dashboard.html'
		})
		.state("dashboard.overview", {
			url: "/overview",
			controller: "overviewCtrl",
			templateUrl: '/templates/overview.html'
		})
		.state("dashboard.update", {
			url: "/update",
			controller: "updateCtrl",
			templateUrl: '/templates/update.html'
		})
		.state("dashboard.todo", {
			url: '/todo',
			templateUrl: '/templates/todo.html',
			controller: "todoCtrl"
		})
		.state("dashboard.goal", {
			url: '/goal',
			templateUrl: '/templates/goal.html',
			controller: "goalCtrl"
		})
		.state("dashboard.add", {
			url: '/add',
			templateUrl: '/templates/add.html',
			controller: "addCtrl"
		})
		.state("youthBusinesses", {
			url: '/youthBusinesses',
			templateUrl: '/templates/sponsorSide/businessList.html',
			controller: "businessListCtrl"
		})
		.state("detail", {
			url: '/youthBusiness/detail/:firstName',
			resolve: {
				resolvedBiz: function($http, $stateParams){
					return $http.get('/youthList/detail/'
						+$stateParams.bizId)
				}
			},
			controller: function($scope){
				$scope.biz = resolvedBiz();
			},
			template: '<p>stuffff</p><br><p>{{biz}}</p>'

		})

		// resolve: {
  //       	// resCard: function($stateParams, FlashCardFactory){
  //       	// 	return FlashCardFactory.getOne($stateParams.cardId).then(null, console.log)
  //       	// }
  //       	resCard: function($http, $stateParams){
  //       		return $http.get('/cards/'+ $stateParams.cardId)
  //       	}
  //       },
  //       controller: function(resCard, $scope){
  //       	$scope.resolvedCard = resCard.data;
  //       },


		// .state("dashboard.update", {
		// 	url: '/update',
		// 	templateUrl: '/templates/update.html',
		// 	controller: "updateCtrl"
		// })
		// .state("dashboard", {})
})