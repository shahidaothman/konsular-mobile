(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-firebase-firedetails-firedetails-module"],{

/***/ "./src/app/pages/firebase/firedetails/firedetails.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/firebase/firedetails/firedetails.module.ts ***!
  \******************************************************************/
/*! exports provided: FiredetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiredetailsPageModule", function() { return FiredetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _firedetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./firedetails.page */ "./src/app/pages/firebase/firedetails/firedetails.page.ts");







var routes = [
    {
        path: '',
        component: _firedetails_page__WEBPACK_IMPORTED_MODULE_6__["FiredetailsPage"]
    }
];
var FiredetailsPageModule = /** @class */ (function () {
    function FiredetailsPageModule() {
    }
    FiredetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_firedetails_page__WEBPACK_IMPORTED_MODULE_6__["FiredetailsPage"]]
        })
    ], FiredetailsPageModule);
    return FiredetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/firebase/firedetails/firedetails.page.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/firebase/firedetails/firedetails.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-back-button defaultHref=\"home\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Firebase Update\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label position=\"floating\">Title</ion-label>\n    <ion-input [(ngModel)]=\"title\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Description</ion-label>\n    <ion-textarea rows=\"6\" cols=\"20\" [(ngModel)]=\"description\"></ion-textarea>\n  </ion-item>\n\n  <ion-button expand=\"block\" color=\"secondary\" margin-top (click)=\"update()\" [disabled]=\"isCreate\">\n    <span *ngIf=\"!isCreate\">\n      Update List\n    </span>\n    <ion-spinner name=\"dots\" *ngIf=\"isCreate\"></ion-spinner>\n  </ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/firebase/firedetails/firedetails.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/firebase/firedetails/firedetails.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpcmViYXNlL2ZpcmVkZXRhaWxzL2ZpcmVkZXRhaWxzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/firebase/firedetails/firedetails.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/firebase/firedetails/firedetails.page.ts ***!
  \****************************************************************/
/*! exports provided: FiredetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiredetailsPage", function() { return FiredetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/util.service */ "./src/app/providers/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var FiredetailsPage = /** @class */ (function () {
    function FiredetailsPage(route, util, adb, navCtrl) {
        this.route = route;
        this.util = util;
        this.adb = adb;
        this.navCtrl = navCtrl;
    }
    FiredetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.title = '';
        this.description = '';
        this.isCreate = false;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            console.log('id', _this.id);
            _this.adb.collection('lists')
                .doc(localStorage.getItem('uid'))
                .collection('list')
                .doc(_this.id)
                .valueChanges()
                .subscribe(function (item) {
                console.log('item', item);
                _this.title = item.title;
                _this.description = item.description;
            });
        });
    };
    FiredetailsPage.prototype.update = function () {
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
        this.adb.collection('lists').doc(localStorage.getItem('uid')).collection('list').doc(this.id).update({
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
    FiredetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-firedetails',
            template: __webpack_require__(/*! ./firedetails.page.html */ "./src/app/pages/firebase/firedetails/firedetails.page.html"),
            styles: [__webpack_require__(/*! ./firedetails.page.scss */ "./src/app/pages/firebase/firedetails/firedetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
    ], FiredetailsPage);
    return FiredetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-firebase-firedetails-firedetails-module.js.map