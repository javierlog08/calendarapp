'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'myApp.loginComponent',
  'myApp.homeComponent',
]).
config(['$locationProvider', '$routeProvider', '$mdThemingProvider', function($locationProvider, $routeProvider, $mdThemingProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/login'});

  /*$mdThemingProvider.theme('default')
    .primaryPalette('blue'); */
}]);
