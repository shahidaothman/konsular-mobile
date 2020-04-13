(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ionicComponents-segment-segment-module"],{

/***/ "./src/app/pages/ionicComponents/segment/segment.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ionicComponents/segment/segment.module.ts ***!
  \*****************************************************************/
/*! exports provided: SegmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentPageModule", function() { return SegmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _segment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./segment.page */ "./src/app/pages/ionicComponents/segment/segment.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









var routes = [
    {
        path: '',
        component: _segment_page__WEBPACK_IMPORTED_MODULE_6__["SegmentPage"]
    }
];
var SegmentPageModule = /** @class */ (function () {
    function SegmentPageModule() {
    }
    SegmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_segment_page__WEBPACK_IMPORTED_MODULE_6__["SegmentPage"]]
        })
    ], SegmentPageModule);
    return SegmentPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/segment/segment.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ionicComponents/segment/segment.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Segment\"></app-header>\n\n<ion-toolbar>\n    <ion-segment (ionChange)=\"segmentChanged($event)\" color=\"tertiary\">\n        <ion-segment-button value=\"todos\">\n            <ion-label>Todos</ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button value=\"DC Comics\">\n            <ion-label>DC Comics</ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button value=\"Marvel Comics\">\n            <ion-label>Marvel Comics</ion-label>\n        </ion-segment-button>\n\n    </ion-segment>\n</ion-toolbar>\n\n\n\n\n<ion-content>\n\n    <ion-list>\n        <ion-item *ngFor=\"let hero of (superHeroes | async) | comic: publisher: 'publisher'\"\n            class=\"animated fadeIn fast\">\n            <ion-label>\n                <h3>{{hero.superhero}}</h3><small>{{hero.alter_ego}}</small>\n                <p>{{hero.first_appearance}}</p>\n            </ion-label>\n\n            <ion-label slot=\"end\" text-right>{{hero.publisher}}</ion-label>\n        </ion-item>\n    </ion-list>\n\n    <ion-list *ngIf=\"(superHeroes | async) === null\">\n        <ion-item *ngFor=\"let item of [1,1,1,1,1,1,1,1,1]\" class=\"animated flash slow infinite\">\n            <ion-label>\n                <h3>\n                    <ion-skeleton-text width=\"70%\"></ion-skeleton-text>\n                </h3>\n                <p>\n                    <ion-skeleton-text width=\"100%\"></ion-skeleton-text>\n                </p>\n\n            </ion-label>\n            <ion-label slot=\"end\" text-right>\n                <ion-skeleton-text width=\"40px\"></ion-skeleton-text>\n            </ion-label>\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/segment/segment.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ionicComponents/segment/segment.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lvbmljQ29tcG9uZW50cy9zZWdtZW50L3NlZ21lbnQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/segment/segment.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/ionicComponents/segment/segment.page.ts ***!
  \***************************************************************/
/*! exports provided: SegmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentPage", function() { return SegmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/data.service */ "./src/app/providers/data.service.ts");




var SegmentPage = /** @class */ (function () {
    function SegmentPage(dataService) {
        this.dataService = dataService;
        this.publisher = '';
    }
    SegmentPage.prototype.ngOnInit = function () {
        this.segmento.value = 'todos';
        this.superHeroes = this.dataService.getSuperHeroes();
    };
    SegmentPage.prototype.segmentChanged = function (event) {
        var valorSegmento = event.detail.value;
        if (valorSegmento === 'todos') {
            this.publisher = '';
            return;
        }
        this.publisher = valorSegmento;
        // console.log(valorSegmento);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSegment"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSegment"])
    ], SegmentPage.prototype, "segmento", void 0);
    SegmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-segment',
            template: __webpack_require__(/*! ./segment.page.html */ "./src/app/pages/ionicComponents/segment/segment.page.html"),
            styles: [__webpack_require__(/*! ./segment.page.scss */ "./src/app/pages/ionicComponents/segment/segment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], SegmentPage);
    return SegmentPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ionicComponents-segment-segment-module.js.map