app.controller('todoCtrl', function($scope, todoFactory, overviewFactory) {
	$scope.todos = [];
	$scope.newTodo = {};
	$scope.done;

	overviewFactory.getTodo().then(function(data){
		console.log('data',data)
		$scope.todos = data
	})
	$scope.addTodo = function(newTodo){
		console.log($scope.newTodo)
		todoFactory.addTodo(newTodo).then(function(data){
		})
			$scope.todos.push({todo:$scope.newTodo.todo, done:false})
			$scope.newTodo = '';
	}
	$scope.updateTodo = function(todo, done){
		console.log(todo, done)
		todoFactory.updateTodo(todo, done).then(function(data){
			console.log('updated')
		})
	}
	$scope.removeTodo = function(todo){
		console.log(todo)
		todoFactory.removeTodo(todo).then(function(data){
			console.log('removed')
		})
		for (var i in $scope.todos){
			if ($scope.todos[i].todo === todo){
				$scope.todos.splice(i, 1)
			}
		}

	}

})