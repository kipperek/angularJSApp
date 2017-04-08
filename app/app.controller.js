'use strict';

var pgsApp = angular.module('pgsApp');
pgsApp.controller('appController',['skiService', '$q', function(skiService, $q){
  var scope = this;
  scope.contact = {
    name: '',
    email: '',
    message: ''
  };

  var generateKeyObject = function generateKeyObject(data){
    var ret = {};
    for(var i in data){
      if(!data.hasOwnProperty(i)) continue;
      var key = data[i].name;
      ret[key] = data[i];
    }
    return ret;
  };

  var init = function init(){
    var getSkiCamsPromise = function getSkiCamsPromise(resolve, reject){
      skiService.getSkiCams().then(function getSkiCamSuccess(ret){
        resolve(generateKeyObject(ret.data));
      },function getSkiCamError(){
        reject();
      });
    };

    scope.skiCamsPomise = $q(getSkiCamsPromise);
    scope.systemInited = true;
  };
  init();
}]);
