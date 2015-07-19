app.controller('signupCtrl', function($scope, $http) {
	$scope.signupUser = {};
	$scope.signUp = function(charity, newKidData) {
		// console.log(newKidData);
		// console.log(charity);
		newKidData.charityOfChoice = charity._id;
		console.log("New Kid", newKidData)
		$http.post("/youth", newKidData)
			.then(function(data, status) {
				console.log(data);
			})
	}
	$http.get('/charities')
		.then(function(data, status) {
			$scope.charities = data;
			console.log($scope.charities);
		})
})