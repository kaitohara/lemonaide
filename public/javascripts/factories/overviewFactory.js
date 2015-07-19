app.factory("overviewFactory", function($http) {
	return {
		getPrice: function(){
			return $http.get('');
		}
	}
})