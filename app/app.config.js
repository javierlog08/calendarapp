'use strict';

/**
 * App configuration
 * @ngdoc config
 * @name AppConfig
 * @memberof app
 * @name Config
 * @param {Service} $locationProvider
 * @param {Service} $routeProvider
 * @param {Service} $mdThemingProvider
 */
var AppConfig = function ($locationProvider, $routeProvider, $mdThemingProvider) 
{
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/home' });

    $mdThemingProvider.theme('default')
        .primaryPalette('indigo');
}

angular.module('app').config(AppConfig);