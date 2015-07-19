app.controller('overviewCtrl', function($scope, overviewFactory) {
	$scope.numberSoldToday = 0;
	$scope.unitPrice;
	$scope.prevNumberSold;
	$scope.userName;
	$scope.businessName;
	overviewFactory.getNumberSold().then(function(data) {
		$scope.prevNumberSold = data;
	});

	$scope.totalSold = function() {
		console.log($scope.prevNumberSold, $scope.numberSoldToday)
		return $scope.prevNumberSold + $scope.numberSoldToday;
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