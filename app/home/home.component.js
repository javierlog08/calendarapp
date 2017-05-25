'use strict';

/**
 * Home Component for this app. You could use this component in your app or just take reference as example.
 * @ngdoc component
 * @name HomeComponent
 * @memberof app
 */
var HomeComponent = function() {}


/**
 * This function is used to set routing configuration in the component
 * @ngdoc config
 * @name config
 * @memberof HomeComponent
 * @param {Provider} $routeProvider
 */
HomeComponent.config = function($routeProvider) 
{
    $routeProvider.when('/home', {
      template: '<home-component></home-component>',
      access: true
    });
}


angular.module('app.homeComponent', ['ngRoute', 'ngMaterial'])
.config(HomeComponent.config)
.component('homeComponent', {
  controller: HomeComponent,
  templateUrl: 'home/home.component.html'
});

