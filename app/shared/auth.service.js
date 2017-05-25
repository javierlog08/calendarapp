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

    /**
     * @property {AuthService} AuthService use to reference this class itself when using over others functions scopes
     */
    var AuthService = this;


    /**
     * Service will return a $q.promise once it get validate the login form model.
     * The resoloved promise will return a object array with form errors.
     * @function login
     * @memberof AuthService
     * @returns {Promise} $q.promise
     */
    AuthService.login = function(model) 
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
     * @returns {Promise} $q.promise
     */
    AuthService.checkAccess = function() 
    {
        var defer = $q.defer();
        /* TODO: here you must implemnt your access service logistic */
        defer.resolve(false);
        return defer.promise;
    } 


    return {
        login: AuthService.login,
        checkAccess: AuthService.checkAccess  
    }

}

angular.module("app.shared")
.factory('authService',AuthService);

