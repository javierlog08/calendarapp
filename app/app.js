'use strict';

/**
 * Main Application module
 * is used as main point to bootstrap the app
 */
angular.module('app', [
  'ngRoute',
  'app.shared',
  'app.loginComponent',
  'app.homeComponent'
])
