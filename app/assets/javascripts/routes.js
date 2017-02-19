(function () {
    'use strict';

    angular
        .module('mysite')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'home/home.html'
                })
            $urlRouterProvider.otherwise('/')
        });
}());
