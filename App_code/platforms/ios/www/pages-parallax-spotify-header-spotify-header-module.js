(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-parallax-spotify-header-spotify-header-module"],{

/***/ "./src/app/pages/parallax/spotify-header/spotify-header.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/parallax/spotify-header/spotify-header.module.ts ***!
  \************************************************************************/
/*! exports provided: SpotifyHeaderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyHeaderPageModule", function() { return SpotifyHeaderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _spotify_header_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spotify-header.page */ "./src/app/pages/parallax/spotify-header/spotify-header.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");








var routes = [
    {
        path: '',
        component: _spotify_header_page__WEBPACK_IMPORTED_MODULE_6__["SpotifyHeaderPage"]
    }
];
var SpotifyHeaderPageModule = /** @class */ (function () {
    function SpotifyHeaderPageModule() {
    }
    SpotifyHeaderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_spotify_header_page__WEBPACK_IMPORTED_MODULE_6__["SpotifyHeaderPage"]]
        })
    ], SpotifyHeaderPageModule);
    return SpotifyHeaderPageModule;
}());



/***/ }),

/***/ "./src/app/pages/parallax/spotify-header/spotify-header.page.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/parallax/spotify-header/spotify-header.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"animation\" id=\"title\" text-center>Parallax</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event) \">\n  <div id=\"profile-background\" [ngStyle]=\"{'background-image': 'url(' + imageUrl +')'}\"></div>\n  <div id=\"content\">\n    <div id=\"profile-info\">\n      <img id=\"profile-image\" src=\"assets/avatars/1.jpg\">\n      <h3 id=\"profile-name\">RCAP DESIGNS</h3>\n      <span id=\"profile-description\">Ionic Expert</span>\n    </div>\n\n    <h2 text-center>Lorem:</h2>\n    <ion-list>\n      <ion-item *ngFor=\"let post of posts\">\n        <img class=\"post-profile-image\" src=\"assets/avatars/1.jpg\">\n        {{post.text}}\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/parallax/spotify-header/spotify-header.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/parallax/spotify-header/spotify-header.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profile-background {\n  position: fixed;\n  left: 0;\n  top: 60px;\n  width: 100%;\n  height: 300px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 20%;\n  -webkit-filter: blur(3px);\n  /* Safari 6.0 - 9.0 */\n  filter: blur(3px);\n  text-align: center;\n  z-index: -2 !important; }\n\n#content {\n  position: relative;\n  margin-top: 150px;\n  background-color: white;\n  box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.4);\n  padding-top: 150px; }\n\n#profile-info {\n  position: absolute;\n  top: -95px;\n  width: 100%;\n  z-index: 2 !important;\n  text-align: center; }\n\n#profile-name {\n  color: #444;\n  font-size: 26px; }\n\n#profile-description {\n  font-size: 15px;\n  color: #888; }\n\n#profile-description a {\n  color: #888; }\n\n#profile-image {\n  display: block;\n  border-radius: 100px;\n  border: 1px solid #fff;\n  width: 128px;\n  height: 128px;\n  margin: 30px auto 0;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.7); }\n\n.list-item-content {\n  padding: 5px; }\n\n.list-item {\n  color: #666666; }\n\n.post {\n  color: #444; }\n\n.post-profile-image {\n  display: inline-block;\n  vertical-align: top;\n  width: 48px;\n  height: 48px;\n  margin-right: 10px; }\n\n.post-options {\n  position: absolute;\n  font-size: 16px;\n  right: 5px;\n  bottom: 5px;\n  color: #888; }\n\n.animation {\n  opacity: 0.1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9wYXJhbGxheC9zcG90aWZ5LWhlYWRlci9zcG90aWZ5LWhlYWRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDTyxlQUFlO0VBQ2YsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUFFLHFCQUFBO0VBQzNCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBSXhCO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsNENBQXlDO0VBQ3pDLGtCQUFrQixFQUFBOztBQUtwQjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLHFCQUFvQjtFQUNwQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwwQ0FBdUMsRUFBQTs7QUFHekM7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsV0FBVyxFQUFBOztBQUliO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXJhbGxheC9zcG90aWZ5LWhlYWRlci9zcG90aWZ5LWhlYWRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgI3Byb2ZpbGUtYmFja2dyb3VuZCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiA2MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDIwJTtcbiAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoM3B4KTsgLyogU2FmYXJpIDYuMCAtIDkuMCAqL1xuICAgICAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB6LWluZGV4OiAtMiAhaW1wb3J0YW50O1xuICAgICAgICBcbiAgICAgIH1cblxuICAgICAgI2NvbnRlbnQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IC0xcHggMTBweCByZ2JhKDAsMCwwLDAuNCk7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNTBweDtcbiAgICAgIFxuICAgICAgICBcbiAgICAgIH1cblxuICAgICAgI3Byb2ZpbGUtaW5mbyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtOTVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHotaW5kZXg6IDIhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAjcHJvZmlsZS1uYW1lIHtcbiAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgIH1cbiAgICAgICNwcm9maWxlLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgIH1cbiAgICAgICNwcm9maWxlLWRlc2NyaXB0aW9uIGEge1xuICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgIH1cblxuICAgICAgI3Byb2ZpbGUtaW1hZ2Uge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgIHdpZHRoOiAxMjhweDtcbiAgICAgICAgaGVpZ2h0OiAxMjhweDtcbiAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLDAsMCwwLjcpO1xuICAgICAgfVxuXG4gICAgICAubGlzdC1pdGVtLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICB9XG5cbiAgICAgIC5saXN0LWl0ZW0ge1xuICAgICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgIH1cblxuICAgICAgLnBvc3Qge1xuICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgIH1cblxuXG4gICAgICAucG9zdC1wcm9maWxlLWltYWdlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB9XG4gICAgICAucG9zdC1vcHRpb25zIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgIH1cblxuICAgICAgLmFuaW1hdGlvbntcbiAgICAgICAgb3BhY2l0eTowLjE7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/parallax/spotify-header/spotify-header.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/parallax/spotify-header/spotify-header.page.ts ***!
  \**********************************************************************/
/*! exports provided: SpotifyHeaderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyHeaderPage", function() { return SpotifyHeaderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpotifyHeaderPage = /** @class */ (function () {
    function SpotifyHeaderPage(ngzone) {
        this.ngzone = ngzone;
        this.posts = [];
        this.imageUrl = 'assets/images/photo_1.jpeg';
        for (var i = 0; i < 10; i++) {
            this.posts[i] = {
                text: 'Lorem ' + i,
                created_at: (i + 1),
            };
        }
    }
    SpotifyHeaderPage.prototype.ngAfterViewInit = function () {
        this.main_title = false;
    };
    SpotifyHeaderPage.prototype.ngOnInit = function () {
    };
    SpotifyHeaderPage.prototype.onScroll = function ($event) {
        console.log('changes', $event);
        if ($event.detail.scrollTop >= 290) {
            console.log('if');
            var scroll_1 = $event.detail.scrollTop;
            var opacidad = scroll_1 / 450 - 150 / 450;
            var myElements = document.querySelectorAll(".animation");
            console.log('events', myElements);
            for (var i = 0; i < myElements.length; i++) {
                myElements[i].style.opacity = opacidad;
            }
            this.main_title = true;
        }
        else if ($event.detail.scrollTop <= 290) {
            console.log('else');
            this.main_title = false;
        }
    };
    SpotifyHeaderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spotify-header',
            template: __webpack_require__(/*! ./spotify-header.page.html */ "./src/app/pages/parallax/spotify-header/spotify-header.page.html"),
            styles: [__webpack_require__(/*! ./spotify-header.page.scss */ "./src/app/pages/parallax/spotify-header/spotify-header.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], SpotifyHeaderPage);
    return SpotifyHeaderPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-parallax-spotify-header-spotify-header-module.js.map