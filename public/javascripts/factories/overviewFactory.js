app.factory("overviewFactory", function($http) {
	return {
		getPrice: function() {
			return $http.get('/youth').then(function(response) {
				console.log(response.data[0].products[0].price)
				return response.data[0].products[0].price;
			});
		},
		getNumberSold: function() {
			return $http.get('/youth').then(function(response) {
				console.log(response.data[0].products[0].numberSold)
				return response.data[0].products[0].numberSold;
			});
		},
		getUsername: function() {
			return $http.get('/youth').then(function(response) {
				console.log(response.data[0].firstName)
				return response.data[0].firstName;
			});
		},
		getBusinessName: function() {
			return $http.get('/youth').then(function(response) {
				console.log(response.data[0].businessName)
				return response.data[0].businessName;
			});
		}
	}
})