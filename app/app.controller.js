'use strict';

var pgsApp = angular.module('pgsApp');
pgsApp.controller('appController',['$timeout', 'skiService', function($timeout, skiService){
  var scope = this;
  scope.camData = {};

  $timeout(function(){
    skiService.getSkiCams().then(function getSkiCamSuccess(ret){
      scope.systemInited = true;
      angular.extend(scope.camData, ret.data);
      console.log(scope.camData);
    },function getSkiCamError(){
      //TODO
      scope.systemInited = true;
    });
  })
}]);
