(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-firebase-firecreate-firecreate-module"],{

/***/ "./src/app/pages/firebase/firecreate/firecreate.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/firebase/firecreate/firecreate.module.ts ***!
  \****************************************************************/
/*! exports provided: FirecreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirecreatePageModule", function() { return FirecreatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _firecreate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./firecreate.page */ "./src/app/pages/firebase/firecreate/firecreate.page.ts");







var routes = [
    {
        path: '',
        component: _firecreate_page__WEBPACK_IMPORTED_MODULE_6__["FirecreatePage"]
    }
];
var FirecreatePageModule = /** @class */ (function () {
    function FirecreatePageModule() {
    }
    FirecreatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_firecreate_page__WEBPACK_IMPORTED_MODULE_6__["FirecreatePage"]]
        })
    ], FirecreatePageModule);
    return FirecreatePageModule;
}());



/***/ }),

/***/ "./src/app/pages/firebase/firecreate/firecreate.page.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/firebase/firecreate/firecreate.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-back-button defaultHref=\"home\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Add New List\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label position=\"floating\">Title</ion-label>\n    <ion-input [(ngModel)]=\"title\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Description</ion-label>\n    <ion-textarea [(ngModel)]=\"description\"></ion-textarea>\n  </ion-item>\n\n  <ion-button expand=\"block\" color=\"secondary\" margin-top (click)=\"addList()\" [disabled]=\"isCreate\">\n    <span *ngIf=\"!isCreate\">\n      Add List\n    </span>\n    <ion-spinner name=\"dots\" *ngIf=\"isCreate\"></ion-spinner>\n  </ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/firebase/firecreate/firecreate.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/firebase/firecreate/firecreate.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpcmViYXNlL2ZpcmVjcmVhdGUvZmlyZWNyZWF0ZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/firebase/firecreate/firecreate.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/firebase/firecreate/firecreate.page.ts ***!
  \**************************************************************/
/*! exports provided: FirecreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirecreatePage", function() { return FirecreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/util.service */ "./src/app/providers/util.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var FirecreatePage = /** @class */ (function () {
    function FirecreatePage(util, adb, navCtrl) {
        this.util = util;
        this.adb = adb;
        this.navCtrl = navCtrl;
        this.title = '';
        this.description = '';
    }
    FirecreatePage.prototype.ngOnInit = function () {
        this.isCreate = false;
    };
    FirecreatePage.prototype.addList = function () {
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
        var id = this.makeid(10);
        this.adb.collection('lists').doc(localStorage.getItem('uid')).collection('list').doc(id).set({
            id: id,
            title: this.title,
            description: this.description,
            timestamp: new Date().toISOString(),
        }).then(function () {
            console.log('added');
            _this.isCreate = false;
            _this.navCtrl.back();
            _this.util.showToast('List Added', 'success', 'bottom');
        }).catch(function (error) {
            console.log('error', error);
            _this.isCreate = false;
            _this.util.showErrorAlert("Something went Wrong");
        });
    };
    FirecreatePage.prototype.makeid = function (length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    FirecreatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-firecreate',
            template: __webpack_require__(/*! ./firecreate.page.html */ "./src/app/pages/firebase/firecreate/firecreate.page.html"),
            styles: [__webpack_require__(/*! ./firecreate.page.scss */ "./src/app/pages/firebase/firecreate/firecreate.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], FirecreatePage);
    return FirecreatePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-firebase-firecreate-firecreate-module.js.map