'use strict';

/**
 * LoginController
 * is used by $mdDialog in {@link LoginComponent} as controller to manage all the stuff on a login form 
 * @name LoginController
 * @memberof LoginComponent
 * @param {Service} authService
 * @param {Service} mdDialog
 * @param {Service} rootScope 
 * @param {Service} location 
 * @param {Service} loaderService 
 */
var LoginController = function(authService, $mdDialog, $rootScope, $location, loaderService) 
{

    var vm = this;


    /**
     * @property {Object} model Model to use in the login form template.
     */
    vm.model = {
        username: "",
        password: ""
    }


    /**
     * @property {Object} formErrors this property will be used to fill with errors from the form validation
     */
    vm.formErrors = [];


    /**
     * This will validate the login form using {@link authService}. If validation is sucess redirect to home component
     * @function auth
     * @memberof LoginController
     * @param {FormController} loginForm angularjs form.FormController from the login form
     */
    vm.auth = function(loginForm) 
    {
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


angular.module('app.loginComponent').controller("loginController",LoginController)