(function () {
    'use strict';

    config.$inject = ['$routeProvider', '$locationProvider'];

    angular.module('app', ['ngRoute']).config(config);

    function config($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: '/lib/Views/list.html',
            controller: 'itemsCtrl',
            controllerAs: 'vm'
        }).when('/items/add', {
            templateUrl: '/lib/Views/add.html',
            controller: 'itemsAddCtrl',
            controllerAs: 'vm'
        });

        $locationProvider.html5Mode(true);
    }
})();