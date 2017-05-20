'use strict';

angular.module('app.homeComponent', ['ngRoute', 'ngMaterial'])
.config(function($routeProvider) {
  $routeProvider.when('/home', {
    template: '<home-component></home-component>'
  });
})
.component('homeComponent', {
  controller: HomeComponent,
  templateUrl: 'home/home.component.html'
});

function HomeComponent() {}