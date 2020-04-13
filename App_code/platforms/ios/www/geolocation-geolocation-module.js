(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["geolocation-geolocation-module"],{

/***/ "./src/app/pages/ionicComponents/geolocation/geolocation.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/geolocation/geolocation.module.ts ***!
  \*************************************************************************/
/*! exports provided: GeolocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationPageModule", function() { return GeolocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _geolocation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geolocation.page */ "./src/app/pages/ionicComponents/geolocation/geolocation.page.ts");







var routes = [
    {
        path: '',
        component: _geolocation_page__WEBPACK_IMPORTED_MODULE_6__["GeolocationPage"]
    }
];
var GeolocationPageModule = /** @class */ (function () {
    function GeolocationPageModule() {
    }
    GeolocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_geolocation_page__WEBPACK_IMPORTED_MODULE_6__["GeolocationPage"]]
        })
    ], GeolocationPageModule);
    return GeolocationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/geolocation/geolocation.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/geolocation/geolocation.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title> Consular Assistance</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n\n\n  <ion-row>\n    <ion-col>\n      <ion-button class=\"btn\" color=\"primary\" fill=\"solid\" (click)=\"nearestconsular()\">Nearest\n        Consular\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-button class=\"btn\" color=\"primary\" fill=\"solid\" (click)=\"mylocation()\">Send My\n        Location\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <!-- <ion-toolbar>\n    <ion-buttons slot=\"end\" class=\"nextbtn\">\n     \n      <ion-button color=\"primary\" fill=\"solid\" >\n        NEXT\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/geolocation/geolocation.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/geolocation/geolocation.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backButton {\n  margin-top: 10px;\n  background: transparent; }\n\nion-content {\n  --background: white;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.nextbtn {\n  width: -webkit-fill-available; }\n\nion-button {\n  width: -webkit-fill-available;\n  --border-radius: 15px !important;\n  margin-left: 30px;\n  margin-right: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9pb25pY0NvbXBvbmVudHMvZ2VvbG9jYXRpb24vZ2VvbG9jYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQWdCO0VBQ2hCLHVCQUNKLEVBQUE7O0FBQ0E7RUFHSSxtQkFBYTtFQUliLDRCQUE0QjtFQUM1QixzQkFBc0IsRUFBQTs7QUFJMUI7RUFDSSw2QkFBNkIsRUFBQTs7QUFHakM7RUFDSSw2QkFBNkI7RUFDN0IsZ0NBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lvbmljQ29tcG9uZW50cy9nZW9sb2NhdGlvbi9nZW9sb2NhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuYmFja0J1dHRvbntcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRcbiAgICB9XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTZkZWcsICNmZjI0MDAsICNlODFkMWQsICNlOGI3MWQsICNlM2U4MWQsICMxZGU4NDAsICMxZGRkZTgsICMyYjFkZTgsICNkZDAwZjMsICNkZDAwZjMpO1xuICAgICAgICBcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgyMjVkZWcsIHJnYmEoMjcsNDMsODgsMSkgMCUsIHJnYmEoNDUsMTIyLDE1OSwxKSAyNSUsIHJnYmEoNjMsMTYzLDIxNSwxKSA2MiUsIHJnYmEoOTgsMjAxLDI1NSwxKSA4MiUsIHJnYmEoMTQ5LDIxOCwyNTUsMSkgMTAwJSk7IFxuICAgICAgICAvLyAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDIyNWRlZywgcmdiYSgyNyw0Myw4OCwxKSAwJSwgcmdiYSg0NSwxMjIsMTU5LDEpIDI1JSwgcmdiYSg2MywxNjMsMjE1LDEpIDYyJSwgcmdiYSg5OCwyMDEsMjU1LDEpIDgyJSwgcmdiYSgxNDksMjE4LDI1NSwxKSAxMDAlKTsgXG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgcmdiYSgyNyw0Myw4OCwxKSAwJSwgcmdiYSg0NSwxMjIsMTU5LDEpIDI1JSwgcmdiYSg2MywxNjMsMjE1LDEpIDYyJSwgcmdiYSg5OCwyMDEsMjU1LDEpIDgyJSwgcmdiYSgxNDksMjE4LDI1NSwxKSAxMDAlKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgIFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcbiAgICB9XG5cblxuICAgIC5uZXh0YnRuIHtcbiAgICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7IFxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/geolocation/geolocation.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/ionicComponents/geolocation/geolocation.page.ts ***!
  \***********************************************************************/
/*! exports provided: GeolocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationPage", function() { return GeolocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/util.service */ "./src/app/providers/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var GeolocationPage = /** @class */ (function () {
    function GeolocationPage(util, router) {
        this.util = util;
        this.router = router;
    }
    GeolocationPage.prototype.ngOnInit = function () {
    };
    GeolocationPage.prototype.nearestconsular = function () {
        console.log('near-consular');
        this.router.navigate(['near-consular']);
    };
    GeolocationPage.prototype.mylocation = function () {
        console.log('my location');
        this.router.navigate(['my-location']);
    };
    GeolocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-geolocation',
            template: __webpack_require__(/*! ./geolocation.page.html */ "./src/app/pages/ionicComponents/geolocation/geolocation.page.html"),
            styles: [__webpack_require__(/*! ./geolocation.page.scss */ "./src/app/pages/ionicComponents/geolocation/geolocation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GeolocationPage);
    return GeolocationPage;
}());



/***/ })

}]);
//# sourceMappingURL=geolocation-geolocation-module.js.map