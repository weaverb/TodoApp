(function () {
    'use strict';

    angular
        .module('app')
        .factory('itemservice', itemservice);

    itemservice.$inject = ['$http'];

    function itemservice($http) {
        var service = {
            getData: getData,
            save:save
        };

        return service;

        function getData() {
            return $http({ method: 'GET', url: 'api/items' })
                    .success(function (data, status, headers, config) {
                        return data;
                    })
                    .catch(function (data, status, headers, config) {
                        console.log(data);
                    });

        }

        function save(item) {
            return $http({ method: 'POST', url: 'api/items/add', msg: item })
                    .success(function (data, status, headers, config) {
                        return data;
                    })
                    .catch(function (data, status, headers, config) {
                        console.log(data);
                    });
        }
    }
})();
