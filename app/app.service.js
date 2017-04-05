'use strict';

var pgsApp = angular.module('pgsApp');

pgsApp.factory('skiService', ['$http', function($http){
  var skiService = {
    getSkiCams: function skiCams(){
      return $http({
        url: 'https://makevoid-skicams.p.mashape.com/cams.json',
        headers: { 'X-Mashape-Key': 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw' },
        method: 'GET'
      });
    }
  };

  return skiService;
}]);
