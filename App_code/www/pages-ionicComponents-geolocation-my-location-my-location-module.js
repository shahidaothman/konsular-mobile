(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ionicComponents-geolocation-my-location-my-location-module"],{

/***/ "./src/app/pages/ionicComponents/geolocation/my-location/my-location.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/geolocation/my-location/my-location.module.ts ***!
  \*************************************************************************************/
/*! exports provided: MyLocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyLocationPageModule", function() { return MyLocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-location.page */ "./src/app/pages/ionicComponents/geolocation/my-location/my-location.page.ts");







var routes = [
    {
        path: '',
        component: _my_location_page__WEBPACK_IMPORTED_MODULE_6__["MyLocationPage"]
    }
];
var MyLocationPageModule = /** @class */ (function () {
    function MyLocationPageModule() {
    }
    MyLocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_location_page__WEBPACK_IMPORTED_MODULE_6__["MyLocationPage"]]
        })
    ], MyLocationPageModule);
    return MyLocationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/geolocation/my-location/my-location.page.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/geolocation/my-location/my-location.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Send My Location</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #map id=\"map\"></div>\n  <ion-row>\n    <ion-col>\n      <ion-button class=\"btn\" color=\"primary\" fill=\"solid\" (click)=\"nearestconsular()\">Send Location\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/geolocation/my-location/my-location.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/geolocation/my-location/my-location.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  width: 100%;\n  height: 85%; }\n\n.nextbtn {\n  width: -webkit-fill-available; }\n\nion-button {\n  width: -webkit-fill-available;\n  --border-radius: 15px !important;\n  margin-left: 30px;\n  margin-right: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9rb25zdWxhci1tb2JpbGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9pb25pY0NvbXBvbmVudHMvZ2VvbG9jYXRpb24vbXktbG9jYXRpb24vbXktbG9jYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFHZjtFQUNJLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLDZCQUE2QjtFQUM3QixnQ0FBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW9uaWNDb21wb25lbnRzL2dlb2xvY2F0aW9uL215LWxvY2F0aW9uL215LWxvY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODUlO1xufVxuXG4ubmV4dGJ0biB7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG5cbmlvbi1idXR0b257XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7IFxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/geolocation/my-location/my-location.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/geolocation/my-location/my-location.page.ts ***!
  \***********************************************************************************/
/*! exports provided: MyLocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyLocationPage", function() { return MyLocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyLocationPage = /** @class */ (function () {
    function MyLocationPage() {
    }
    MyLocationPage.prototype.ngOnInit = function () {
        this.loadMap();
    };
    MyLocationPage.prototype.ionViewDidLoad = function () {
    };
    MyLocationPage.prototype.loadMap = function () {
        var latLng = new google.maps.LatLng(-34.9290, 138.6010);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.addMarker();
    };
    MyLocationPage.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<h4>RCAP DESIGNS!</h4>";
        this.addInfoWindow(marker, content);
    };
    MyLocationPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MyLocationPage.prototype, "mapElement", void 0);
    MyLocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-location',
            template: __webpack_require__(/*! ./my-location.page.html */ "./src/app/pages/ionicComponents/geolocation/my-location/my-location.page.html"),
            styles: [__webpack_require__(/*! ./my-location.page.scss */ "./src/app/pages/ionicComponents/geolocation/my-location/my-location.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyLocationPage);
    return MyLocationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ionicComponents-geolocation-my-location-my-location-module.js.map