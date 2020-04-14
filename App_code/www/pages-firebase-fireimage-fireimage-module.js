(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-firebase-fireimage-fireimage-module"],{

/***/ "./src/app/pages/firebase/fireimage/fireimage.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/firebase/fireimage/fireimage.module.ts ***!
  \**************************************************************/
/*! exports provided: FireimagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireimagePageModule", function() { return FireimagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fireimage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fireimage.page */ "./src/app/pages/firebase/fireimage/fireimage.page.ts");







var routes = [
    {
        path: '',
        component: _fireimage_page__WEBPACK_IMPORTED_MODULE_6__["FireimagePage"]
    }
];
var FireimagePageModule = /** @class */ (function () {
    function FireimagePageModule() {
    }
    FireimagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fireimage_page__WEBPACK_IMPORTED_MODULE_6__["FireimagePage"]]
        })
    ], FireimagePageModule);
    return FireimagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/firebase/fireimage/fireimage.page.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/firebase/fireimage/fireimage.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-back-button defaultHref=\"home\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Firebase Image List\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"div_logo\" (click)=\"addNew()\">\n    <img src=\"assets/images/add.png\" class=\"img \">\n    <p class=\"new_title\">Add New</p>\n  </div>\n\n  <img *ngIf=\"!haveData\" src=\"assets/images/nodata.png\">\n\n  <ion-card *ngFor=\"let list of lists;let i = index\">\n    <ion-card-header>\n      <ion-card-subtitle>\n        <span class=\"text-primary\">{{ i + 1 }}.</span>\n        <span class=\"list-source-name\" [innerHTML]=\"gettimeago(list.timestamp)\"></span>\n        <div class=\"list-more\">\n          <ion-button fill=\"clear\" (click)=\"launchMenu(list)\">\n            <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n          </ion-button>\n        </div>\n      </ion-card-subtitle>\n      <ion-card-title>{{list.title}}</ion-card-title>\n    </ion-card-header>\n    <ion-img class=\"animated fadeIn fast\" *ngIf=\"list.image\" [src]=\"list.image\">\n    </ion-img>\n    <ion-card-content>\n      <p>\n        {{ list.description}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/firebase/fireimage/fireimage.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/firebase/fireimage/fireimage.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div_logo {\n  width: 100%;\n  text-align: center; }\n  .div_logo .new_title {\n    font-size: 1rem; }\n  .div_logo .img {\n    width: 20%;\n    margin-top: 5% !important; }\n  .list-more {\n  font-size: 25px !important;\n  position: absolute;\n  right: -10px;\n  top: -18px; }\n  .text-primary {\n  color: var(--ion-color-primary) !important; }\n  .list-source-name {\n  font-size: 12px;\n  color: lightgray; }\n  .animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n  .animated.fast {\n  -webkit-animation-duration: 700ms;\n  animation-duration: 700ms; }\n  @-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n  @keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n  .fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9rb25zdWxhci1tb2JpbGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9maXJlYmFzZS9maXJlaW1hZ2UvZmlyZWltYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNRLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTtFQUYxQjtJQUlZLGVBQWUsRUFBQTtFQUozQjtJQU9ZLFVBQVU7SUFDVix5QkFBeUIsRUFBQTtFQUdqQztFQUNJLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVUsRUFBQTtFQUVkO0VBQ0ksMENBQTJDLEVBQUE7RUFFL0M7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7RUFFcEI7RUFDSSw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyx5QkFBeUIsRUFBQTtFQUc3QjtFQUNJLGlDQUFpQztFQUNqQyx5QkFBeUIsRUFBQTtFQUc3QjtFQUNJO0lBQ0ksVUFBVSxFQUFBO0VBRWQ7SUFDSSxVQUFVLEVBQUEsRUFBQTtFQUlsQjtFQUNJO0lBQ0ksVUFBVSxFQUFBO0VBRWQ7SUFDSSxVQUFVLEVBQUEsRUFBQTtFQUlsQjtFQUNJLDhCQUE4QjtFQUM5QixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpcmViYXNlL2ZpcmVpbWFnZS9maXJlaW1hZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIFxuLmRpdl9sb2dve1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAubmV3X3RpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5pbWd7XG4gICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNSUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubGlzdC1tb3JlIHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xuICAgICAgICB0b3A6IC0xOHB4O1xuICAgIH1cbiAgICAudGV4dC1wcmltYXJ5IHtcbiAgICAgICAgY29sb3I6IHZhciggLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmxpc3Qtc291cmNlLW5hbWUge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgfVxuICAgIC5hbmltYXRlZCB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIH1cblxuICAgIC5hbmltYXRlZC5mYXN0IHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDcwMG1zO1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDcwMG1zO1xuICAgIH1cblxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgdG8ge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZmFkZUluIHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xuICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/firebase/fireimage/fireimage.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/firebase/fireimage/fireimage.page.ts ***!
  \************************************************************/
/*! exports provided: FireimagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireimagePage", function() { return FireimagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/util.service */ "./src/app/providers/util.service.ts");






var FireimagePage = /** @class */ (function () {
    function FireimagePage(router, adb, actionSheetController, util) {
        this.router = router;
        this.adb = adb;
        this.actionSheetController = actionSheetController;
        this.util = util;
        this.haveData = false;
    }
    FireimagePage.prototype.ngOnInit = function () {
        var _this = this;
        var uid = localStorage.getItem('uid');
        if (uid && uid != null && uid != 'null') {
            this.adb.collection('fireimage')
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
    FireimagePage.prototype.addNew = function () {
        this.router.navigate(['fireimage-create']);
    };
    FireimagePage.prototype.gettimeago = function (time) {
        var d = new Date(time);
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var c = monthNames[d.getMonth()];
        c = monthNames[d.getMonth()] + ' ' + d.getDate();
        return c;
    };
    FireimagePage.prototype.deleteItem = function (id) {
        return this.adb.collection('fireimage')
            .doc(localStorage.getItem('uid'))
            .collection('list')
            .doc(id)
            .delete()
            .then(function () {
            console.log('deleted');
        });
    };
    FireimagePage.prototype.launchMenu = function (item) {
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
                                        _this.router.navigate(['fireimage-details', item.id]);
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
    FireimagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fireimage',
            template: __webpack_require__(/*! ./fireimage.page.html */ "./src/app/pages/firebase/fireimage/fireimage.page.html"),
            styles: [__webpack_require__(/*! ./fireimage.page.scss */ "./src/app/pages/firebase/fireimage/fireimage.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]])
    ], FireimagePage);
    return FireimagePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-firebase-fireimage-fireimage-module.js.map