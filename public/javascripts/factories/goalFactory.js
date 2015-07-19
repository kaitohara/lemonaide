app.factory("goalFactory", function($http) {
	return {
		getGoal: function() {
			return $http.get('/youth').then(function(response) {
				console.log(response.data[0].products[0].price)
				return response.data[0];
			});
		},
		getTotalEarned: function() {
			return $http.get('/youth').then(function(response) {
				console.log(response.data[0].products[0].price)
				return response.data[0].products[0];
			});
		},
		addGoal: function(newGoal) {
			console.log(newGoal)
			return $http.post('/addGoal', {data:newGoal})
		}

	}
})