app.factory("overviewFactory", function($http) {
	return {
		getPrice: function(){
			console.log('a')
			return 8;
		}
	}
})