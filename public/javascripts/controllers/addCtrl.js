app.controller('addCtrl', function($scope, $state, addFactory, updateFactory) {
	$scope.updatedObj = {
		name: null,
		price: null,
		cost: null
	};

	$scope.addProduct = function() {
		// console.log(this.updatedObj)
		addFactory.addProduct(this.updatedObj) //'this' might be wrong
			.then(function(updatedObj) {
				$rootScope.$broadcast('updatedObj', updatedObj) // broadcast specific properties
			})
			.then(function() {
				$state.go('dashboard.overview')
			});
	}

	$scope.updateSettings = function() {
		console.log('a', this.updatedObj)
		updateFactory.updateSettings(this.updatedObj)
		.then(function(data){
			console.log(data)
			$state.go('dashboard.overview')
			console.log('b')
		})
	}
})