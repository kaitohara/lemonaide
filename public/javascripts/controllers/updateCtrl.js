app.controller('updateCtrl', function($scope) {
	$scope.updatedObj = {
		price: null,
		productName: null,
	};

	$scope.updateSettings = function() {
		updateFactory.updateSettings(this.updatedObj) //'this' might be wrong
			.then(function(updatedObj) {
				$rootScope.$broadcast('updatedObj', updatedObj) // broadcast specific properties
			})
			.then(function() {
				$state.go('dashboard.overview')
			});
	}
})