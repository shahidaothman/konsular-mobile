(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-grids-grids-module"],{

/***/ "./src/app/pages/grids/grids.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/grids/grids.module.ts ***!
  \*********************************************/
/*! exports provided: GridsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsPageModule", function() { return GridsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _grids_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grids.page */ "./src/app/pages/grids/grids.page.ts");







var routes = [
    {
        path: '',
        component: _grids_page__WEBPACK_IMPORTED_MODULE_6__["GridsPage"]
    }
];
var GridsPageModule = /** @class */ (function () {
    function GridsPageModule() {
    }
    GridsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_grids_page__WEBPACK_IMPORTED_MODULE_6__["GridsPage"]]
        })
    ], GridsPageModule);
    return GridsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/grids/grids.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/grids/grids.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Grids</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label text-center>Resources</ion-label>\n    </ion-item>\n    <div class=\"box\" id=\"g1\" (click)=\"example('1')\">\n      <p>Layout 1</p>\n    </div>\n    <div class=\"box\" id=\"g2\" (click)=\"example('2')\">\n      <p>Layout 2</p>\n    </div>\n    <div class=\"box\" id=\"g3\" (click)=\"example('3')\">\n      <p>Layout 3</p>\n    </div>\n    <div class=\"box\" id=\"g4\" (click)=\"example('4')\">\n      <p>Layout 4</p>\n    </div>\n    <div class=\"box\" id=\"g5\" (click)=\"example('5')\">\n      <p>Layout 5</p>\n    </div>\n\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/grids/grids.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/grids/grids.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyaWRzL2dyaWRzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/grids/grids.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/grids/grids.page.ts ***!
  \*******************************************/
/*! exports provided: GridsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsPage", function() { return GridsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var GridsPage = /** @class */ (function () {
    function GridsPage(router) {
        this.router = router;
    }
    GridsPage.prototype.ngOnInit = function () {
    };
    GridsPage.prototype.example = function (id) {
        console.log('id', id);
        this.router.navigate(['grid-example', id]);
    };
    GridsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grids',
            template: __webpack_require__(/*! ./grids.page.html */ "./src/app/pages/grids/grids.page.html"),
            styles: [__webpack_require__(/*! ./grids.page.scss */ "./src/app/pages/grids/grids.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GridsPage);
    return GridsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-grids-grids-module.js.map