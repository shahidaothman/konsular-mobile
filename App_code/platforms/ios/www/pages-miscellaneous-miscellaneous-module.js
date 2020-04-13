(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-miscellaneous-miscellaneous-module"],{

/***/ "./src/app/pages/miscellaneous/miscellaneous.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/miscellaneous/miscellaneous.module.ts ***!
  \*************************************************************/
/*! exports provided: MiscellaneousPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousPageModule", function() { return MiscellaneousPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _miscellaneous_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./miscellaneous.page */ "./src/app/pages/miscellaneous/miscellaneous.page.ts");







var routes = [
    {
        path: '',
        component: _miscellaneous_page__WEBPACK_IMPORTED_MODULE_6__["MiscellaneousPage"]
    }
];
var MiscellaneousPageModule = /** @class */ (function () {
    function MiscellaneousPageModule() {
    }
    MiscellaneousPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_miscellaneous_page__WEBPACK_IMPORTED_MODULE_6__["MiscellaneousPage"]]
        })
    ], MiscellaneousPageModule);
    return MiscellaneousPageModule;
}());



/***/ }),

/***/ "./src/app/pages/miscellaneous/miscellaneous.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/miscellaneous/miscellaneous.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Miscellaneous</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label text-center>Resources</ion-label>\n    </ion-item>\n\n    <div class=\"box\" id=\"g1\" (click)=\"empty()\">\n      <p>Empty Views</p>\n    </div>\n    <div class=\"box\" id=\"g2\" (click)=\"ckEditor()\">\n      <p>Ck Editor</p>\n    </div>\n    <div class=\"box\" id=\"g3\" (click)=\"theming()\">\n      <p>Theming</p>\n    </div>\n    <div class=\"box\" id=\"g4\" (click)=\"translate()\">\n      <p>Translate</p>\n    </div>\n    <div class=\"box\" id=\"g5\" (click)=\"calendar()\">\n      <p>Calendars</p>\n    </div>\n    <div class=\"box\" id=\"g6\" (click)=\"signaturePad()\">\n      <p>Signature Pad</p>\n    </div>\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/miscellaneous/miscellaneous.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/miscellaneous/miscellaneous.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pc2NlbGxhbmVvdXMvbWlzY2VsbGFuZW91cy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/miscellaneous/miscellaneous.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/miscellaneous/miscellaneous.page.ts ***!
  \***********************************************************/
/*! exports provided: MiscellaneousPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousPage", function() { return MiscellaneousPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MiscellaneousPage = /** @class */ (function () {
    function MiscellaneousPage(router) {
        this.router = router;
    }
    MiscellaneousPage.prototype.ngOnInit = function () {
    };
    MiscellaneousPage.prototype.gridExample = function () {
        console.log('grids Example');
        this.router.navigate(['coming']);
    };
    MiscellaneousPage.prototype.empty = function () {
        this.router.navigate(['coming']);
    };
    MiscellaneousPage.prototype.chatScreen = function () {
        console.log('chatscreen');
        this.router.navigate(['chats']);
    };
    MiscellaneousPage.prototype.ckEditor = function () {
        console.log('ckEditor');
        this.router.navigate(['ck-editor']);
    };
    MiscellaneousPage.prototype.theming = function () {
        console.log('theming');
        this.router.navigate(['themes']);
    };
    MiscellaneousPage.prototype.translate = function () {
        console.log('translate');
        this.router.navigate(['translate']);
    };
    MiscellaneousPage.prototype.calendar = function () {
        console.log('calendars');
        this.router.navigate(['calendars']);
    };
    MiscellaneousPage.prototype.signaturePad = function () {
        console.log('singature pad');
        this.router.navigate(['signature-pad']);
    };
    MiscellaneousPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-miscellaneous',
            template: __webpack_require__(/*! ./miscellaneous.page.html */ "./src/app/pages/miscellaneous/miscellaneous.page.html"),
            styles: [__webpack_require__(/*! ./miscellaneous.page.scss */ "./src/app/pages/miscellaneous/miscellaneous.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MiscellaneousPage);
    return MiscellaneousPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-miscellaneous-miscellaneous-module.js.map