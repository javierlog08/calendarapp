'use strict';

/**
 * App configuration
 * @memberof app
 * @ngdoc config
 * @name Config
 * @param {Service} $locationProvider
 * @param {Service} $routeProvider
 * @param {Service} $mdThemingProvider
 */
var Config = function ($locationProvider, $routeProvider, $mdThemingProvider) 
{
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/login' });

    $mdThemingProvider.theme('default')
        .primaryPalette('indigo');

}

angular.module('app')
    .config(Config);