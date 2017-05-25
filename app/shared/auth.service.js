'use strict';

/**
 * AuthService
 * Will provide methods to authenticated and access trough the app
 * @ngdoc service
 * @name AuthService
 * @memberof shared
 * @param {Service} $q
 * @param {Service} $rootScope
 */
var AuthService = function ($q, $rootScope) 
{

    var sv = this;


    /**
     * Service will return a $q.promise once it get validate the login form model.
     * The resoloved promise will return a object array with form errors.
     * @function login
     * @memberof AuthService
     * @return {Promise} $q.promise
     */
    sv.login = function(model) 
    {
        var defer = $q.defer();
        /* TODO: here you must implemnt your login service logistic */
        defer.resolve([{"login-error":"Wrong username or password."}]); 
        return defer.promise;
    }


    /**
     * This method is used on the Application controller or run method to grant access on components
     * for authenticated users.
     * @function checkAccess
     * @memberof AuthService
     * @return {Promise} $q.promise
     */
    sv.checkAccess = function() 
    {
        var defer = $q.defer();
        /* TODO: here you must implemnt your access service logistic */
        defer.resolve(false);
        return defer.promise;
    } 


    return {
        login: sv.login,
        checkAccess: sv.checkAccess  
    }

}

angular.module("app.shared")
.factory('authService',AuthService);

