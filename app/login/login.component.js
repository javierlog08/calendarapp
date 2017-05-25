'use strict';

/**
 * This angular component shows a dialog with a form to login the users in to the app.
 * @ngdoc component
 * @name LoginComponent
 * @memberof app
 * @param {Service} $mdDialog
 */
var LoginComponent = function LoginComponent($mdDialog) 
{
    // Angular Material Dialog
    $mdDialog.show({
      templateUrl: 'login/login.component.html',
      clickOutsideToClose: false,
      escapeToClose: false,
      fullscreen: true,
      parent:angular.element(document.body),
      controller: "loginController",
      controllerAs: "loginCtrl"
    });
}


/**
 * This function is used to set routing configuration in the component
 * @ngdoc config
 * @function config
 * @memberof LoginComponent
 * @param {Provider} $routerProvider
 */
LoginComponent.config = function($routeProvider) 
{
    $routeProvider.when('/login', {
      template: '<login-component></login-component>',
      access: false
    });
}


angular.module('app.loginComponent', ['ngRoute', 'ngMaterial'])
.config(LoginComponent.config)
.component('loginComponent', {
  controller: LoginComponent,
});

