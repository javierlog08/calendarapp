'use strict';

angular.module('app.loginComponent')
.controller("loginController",LoginController)

function LoginController(authService, $mdDialog, $location, loaderService) {
    
    this.model = {
        username: "",
        password: ""
    }

    this.errors = {};

    this.auth = function(loginForm) {

      loaderService.showLoader();

      authService.login(this.model).then(function(errors){
          loaderService.hideLoader();
          if(errors.length > 0) {
            $mdDialog.hide();
            $location.url('/home');
          } else {
            loginForm.username.$setValidity("login-error",false);
            loginForm.password.$setValidity("login-error",false);
            loginForm.$setSubmitted(); // to apply validations
          }
      });
    }

}