'use strict';

angular.module('app.shared')
  .factory('loaderService', LoaderService);

function LoaderService($mdDialog, $timeout) {

  var ls = this;

  ls.loader = $mdDialog.alert({
    templateUrl: 'shared/loader.service.html',
    clickOutsideToClose: false,
    escapeToClose: false,
    fullscreen: false,
    multiple: true
  });

  ls.show = function () {
    $mdDialog.show(ls.loader);
  }

  ls.hide = function () {
    // The loader dialog doesn't exists, when close is called this will fix that.
    $timeout(function () {
      $mdDialog.hide(ls.loader);
    }, 1000);
  }

  return {
    showLoader: ls.show,
    hideLoader: ls.hide
  }

}
