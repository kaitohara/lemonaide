app.controller('goalCtrl', function($rootScope, $scope, overviewFactory, goalFactory) {
	$scope.goalDescription;
	$scope.goalAmount;
	$scope.totalEarned;
	$scope.addedGoal = {};
	$scope.showSuccess = false;
	$rootScope.numberSoldToday;
	overviewFactory.getPrice().then(function(data) {
		$scope.unitPrice = data;
	});
	$scope.remaining = function(){
		return Math.ceil(($scope.goalAmount-$scope.totalEarned)/$scope.unitPrice)
	}
	$scope.percent = function(){
		return Math.floor(($scope.totalEarned/$scope.goalAmount)*100)
	}
	goalFactory.getGoal().then(function(data){
		$scope.goalDescription = data.goalDescription;
		$scope.goalAmount = data.goalAmount;
	});
	goalFactory.getTotalEarned().then(function(data){
		// $scope.totalEarned = data.price*data.numberSold
		// $scope.$on('numberUpdate', function(){

		// })
		var num = $rootScope.numberSoldToday || 0;
		$scope.totalEarned = num*data.price
	})
	$scope.addGoal = function(newGoal){
		console.log(newGoal)
		goalFactory.addGoal(newGoal).then(function(data){
			console.log('woo')

		})
		$scope.goalDescription = newGoal.description;
		$scope.goalAmount = newGoal.amount;
		$scope.showSuccess = true;
	}

})