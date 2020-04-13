(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expantable-expantable2-expantable2-module"],{

/***/ "./src/app/pages/expantable/expantable2/expantable2.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/expantable/expantable2/expantable2.module.ts ***!
  \********************************************************************/
/*! exports provided: Expantable2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expantable2PageModule", function() { return Expantable2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _expantable2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expantable2.page */ "./src/app/pages/expantable/expantable2/expantable2.page.ts");







var routes = [
    {
        path: '',
        component: _expantable2_page__WEBPACK_IMPORTED_MODULE_6__["Expantable2Page"]
    }
];
var Expantable2PageModule = /** @class */ (function () {
    function Expantable2PageModule() {
    }
    Expantable2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_expantable2_page__WEBPACK_IMPORTED_MODULE_6__["Expantable2Page"]]
        })
    ], Expantable2PageModule);
    return Expantable2PageModule;
}());



/***/ }),

/***/ "./src/app/pages/expantable/expantable2/expantable2.page.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/expantable/expantable2/expantable2.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Layout 2\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"lists\">\n    <div *ngFor=\"let item of lists;let i = index\">\n      <ion-item lines=\"none\" (click)=\"lists[i].show = !lists[i].show\">\n        <ion-icon color=\"secondary\" slot=\"end\" name=\"add\"></ion-icon>\n        <ion-label class=\"main_lbl\" text-center>\n          {{item.name}}\n        </ion-label>\n      </ion-item>\n      <div *ngIf=\"item.show\" class=\"sub_list\">\n        <ion-item *ngFor=\"let sub of item.subList\" lines=\"none\">\n          <ion-label item-title text-wrap>{{sub.name}}</ion-label>\n          <ion-checkbox (ionChange)=\"onChange(sub)\">\n          </ion-checkbox>\n        </ion-item>\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/expantable/expantable2/expantable2.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/expantable/expantable2/expantable2.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lists {\n  margin-top: 10px; }\n  .lists ion-item {\n    margin-top: 20px;\n    margin-bottom: 20px; }\n  .lists .main_lbl {\n    color: var(--ion-color-secondary); }\n  .lists .sub_list {\n    transition: all 300ms;\n    overflow: hidden; }\n  .lists .sub_list ion-item {\n      --background: var(--ion-color-dark);\n      color: white;\n      margin: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9leHBhbnRhYmxlL2V4cGFudGFibGUyL2V4cGFudGFibGUyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFnQixFQUFBO0VBRHBCO0lBR1EsZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBO0VBSjNCO0lBT1EsaUNBQWlDLEVBQUE7RUFQekM7SUFXUSxxQkFBcUI7SUFDckIsZ0JBQWdCLEVBQUE7RUFaeEI7TUFjWSxtQ0FBYTtNQUNiLFlBQVc7TUFDWCxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGFudGFibGUvZXhwYW50YWJsZTIvZXhwYW50YWJsZTIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubGlzdHN7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBpb24taXRlbXtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgLm1haW5fbGJse1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgfVxuICAgIC5zdWJfbGlzdHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgaW9uLWl0ZW17XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/expantable/expantable2/expantable2.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/expantable/expantable2/expantable2.page.ts ***!
  \******************************************************************/
/*! exports provided: Expantable2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expantable2Page", function() { return Expantable2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Expantable2Page = /** @class */ (function () {
    function Expantable2Page() {
        this.lists = [
            {
                name: 'Favourite Sports',
                show: false,
                subList: [
                    {
                        name: 'Cricket'
                    },
                    {
                        name: 'Football'
                    },
                    {
                        name: 'Baseball'
                    },
                    {
                        name: 'Chess'
                    },
                    {
                        name: 'BasketBall'
                    },
                    {
                        name: 'Long Tennis'
                    },
                    {
                        name: 'Table Tennis'
                    },
                ]
            },
            {
                name: 'Favourite Food',
                show: false,
                subList: [
                    {
                        name: 'Indian Food'
                    },
                    {
                        name: 'Chiness Food'
                    },
                    {
                        name: 'Thai Food'
                    },
                    {
                        name: 'American Foods'
                    },
                    {
                        name: 'Fast Food'
                    },
                ]
            },
            {
                name: 'Favourite Place',
                show: false,
                subList: [
                    {
                        name: 'India'
                    },
                    {
                        name: 'China'
                    },
                    {
                        name: 'America'
                    },
                    {
                        name: 'Switzerland'
                    },
                    {
                        name: 'Maldius'
                    },
                ]
            },
            {
                name: 'Favourite Movie',
                show: false,
                subList: [
                    {
                        name: 'Avengers Endgame'
                    },
                    {
                        name: 'Titanic'
                    },
                    {
                        name: 'Avatar'
                    },
                    {
                        name: 'Dangal'
                    },
                    {
                        name: 'Khiladi'
                    },
                ]
            },
            {
                name: 'Favourite Actors',
                show: false,
                subList: [
                    {
                        name: 'Robert Dowyne Jr'
                    },
                    {
                        name: 'Leonardo'
                    },
                    {
                        name: 'Shahrukh Khan'
                    },
                    {
                        name: 'Akshay Kumar'
                    },
                    {
                        name: 'Vin Deisal'
                    },
                ]
            }
        ];
    }
    Expantable2Page.prototype.ngOnInit = function () {
    };
    Expantable2Page.prototype.onChange = function (item) {
        console.log('item', item);
    };
    Expantable2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expantable2',
            template: __webpack_require__(/*! ./expantable2.page.html */ "./src/app/pages/expantable/expantable2/expantable2.page.html"),
            styles: [__webpack_require__(/*! ./expantable2.page.scss */ "./src/app/pages/expantable/expantable2/expantable2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Expantable2Page);
    return Expantable2Page;
}());



/***/ })

}]);
//# sourceMappingURL=pages-expantable-expantable2-expantable2-module.js.map