'use strict';

angular.module('app.loginComponent')
.controller("loginController",LoginController)

function LoginController(authService, $mdDialog, $location) {

    this.logged = false;
    
    this.model = {
        username: "",
        password: ""
    }

    this.auth = function() {
      authService.login(this.model);
      if(authService.isLogged) {
        $mdDialog.hide();
        $location.url('/home');
      }
    }

}