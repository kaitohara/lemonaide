app.controller('overviewCtrl', function($scope, overviewFactory) {
	$scope.unitPrice = overviewFactory.getPrice();

	// $scope.unitPrice = 8;
	$scope.dollarsEarned = function() {
		return 5;
	}
})