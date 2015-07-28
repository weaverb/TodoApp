(function () {
    'use strict';

    var todoItemServices = angular.module('todoItemServices', ['ngResource']);

    todoItemServices.factory('Items', ['$resource',
      function ($resource) {
          return $resource('/api/items/', {}, {
              query: { method: 'GET', params: {}, isArray: true }
          });
      }]);


})();
