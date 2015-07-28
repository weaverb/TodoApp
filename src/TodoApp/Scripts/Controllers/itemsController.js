(function () {
    'use strict';

    angular
        .module('todoApp')
        .controller('itemsController', itemsController);

    itemsController.$inject = ['$scope', 'Items']; 

    function itemsController($scope, Items) {
        $scope.items = Items.query();

    }
})();
