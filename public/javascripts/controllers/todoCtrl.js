app.controller('todoCtrl', function($scope, todoFactory, overviewFactory) {
	$scope.todos = [];
	$scope.newTodo = {};
	overviewFactory.getTodo().then(function(data){
		console.log(data)
		$scope.todos = data
	})
	$scope.addTodo = function(newTodo){
		console.log($scope.newTodo)
		todoFactory.addTodo(newTodo).then(function(data){
		
		})
	}

})