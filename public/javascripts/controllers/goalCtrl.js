app.controller('goalCtrl', function($scope, goalFactory) {
	$scope.goalDescription;
	$scope.goalAmount;
	$scope.totalEarned;
	$scope.percent = function(){
		return ($scope.totalEarned/$scope.goalAmount)*100
	}
	goalFactory.getGoal().then(function(data){
		$scope.goalDescription = data.goalDescription;
		$scope.goalAmount = data.goalAmount;
	});
	goalFactory.getTotalEarned().then(function(data){
		$scope.totalEarned = data.price*data.numberSold

	})

})