app.factory("todoFactory", function($http) {
	return {
		addTodo: function(newTodo) {
			return $http.post('/addTodo', newTodo)
				.then(function(res) {
					return res.data;
				})
		},
		updateTodo: function(todo, done){
			var todoObj = {todo:todo, done:done};
			console.log(todoObj)
			return $http.post('/updateTodo', todoObj)
				.then(function(res) {
					return res.data;
				})
		},
		removeTodo: function(todo){
			return $http.post('/removeTodo', {todo:todo})
				.then(function(res) {
					return res.data;
				})
		}
	};
})