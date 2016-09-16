dashboard.directive('listLogs', function () {
    return {
        restrict: 'E',
        scope: {
            data: '=data'
        },
        templateUrl: function (elem, attr) {
            return 'app/pages/logs/directives/listLogs/index.html';
        }
    };
});
