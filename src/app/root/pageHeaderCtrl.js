/**
 * Created by NicolasZHANG on 14-6-10.
 */
define(['app'], function (app) {
    'use strict';

    app.register.controller('PageHeaderCtrl',
        ['$scope', '$state', function ($scope, $state) {
            $scope.$state = $state;
        }]);

});

