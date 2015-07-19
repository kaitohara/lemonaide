app.controller('overviewCtrl', function($scope, overviewFactory) {
	$scope.unitPrice = function(){
		return overviewFactory.getPrice();
	}
	$scope.dollarsEarned = function() {
		return 5;
	}
})