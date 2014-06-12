/**
 * Created by NicolasZHANG on 14-6-10.
 */
define(['app', 'ngload!angular-simple-clock'], function (app) {
    'use strict';

    app.register.controller('HomeCtrl', ['$scope', 'simpleClockModule', function ($scope) {
        $scope.date = new Date();
    }]);

});

