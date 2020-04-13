(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ionicComponents-list-reorder-list-reorder-module"],{

/***/ "./src/app/pages/ionicComponents/list-reorder/list-reorder.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/list-reorder/list-reorder.module.ts ***!
  \***************************************************************************/
/*! exports provided: ListReorderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListReorderPageModule", function() { return ListReorderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_reorder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-reorder.page */ "./src/app/pages/ionicComponents/list-reorder/list-reorder.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _list_reorder_page__WEBPACK_IMPORTED_MODULE_6__["ListReorderPage"]
    }
];
var ListReorderPageModule = /** @class */ (function () {
    function ListReorderPageModule() {
    }
    ListReorderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_list_reorder_page__WEBPACK_IMPORTED_MODULE_6__["ListReorderPage"]]
        })
    ], ListReorderPageModule);
    return ListReorderPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/list-reorder/list-reorder.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/list-reorder/list-reorder.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar color=\"secondary\">\n\n\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/'></ion-back-button>\n        </ion-buttons>\n\n        <ion-title>List Reorders</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-reorder-group [disabled]=\"false\" (ionItemReorder)=\"reorder( $event)\">\n\n            <ion-item *ngFor=\"let hero of superHeros\">\n                <ion-label>{{hero}}</ion-label>\n                <ion-reorder slot=\"end\"></ion-reorder>\n            </ion-item>\n\n        </ion-reorder-group>\n\n    </ion-list>\n\n    <ion-button expand=\"full\" (click)=\"onClick()\">\n        Save\n    </ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/list-reorder/list-reorder.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/list-reorder/list-reorder.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lvbmljQ29tcG9uZW50cy9saXN0LXJlb3JkZXIvbGlzdC1yZW9yZGVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/list-reorder/list-reorder.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/list-reorder/list-reorder.page.ts ***!
  \*************************************************************************/
/*! exports provided: ListReorderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListReorderPage", function() { return ListReorderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListReorderPage = /** @class */ (function () {
    function ListReorderPage() {
        this.superHeros = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Mujer Maravilla'];
    }
    ListReorderPage.prototype.ngOnInit = function () {
    };
    ListReorderPage.prototype.reorder = function (event) {
        var itemMover = this.superHeros.splice(event.detail.from, 1)[0];
        this.superHeros.splice(event.detail.to, 0, itemMover);
        event.detail.complete();
    };
    ListReorderPage.prototype.onClick = function () {
        console.log(this.superHeros);
    };
    ListReorderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-reorder',
            template: __webpack_require__(/*! ./list-reorder.page.html */ "./src/app/pages/ionicComponents/list-reorder/list-reorder.page.html"),
            styles: [__webpack_require__(/*! ./list-reorder.page.scss */ "./src/app/pages/ionicComponents/list-reorder/list-reorder.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListReorderPage);
    return ListReorderPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ionicComponents-list-reorder-list-reorder-module.js.map