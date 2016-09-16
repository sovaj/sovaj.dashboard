var dashboard = angular
        .module('dashboard', ['ngRoute', 'ngSanitize', 'ngAnimate']);

dashboard.factory('authInterceptor', function ($q, $window) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            if ($window.localStorage.token
                    && $window.localStorage.token !== undefined
                    && $window.localStorage.token !== 'undefined') {
                config.headers.Authorization = 'Bearer ' + $window.localStorage.token;
            }
            return config;
        },
        response: function (response) {
            if (response.status === 401) {
                $window.location.href = "./../401.html";
            }
            if (response.status === 404) {
                $window.location.href = "./../404.html";
            }
            if (response.status === 500) {
                $window.location.href = "./../500.html";
            }
            return response || $q.when(response);
        },
        // optional method
        responseError: function (response) {
            if (response.status === 401) {
                $window.location.href = "./../401.html";
            }
            return $q.reject(response);
        }
    };
});

dashboard.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');

});

dashboard.run(function ($window, $http) {
    $http.defaults.headers.common.Authorization = 'Bearer ' + $window.localStorage.token;
});

