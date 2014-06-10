/**
 * Created by NicolasZHANG on 14-6-10.
 */
'use strict';

define(['angularAMD', 'angular-animate', 'angular-ui-router', 'angular-ui-router-breadcrumbs'], function (angularAMD) {
    'use strict';

    // 定义应用命名空间
    var app = angular.module('myApp',
        ['ui.router', 'ngAnimate', 'ui.router.breadcrumbs']);

    app.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            // 定义路由
            $urlRouterProvider.otherwise('home');

            $stateProvider
                .state('root', {
                    abstract: true,
                    url: '',
                    breadcrumb: {
                        text: '首页',
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
                        text: '主页',
                        stateName: 'root.home'
                    },
                    views: {
                        '@': angularAMD.route({
                            templateUrl: 'app/home/home.html',
                            controller: 'HomeCtrl',
                            controllerUrl: 'home/homeCtrl'
                        })
                    }
                })
                .state('root.functions', angularAMD.route({
                    abstract: true,
                    url: '/functions',
                    breadcrumb: {
                        text: '功能',
                        stateName: 'root.functions.products'
                    },
                    template: '<ui-view/>'
                }))
                .state('root.functions.products', angularAMD.route({
                    url: '/products',
                    breadcrumb: {
                        text: '产品列表',
                        stateName: 'root.functions.products'
                    },
                    views: {
                        '@': angularAMD.route({
                            templateUrl: 'app/functions/products.html',
                            controller: 'ProductsCtrl',
                            controllerUrl: 'functions/productsCtrl'
                        })
                    }
                }));
        }]);

    // 启动应用
    angularAMD.bootstrap(app);
    return app;
});