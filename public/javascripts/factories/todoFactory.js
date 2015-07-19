app.factory("todoFactory", function($http) {
	return {
		addTodo: function(newTodo) {
			console.log('in factory')
			return $http.post('/addTodo', newTodo)
				.then(function(res) {
					return res.data;
				})
		}
	};
})