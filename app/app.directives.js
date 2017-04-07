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

pgsApp.directive('ngSrc', function(){
  return {
    link: function(scope, el){
      el[0].onerror = function imageError(){
        el.attr('src', 'images/noImage.png');
        el.addClass('image-error');
        el[0].onerror = null;
      }
    }
  }
});
