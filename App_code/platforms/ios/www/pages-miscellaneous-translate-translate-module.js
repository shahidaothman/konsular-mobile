(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-miscellaneous-translate-translate-module"],{

/***/ "./src/app/pages/miscellaneous/translate/translate.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/miscellaneous/translate/translate.module.ts ***!
  \*******************************************************************/
/*! exports provided: TranslatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePageModule", function() { return TranslatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _translate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./translate.page */ "./src/app/pages/miscellaneous/translate/translate.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/app.module */ "./src/app/app.module.ts");










var routes = [
    {
        path: '',
        component: _translate_page__WEBPACK_IMPORTED_MODULE_6__["TranslatePage"]
    }
];
var TranslatePageModule = /** @class */ (function () {
    function TranslatePageModule() {
    }
    TranslatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: src_app_app_module__WEBPACK_IMPORTED_MODULE_9__["customTranslateLoader"],
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    }
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_translate_page__WEBPACK_IMPORTED_MODULE_6__["TranslatePage"]]
        })
    ], TranslatePageModule);
    return TranslatePageModule;
}());



/***/ }),

/***/ "./src/app/pages/miscellaneous/translate/translate.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/miscellaneous/translate/translate.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{ 'PAGES.HOME.TITLE_PAGE' | translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>{{ 'PAGES.HOME.TITLE' | translate }}</h3>\n\n  <p>\n    {{ 'PAGES.HOME.CONTENT' | translate }}\n  </p>\n\n  <ion-button color=\"primary\" (click)=\"translateLang('es')\">{{ 'PAGES.HOME.BTN_ES' | translate }}</ion-button>\n  <ion-button color=\"secondary\" (click)=\"translateLang('en')\">{{ 'PAGES.HOME.BTN_EN' | translate }}</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/miscellaneous/translate/translate.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/miscellaneous/translate/translate.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pc2NlbGxhbmVvdXMvdHJhbnNsYXRlL3RyYW5zbGF0ZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/miscellaneous/translate/translate.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/miscellaneous/translate/translate.page.ts ***!
  \*****************************************************************/
/*! exports provided: TranslatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePage", function() { return TranslatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var TranslatePage = /** @class */ (function () {
    /**
     *
     * npm i @ngx-translate/core @ngx-translate/http-loader
     */
    function TranslatePage(_translate) {
        this._translate = _translate;
    }
    TranslatePage.prototype.ngOnInit = function () {
    };
    /**
    * Give params language
    * @param lang recibe idioma en formato de XX.
    */
    TranslatePage.prototype.translateLang = function (lang) {
        this._translate.use(lang);
    };
    TranslatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-translate',
            template: __webpack_require__(/*! ./translate.page.html */ "./src/app/pages/miscellaneous/translate/translate.page.html"),
            styles: [__webpack_require__(/*! ./translate.page.scss */ "./src/app/pages/miscellaneous/translate/translate.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], TranslatePage);
    return TranslatePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-miscellaneous-translate-translate-module.js.map