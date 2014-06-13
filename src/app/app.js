/**
 * Created by NicolasZHANG on 14-6-10.
 */

define([ 'angularAMD', 'bootstrap', 'angular-animate', 'angular-ui-router', 'angular-ui-router-breadcrumbs', 'angular-simple-clock', 'ng-grid'],
    function (angularAMD) {
        'use strict';

        var app = angular.module('myApp',
            ['ui.router', 'ngAnimate', 'simpleClockModule', 'ngGrid', 'ui.router.breadcrumbs']);

        app.config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('home');

                $stateProvider
                    .state('root', {
                        abstract: true,
                        url: '',
                        breadcrumb: {
                            text: 'Home',
                            stateName: 'root.home'
                        },
                        views: {
                            'header': angularAMD.route({
                                templateUrl: 'app/root/header.html',
                                controller: 'HeaderCtrl',
                                controllerUrl: 'root/headerCtrl'
                            }),
                            'sidebar': angularAMD.route({
                                templateUrl: 'app/root/sidebar.html',
                                controller: 'SidebarCtrl',
                                controllerUrl: 'root/sidebarCtrl'
                            }),
                            'pageHeader': angularAMD.route({
                                templateUrl: 'app/root/pageHeader.html',
                                controller: 'PageHeaderCtrl',
                                controllerUrl: 'root/pageHeaderCtrl'
                            }),
                            'footer': angularAMD.route({
                                templateUrl: 'app/root/footer.html'
                            })
                        }
                    })
                    .state('root.home', {
                        url: '/home',
                        breadcrumb: {
                            text: 'Home',
                            stateName: 'root.home'
                        },
                        views: {
                            '@': angularAMD.route({
                                templateUrl: 'app/root/home/home.html',
                                controller: 'HomeCtrl',
                                controllerUrl: 'root/home/homeCtrl'
                            })
                        }
                    })
                    .state('root.functions', angularAMD.route({
                        abstract: true,
                        url: '/functions',
                        breadcrumb: {
                            text: 'Functions',
                            stateName: 'root.functions.products'
                        },
                        template: '<ui-view/>'
                    }))
                    .state('root.functions.products', angularAMD.route({
                        url: '/products',
                        breadcrumb: {
                            text: 'Product List',
                            stateName: 'root.functions.products'
                        },
                        views: {
                            '@': angularAMD.route({
                                templateUrl: 'app/root/functions/products.html',
                                controller: 'ProductsCtrl',
                                controllerUrl: 'root/functions/productsCtrl'
                            })
                        }
                    }));
            }]);

        angularAMD.bootstrap(app);
        return app;
    });