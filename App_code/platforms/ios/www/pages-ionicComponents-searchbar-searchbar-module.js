(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ionicComponents-searchbar-searchbar-module"],{

/***/ "./src/app/pages/ionicComponents/searchbar/searchbar.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ionicComponents/searchbar/searchbar.module.ts ***!
  \*********************************************************************/
/*! exports provided: SearchbarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarPageModule", function() { return SearchbarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _searchbar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchbar.page */ "./src/app/pages/ionicComponents/searchbar/searchbar.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








var routes = [
    {
        path: '',
        component: _searchbar_page__WEBPACK_IMPORTED_MODULE_6__["SearchbarPage"]
    }
];
var SearchbarPageModule = /** @class */ (function () {
    function SearchbarPageModule() {
    }
    SearchbarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_searchbar_page__WEBPACK_IMPORTED_MODULE_6__["SearchbarPage"]]
        })
    ], SearchbarPageModule);
    return SearchbarPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/searchbar/searchbar.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ionicComponents/searchbar/searchbar.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar color=\"secondary\">\n\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/'></ion-back-button>\n        </ion-buttons>\n\n        <ion-title>Searchbar</ion-title>\n    </ion-toolbar>\n\n    <ion-searchbar placeholder=\"Filter Schedules\" animated (ionChange)=\"filter($event)\"></ion-searchbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-item *ngFor=\"let item of albums | filtro: searchField: 'title'\">\n            <ion-label>{{item.title}}</ion-label>\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/searchbar/searchbar.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ionicComponents/searchbar/searchbar.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lvbmljQ29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/searchbar/searchbar.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/ionicComponents/searchbar/searchbar.page.ts ***!
  \*******************************************************************/
/*! exports provided: SearchbarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarPage", function() { return SearchbarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/data.service */ "./src/app/providers/data.service.ts");



var SearchbarPage = /** @class */ (function () {
    function SearchbarPage(dataService) {
        this.dataService = dataService;
        this.albums = [];
        this.searchField = '';
    }
    SearchbarPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAlbumes().subscribe(function (data) {
            console.log(data);
            _this.albums = data;
        });
    };
    SearchbarPage.prototype.filter = function (event) {
        // console.log(event);
        this.searchField = event.detail.value;
    };
    SearchbarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchbar',
            template: __webpack_require__(/*! ./searchbar.page.html */ "./src/app/pages/ionicComponents/searchbar/searchbar.page.html"),
            styles: [__webpack_require__(/*! ./searchbar.page.scss */ "./src/app/pages/ionicComponents/searchbar/searchbar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], SearchbarPage);
    return SearchbarPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ionicComponents-searchbar-searchbar-module.js.map