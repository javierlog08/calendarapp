'use strict';

angular.module('app.loginComponent')
.controller("loginController",LoginController)

function LoginController(authService, $mdDialog, $location) {
    
    this.model = {
        username: "",
        password: ""
    }

    this.auth = function() {
      authService.login(this.model).then(function(logged){
          if(logged) {
            $mdDialog.hide();
            $location.url('/home');
          }
      });
    }

}