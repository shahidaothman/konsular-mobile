(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["infinite-scroll-infinite-scroll-module"],{

/***/ "./src/app/pages/ionicComponents/infinite-scroll/infinite-scroll.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/infinite-scroll/infinite-scroll.module.ts ***!
  \*********************************************************************************/
/*! exports provided: InfiniteScrollPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollPageModule", function() { return InfiniteScrollPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _infinite_scroll_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./infinite-scroll.page */ "./src/app/pages/ionicComponents/infinite-scroll/infinite-scroll.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _infinite_scroll_page__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollPage"]
    }
];
var InfiniteScrollPageModule = /** @class */ (function () {
    function InfiniteScrollPageModule() {
    }
    InfiniteScrollPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_infinite_scroll_page__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollPage"]]
        })
    ], InfiniteScrollPageModule);
    return InfiniteScrollPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/infinite-scroll/infinite-scroll.page.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/infinite-scroll/infinite-scroll.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Infinite Scroll\"></app-header>\n<ion-content>\n\n    <ion-list>\n        <ion-item *ngFor=\"let item of data; let i = index\">\n            <ion-label>Item {{i + 1}}</ion-label>\n        </ion-item>\n    </ion-list>\n\n    <ion-infinite-scroll threshold=\"25%\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"crescent\" loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/infinite-scroll/infinite-scroll.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/infinite-scroll/infinite-scroll.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lvbmljQ29tcG9uZW50cy9pbmZpbml0ZS1zY3JvbGwvaW5maW5pdGUtc2Nyb2xsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/infinite-scroll/infinite-scroll.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/infinite-scroll/infinite-scroll.page.ts ***!
  \*******************************************************************************/
/*! exports provided: InfiniteScrollPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollPage", function() { return InfiniteScrollPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var InfiniteScrollPage = /** @class */ (function () {
    function InfiniteScrollPage() {
        this.data = Array(20);
    }
    InfiniteScrollPage.prototype.ngOnInit = function () {
    };
    InfiniteScrollPage.prototype.loadData = function (event) {
        var _this = this;
        console.log('Getting Data .....');
        if (this.data.length > 50) {
            event.target.complete();
            this.infiniteScroll.disabled = true;
            return;
        }
        setTimeout(function () {
            var _a;
            var nuevoArr = Array(20);
            (_a = _this.data).push.apply(_a, nuevoArr);
            event.target.complete();
        }, 1000);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], InfiniteScrollPage.prototype, "infiniteScroll", void 0);
    InfiniteScrollPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-infinite-scroll',
            template: __webpack_require__(/*! ./infinite-scroll.page.html */ "./src/app/pages/ionicComponents/infinite-scroll/infinite-scroll.page.html"),
            styles: [__webpack_require__(/*! ./infinite-scroll.page.scss */ "./src/app/pages/ionicComponents/infinite-scroll/infinite-scroll.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfiniteScrollPage);
    return InfiniteScrollPage;
}());



/***/ })

}]);
//# sourceMappingURL=infinite-scroll-infinite-scroll-module.js.map