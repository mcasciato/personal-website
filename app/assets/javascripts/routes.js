(function () {
    'use strict';

    angular
        .module('app')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'home/home.html'
                })
                .state('home.about', {
                    url: 'about',
                    templateUrl: 'about/about.html'
                })
                .state('home.portfolio', {
                    url: 'portfolio',
                    templateUrl: 'portfolio/portfolio.html'
                })
                .state('home.contact', {
                    url: 'contact',
                    templateUrl: 'contact/contact.html'
                })

            $urlRouterProvider.otherwise('/')
        });
}());
