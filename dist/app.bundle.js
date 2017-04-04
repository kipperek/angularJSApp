webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports) {



/***/ }),
/* 1 */
/***/ (function(module, exports) {



/***/ }),
/* 2 */
/***/ (function(module, exports) {



/***/ }),
/* 3 */
/***/ (function(module, exports) {



/***/ }),
/* 4 */
/***/ (function(module, exports) {



/***/ }),
/* 5 */
/***/ (function(module, exports) {



/***/ }),
/* 6 */
/***/ (function(module, exports) {



/***/ }),
/* 7 */
/***/ (function(module, exports) {



/***/ }),
/* 8 */
/***/ (function(module, exports) {

//MOCK
window.language_en = {
  menu:{
    about: "About"
  },
  footer: {
    text: 'Powered by PGS'  
  }
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pgsApp = angular.module('pgsApp', [
  'pascalprecht.translate'
]);

pgsApp.config(['$translateProvider', function($translateProvider) {
  $translateProvider
    .translations('en', window.language_en )
    .preferredLanguage('en');
}]);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pgsApp = angular.module('pgsApp');
pgsApp.controller('appController',['$timeout', function($timeout){
  var scope = this;

  $timeout(function(){
    //In real app -> make service download dependencies
    scope.systemInited = true;
  })
}]);


/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(9);
__webpack_require__(10);
__webpack_require__(0);
__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(7);
module.exports = __webpack_require__(8);


/***/ })
],[14]);