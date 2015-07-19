app.controller('businessListCtrl', function($http, $scope, $state) {
    
    (function() {
        $http.get('/youthList')
            .then(function(youthBusinesses) {
                $scope.youthBusinesses = youthBusinesses;
            })
    })()

    $scope.goDetail = function(firstName){
    	$http.get('/youthList/detail/'+firstName)
            .then(function(biz) {
            	console.log(biz.data)
                $state.go("detail", {firstName: biz.data.firstName});
            })
    }

})