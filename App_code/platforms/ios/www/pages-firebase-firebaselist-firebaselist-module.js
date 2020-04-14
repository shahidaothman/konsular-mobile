(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-firebase-firebaselist-firebaselist-module"],{

/***/ "./src/app/pages/firebase/firebaselist/firebaselist.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/firebase/firebaselist/firebaselist.module.ts ***!
  \********************************************************************/
/*! exports provided: FirebaselistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaselistPageModule", function() { return FirebaselistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _firebaselist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./firebaselist.page */ "./src/app/pages/firebase/firebaselist/firebaselist.page.ts");







var routes = [
    {
        path: '',
        component: _firebaselist_page__WEBPACK_IMPORTED_MODULE_6__["FirebaselistPage"]
    }
];
var FirebaselistPageModule = /** @class */ (function () {
    function FirebaselistPageModule() {
    }
    FirebaselistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_firebaselist_page__WEBPACK_IMPORTED_MODULE_6__["FirebaselistPage"]]
        })
    ], FirebaselistPageModule);
    return FirebaselistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/firebase/firebaselist/firebaselist.page.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/firebase/firebaselist/firebaselist.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-back-button defaultHref=\"home\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Firebase List\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"div_logo\" (click)=\"addNew()\">\n    <img src=\"assets/images/add.png\" class=\"img \">\n    <p class=\"new_title\">Add New</p>\n  </div>\n\n  <img *ngIf=\"!haveData\" src=\"assets/images/nodata.png\">\n\n  <ion-card *ngFor=\"let list of lists;let i = index\">\n    <ion-card-header>\n      <ion-card-subtitle>\n        <span class=\"text-primary\">{{ i + 1 }}.</span>\n        <span class=\"list-source-name\" [innerHTML]=\"gettimeago(list.timestamp)\"></span>\n        <div class=\"list-more\">\n          <ion-button fill=\"clear\" (click)=\"launchMenu(list)\">\n            <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n          </ion-button>\n        </div>\n      </ion-card-subtitle>\n      <ion-card-title>{{list.title}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>\n        {{ list.description}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/firebase/firebaselist/firebaselist.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/firebase/firebaselist/firebaselist.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div_logo {\n  width: 100%;\n  text-align: center; }\n  .div_logo .new_title {\n    font-size: 1rem; }\n  .div_logo .img {\n    width: 20%;\n    margin-top: 5% !important; }\n  .list-more {\n  font-size: 25px !important;\n  position: absolute;\n  right: -10px;\n  top: -18px; }\n  .text-primary {\n  color: var(--ion-color-primary) !important; }\n  .list-source-name {\n  font-size: 12px;\n  color: lightgray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9rb25zdWxhci1tb2JpbGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9maXJlYmFzZS9maXJlYmFzZWxpc3QvZmlyZWJhc2VsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNRLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTtFQUYxQjtJQUlZLGVBQWUsRUFBQTtFQUozQjtJQU9ZLFVBQVU7SUFDVix5QkFBeUIsRUFBQTtFQUdqQztFQUNJLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVUsRUFBQTtFQUVkO0VBQ0ksMENBQTJDLEVBQUE7RUFFL0M7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9maXJlYmFzZS9maXJlYmFzZWxpc3QvZmlyZWJhc2VsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiBcbi5kaXZfbG9nb3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLm5ld190aXRsZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxpc3QtbW9yZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAtMTBweDtcbiAgICAgICAgdG9wOiAtMThweDtcbiAgICB9XG4gICAgLnRleHQtcHJpbWFyeSB7XG4gICAgICAgIGNvbG9yOiB2YXIoIC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5saXN0LXNvdXJjZS1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/firebase/firebaselist/firebaselist.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/firebase/firebaselist/firebaselist.page.ts ***!
  \******************************************************************/
/*! exports provided: FirebaselistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaselistPage", function() { return FirebaselistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/util.service */ "./src/app/providers/util.service.ts");






var FirebaselistPage = /** @class */ (function () {
    function FirebaselistPage(router, adb, actionSheetController, util) {
        this.router = router;
        this.adb = adb;
        this.actionSheetController = actionSheetController;
        this.util = util;
        this.haveData = false;
    }
    FirebaselistPage.prototype.ngOnInit = function () {
        var _this = this;
        var uid = localStorage.getItem('uid');
        if (uid && uid != null && uid != 'null') {
            this.adb.collection('lists')
                .doc(localStorage.getItem('uid'))
                .collection('list')
                .valueChanges()
                .subscribe(function (lists) {
                console.log('list', lists);
                _this.lists = lists;
                if (_this.lists.length > 0) {
                    _this.haveData = true;
                }
            });
        }
        else {
            this.router.navigate(['/firebase-auth']);
            this.util.showToast('Unauthorized', 'danger', 'bottom');
        }
    };
    FirebaselistPage.prototype.addNew = function () {
        this.router.navigate(['firecreate']);
    };
    FirebaselistPage.prototype.gettimeago = function (time) {
        var d = new Date(time);
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var c = monthNames[d.getMonth()];
        c = monthNames[d.getMonth()] + ' ' + d.getDate();
        return c;
    };
    FirebaselistPage.prototype.deleteItem = function (id) {
        return this.adb.collection('lists')
            .doc(localStorage.getItem('uid'))
            .collection('list')
            .doc(id)
            .delete()
            .then(function () {
            console.log('deleted');
        });
    };
    FirebaselistPage.prototype.launchMenu = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Action',
                            buttons: [
                                {
                                    text: 'Edit',
                                    icon: 'create',
                                    handler: function () {
                                        console.log('Edit clicked');
                                        _this.router.navigate(['firedetails', item.id]);
                                    }
                                }, {
                                    text: 'Delete',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        console.log('Delete clicked');
                                        _this.deleteItem(item.id);
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FirebaselistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-firebaselist',
            template: __webpack_require__(/*! ./firebaselist.page.html */ "./src/app/pages/firebase/firebaselist/firebaselist.page.html"),
            styles: [__webpack_require__(/*! ./firebaselist.page.scss */ "./src/app/pages/firebase/firebaselist/firebaselist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]])
    ], FirebaselistPage);
    return FirebaselistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-firebase-firebaselist-firebaselist-module.js.map