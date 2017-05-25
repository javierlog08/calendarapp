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

  /**
  * @property {LoaderService} LoaderService use to reference this class itself when using over others functions scopes
  */
  var LoaderService = this;


  /**
   * @property {$mdDialog} loader $mdDialogPreset angular material component used to create the loader for this app
   * @memberof LoaderService
   */
  LoaderService.loader = $mdDialog.alert({
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
  LoaderService.show = function () 
  {
      $mdDialog.show(LoaderService.loader);
  }


  /**
   * You can use this method to hide a loader over the app
   * @function hide
   * @memberof LoaderService
   */
  LoaderService.hide = function () 
  {
      // The loader dialog doesn't exists when hide function is called. 
      // timeout will fix that.
      $timeout(function () {
        $mdDialog.hide(LoaderService.loader);
      }, 1000);
  }


  return {
      showLoader: LoaderService.show,
      hideLoader: LoaderService.hide
  }

}

angular.module('app.shared').factory('loaderService', LoaderService);
