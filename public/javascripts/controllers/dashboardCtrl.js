app.controller('dashboardCtrl', function($scope, $state, $stateParams) {
	$scope.dashboard = function() {
		console.log('woo')
	}
	$scope.todo = function() {
		console.log('woo')
	}
	console.dir($stateParams);
})