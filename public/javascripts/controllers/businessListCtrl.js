app.controller('businessListCtrl', function($http, $scope, $state) {
    function() {
        $http.get('/youthList').exec()
            .then(function(youthBusinesses) {
                $scope.youthBusinesses = youthBusinesses;
            })
    }
})