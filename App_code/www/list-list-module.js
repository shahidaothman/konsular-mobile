(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "./src/app/pages/ionicComponents/list/list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/ionicComponents/list/list.module.ts ***!
  \***********************************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/pages/ionicComponents/list/list.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]
    }
];
var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/list/list.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/ionicComponents/list/list.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"List - Sliding\"></app-header>\n<ion-content>\n    <ion-list #list>\n        <ion-item-sliding *ngFor=\"let user of users | async \">\n            <ion-item>\n                <ion-label>\n                    <h3>{{user.name}}</h3>\n                    <p>{{user.email}}</p>\n                </ion-label>\n                <ion-label slot=\"end\" text-right>\n                    {{user.phone}}\n                </ion-label>\n            </ion-item>\n\n            <ion-item-options side=\"start\">\n                <ion-item-option (click)=\"favorite(user)\">\n                    <ion-icon slot=\"icon-only\" name=\"heart\"></ion-icon>\n                </ion-item-option>\n                <ion-item-option color=\"secondary\" (click)=\"share(user)\">\n                    <ion-icon slot=\"icon-only\" name=\"share\"></ion-icon>\n                </ion-item-option>\n            </ion-item-options>\n\n            <ion-item-options side=\"end\">\n                <ion-item-option color=\"danger\" (click)=\"unread(user)\">\n                    <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                </ion-item-option>\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/list/list.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/ionicComponents/list/list.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lvbmljQ29tcG9uZW50cy9saXN0L2xpc3QucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/list/list.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/ionicComponents/list/list.page.ts ***!
  \*********************************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/data.service */ "./src/app/providers/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/util.service */ "./src/app/providers/util.service.ts");





var ListPage = /** @class */ (function () {
    function ListPage(data, util) {
        this.data = data;
        this.util = util;
    }
    ListPage.prototype.ngOnInit = function () {
        this.users = this.data.getUser();
    };
    ListPage.prototype.favorite = function (user) {
        console.log('favorite', user);
        this.util.showToast('saved in favorites!', 'success', 'bottom');
        this.list.closeSlidingItems();
    };
    ListPage.prototype.share = function (user) {
        console.log('share', user);
        this.util.showToast('Shared', 'secondary', 'bottom');
        this.list.closeSlidingItems();
    };
    ListPage.prototype.unread = function (user) {
        console.log('unread', user);
        this.util.showToast('Removed', 'danger', 'bottom');
        this.list.closeSlidingItems();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('list'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"])
    ], ListPage.prototype, "list", void 0);
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.page.html */ "./src/app/pages/ionicComponents/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/pages/ionicComponents/list/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=list-list-module.js.map