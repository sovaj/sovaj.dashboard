rmsApp.controller('AuthenticationCtrl', function ($scope, $http, $window, $resource) {
    $scope.password = "";
    $scope.user = {login: $scope.username, password: $scope.password};
    $scope.message = '';
//    var Property = $resource('./../../properties?property=:property');
//    Property.get({property: "rms.job.url"}, function (property) {
//        $scope.applicationVersion = property[0].Value;
//    });
    $scope.submit = function (username, password) {
        $scope.user = {login: username, password: password};
        $http
                .post('./api/authentication', $scope.user)
                .success(function (data, status, headers, config) {
                    if (status === 401) {
                        // Erase the token if the user fails to log in
                        delete $window.localStorage.token;
                        $scope.password = "";
                        // Handle login errors here
                        $scope.message = 'Invalid user and/or password';
                        return;
                    }
                    $window.localStorage.token = data.token;
                    $window.location.href = "./protected/user/#/home";
                })
                .error(function (data, status, headers, config) {
                    // Erase the token if the user fails to log in
                    delete $window.localStorage.token;
                    $scope.password = "";
                    // Handle login errors here
                    $scope.message = 'Invalid user and/or password';
                });
    };
});