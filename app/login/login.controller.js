'use strict';

/**
 * LoginController is used by $mdDialog in {@link LoginComponent} as controller to manage all the stuff on a login form 
 * @ngdoc controller
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

    /**
     * @property {LoginController} LoginController use to reference this class itself when using over others functions scopes
     */
    var LoginController = this;


    /**
     * @property {Object} model Model to use in the login form template.
     * @memberof LoginController
     */
    LoginController.model = {
        username: "",
        password: ""
    }


    /**
     * @property {Object} formErrors this property will be used to fill with errors from the form 
     * @memberof LoginController
     */
    LoginController.formErrors = [];


    /**
     * This will validate the login form using {@link authService}. If validation is sucess redirect to home component
     * @function auth
     * @memberof LoginController
     * @param {FormController} loginForm angularjs form.FormController from the login form
     */
    LoginController.auth = function(loginForm) 
    {
        loaderService.showLoader();
        authService.login(this.model).then(function(errors){
            loaderService.hideLoader();
            if(errors.length > 0) {
              LoginController.formErrors = errors;
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