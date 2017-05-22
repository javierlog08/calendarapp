'use strict';

angular.module('app.shared')
.factory('loaderService',LoaderService);

function LoaderService($mdDialog, $q) {

  var ls = this;
  var defer = $q.defer();

  ls.loader = $mdDialog;

  ls.show = function() {
    ls.loader.show({
      templateUrl:'shared/loader.service.html',
      clickOutsideToClose: false,
      escapeToClose: false,
      fullscreen: false,
      multiple: true,
      onComplete: function(r) {
        defer.resolve(r);
      },
      controller: function($mdDialog) {
        ls.loader = $mdDialog;
      }
    });
  }

  ls.hide = function() {
    defer.promise.then(function(r) {
      ls.loader.hide();
    });   
  }

  return {
    showLoader: ls.show,
    hideLoader: ls.hide
  }

}
