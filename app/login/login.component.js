'use strict';

angular.module('app.loginComponent', ['ngRoute', 'ngMaterial'])
.config(function($routeProvider) {
  $routeProvider.when('/login', {
    template: '<login-component></login-component>',
    access: false
  });
})
.component('loginComponent', {
  controller: LoginComponent,
});

function LoginComponent($mdDialog) {
  
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