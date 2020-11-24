function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../../dist/libs/front-bfcl/fesm2015/omnichannel2-commercial-plataform-wallet-management-front-bfcl-lazy.js":
  /*!***************************************************************************************************************************************************************************************************!*\
    !*** C:/Users/n_sol/dev/monorepo-wallet/omnichannel2-commercial-plataform-wallet-management/dist/libs/front-bfcl/fesm2015/omnichannel2-commercial-plataform-wallet-management-front-bfcl-lazy.js ***!
    \***************************************************************************************************************************************************************************************************/

  /*! exports provided: walletManagementConfigProvider, WalletManagementBfclModuleLazy */

  /***/
  function distLibsFrontBfclFesm2015Omnichannel2CommercialPlataformWalletManagementFrontBfclLazyJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletManagementBfclModuleLazy", function () {
      return WalletManagementBfclModuleLazy;
    });
    /* harmony import */


    var _omnichannel2_commercial_plataform_wallet_management_front_common_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @omnichannel2-commercial-plataform-wallet-management/front-common/config */
    "../../dist/libs/front-common/fesm2015/omnichannel2-commercial-plataform-wallet-management-front-common-config.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "walletManagementConfigProvider", function () {
      return _omnichannel2_commercial_plataform_wallet_management_front_common_config__WEBPACK_IMPORTED_MODULE_0__["walletManagementConfigProvider"];
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var WalletManagementBfclModuleLazy = function WalletManagementBfclModuleLazy() {
      _classCallCheck(this, WalletManagementBfclModuleLazy);
    };
    /** @nocollapse */


    WalletManagementBfclModuleLazy.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"])({
      type: WalletManagementBfclModuleLazy
    });
    /** @nocollapse */

    WalletManagementBfclModuleLazy.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"])({
      factory: function WalletManagementBfclModuleLazy_Factory(t) {
        return new (t || WalletManagementBfclModuleLazy)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: _omnichannel2_commercial_plataform_wallet_management_front_common_config__WEBPACK_IMPORTED_MODULE_0__["BASE_ROUTE"].concat('/:customerId/:cardId'),
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | omnichannel2-commercial-plataform-wallet-management-front-bfcl */
          "omnichannel2-commercial-plataform-wallet-management-front-bfcl").then(__webpack_require__.bind(null,
          /*! @omnichannel2-commercial-plataform-wallet-management/front-bfcl */
          "../../dist/libs/front-bfcl/fesm2015/omnichannel2-commercial-plataform-wallet-management-front-bfcl.js")).then(function (m) {
            return m.WalletManagementBfclModule.forLazy();
          });
        }
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"])(WalletManagementBfclModuleLazy, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"])(WalletManagementBfclModuleLazy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
            path: _omnichannel2_commercial_plataform_wallet_management_front_common_config__WEBPACK_IMPORTED_MODULE_0__["BASE_ROUTE"].concat('/:customerId/:cardId'),
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | omnichannel2-commercial-plataform-wallet-management-front-bfcl */
              "omnichannel2-commercial-plataform-wallet-management-front-bfcl").then(__webpack_require__.bind(null,
              /*! @omnichannel2-commercial-plataform-wallet-management/front-bfcl */
              "../../dist/libs/front-bfcl/fesm2015/omnichannel2-commercial-plataform-wallet-management-front-bfcl.js")).then(function (m) {
                return m.WalletManagementBfclModule.forLazy();
              });
            }
          }])]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=omnichannel2-commercial-plataform-wallet-management-front-bfcl-lazy.js.map

    /***/

  },

  /***/
  "../../dist/libs/front-common/fesm2015/omnichannel2-commercial-plataform-wallet-management-front-common-config.js":
  /*!*********************************************************************************************************************************************************************************************************!*\
    !*** C:/Users/n_sol/dev/monorepo-wallet/omnichannel2-commercial-plataform-wallet-management/dist/libs/front-common/fesm2015/omnichannel2-commercial-plataform-wallet-management-front-common-config.js ***!
    \*********************************************************************************************************************************************************************************************************/

  /*! exports provided: BASE_ROUTE, WalletManagementConfig, WalletManagementDefaultConfig, walletManagementConfigProvider */

  /***/
  function distLibsFrontCommonFesm2015Omnichannel2CommercialPlataformWalletManagementFrontCommonConfigJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BASE_ROUTE", function () {
      return BASE_ROUTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletManagementConfig", function () {
      return WalletManagementConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletManagementDefaultConfig", function () {
      return WalletManagementDefaultConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "walletManagementConfigProvider", function () {
      return walletManagementConfigProvider;
    });

    var WalletManagementConfig = function WalletManagementConfig() {
      _classCallCheck(this, WalletManagementConfig);
    };

    var WalletManagementDefaultConfig = {
      apiDomain: '',
      enableClient: false
    };
    var BASE_ROUTE = 'wallet/token';

    function walletManagementConfigProvider() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : WalletManagementDefaultConfig;
      return {
        provide: WalletManagementConfig,
        useValue: config
      };
    }
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=omnichannel2-commercial-plataform-wallet-management-front-common-config.js.map

    /***/

  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      sessionStorage.setItem('access_token', '1234');
      sessionStorage.setItem('customerIdentificationNumber', '11111111-1');
      sessionStorage.setItem('executiveCode', '11111111-1');
      sessionStorage.setItem('executiveCode', '11111111-1');
      sessionStorage.setItem('officeId', '90');
      sessionStorage.setItem('username', 'username');
      sessionStorage.setItem('isCallCenter', 'false');
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["omnichannel2-commercial-plataform-wallet-management-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2Zyb250LWJmY2wtZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'omnichannel2-commercial-plataform-wallet-management-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _omnichannel2_commercial_plataform_wallet_management_front_bfcl_lazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @omnichannel2-commercial-plataform-wallet-management/front-bfcl/lazy */
    "../../dist/libs/front-bfcl/fesm2015/omnichannel2-commercial-plataform-wallet-management-front-bfcl-lazy.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/effects */
    "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _interceptors_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./interceptors/providers */
    "./src/app/interceptors/providers.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "../../node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngrx/store */
    "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [].concat(_toConsumableArray(_interceptors_providers__WEBPACK_IMPORTED_MODULE_5__["INTERCEPTORS_PROVIDERS"]), [Object(_omnichannel2_commercial_plataform_wallet_management_front_bfcl_lazy__WEBPACK_IMPORTED_MODULE_0__["walletManagementConfigProvider"])({
        apiDomain: 'http://localhost:10169',
        enableClient: false
      })]),
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([{
        path: '',
        loadChildren: function loadChildren() {
          return _omnichannel2_commercial_plataform_wallet_management_front_bfcl_lazy__WEBPACK_IMPORTED_MODULE_0__["WalletManagementBfclModuleLazy"];
        }
      }], {
        initialNavigation: 'enabled',
        onSameUrlNavigation: 'reload'
      }), _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot({}), _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forRoot([]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([{
            path: '',
            loadChildren: function loadChildren() {
              return _omnichannel2_commercial_plataform_wallet_management_front_bfcl_lazy__WEBPACK_IMPORTED_MODULE_0__["WalletManagementBfclModuleLazy"];
            }
          }], {
            initialNavigation: 'enabled',
            onSameUrlNavigation: 'reload'
          }), _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot({}), _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forRoot([]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument()],
          providers: [].concat(_toConsumableArray(_interceptors_providers__WEBPACK_IMPORTED_MODULE_5__["INTERCEPTORS_PROVIDERS"]), [Object(_omnichannel2_commercial_plataform_wallet_management_front_bfcl_lazy__WEBPACK_IMPORTED_MODULE_0__["walletManagementConfigProvider"])({
            apiDomain: 'http://localhost:10169',
            enableClient: false
          })]),
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/interceptors/app.interceptor.ts":
  /*!*************************************************!*\
    !*** ./src/app/interceptors/app.interceptor.ts ***!
    \*************************************************/

  /*! exports provided: AppInterceptor */

  /***/
  function srcAppInterceptorsAppInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppInterceptor", function () {
      return AppInterceptor;
    });

    var AppInterceptor = /*#__PURE__*/function () {
      function AppInterceptor() {
        _classCallCheck(this, AppInterceptor);
      }

      _createClass(AppInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          req = req.clone({
            headers: req.headers.set('autorization', 'mykey')
          });
          return next.handle(req);
        }
      }]);

      return AppInterceptor;
    }();
    /***/

  },

  /***/
  "./src/app/interceptors/providers.ts":
  /*!*******************************************!*\
    !*** ./src/app/interceptors/providers.ts ***!
    \*******************************************/

  /*! exports provided: INTERCEPTORS_PROVIDERS */

  /***/
  function srcAppInterceptorsProvidersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "INTERCEPTORS_PROVIDERS", function () {
      return INTERCEPTORS_PROVIDERS;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.interceptor */
    "./src/app/interceptors/app.interceptor.ts");

    var INTERCEPTORS_PROVIDERS = [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
      multi: true,
      useClass: _app_interceptor__WEBPACK_IMPORTED_MODULE_1__["AppInterceptor"]
    }];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\n_sol\dev\monorepo-wallet\omnichannel2-commercial-plataform-wallet-management\apps\front-bfcl-demo\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map