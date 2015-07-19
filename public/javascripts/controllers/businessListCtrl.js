app.controller('businessListCtrl', function ($http, $scope, $state){
	$scope.youth = function(){
		//console.log('woo')
		$http.get('/youthList').exec()
			.then(function(youthBusinesses){
				$scope.youthBusinesses = youthBusinesses;
		})
	}
})