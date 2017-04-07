'use strict';

import css from './skicam.style.scss';

var skiCam = angular.module('skiCam', [
  'pascalprecht.translate'
]);

skiCam.directive('skiCam', function(){
  return {
    restrict: 'A',
    template: require('./skicam.view.html'),
    scope: {
      camName: '@skiCam',
      modelPromise: '=model'
    },
    controller: 'skiCamController',
    controllerAs: 'skiCamCtrl'
  }
});

skiCam.filter('limitObject', function(){
  return function (items, param) {
    var ret = [], key, keys = Object.keys(items);
    for(var i=0; i<param; i++){
      key = keys[i];
      ret.push(items[key])
    }
    return ret;
 };
})


skiCam.controller('skiCamController', ['$scope', function($scope){
  var scope = this;
  scope.loading = true;
  scope.today = new Date();

  $scope.modelPromise.then(function getSkiCamSuccess(ret){
    scope.camData = ret[$scope.camName];
    scope.loading = false;
  },function getSkiCamError(){
    scope.camError = true;
    scope.loading = false;
  });
}]);
