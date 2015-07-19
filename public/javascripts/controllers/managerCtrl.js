app.controller('overviewCtrl', function($scope, overviewFactory) {
	
	$scope.unitPrice;
	$scope.numberSold;
	overviewFactory.getPrice().then(function(data){
		$scope.unitPrice = data;
	});
	overviewFactory.getNumberSold().then(function(data){
		$scope.numberSold = data;
	});
	// $scope.unitPrice = 8;
	$scope.dollarsEarned = function() {
		return 5;
	}
})