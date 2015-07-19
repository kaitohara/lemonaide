app.controller('addCtrl', function($scope, addFactory) {
	$scope.updatedObj = {
		name: null,
		price: null,
		cost: null
	};

	$scope.addProduct = function() {
		console.log(this.updatedObj)
		addFactory.addProduct(this.updatedObj) //'this' might be wrong
			.then(function(updatedObj) {
				$rootScope.$broadcast('updatedObj', updatedObj) // broadcast specific properties
			})
			.then(function() {
				$state.go('dashboard.overview')
			});
	}
})