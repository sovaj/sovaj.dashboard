dashboard.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
                when('/monitoring', {
                    templateUrl: 'app/pages/monitoring/index.html',
                    controller: 'MonitoringCtrl'
                }).
                when('/documentation', {
                    templateUrl: 'app/pages/documentation/index.html',
                    controller: 'DocumentationCtrl'
                }).
                when('/logs', {
                    templateUrl: 'app/pages/logs/index.html',
                    controller: 'LogsCtrl'
                }). 
                when('/settings', {
                    templateUrl: 'app/pages/settings/index.html',
                    controller: 'SettingsCtrl'
                }).  
                when('/settings/users', {
                    templateUrl: 'app/pages/settings/pages/users/index.html',
                    controller: 'UsersCtrl'
                }).  
                when('/settings/profile', {
                    templateUrl: 'app/pages/settings/pages/profile/index.html',
                    controller: 'ProfileCtrl'
                }). 
                otherwise({
                    redirectTo: '/monitoring'
                });
    }]);