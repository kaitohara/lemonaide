app.factory("updateFactory", function($http) {
	return {
		updateSettings: function(updatedObj) {
			return $http.put('/updateSettings', updatedObj)
				.then(function(res) {
					return res.data;
				})
		}
	};
})