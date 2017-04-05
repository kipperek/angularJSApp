'use strict';

window.$ = window.jQuery = require('jquery');
require('foundation-sites/dist/js/foundation.js');
require('material-foundation/js/src/material-foundation.js');
require('material-foundation/js/src/ripple.js');
require('material-foundation/js/src/switches.js');

import css from './Styles/main.scss';
import css from './Styles/header.scss';
import css from './Styles/footer.scss';

var pgsApp = angular.module('pgsApp', [
  'pascalprecht.translate'
]);

pgsApp.config(['$translateProvider', function($translateProvider) {
  $translateProvider
    .translations('en', window.language_en )
    .preferredLanguage('en')
    .useSanitizeValueStrategy(null);
}]);
