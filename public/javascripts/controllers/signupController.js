app.controller('signupCtrl', function($scope, $http) {
	$scope.signupUser = {};
	$scope.signUp = function(newKidData) {
		console.log(newKidData);
		$http.post("/youth", newKidData)
			.then(function(data, status) {
				console.log(data);
			})
	}

})