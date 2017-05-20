'use strict';

angular.module("app.shared")
.factory('authService',AuthService);

function AuthService() {
    return {
        isLogged: false,
        login: function(model) {
            this.isLogged = true;
        }
    }
}