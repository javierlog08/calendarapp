'use strict'


/**
 * Run controller for the app.
 * @param {Service} $rootScope 
 * @param {Service} $location 
 * @param {Service} authService 
 */
var Run = function ($rootScope, $location, authService) 
{

    // Access controll for the app
    $rootScope.$on("$routeChangeSuccess", function (event, current, prev) {
        // Some components need to be authenticated to access on them, 
        // On evry component is defined on it routeProvider the param "access" as true if you want validate.
        if (current.$$route.access) {

            authService.checkAccess().then(function (authenticated) {
                if (!authenticated) {
                    $location.url('/login');
                }
            });

        }
    });

}

angular.module("app").run(Run);