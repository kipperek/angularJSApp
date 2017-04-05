'use strict';

var pgsApp = angular.module('pgsApp');

pgsApp.directive('about', function(){
  return {
    restrict: 'A',
    template: require('./Views/about.html')
  }
});

pgsApp.directive('skicams', function(){
  return {
    restrict: 'A',
    template: require('./Views/skicams.html')
  }
});

pgsApp.directive('contact', function(){
  return {
    restrict: 'A',
    template: require('./Views/contact.html')
  }
});
