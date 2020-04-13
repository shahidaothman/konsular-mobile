(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-grids-grid-example-grid-example-module"],{

/***/ "./src/app/pages/grids/grid-example/grid-example.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/grids/grid-example/grid-example.module.ts ***!
  \*****************************************************************/
/*! exports provided: GridExamplePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridExamplePageModule", function() { return GridExamplePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _grid_example_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid-example.page */ "./src/app/pages/grids/grid-example/grid-example.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _grid_example_page__WEBPACK_IMPORTED_MODULE_6__["GridExamplePage"]
    }
];
var GridExamplePageModule = /** @class */ (function () {
    function GridExamplePageModule() {
    }
    GridExamplePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_grid_example_page__WEBPACK_IMPORTED_MODULE_6__["GridExamplePage"]]
        })
    ], GridExamplePageModule);
    return GridExamplePageModule;
}());



/***/ }),

/***/ "./src/app/pages/grids/grid-example/grid-example.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/grids/grid-example/grid-example.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Grid Example {{id}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-grid1 *ngIf=\"id ==1\"></app-grid1>\n  <app-grid2 *ngIf=\"id ==2\"></app-grid2>\n  <app-grid3 *ngIf=\"id ==3\"></app-grid3>\n  <app-grid4 *ngIf=\"id ==4\"></app-grid4>\n  <app-grid5 *ngIf=\"id ==5\"></app-grid5>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/grids/grid-example/grid-example.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/grids/grid-example/grid-example.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyaWRzL2dyaWQtZXhhbXBsZS9ncmlkLWV4YW1wbGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/grids/grid-example/grid-example.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/grids/grid-example/grid-example.page.ts ***!
  \***************************************************************/
/*! exports provided: GridExamplePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridExamplePage", function() { return GridExamplePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var GridExamplePage = /** @class */ (function () {
    function GridExamplePage(route) {
        this.route = route;
        this.id = '';
    }
    GridExamplePage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 
            console.log('id ', _this.id);
        });
    };
    GridExamplePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grid-example',
            template: __webpack_require__(/*! ./grid-example.page.html */ "./src/app/pages/grids/grid-example/grid-example.page.html"),
            styles: [__webpack_require__(/*! ./grid-example.page.scss */ "./src/app/pages/grids/grid-example/grid-example.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], GridExamplePage);
    return GridExamplePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-grids-grid-example-grid-example-module.js.map