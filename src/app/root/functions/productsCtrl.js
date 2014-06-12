/**
 * Created by NicolasZHANG on 14-6-10.
 */
define(['../../app', 'ngload!ng-grid'], function (app) {
    'use strict';

    app.register.controller('ProductsCtrl', ['$scope', 'ngGrid', function ($scope) {
        $scope.data = [
            {
                id: 1,
                name: 'Angular.JS book',
                price: 10.0
            },
            {
                id: 2,
                name: 'Node.JS book',
                price: 14.0
            },
            {
                id: 3,
                name: 'TDD book',
                price: 12.0
            }
        ];

        $scope.gridOptions = {
            data: 'data'
        };
    }]);

});

