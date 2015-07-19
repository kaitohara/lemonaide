app.factory("signUpFactory", function($scope, $http) {
	return {
		signUp: function(newKidData) {
			console.log(newKidData);
			$http.post('/youth', {
				data: newKidData
			})
		}
	}
})