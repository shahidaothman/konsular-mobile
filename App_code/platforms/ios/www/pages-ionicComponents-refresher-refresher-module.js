(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ionicComponents-refresher-refresher-module"],{

/***/ "./src/app/pages/ionicComponents/refresher/refresher.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ionicComponents/refresher/refresher.module.ts ***!
  \*********************************************************************/
/*! exports provided: RefresherPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefresherPageModule", function() { return RefresherPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _refresher_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./refresher.page */ "./src/app/pages/ionicComponents/refresher/refresher.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _refresher_page__WEBPACK_IMPORTED_MODULE_6__["RefresherPage"]
    }
];
var RefresherPageModule = /** @class */ (function () {
    function RefresherPageModule() {
    }
    RefresherPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_refresher_page__WEBPACK_IMPORTED_MODULE_6__["RefresherPage"]]
        })
    ], RefresherPageModule);
    return RefresherPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/refresher/refresher.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ionicComponents/refresher/refresher.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Refresher\"></app-header>\n\n<ion-content padding>\n\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n\n    <h1 *ngIf=\"items.length === 0\" text-center class=\"animated fadeIn fast\">Pull to refresh</h1>\n\n    <ion-list *ngIf=\"items.length > 0\" class=\"animated fadeIn fast\">\n        <ion-item *ngFor=\"let item of items; let i = index\">\n            <ion-label>Item {{ i + 1}}</ion-label>\n        </ion-item>\n\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/refresher/refresher.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ionicComponents/refresher/refresher.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lvbmljQ29tcG9uZW50cy9yZWZyZXNoZXIvcmVmcmVzaGVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/refresher/refresher.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/ionicComponents/refresher/refresher.page.ts ***!
  \*******************************************************************/
/*! exports provided: RefresherPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefresherPage", function() { return RefresherPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RefresherPage = /** @class */ (function () {
    function RefresherPage() {
        this.items = [];
    }
    RefresherPage.prototype.ngOnInit = function () {
    };
    RefresherPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.items = Array(40);
            event.target.complete();
        }, 1500);
    };
    RefresherPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-refresher',
            template: __webpack_require__(/*! ./refresher.page.html */ "./src/app/pages/ionicComponents/refresher/refresher.page.html"),
            styles: [__webpack_require__(/*! ./refresher.page.scss */ "./src/app/pages/ionicComponents/refresher/refresher.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RefresherPage);
    return RefresherPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ionicComponents-refresher-refresher-module.js.map