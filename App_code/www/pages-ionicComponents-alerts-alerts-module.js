(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ionicComponents-alerts-alerts-module"],{

/***/ "./src/app/pages/ionicComponents/alerts/alerts.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/ionicComponents/alerts/alerts.module.ts ***!
  \***************************************************************/
/*! exports provided: AlertsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsPageModule", function() { return AlertsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _alerts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alerts.page */ "./src/app/pages/ionicComponents/alerts/alerts.page.ts");







var routes = [
    {
        path: '',
        component: _alerts_page__WEBPACK_IMPORTED_MODULE_6__["AlertsPage"]
    }
];
var AlertsPageModule = /** @class */ (function () {
    function AlertsPageModule() {
    }
    AlertsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_alerts_page__WEBPACK_IMPORTED_MODULE_6__["AlertsPage"]]
        })
    ], AlertsPageModule);
    return AlertsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/alerts/alerts.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/ionicComponents/alerts/alerts.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Alerts\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label text-center>Resources</ion-label>\n    </ion-item>\n    <div class=\"box\" id=\"g1\" (click)=\"basic()\">\n      <p>Basic Alert</p>\n    </div>\n    <div class=\"box\" id=\"g2\" (click)=\"form()\">\n      <p>Form Alert</p>\n    </div>\n\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/alerts/alerts.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/ionicComponents/alerts/alerts.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.box {\n  height: 50px;\n  margin-bottom: 20px;\n  border-radius: 15px; }\n\n.box p {\n  line-height: 50px;\n  font-size: 1em;\n  color: white;\n  text-align: center;\n  font-weight: bold; }\n\n/* Gradient 1 */\n\n#g1 {\n  background: linear-gradient(90deg, #69b7eb, #b3dbd3, #f4d6db); }\n\n/* Gradient 2 */\n\n#g2 {\n  background: linear-gradient(90deg, #cfecd0, #ffc5ca); }\n\n/* Gradient 3 */\n\n#g3 {\n  background: linear-gradient(90deg, #f598a8, #f6edb2); }\n\n/* Gradient 4 */\n\n#g4 {\n  background: linear-gradient(90deg, #ee5c87, #f1a4b5, #d587b3); }\n\n/* Gradient 5 */\n\n#g5 {\n  background: linear-gradient(90deg, #b9deed, #efefef); }\n\n/* Gradient 6 */\n\n#g6 {\n  background: linear-gradient(90deg, #aea4e3, #d3ffe8); }\n\n/* Gradient 7 */\n\n#g7 {\n  background: linear-gradient(90deg, #faf0cd, #fab397); }\n\n/* Gradient 8 */\n\n#g8 {\n  background: linear-gradient(90deg, #cfecd0, #a0cea7, #9ec0db); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9rb25zdWxhci1tb2JpbGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9pb25pY0NvbXBvbmVudHMvYWxlcnRzL2FsZXJ0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR25CLGVBQUE7O0FBQ0E7RUFDRSw2REFBNkQsRUFBQTs7QUFHL0QsZUFBQTs7QUFDQTtFQUNFLG9EQUFvRCxFQUFBOztBQUd0RCxlQUFBOztBQUNBO0VBQ0Usb0RBQW9ELEVBQUE7O0FBR3RELGVBQUE7O0FBQ0E7RUFDRSw2REFBNkQsRUFBQTs7QUFHL0QsZUFBQTs7QUFDQTtFQUNFLG9EQUFvRCxFQUFBOztBQUd0RCxlQUFBOztBQUNBO0VBQ0Usb0RBQW9ELEVBQUE7O0FBR3RELGVBQUE7O0FBQ0E7RUFDRSxvREFBb0QsRUFBQTs7QUFHdEQsZUFBQTs7QUFDQTtFQUNFLDZEQUE2RCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW9uaWNDb21wb25lbnRzL2FsZXJ0cy9hbGVydHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJveCB7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmJveCBwIHtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qIEdyYWRpZW50IDEgKi9cbiNnMSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzY5YjdlYiwgI2IzZGJkMywgI2Y0ZDZkYik7XG59XG5cbi8qIEdyYWRpZW50IDIgKi9cbiNnMiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2NmZWNkMCwgI2ZmYzVjYSk7XG59XG5cbi8qIEdyYWRpZW50IDMgKi9cbiNnMyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Y1OThhOCwgI2Y2ZWRiMik7XG59XG5cbi8qIEdyYWRpZW50IDQgKi9cbiNnNCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2VlNWM4NywgI2YxYTRiNSwgI2Q1ODdiMyk7XG59XG5cbi8qIEdyYWRpZW50IDUgKi9cbiNnNSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2I5ZGVlZCwgI2VmZWZlZik7XG59XG5cbi8qIEdyYWRpZW50IDYgKi9cbiNnNiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2FlYTRlMywgI2QzZmZlOCk7XG59XG5cbi8qIEdyYWRpZW50IDcgKi9cbiNnNyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZhZjBjZCwgI2ZhYjM5Nyk7XG59XG5cbi8qIEdyYWRpZW50IDggKi9cbiNnOCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2NmZWNkMCwgI2EwY2VhNywgIzllYzBkYik7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/alerts/alerts.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/ionicComponents/alerts/alerts.page.ts ***!
  \*************************************************************/
/*! exports provided: AlertsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsPage", function() { return AlertsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AlertsPage = /** @class */ (function () {
    function AlertsPage(router) {
        this.router = router;
    }
    AlertsPage.prototype.ngOnInit = function () {
    };
    AlertsPage.prototype.basic = function () {
        this.router.navigate(['basic-alert']);
    };
    AlertsPage.prototype.form = function () {
        this.router.navigate(['form-alert']);
    };
    AlertsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alerts',
            template: __webpack_require__(/*! ./alerts.page.html */ "./src/app/pages/ionicComponents/alerts/alerts.page.html"),
            styles: [__webpack_require__(/*! ./alerts.page.scss */ "./src/app/pages/ionicComponents/alerts/alerts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlertsPage);
    return AlertsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ionicComponents-alerts-alerts-module.js.map