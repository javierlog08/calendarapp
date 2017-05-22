'use strict';

angular.module('app.loginComponent')
.controller("loginController",LoginController)

function LoginController(authService, $mdDialog, $location, loaderService) {
    
    this.model = {
        username: "",
        password: ""
    }

    this.auth = function() {

      loaderService.showLoader();

      authService.login(this.model).then(function(logged){
          loaderService.hideLoader();
          if(logged) {
            $mdDialog.hide();
            $location.url('/home');
          }
      });
    }

}