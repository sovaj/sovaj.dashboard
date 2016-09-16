dashboard.directive('dependency', function () {
    return {
        restrict: 'E',
        scope: {
            data: '=data'
        },
        templateUrl: function (elem, attr) {
            return 'app/pages/monitoring/directives/dependency/index.html';
        }
    };
});
