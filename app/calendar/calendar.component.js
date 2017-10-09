'use strict';

/**
 * Home Component for this app. You could use this component in your app or just take reference as example.
 * @ngdoc component
 * @name HomeComponent
 * @memberof app
 */
var CalendarComponent = function() {}


/**
 * This function is used to set routing configuration in the component
 * @ngdoc config
 * @name config
 * @memberof HomeComponent
 * @param {Provider} $routeProvider
 */
CalendarComponent.config = function($routeProvider) 
{
    $routeProvider.when('/calendar', {
      template: '<calendar-component></calendar-component>',
      access: true
    });
}


angular.module('app.calendarComponent', ['ngRoute', 'ngMaterial'])
.config(CalendarComponent.config)
.component('calendarComponent', {
  controller: "calendarController",
  templateUrl: 'calendar/calendar.component.html'
});

