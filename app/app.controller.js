'use strict';

var pgsApp = angular.module('pgsApp');
pgsApp.controller('appController',['skiService', function(skiService){
  var scope = this;
  scope.camData = {};

  var generateKeyObject = function(data){
    var ret = {};
    for(var i in data){
      if(!data.hasOwnProperty(i)) continue;

      var key = data[i].name;
      ret[key] = data[i];
    }

    return ret;
  };

  var init = function init(){
    skiService.getSkiCams().then(function getSkiCamSuccess(ret){
      angular.extend(scope.camData, generateKeyObject(ret.data));
      scope.camData.asyncLoaded = true;
    },function getSkiCamError(){
      scope.camData.asyncLoaded = true;
      scope.camData.fetchError = true;
    });
    
    scope.systemInited = true;
  };

  setTimeout(init);
}]);
