/**
 * Created by NicolasZHANG on 14-6-10.
 */
define(['../../app'], function (app) {
    'use strict';

    app.register.controller('HomeCtrl', ['$scope', function ($scope) {
        $scope.date = new Date();
    }]);

});

