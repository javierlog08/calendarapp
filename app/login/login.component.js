'use strict';

angular.module('myApp.loginComponent', ['ngRoute', 'ngMaterial'])
.config(function($routeProvider) {
  $routeProvider.when('/login', {
    template: '<login-component></login-component>'
  });
})
.component('loginComponent', {
  controller: LoginComponent
});

function LoginComponent($mdDialog) {
    
    this.model = {
        username: "",
        password: ""
    }

    this.dialog = $mdDialog.show({
      templateUrl: 'login/login.component.html',
      clickOutsideToClose:false,
      fullscreen: true,
      parent:angular.element(document.body),
    });

}