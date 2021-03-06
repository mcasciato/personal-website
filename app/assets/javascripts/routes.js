(function () {

    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'home/home.html'
                })
                .state('home.skills', {
                    url: 'skills',
                    templateUrl: 'skills/skills.html'
                })
                .state('home.portfolio', {
                    url: 'portfolio',
                    templateUrl: 'portfolio/portfolio.html'
                })
                .state('home.flix4me', {
                    url: 'portfolio/flix4me',
                    templateUrl: 'portfolio/flix4me.html'
                })
                .state('home.myceus', {
                    url: 'portfolio/myceus',
                    templateUrl: 'portfolio/myceus.html'
                })
                .state('home.sinatraInstruments', {
                    url: 'portfolio/sinatraInstruments',
                    templateUrl: 'portfolio/sinatraInstruments.html'
                })
                .state('home.politicalNews', {
                    url: 'portfolio/politicalNews',
                    templateUrl: 'portfolio/politicalNews.html'
                })
                .state('home.contact', {
                    url: 'contact',
                    templateUrl: 'contact/contact.html'
                })

            $urlRouterProvider.otherwise('/')
        }]);

}());
