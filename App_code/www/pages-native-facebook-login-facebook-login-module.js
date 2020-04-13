(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-native-facebook-login-facebook-login-module"],{

/***/ "./src/app/pages/native/facebook-login/facebook-login.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/native/facebook-login/facebook-login.module.ts ***!
  \**********************************************************************/
/*! exports provided: FacebookLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookLoginPageModule", function() { return FacebookLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _facebook_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./facebook-login.page */ "./src/app/pages/native/facebook-login/facebook-login.page.ts");







var routes = [
    {
        path: '',
        component: _facebook_login_page__WEBPACK_IMPORTED_MODULE_6__["FacebookLoginPage"]
    }
];
var FacebookLoginPageModule = /** @class */ (function () {
    function FacebookLoginPageModule() {
    }
    FacebookLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_facebook_login_page__WEBPACK_IMPORTED_MODULE_6__["FacebookLoginPage"]]
        })
    ], FacebookLoginPageModule);
    return FacebookLoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/native/facebook-login/facebook-login.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/native/facebook-login/facebook-login.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Facebook Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label text-center>Resources</ion-label>\n    </ion-item>\n    <div class=\"box\" id=\"g1\" (click)=\"facebookLogin()\">\n      <p>Login</p>\n    </div>\n\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/native/facebook-login/facebook-login.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/native/facebook-login/facebook-login.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdGl2ZS9mYWNlYm9vay1sb2dpbi9mYWNlYm9vay1sb2dpbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/native/facebook-login/facebook-login.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/native/facebook-login/facebook-login.page.ts ***!
  \********************************************************************/
/*! exports provided: FacebookLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookLoginPage", function() { return FacebookLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import { Facebook } from '@ionic-native/facebook/ngx';
var FacebookLoginPage = /** @class */ (function () {
    //For More : https://www.djamware.com/post/59ad3a0c80aca768e4d2b135/login-with-ionic-3-and-cordova-native-facebook-connect-plugin
    function FacebookLoginPage(
    // private fb: Facebook
    ) {
    }
    FacebookLoginPage.prototype.ngOnInit = function () {
    };
    FacebookLoginPage.prototype.facebookLogin = function () {
        // this.fb.getLoginStatus().then((res) => {
        //   console.log('status/?', res);
        //   if (res.status == "connected") {
        //   } else {
        //     this.fb.login(['email']).then((response) => {
        //       console.log(response.authResponse.accessToken);
        //       this.fb.api("/" + res.authResponse.userID + "/?fields=id,email,name,picture,first_name,last_name,gender", ["public_profile"])
        //         .then(res => {
        //           console.log(res);
        //         });
        //     }).catch((error) => {
        //       console.log(error)
        //     });
        //   }
        // })
    };
    FacebookLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-facebook-login',
            template: __webpack_require__(/*! ./facebook-login.page.html */ "./src/app/pages/native/facebook-login/facebook-login.page.html"),
            styles: [__webpack_require__(/*! ./facebook-login.page.scss */ "./src/app/pages/native/facebook-login/facebook-login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FacebookLoginPage);
    return FacebookLoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-native-facebook-login-facebook-login-module.js.map