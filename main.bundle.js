webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <h2>URL SHORTENER</h2>\n  <url-element></url-element>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\ndiv {\n  font-family: 'Roboto', sans-serif;\n  margin: auto;\n  color: #333; }\n\n.text-center {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewEncapsulation */].None
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__url_element_url_element_component__ = __webpack_require__("./src/app/url-element/url-element.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__url_element_url_element_component__["a" /* UrlElementComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/get-url.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetUrlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetUrlService = (function () {
    function GetUrlService(http) {
        this.http = http;
    }
    GetUrlService.prototype.getUrl = function (a) {
        return this.http.post('https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyA2lXkjb5spsYBqXoMMdpbFx_ocOMteBwE', { "longUrl": a }).toPromise();
    };
    GetUrlService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GetUrlService);
    return GetUrlService;
}());



/***/ }),

/***/ "./src/app/url-element/url-element.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"url-input-container\">\n  \t<form (submit)=\"shorten(input.value,$event)\">\n      <input type=\"text\" #input  [pattern]=\"urlPattern\" required title=\"provide a valid url\" placeholder=\"Put url here\">\n      <button type=\"submit\" [class.disabled]=\"inProgress\">\n        <span *ngIf=\"!inProgress\">SHORTEN</span>\n        <span *ngIf=\"inProgress\">Working..</span>\n      </button>\n     </form>\n  </div>\n  <div class=\"shorten-url-container\">\n    <div class=\"label\">Result</div>\n    <div class=\"url-label\">\n    {{shortUrl}}\n      <button (click)=\"copy()\">{{copyText}}</button>\n    </div>\n  </div>\n  <input type=\"text\" value=\"\" class=\"hide\" id=\"copyInput\"/>\n</div>\n"

/***/ }),

/***/ "./src/app/url-element/url-element.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 500px; }\n  .container .url-input-container {\n    padding: 40px 0; }\n  .container .url-input-container input,\n    .container .url-input-container button {\n      height: 50px;\n      border-radius: 2px;\n      line-height: 50px;\n      vertical-align: top;\n      font-size: 20px; }\n  .container .url-input-container input {\n      -webkit-box-shadow: none;\n              box-shadow: none;\n      border: 1px solid #aaaaaa;\n      padding: 0;\n      border-radius: 2px 0 0 2px;\n      border-right-color: #049487;\n      width: 300px;\n      padding: 0 10px; }\n  .container .url-input-container input:focus {\n        outline: none; }\n  .container .url-input-container button {\n      background-color: #019587;\n      color: #fff;\n      border: none;\n      margin-left: -5px;\n      border-radius: 0 2px 2px 0;\n      font-size: 17px;\n      padding: 0px 40px;\n      cursor: pointer; }\n  .container .url-input-container button:hover {\n        background-color: #04a898; }\n  .container .url-input-container button:focus {\n        outline: none; }\n  .container .url-input-container button.disabled {\n        background-color: #979797; }\n  .container .shorten-url-container {\n    width: 460px; }\n  .container .shorten-url-container .label {\n      text-align: left;\n      margin: 5px 0; }\n  .container .shorten-url-container .url-label {\n      height: 50px;\n      vertical-align: top;\n      line-height: 50px;\n      border: 1px solid #aaaaaa;\n      padding: 0 10px;\n      background-color: rgba(230, 230, 230, 0.5);\n      text-align: left;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      position: relative; }\n  .container .shorten-url-container .url-label button {\n        position: absolute;\n        right: 0;\n        height: 100%;\n        border: 0;\n        background-color: #3f9587;\n        color: #fff;\n        font-size: 16px;\n        cursor: pointer;\n        width: 100px; }\n  .container .shorten-url-container .url-label button:hover {\n          background-color: #1d5f54; }\n  .container .shorten-url-container .url-label button:focus {\n          outline: none; }\n  .container .hide {\n    opacity: 0; }\n"

/***/ }),

/***/ "./src/app/url-element/url-element.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlElementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_url_service__ = __webpack_require__("./src/app/get-url.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UrlElementComponent = (function () {
    function UrlElementComponent(getUrlService) {
        var _this = this;
        this.getUrlService = getUrlService;
        this.urlPattern = "(^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$)";
        this.inProgress = false;
        this.copyText = "COPY";
        this.shorten = function (a, $e) {
            _this.copyText = "COPY";
            if (_this.inProgress)
                return false;
            _this.shortUrl = '';
            _this.inProgress = true;
            _this.getUrlService.getUrl(a).then(function (a) {
                _this.shortUrl = a['id'];
                _this.inProgress = false;
            }).catch(function (a) {
                _this.inProgress = false;
            });
            return false;
        };
        this.copy = function () {
            _this.copyText = "COPIED";
            var el = document.getElementById("copyInput");
            el.value = _this.shortUrl.toString();
            el.select();
            document.execCommand("copy");
        };
        this.blurCopy = function () {
            _this.copyText = "COPY";
        };
    }
    UrlElementComponent.prototype.ngOnInit = function () {
    };
    UrlElementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'url-element',
            template: __webpack_require__("./src/app/url-element/url-element.component.html"),
            styles: [__webpack_require__("./src/app/url-element/url-element.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__get_url_service__["a" /* GetUrlService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__get_url_service__["a" /* GetUrlService */]])
    ], UrlElementComponent);
    return UrlElementComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map