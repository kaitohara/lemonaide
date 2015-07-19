app.factory("addFactory", function($http) {
	return {
		addProduct: function(updatedObj) {
			return $http.put('/addProduct', updatedObj)
				.then(function(res) {
					return res.data;
				})
		}
	};
})