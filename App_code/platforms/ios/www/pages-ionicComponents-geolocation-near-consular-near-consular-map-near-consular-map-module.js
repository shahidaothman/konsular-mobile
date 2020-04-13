(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ionicComponents-geolocation-near-consular-near-consular-map-near-consular-map-module"],{

/***/ "./src/app/pages/ionicComponents/geolocation/near-consular/near-consular-map/near-consular-map.module.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/geolocation/near-consular/near-consular-map/near-consular-map.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: NearConsularMapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearConsularMapPageModule", function() { return NearConsularMapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _near_consular_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./near-consular-map.page */ "./src/app/pages/ionicComponents/geolocation/near-consular/near-consular-map/near-consular-map.page.ts");







var routes = [
    {
        path: '',
        component: _near_consular_map_page__WEBPACK_IMPORTED_MODULE_6__["NearConsularMapPage"]
    }
];
var NearConsularMapPageModule = /** @class */ (function () {
    function NearConsularMapPageModule() {
    }
    NearConsularMapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_near_consular_map_page__WEBPACK_IMPORTED_MODULE_6__["NearConsularMapPage"]]
        })
    ], NearConsularMapPageModule);
    return NearConsularMapPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/geolocation/near-consular/near-consular-map/near-consular-map.page.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/geolocation/near-consular/near-consular-map/near-consular-map.page.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Location</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #map id=\"map\"></div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/geolocation/near-consular/near-consular-map/near-consular-map.page.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/geolocation/near-consular/near-consular-map/near-consular-map.page.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9pb25pY0NvbXBvbmVudHMvZ2VvbG9jYXRpb24vbmVhci1jb25zdWxhci9uZWFyLWNvbnN1bGFyLW1hcC9uZWFyLWNvbnN1bGFyLW1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW9uaWNDb21wb25lbnRzL2dlb2xvY2F0aW9uL25lYXItY29uc3VsYXIvbmVhci1jb25zdWxhci1tYXAvbmVhci1jb25zdWxhci1tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/geolocation/near-consular/near-consular-map/near-consular-map.page.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/geolocation/near-consular/near-consular-map/near-consular-map.page.ts ***!
  \*************************************************************************************************************/
/*! exports provided: NearConsularMapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearConsularMapPage", function() { return NearConsularMapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NearConsularMapPage = /** @class */ (function () {
    function NearConsularMapPage() {
    }
    NearConsularMapPage.prototype.ngOnInit = function () {
        this.loadMap();
    };
    NearConsularMapPage.prototype.ionViewDidLoad = function () {
    };
    NearConsularMapPage.prototype.loadMap = function () {
        var latLng = new google.maps.LatLng(-34.9290, 138.6010);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.addMarker();
    };
    NearConsularMapPage.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<h4>RCAP DESIGNS!</h4>";
        this.addInfoWindow(marker, content);
    };
    NearConsularMapPage.prototype.addInfoWindow = function (marker, content) {
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
    ], NearConsularMapPage.prototype, "mapElement", void 0);
    NearConsularMapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-near-consular-map',
            template: __webpack_require__(/*! ./near-consular-map.page.html */ "./src/app/pages/ionicComponents/geolocation/near-consular/near-consular-map/near-consular-map.page.html"),
            styles: [__webpack_require__(/*! ./near-consular-map.page.scss */ "./src/app/pages/ionicComponents/geolocation/near-consular/near-consular-map/near-consular-map.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NearConsularMapPage);
    return NearConsularMapPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ionicComponents-geolocation-near-consular-near-consular-map-near-consular-map-module.js.map