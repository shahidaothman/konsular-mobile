(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expantable-expantable-module"],{

/***/ "./src/app/pages/expantable/expantable.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/expantable/expantable.module.ts ***!
  \*******************************************************/
/*! exports provided: ExpantablePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpantablePageModule", function() { return ExpantablePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _projects_core_src_lib_center_center_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../projects/core/src/lib/center/center.module */ "./projects/core/src/lib/center/center.module.ts");
/* harmony import */ var _projects_core_src_lib_ripple_ripple_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../projects/core/src/lib/ripple/ripple.module */ "./projects/core/src/lib/ripple/ripple.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _expantable_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expantable.page */ "./src/app/pages/expantable/expantable.page.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm5/fivethree-core.js");










var routes = [
    {
        path: '',
        component: _expantable_page__WEBPACK_IMPORTED_MODULE_8__["ExpantablePage"]
    }
];
var ExpantablePageModule = /** @class */ (function () {
    function ExpantablePageModule() {
    }
    ExpantablePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _fivethree_core__WEBPACK_IMPORTED_MODULE_9__["FivExpandableModule"],
                _projects_core_src_lib_ripple_ripple_module__WEBPACK_IMPORTED_MODULE_4__["FivRippleModule"],
                _projects_core_src_lib_center_center_module__WEBPACK_IMPORTED_MODULE_3__["FivCenterModule"]
            ],
            declarations: [_expantable_page__WEBPACK_IMPORTED_MODULE_8__["ExpantablePage"]]
        })
    ], ExpantablePageModule);
    return ExpantablePageModule;
}());



/***/ }),

/***/ "./src/app/pages/expantable/expantable.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/expantable/expantable.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Expandable\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label text-center>Resources</ion-label>\n    </ion-item>\n    <div class=\"box\" id=\"g1\" (click)=\"example('1')\">\n      <p>Layout 1</p>\n    </div>\n    <div class=\"box\" id=\"g2\" (click)=\"example('2')\">\n      <p>Layout 2</p>\n    </div>\n    <div class=\"box\" id=\"g3\" (click)=\"example('3')\">\n      <p>Layout 3</p>\n    </div>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/expantable/expantable.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/expantable/expantable.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGFudGFibGUvZXhwYW50YWJsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/expantable/expantable.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/expantable/expantable.page.ts ***!
  \*****************************************************/
/*! exports provided: ExpantablePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpantablePage", function() { return ExpantablePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ExpantablePage = /** @class */ (function () {
    function ExpantablePage(router) {
        this.router = router;
    }
    ExpantablePage.prototype.ngOnInit = function () {
    };
    ExpantablePage.prototype.example = function (id) {
        if (id == '1') {
            this.router.navigate(['expantable1']);
            return true;
        }
        if (id == '2') {
            this.router.navigate(['expantable2']);
            return true;
        }
        if (id == '3') {
            this.router.navigate(['expantable3']);
            return true;
        }
    };
    ExpantablePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expantable',
            template: __webpack_require__(/*! ./expantable.page.html */ "./src/app/pages/expantable/expantable.page.html"),
            styles: [__webpack_require__(/*! ./expantable.page.scss */ "./src/app/pages/expantable/expantable.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ExpantablePage);
    return ExpantablePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-expantable-expantable-module.js.map