(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expantable-expantable3-expantable3-module"],{

/***/ "./src/app/pages/expantable/expantable3/expantable3.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/expantable/expantable3/expantable3.module.ts ***!
  \********************************************************************/
/*! exports provided: Expantable3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expantable3PageModule", function() { return Expantable3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _projects_core_src_lib_center_center_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../projects/core/src/lib/center/center.module */ "./projects/core/src/lib/center/center.module.ts");
/* harmony import */ var _projects_core_src_lib_ripple_ripple_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../projects/core/src/lib/ripple/ripple.module */ "./projects/core/src/lib/ripple/ripple.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm5/fivethree-core.js");
/* harmony import */ var _expantable3_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./expantable3.page */ "./src/app/pages/expantable/expantable3/expantable3.page.ts");










var routes = [
    {
        path: '',
        component: _expantable3_page__WEBPACK_IMPORTED_MODULE_9__["Expantable3Page"]
    }
];
var Expantable3PageModule = /** @class */ (function () {
    function Expantable3PageModule() {
    }
    Expantable3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _fivethree_core__WEBPACK_IMPORTED_MODULE_8__["FivExpandableModule"],
                _projects_core_src_lib_ripple_ripple_module__WEBPACK_IMPORTED_MODULE_4__["FivRippleModule"],
                _projects_core_src_lib_center_center_module__WEBPACK_IMPORTED_MODULE_3__["FivCenterModule"]
            ],
            declarations: [_expantable3_page__WEBPACK_IMPORTED_MODULE_9__["Expantable3Page"]]
        })
    ], Expantable3PageModule);
    return Expantable3PageModule;
}());



/***/ }),

/***/ "./src/app/pages/expantable/expantable3/expantable3.page.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/expantable/expantable3/expantable3.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Layout 3\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item-divider>\n    <ion-label>Basic Example</ion-label>\n  </ion-item-divider>\n\n  <ion-button [disabled]=\"ex.isOpen\" (click)=\"ex.open()\">\n    Open\n  </ion-button>\n  <ion-button [disabled]=\"!ex.isOpen\" (click)=\"ex.close()\">\n    Close\n  </ion-button>\n\n  <fiv-expandable #ex>\n    <fiv-ripple [hover]=\"true\" header (fivClick)=\"ex.toggle()\">\n      <ion-item [lines]=\"'inset'\">\n        <ion-label>Expandable Header</ion-label>\n        <fiv-expandable-indicator></fiv-expandable-indicator>\n      </ion-item>\n    </fiv-ripple>\n    <div content>\n      <span class=\"content\">Expandable Content (height depends on contents size)</span>\n    </div>\n  </fiv-expandable>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/expantable/expantable3/expantable3.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/expantable/expantable3/expantable3.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div[content] {\n  min-height: 200px;\n  background: var(--ion-color-light);\n  position: relative;\n  margin: 10px;\n  padding: 10px; }\n\nion-item {\n  border: 1px solid var(--ion-color-light);\n  --inner-border-width: 0px; }\n\n.fiveMargin {\n  margin-top: 16px; }\n\n.content {\n  color: var(--ion-color-primary); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9leHBhbnRhYmxlL2V4cGFudGFibGUzL2V4cGFudGFibGUzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFpQjtFQUNqQixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksd0NBQXdDO0VBQ3hDLHlCQUFxQixFQUFBOztBQUl6QjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLCtCQUErQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXhwYW50YWJsZS9leHBhbnRhYmxlMy9leHBhbnRhYmxlMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmRpdltjb250ZW50XSB7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHg7XG59XG5cblxuLmZpdmVNYXJnaW4ge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5jb250ZW50IHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/expantable/expantable3/expantable3.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/expantable/expantable3/expantable3.page.ts ***!
  \******************************************************************/
/*! exports provided: Expantable3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expantable3Page", function() { return Expantable3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Expantable3Page = /** @class */ (function () {
    function Expantable3Page() {
    }
    Expantable3Page.prototype.ngOnInit = function () {
    };
    Expantable3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expantable3',
            template: __webpack_require__(/*! ./expantable3.page.html */ "./src/app/pages/expantable/expantable3/expantable3.page.html"),
            styles: [__webpack_require__(/*! ./expantable3.page.scss */ "./src/app/pages/expantable/expantable3/expantable3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Expantable3Page);
    return Expantable3Page;
}());



/***/ })

}]);
//# sourceMappingURL=pages-expantable-expantable3-expantable3-module.js.map