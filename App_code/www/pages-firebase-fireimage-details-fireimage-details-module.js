(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-firebase-fireimage-details-fireimage-details-module"],{

/***/ "./src/app/pages/firebase/fireimage-details/fireimage-details.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/firebase/fireimage-details/fireimage-details.module.ts ***!
  \******************************************************************************/
/*! exports provided: FireimageDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireimageDetailsPageModule", function() { return FireimageDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fireimage_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fireimage-details.page */ "./src/app/pages/firebase/fireimage-details/fireimage-details.page.ts");







var routes = [
    {
        path: '',
        component: _fireimage_details_page__WEBPACK_IMPORTED_MODULE_6__["FireimageDetailsPage"]
    }
];
var FireimageDetailsPageModule = /** @class */ (function () {
    function FireimageDetailsPageModule() {
    }
    FireimageDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fireimage_details_page__WEBPACK_IMPORTED_MODULE_6__["FireimageDetailsPage"]]
        })
    ], FireimageDetailsPageModule);
    return FireimageDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/firebase/fireimage-details/fireimage-details.page.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/firebase/fireimage-details/fireimage-details.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-back-button defaultHref=\"home\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Firebase Image Update\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class=\"div_img\">\n    <img [src]=\"image\" class=\"img_logo\" />\n  </div>\n  <ion-item>\n    <ion-label position=\"floating\">Title</ion-label>\n    <ion-input [(ngModel)]=\"title\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Description</ion-label>\n    <ion-textarea rows=\"6\" cols=\"20\" [(ngModel)]=\"description\"></ion-textarea>\n  </ion-item>\n\n  <ion-button expand=\"block\" color=\"secondary\" margin-top (click)=\"update()\" [disabled]=\"isCreate\">\n    <span *ngIf=\"!isCreate\">\n      Update List\n    </span>\n    <ion-spinner name=\"dots\" *ngIf=\"isCreate\"></ion-spinner>\n  </ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/firebase/fireimage-details/fireimage-details.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/firebase/fireimage-details/fireimage-details.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div_img {\n  width: 250px;\n  height: 250px;\n  background-color: lightgray;\n  position: relative;\n  display: block;\n  margin: auto;\n  background-size: cover;\n  background-position: center; }\n  .div_img .my_spin {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%); }\n  .div_img .img_logo {\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9maXJlYmFzZS9maXJlaW1hZ2UtZGV0YWlscy9maXJlaW1hZ2UtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsMkJBQTJCLEVBQUE7RUFSL0I7SUFVUSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQU87SUFDUCxnQ0FBK0IsRUFBQTtFQWJ2QztJQWdCUSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUErQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmlyZWJhc2UvZmlyZWltYWdlLWRldGFpbHMvZmlyZWltYWdlLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIFxuLmRpdl9pbWd7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgLm15X3NwaW57XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0b3A6NTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIH1cbiAgICAuaW1nX2xvZ297ICAgICAgXG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/firebase/fireimage-details/fireimage-details.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/firebase/fireimage-details/fireimage-details.page.ts ***!
  \****************************************************************************/
/*! exports provided: FireimageDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireimageDetailsPage", function() { return FireimageDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/util.service */ "./src/app/providers/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var FireimageDetailsPage = /** @class */ (function () {
    function FireimageDetailsPage(route, util, adb, navCtrl) {
        this.route = route;
        this.util = util;
        this.adb = adb;
        this.navCtrl = navCtrl;
    }
    FireimageDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.title = '';
        this.description = '';
        this.isCreate = false;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            console.log('id', _this.id);
            _this.adb.collection('fireimage')
                .doc(localStorage.getItem('uid'))
                .collection('list')
                .doc(_this.id)
                .valueChanges()
                .subscribe(function (item) {
                console.log('item', item);
                _this.title = item.title;
                _this.description = item.description;
                _this.image = item.image;
            });
        });
    };
    FireimageDetailsPage.prototype.update = function () {
        var _this = this;
        if (this.title == '') {
            this.util.showWarningAlert('Please Add Title');
            return false;
        }
        if (this.description == '') {
            this.util.showWarningAlert('Please add Description');
            return false;
        }
        this.isCreate = true;
        this.adb.collection('fireimage').doc(localStorage.getItem('uid')).collection('list').doc(this.id).update({
            title: this.title,
            description: this.description,
        }).then(function () {
            console.log('added');
            _this.isCreate = false;
            _this.navCtrl.back();
            _this.util.showToast('List Updated', 'success', 'bottom');
        }).catch(function (error) {
            console.log('error', error);
            _this.isCreate = false;
            _this.util.showErrorAlert("Something went Wrong");
        });
    };
    FireimageDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fireimage-details',
            template: __webpack_require__(/*! ./fireimage-details.page.html */ "./src/app/pages/firebase/fireimage-details/fireimage-details.page.html"),
            styles: [__webpack_require__(/*! ./fireimage-details.page.scss */ "./src/app/pages/firebase/fireimage-details/fireimage-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
    ], FireimageDetailsPage);
    return FireimageDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-firebase-fireimage-details-fireimage-details-module.js.map