'use strict';

/**
 * User this service to show a dialog loader over the app
 * @ngdoc service
 * @name LoaderService
 * @memberof shared
 * @param {Service} $mdDialog
 * @param {Service} $timeout
 */
var LoaderService = function($mdDialog, $timeout) {

  var sv = this;


  sv.loader = $mdDialog.alert({
    templateUrl: 'shared/loader.service.html',
    clickOutsideToClose: false,
    escapeToClose: false,
    fullscreen: false,
    multiple: true
  });


  /**
   * Call this method to show the loader over the app
   * @function show
   * @memberof LoaderService
   */
  sv.show = function () 
  {
      $mdDialog.show(sv.loader);
  }


  /**
   * You can use this method to hide a loader over the app
   * @function hide
   * @memberof LoaderService
   */
  sv.hide = function () 
  {
      // The loader dialog doesn't exists when hide function is called. 
      // timeout will fix that.
      $timeout(function () {
        $mdDialog.hide(sv.loader);
      }, 1000);
  }


  return {
      showLoader: sv.show,
      hideLoader: sv.hide
  }

}

angular.module('app.shared').factory('loaderService', LoaderService);
