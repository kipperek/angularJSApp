'use strict';

var pgsApp = angular.module('pgsApp');
pgsApp.controller('appController',['$timeout', function($timeout){
  var scope = this;

  $timeout(function(){
    //In real app -> make service download dependencies
    scope.systemInited = true;
  })
}]);
