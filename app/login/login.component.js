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

  var formDialog;
  var loader;

  // Angular Material Dialog
  formDialog = $mdDialog.show({
      templateUrl: 'login/login.component.html',
      clickOutsideToClose: false,
      escapeToClose: false,
      locals:{
        "loader":loader
      },
      fullscreen: true,
      parent:angular.element(document.body),
      controller: "loginController",
      controllerAs: "loginCtrl"
    });

}