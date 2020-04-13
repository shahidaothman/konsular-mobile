(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forms-forms-example1-forms-example1-module"],{

/***/ "./src/app/pages/forms/forms-example1/forms-example1.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/forms/forms-example1/forms-example1.module.ts ***!
  \*********************************************************************/
/*! exports provided: FormsExample1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsExample1PageModule", function() { return FormsExample1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forms_example1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms-example1.page */ "./src/app/pages/forms/forms-example1/forms-example1.page.ts");







var routes = [
    {
        path: '',
        component: _forms_example1_page__WEBPACK_IMPORTED_MODULE_6__["FormsExample1Page"]
    }
];
var FormsExample1PageModule = /** @class */ (function () {
    function FormsExample1PageModule() {
    }
    FormsExample1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forms_example1_page__WEBPACK_IMPORTED_MODULE_6__["FormsExample1Page"]]
        })
    ], FormsExample1PageModule);
    return FormsExample1PageModule;
}());



/***/ }),

/***/ "./src/app/pages/forms/forms-example1/forms-example1.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/forms/forms-example1/forms-example1.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Contact Us\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n\n  <ion-list lines=\"none\" class=\"contactFormList\">\n\n    <ion-item class=\"inputs-item\" lines=\"none\">\n      <ion-input type=\"text\" placeholder=\"Name\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"inputs-item\" lines=\"none\">\n      <ion-input type=\"email\" placeholder=\"Email Address\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"inputs-item\" lines=\"none\">\n      <ion-input type=\"number\" placeholder=\"Mobile Phone\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"inputs-item\" lines=\"none\">\n      <ion-textarea placeholder=\"Message\" rows=\"6\"></ion-textarea>\n    </ion-item>\n\n  </ion-list>\n  <ion-button expand=\"block\" color=\"secondary\" (click)=\"sendMessage()\">Send Messages</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/forms/forms-example1/forms-example1.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/forms/forms-example1/forms-example1.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contactFormList {\n  margin-top: 20px; }\n  .contactFormList .inputs-item {\n    border: 1px solid lightcyan;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n    margin: 10px; }\n  .sendBtn {\n  border-radius: 10px; }\n  .footerContent {\n  margin-top: 10px; }\n  .footerContent .infoFooter {\n    color: gray;\n    font-size: 10px; }\n  .footerContent .footerImage {\n    height: 25px; }\n  .footerContent .footerImageW {\n    height: 25px;\n    margin-left: 82%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9mb3Jtcy9mb3Jtcy1leGFtcGxlMS9mb3Jtcy1leGFtcGxlMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDRyxnQkFBZ0IsRUFBQTtFQURuQjtJQUdLLDJCQUEyQjtJQUMzQix1Q0FBdUM7SUFDdkMsWUFBWSxFQUFBO0VBR2hCO0VBQ0UsbUJBQW1CLEVBQUE7RUFFckI7RUFDRSxnQkFBZ0IsRUFBQTtFQURsQjtJQUdJLFdBQVc7SUFDWCxlQUFlLEVBQUE7RUFKbkI7SUFPSSxZQUFZLEVBQUE7RUFQaEI7SUFVSSxZQUFZO0lBQ1osZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb3Jtcy9mb3Jtcy1leGFtcGxlMS9mb3Jtcy1leGFtcGxlMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLmNvbnRhY3RGb3JtTGlzdCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAuaW5wdXRzLWl0ZW0ge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRjeWFuO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgIH1cbiAgfVxuICAuc2VuZEJ0biB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICAuZm9vdGVyQ29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAuaW5mb0Zvb3RlciB7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG4gICAgLmZvb3RlckltYWdlIHtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG4gICAgLmZvb3RlckltYWdlVyB7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICBtYXJnaW4tbGVmdDogODIlO1xuICAgIH1cbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/forms/forms-example1/forms-example1.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/forms/forms-example1/forms-example1.page.ts ***!
  \*******************************************************************/
/*! exports provided: FormsExample1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsExample1Page", function() { return FormsExample1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/util.service */ "./src/app/providers/util.service.ts");



var FormsExample1Page = /** @class */ (function () {
    function FormsExample1Page(util) {
        this.util = util;
    }
    FormsExample1Page.prototype.ngOnInit = function () {
    };
    FormsExample1Page.prototype.sendMessage = function () {
        this.util.showToast('Message sent', 'success', 'bottom');
    };
    FormsExample1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forms-example1',
            template: __webpack_require__(/*! ./forms-example1.page.html */ "./src/app/pages/forms/forms-example1/forms-example1.page.html"),
            styles: [__webpack_require__(/*! ./forms-example1.page.scss */ "./src/app/pages/forms/forms-example1/forms-example1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
    ], FormsExample1Page);
    return FormsExample1Page;
}());



/***/ })

}]);
//# sourceMappingURL=pages-forms-forms-example1-forms-example1-module.js.map