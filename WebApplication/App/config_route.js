'use strict';
(function () {

    angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "/app/home/home.html"
        })
        .state('about', {
            url: "/about",
            templateUrl: "/app/about/about.html"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "/app/contact/contact.html"
        })
        .state('customers', {
            url: "/customers",
            templateUrl: "/app/customers/customers.html"
        })
        .state('customers-spsf', {
            url: "/customers-spsf",
            templateUrl: "/app/customers/spsf/spsf.html"
        })
            .state('customers-lobb', {
                url: "/customers-lobb",
                templateUrl: "/app/customers/lobb/lobb.html"
            })
            .state('customers-845', {
                url: "/customers-845",
                templateUrl: "/app/customers/845/845.html"
            })
            .state('customers-books', {
                url: "/customers-books",
                templateUrl: "/app/customers/books/books.html"
            })
            .state('customers-hh', {
                url: "/customers-hh",
                templateUrl: "/app/customers/hh/hh.html"
            })
            .state('customers-softit', {
                url: "/customers-softit",
                templateUrl: "/app/customers/softit/softit.html"
            })
        .state('references', {
            url: "/references",
            templateUrl: "/app/references/references.html"
        });

    });

}())