/**
 * Created by NicolasZHANG on 14-6-10.
 */
'use strict';

require.config({
    baseUrl: "app",
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery',
        'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
        'angular': '../bower_components/angular/angular',
        'angular-animate': '../bower_components/angular-animate/angular-animate',
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
        'angularAMD': 'lib/angularAMD',
        'ngload': '../bower_components/angularAMD/ngload',
        'angular-ui-router-breadcrumbs': '../bower_components/angular-ui-router-breadcrumbs/dist/angular-ui-router-breadcrumbs',
        'ng-grid': '../bower_components/ng-grid/ng-grid-2.0.11.debug',
        'angular-simple-clock': '../bower_components/angular-simple-clock/src/simpleClock',
        // Controller路径定义

    },
    shim: {
        'bootstrap': ['jquery'],
        'angularAMD': ['angular'],
        'angular-animate': ['angular'],
        'angular-ui-router': ['angular'],
        'angular-ui-router-breadcrumbs': ['angular-ui-router'],
        'ng-grid': ['angular','jquery'],
        'angular-simple-clock': ['angular']
    },
    deps: ['app']
});