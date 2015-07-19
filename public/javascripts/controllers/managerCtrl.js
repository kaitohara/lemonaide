app.controller('overviewCtrl', function($scope, $rootScope, overviewFactory, goalFactory) {
	$scope.numberSoldToday = 0;
	$scope.unitPrice;
	$scope.prevNumberSold;
	$scope.userName;
	$scope.businessName;
	$scope.goalAmount;
	$scope.totalEarned;
	$rootScope.numberSoldToday;


	overviewFactory.getNumberSold().then(function(data) {
		$scope.prevNumberSold = data;
	});

	goalFactory.getGoal().then(function(data) {
		$scope.goalAmount = data.goalAmount;
	});

	goalFactory.getTotalEarned().then(function(data) {
		$scope.totalEarned = data.price * data.numberSold

	});
	$scope.totalSold = function() {
		console.log($scope.prevNumberSold, $scope.numberSoldToday)
		console.log($rootScope.numberSoldToday)
		return $scope.prevNumberSold + $scope.numberSoldToday;
	}
	$scope.percent = function() {
		var total = $scope.totalEarned + ($scope.numberSoldToday * $scope.unitPrice)
		return Math.floor((total / $scope.goalAmount) * 100)
	}
	$scope.updateRoot = function() {
		$rootScope.numberSoldToday = $scope.numberSoldToday;
		console.log($rootScope.numberSoldToday);
	}
	overviewFactory.getPrice().then(function(data) {
		$scope.unitPrice = data;
	});
	// $scope.unitPrice = 8;
	$scope.dollarsEarned = function() {
		return 5;
	}
	overviewFactory.getUsername().then(function(data) {
		$scope.userName = data;
	})
	overviewFactory.getBusinessName().then(function(data) {
		$scope.businessName = data;
	})
})