(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-parallax-parallax-module"],{

/***/ "./src/app/pages/parallax/parallax.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/parallax/parallax.module.ts ***!
  \***************************************************/
/*! exports provided: ParallaxPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxPageModule", function() { return ParallaxPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _parallax_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parallax.page */ "./src/app/pages/parallax/parallax.page.ts");







var routes = [
    {
        path: '',
        component: _parallax_page__WEBPACK_IMPORTED_MODULE_6__["ParallaxPage"]
    }
];
var ParallaxPageModule = /** @class */ (function () {
    function ParallaxPageModule() {
    }
    ParallaxPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_parallax_page__WEBPACK_IMPORTED_MODULE_6__["ParallaxPage"]]
        })
    ], ParallaxPageModule);
    return ParallaxPageModule;
}());



/***/ }),

/***/ "./src/app/pages/parallax/parallax.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/parallax/parallax.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Parallax\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label text-center>Resources</ion-label>\n    </ion-item>\n    <div class=\"box\" id=\"g1\" (click)=\"hideheaders()\">\n      <p>Parallax With Headers</p>\n    </div>\n    <div class=\"box\" id=\"g2\" (click)=\"shrinking()\">\n      <p>Parallax With Shrinking Header</p>\n    </div>\n    <div class=\"box\" id=\"g3\" (click)=\"parallaxHeader()\">\n      <p>Parallax With Shrinking Header</p>\n    </div>\n    <div class=\"box\" id=\"g4\" (click)=\"spotify()\">\n      <p>Parallax With Shrinking Header</p>\n    </div>\n    <div class=\"box\" id=\"g5\" (click)=\"streachHeader()\">\n      <p>Parallax With Streach Header</p>\n    </div>\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/parallax/parallax.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/parallax/parallax.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhcmFsbGF4L3BhcmFsbGF4LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/parallax/parallax.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/parallax/parallax.page.ts ***!
  \*************************************************/
/*! exports provided: ParallaxPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxPage", function() { return ParallaxPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ParallaxPage = /** @class */ (function () {
    function ParallaxPage(router) {
        this.router = router;
    }
    ParallaxPage.prototype.ngOnInit = function () {
    };
    ParallaxPage.prototype.hideheaders = function () {
        this.router.navigate(['hide-headers']);
    };
    ParallaxPage.prototype.shrinking = function () {
        this.router.navigate(['headers']);
    };
    ParallaxPage.prototype.parallaxHeader = function () {
        this.router.navigate(['header-image']);
    };
    ParallaxPage.prototype.spotify = function () {
        this.router.navigate(['spotify-header']);
    };
    ParallaxPage.prototype.streachHeader = function () {
        this.router.navigate(['stretch-header']);
    };
    ParallaxPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parallax',
            template: __webpack_require__(/*! ./parallax.page.html */ "./src/app/pages/parallax/parallax.page.html"),
            styles: [__webpack_require__(/*! ./parallax.page.scss */ "./src/app/pages/parallax/parallax.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ParallaxPage);
    return ParallaxPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-parallax-parallax-module.js.map