'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'app.shared',
  'app.loginComponent',
  'app.homeComponent'
]).
config(['$locationProvider', '$routeProvider', '$mdThemingProvider', function($locationProvider, $routeProvider, $mdThemingProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/login'});

  $mdThemingProvider.theme('default')
    .primaryPalette('indigo'); 

}]).run(function($rootScope, $location, authService){

    $rootScope.$on("$routeChangeSuccess", function(event, current, prev) {
      // If our component need to be authenticated to access, 
      // is defined on routeProvider for evry component in this app.
      if(current.$$route.access){

        authService.checkAccess().then(function(authenticated){
          if(!authenticated){
            $location.url('/login');
          }
        });

      }
    });

});
