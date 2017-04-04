'use strict';

var pgsApp = angular.module('pgsApp', [
  'pascalprecht.translate'
]);

pgsApp.config(['$translateProvider', function($translateProvider) {
  $translateProvider
    .translations('en', window.language_en )
    .preferredLanguage('en');
}]);
