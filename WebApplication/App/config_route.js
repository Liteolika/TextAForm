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

            .state('customers-lob', {
                url: "/customers-lob",
                templateUrl: "/app/customers/lob/lob.html"
            })

            .state('customers-books', {
                url: "/customers-books",
                templateUrl: "/app/customers/books/books.html"
            })

            .state('customers-softit', {
                url: "/customers-softit",
                templateUrl: "/app/customers/softit/softit.html"
            })

            //.state('uffepuffe', {                  <--- Unikt namn på state
            //    url: "/uffessida",                 <--- Vad som ska visas i webbläsarens adressrad
            //    templateUrl: "/app/uffe/uffe.html" <--- Sökvägen till sidan
            //})

            .state('references', {
                url: "/references",
                templateUrl: "/app/references/references.html"
            });

    });

}())