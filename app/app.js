'use strict';

/**
 * Main Application module
 * is used as main point to bootstrap the app
 * @ngdoc module
 * @name app
 */
angular.module('app', [
    'ngRoute',
    'app.shared',
    'app.loginComponent',
    'app.homeComponent',
    'app.calendarComponent'
]);
