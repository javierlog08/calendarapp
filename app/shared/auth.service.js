'use strict';

angular.module("app.shared")
.factory('authService',AuthService);

function AuthService($q, $rootScope) {

    return {

        login: function(model) {
            var defer = $q.defer();
            /* TODO: here you must implemnt your login service logistic */
            defer.resolve([{"login-error":""}]); 
            return defer.promise;
        },

        checkAccess: function() {
            var defer = $q.defer();
            /* TODO: here you must implemnt your access service logistic */
            defer.resolve(false);
            return defer.promise;
        }   
    }
}