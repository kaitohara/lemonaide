app.controller('businessListCtrl', function($http, $scope) {
    
    (function() {
        $http.get('/youthList')
            .then(function(youthBusinesses) {
                $scope.youthBusinesses = youthBusinesses;
            })
    })()


})