dashboard.directive('system', function () {
    return {
        restrict: 'E',
        scope: {
            data: '=data'
        },
        templateUrl: function (elem, attr) {
            return 'app/pages/monitoring/directives/system/index.html';
        }
    };
});
