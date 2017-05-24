'use strict';

angular.module('app.loginComponent')
.controller("loginController",LoginController)

function LoginController(authService, $mdDialog, $rootScope, $location, loaderService) {
    
    var vm = this;

    vm.model = {
        username: "",
        password: ""
    }

    vm.formErrors = [];

    vm.auth = function(loginForm) {
      
      loaderService.showLoader();
      authService.login(this.model).then(function(errors){
          loaderService.hideLoader();
          if(errors.length > 0) {
            vm.formErrors = errors;
            loginForm.username.$setValidity("login-error",false);
            loginForm.password.$setValidity("login-error",false);
            loginForm.$setSubmitted(); // to apply validations
          } else {
            $mdDialog.hide();
            $location.url('/home');
          }
      });
    }

}