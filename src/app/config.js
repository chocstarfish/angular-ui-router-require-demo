/**
 * Created by NicolasZHANG on 14-6-10.
 */
'use strict';

require.config({
    baseUrl: "app",
    paths: {
        'angular': '../bower_components/angular/angular.min',
        'angular-animate': '../bower_components/angular-animate/angular-animate.min',
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router.min',
        'angularAMD': '../bower_components/angularAMD/angularAMD.min',
        'angular-ui-router-breadcrumbs': '../bower_components/angular-ui-router-breadcrumbs/dist/angular-ui-router-breadcrumbs.min',
        // Controller路径定义

    },
    shim: {
        'angularAMD': ['angular'],
        'angular-animate': ['angular'],
        'angular-ui-router': ['angular'],
        'angular-ui-router-breadcrumbs': ['angular-ui-router']
    },
    deps: ['app']
});