'use strict'

/**
 * App Main controller executed with angular.module.run. 
 * Is good point to trigger logic that should run when app begins
 * @ngdoc run
 * @name AppController
 * @memberof app
 * @param {Service} $rootScope 
 * @param {Service} $location 
 * @param {Service} authService 
 */
var AppController = function ($rootScope, $location, authService) 
{
    // Access controll for the app
    /*$rootScope.$on("$routeChangeSuccess", function (event, current, prev) {
        // Some components need to be authenticated to access on them, 
        // On evry component is defined on it routeProvider the param "access" as true if you want validate.
        if (current.$$route.access) {

            authService.checkAccess().then(function (authenticated) {
                if (!authenticated) {
                    $location.url('/login');
                }
            });

        }
    });*/
}

angular.module("app").run(AppController);