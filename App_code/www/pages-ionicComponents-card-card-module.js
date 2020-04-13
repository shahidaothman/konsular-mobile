(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ionicComponents-card-card-module"],{

/***/ "./src/app/pages/ionicComponents/card/card.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/ionicComponents/card/card.module.ts ***!
  \***********************************************************/
/*! exports provided: CardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPageModule", function() { return CardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card.page */ "./src/app/pages/ionicComponents/card/card.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _card_page__WEBPACK_IMPORTED_MODULE_6__["CardPage"]
    }
];
var CardPageModule = /** @class */ (function () {
    function CardPageModule() {
    }
    CardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_card_page__WEBPACK_IMPORTED_MODULE_6__["CardPage"]]
        })
    ], CardPageModule);
    return CardPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/card/card.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/ionicComponents/card/card.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"variable || 'Card Page'\">\n</app-header>\n\n<ion-content padding>\n\n    <ion-card mode=\"ios\" color=\"primary\">\n        <ion-card-header>\n            <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n            <ion-card-title>Awesome Title</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            Awesome content\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card mode=\"ios\">\n        <ion-item color=\"primary\">\n            <ion-icon color=\"light\" slot=\"start\" name=\"pin\"></ion-icon>\n            <ion-label>Marcador</ion-label>\n        </ion-item>\n        <ion-card-content>\n            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam accusamus quaerat id architecto neque,\n            quo qui consequuntur nesciunt. Voluptatibus atque repellendus iure velit earum, provident tenetur est autem\n            beatae nostrum.\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-img src=\"assets/shapes.svg\">\n\n        </ion-img>\n\n        <ion-card-content>\n            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam accusamus quaerat id architecto neque,\n            quo qui consequuntur nesciunt. Voluptatibus atque repellendus iure velit earum, provident tenetur est autem\n            beatae nostrum.\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/card/card.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/ionicComponents/card/card.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lvbmljQ29tcG9uZW50cy9jYXJkL2NhcmQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/card/card.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/ionicComponents/card/card.page.ts ***!
  \*********************************************************/
/*! exports provided: CardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPage", function() { return CardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardPage = /** @class */ (function () {
    function CardPage() {
    }
    CardPage.prototype.ngOnInit = function () {
    };
    CardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.page.html */ "./src/app/pages/ionicComponents/card/card.page.html"),
            styles: [__webpack_require__(/*! ./card.page.scss */ "./src/app/pages/ionicComponents/card/card.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardPage);
    return CardPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ionicComponents-card-card-module.js.map