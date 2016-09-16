dashboard.controller('AppCtrl', function ($scope) {

    $scope.setActive = function (type) {
        $scope.monitoringActive = '';
        $scope.documentationActive = '';
        $scope.logsActive = '';
        $scope.settingsActive = '';
        $scope[type + 'Active'] = 'active';
    };
    
    $scope.setSecondLevelActive  = function (type) {
        $scope.profileActive = '';
        $scope.usersActive = '';
        $scope[type + 'Active'] = 'active';
    };
});