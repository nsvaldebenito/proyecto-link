(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["omnichannel2-commercial-plataform-wallet-management-front-bfcl"],{

/***/ "../../dist/libs/front-bfcl/fesm2015/omnichannel2-commercial-plataform-wallet-management-front-bfcl.js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** C:/Users/n_sol/dev/monorepo-wallet/omnichannel2-commercial-plataform-wallet-management/dist/libs/front-bfcl/fesm2015/omnichannel2-commercial-plataform-wallet-management-front-bfcl.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: walletManagementConfigProvider, WalletManagementBfclModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletManagementBfclModule", function() { return WalletManagementBfclModuleWrapper; });
/* harmony import */ var _omnichannel2_commercial_plataform_wallet_management_front_common_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @omnichannel2-commercial-plataform-wallet-management/front-common/config */ "../../dist/libs/front-common/fesm2015/omnichannel2-commercial-plataform-wallet-management-front-common-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "walletManagementConfigProvider", function() { return _omnichannel2_commercial_plataform_wallet_management_front_common_config__WEBPACK_IMPORTED_MODULE_0__["walletManagementConfigProvider"]; });

/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _omnichannel2_commercial_plataform_wallet_management_front_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @omnichannel2-commercial-plataform-wallet-management/front-common */ "../../dist/libs/front-common/fesm2015/omnichannel2-commercial-plataform-wallet-management-front-common.js");






class WalletManagementBfclModule {
}
/** @nocollapse */ WalletManagementBfclModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"])({ type: WalletManagementBfclModule });
/** @nocollapse */ WalletManagementBfclModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"])({ factory: function WalletManagementBfclModule_Factory(t) { return new (t || WalletManagementBfclModule)(); }, imports: [[
            _omnichannel2_commercial_plataform_wallet_management_front_common__WEBPACK_IMPORTED_MODULE_3__["FrontCommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"])(WalletManagementBfclModule, { imports: [_omnichannel2_commercial_plataform_wallet_management_front_common__WEBPACK_IMPORTED_MODULE_3__["FrontCommonModule"]] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"])(WalletManagementBfclModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _omnichannel2_commercial_plataform_wallet_management_front_common__WEBPACK_IMPORTED_MODULE_3__["FrontCommonModule"]
                ],
            }]
    }], null, null); })();

class WalletManagementBfclModuleWrapper {
    static forLazy() {
        return WalletManagementBfclModule;
    }
}
/** @nocollapse */ WalletManagementBfclModuleWrapper.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"])({ type: WalletManagementBfclModuleWrapper });
/** @nocollapse */ WalletManagementBfclModuleWrapper.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"])({ factory: function WalletManagementBfclModuleWrapper_Factory(t) { return new (t || WalletManagementBfclModuleWrapper)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
                    path: _omnichannel2_commercial_plataform_wallet_management_front_common_config__WEBPACK_IMPORTED_MODULE_0__["BASE_ROUTE"].concat('/:customerId/:cardId'),
                    loadChildren: () => WalletManagementBfclModule
                }])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"])(WalletManagementBfclModuleWrapper, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"])(WalletManagementBfclModuleWrapper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
                            path: _omnichannel2_commercial_plataform_wallet_management_front_common_config__WEBPACK_IMPORTED_MODULE_0__["BASE_ROUTE"].concat('/:customerId/:cardId'),
                            loadChildren: (() => WalletManagementBfclModule)
                        }])
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=omnichannel2-commercial-plataform-wallet-management-front-bfcl.js.map


/***/ }),

/***/ "../../dist/libs/front-common/fesm2015/omnichannel2-commercial-plataform-wallet-management-front-common.js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/n_sol/dev/monorepo-wallet/omnichannel2-commercial-plataform-wallet-management/dist/libs/front-common/fesm2015/omnichannel2-commercial-plataform-wallet-management-front-common.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: BusinessApiModule, FrontCommonModule, Token, TokenMaterialModule, TokenService, TokenTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessApiModule", function() { return BusinessApiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontCommonModule", function() { return FrontCommonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenMaterialModule", function() { return TokenMaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenTableComponent", function() { return TokenTableComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _omnichannel2_commercial_plataform_wallet_management_front_common_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @omnichannel2-commercial-plataform-wallet-management/front-common/config */ "../../dist/libs/front-common/fesm2015/omnichannel2-commercial-plataform-wallet-management-front-common-config.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! subsink */ "../../node_modules/subsink/dist/index.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(subsink__WEBPACK_IMPORTED_MODULE_9__);











class EndpointResolverInterceptor {
    constructor(config) {
        this.config = config;
    }
    intercept(req, next) {
        return next.handle(req.clone({
            url: `${this.config.apiDomain}/omnichannel2/wallet-management${req.url}`
        }));
    }
}
/** @nocollapse */ EndpointResolverInterceptor.ɵfac = function EndpointResolverInterceptor_Factory(t) { return new (t || EndpointResolverInterceptor)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_omnichannel2_commercial_plataform_wallet_management_front_common_config__WEBPACK_IMPORTED_MODULE_3__["WalletManagementConfig"])); };
/** @nocollapse */ EndpointResolverInterceptor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ token: EndpointResolverInterceptor, factory: EndpointResolverInterceptor.ɵfac });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"])(EndpointResolverInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _omnichannel2_commercial_plataform_wallet_management_front_common_config__WEBPACK_IMPORTED_MODULE_3__["WalletManagementConfig"] }]; }, null); })();

class ErrorHandlerInterceptor {
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(event => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["iif"])(() => event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"], Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(event).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(response => {
            var _a, _b, _c, _d;
            return ((_a = response.body) === null || _a === void 0 ? void 0 : _a.code) === 'ok' && ((_c = (_b = response.body) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.responseCode) === 'OK' ?
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(response) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])((_d = response.body) === null || _d === void 0 ? void 0 : _d.message.respuesta);
        })), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(event))));
    }
}
/** @nocollapse */ ErrorHandlerInterceptor.ɵfac = function ErrorHandlerInterceptor_Factory(t) { return new (t || ErrorHandlerInterceptor)(); };
/** @nocollapse */ ErrorHandlerInterceptor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ token: ErrorHandlerInterceptor, factory: ErrorHandlerInterceptor.ɵfac });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"])(ErrorHandlerInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();

class BackendHeadersInterceptor {
    constructor() {
        this.buildHeaders = () => {
            let headers = {};
            headers.version = '1.0';
            headers.country = 'CL';
            headers.commerce = 'Banco';
            headers.channel = 'Web';
            if (sessionStorage.getItem('executiveCode')) {
                headers.executiveCode = sessionStorage.getItem('executiveCode');
            }
            if (sessionStorage.getItem('access_token')) {
                headers.Authorization = 'Bearer ' + sessionStorage.getItem('access_token');
            }
            if (sessionStorage.getItem('officeId')) {
                headers.sucursal = sessionStorage.getItem('officeId');
            }
            if (sessionStorage.getItem('username')) {
                headers.usuario = sessionStorage.getItem('username');
            }
            return headers;
        };
    }
    intercept(req, next) {
        return next.handle(req.clone({
            setHeaders: this.buildHeaders()
        }));
    }
}
/** @nocollapse */ BackendHeadersInterceptor.ɵfac = function BackendHeadersInterceptor_Factory(t) { return new (t || BackendHeadersInterceptor)(); };
/** @nocollapse */ BackendHeadersInterceptor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ token: BackendHeadersInterceptor, factory: BackendHeadersInterceptor.ɵfac });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"])(BackendHeadersInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();

const HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('HTTP_INTERCEPTORS');
const INTERCEPTORS_PROVIDERS = [{
        provide: HTTP_INTERCEPTORS,
        multi: true,
        useClass: EndpointResolverInterceptor
    }, {
        provide: HTTP_INTERCEPTORS,
        multi: true,
        useClass: BackendHeadersInterceptor
    }, {
        provide: HTTP_INTERCEPTORS,
        multi: true,
        useClass: ErrorHandlerInterceptor
    }];

class BusinessApiModule {
}
/** @nocollapse */ BusinessApiModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"])({ type: BusinessApiModule });
/** @nocollapse */ BusinessApiModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"])({ factory: function BusinessApiModule_Factory(t) { return new (t || BusinessApiModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            useClass: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHandler"],
            useClass: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["ɵHttpInterceptingHandler"]
        }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], HTTP_INTERCEPTORS],
            useFactory: ((injector, interceptors) => [
                ...interceptors,
                ...injector.parent.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"])
            ])
        },
        ...INTERCEPTORS_PROVIDERS
    ] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"])(BusinessApiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
                        useClass: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
                    }, {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHandler"],
                        useClass: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["ɵHttpInterceptingHandler"]
                    }, {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], HTTP_INTERCEPTORS],
                        useFactory: ((injector, interceptors) => [
                            ...interceptors,
                            ...injector.parent.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"])
                        ])
                    },
                    ...INTERCEPTORS_PROVIDERS
                ]
            }]
    }], null, null); })();

class TokenService {
    constructor(httpClient, config) {
        this.httpClient = httpClient;
        this.config = config;
        this.token = [
            {
                tokenId: '5f69383669459f5f63709a15',
                tokenNumber: '5589848000025353',
                tokenStatus: { statusId: 'A', statusDescripcion: 'Activo' },
                device: {
                    deviceId: '8UNIEHKFXIYSR1E4PLNYO2-AXPKJ_TJKJEAJXOM6M46UFS4N',
                    deviceNumber: '8882992123',
                    deviceType: 'Celular',
                    deviceDescription: 'samsung!'
                },
                wallet: { walleId: '216', walleDescripcion: 'Google Pay' }
            },
            {
                tokenId: '5f69383669459f5f63709a15',
                tokenNumber: '5589848000026575',
                tokenStatus: { statusId: 'D', statusDescripcion: 'Borrado' },
                device: {
                    deviceId: '8UNIEHKFXIYSR1E4PLNYO2-AXPKJ_TJKJEAJXOM6M46UFS4N',
                    deviceNumber: '8882992123',
                    deviceType: 'Celular',
                    deviceDescription: 'samsung!'
                },
                wallet: { walleId: '216', walleDescripcion: 'Google Pay' }
            }
        ];
        this.tokens = { data: this.token, total: 1 };
    }
    getTokens(customerId, cardId) {
        if (customerId === null) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Customer id is not set');
        }
        if (cardId === null) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Card id is not set');
        }
        this.itemsTokens$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.tokens);
        return this.itemsTokens$;
        // return this.httpClient.get<ITokens>('/customers/${customerId}/${cardId}/card-tokens')
    }
}
/** @nocollapse */ TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_omnichannel2_commercial_plataform_wallet_management_front_common_config__WEBPACK_IMPORTED_MODULE_3__["WalletManagementConfig"])); };
/** @nocollapse */ TokenService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ token: TokenService, factory: TokenService.ɵfac, providedIn: BusinessApiModule });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"])(TokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: BusinessApiModule
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _omnichannel2_commercial_plataform_wallet_management_front_common_config__WEBPACK_IMPORTED_MODULE_3__["WalletManagementConfig"] }]; }, null); })();

const modules = [
    _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"]
];
class TokenMaterialModule {
}
/** @nocollapse */ TokenMaterialModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"])({ type: TokenMaterialModule });
/** @nocollapse */ TokenMaterialModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"])({ factory: function TokenMaterialModule_Factory(t) { return new (t || TokenMaterialModule)(); }, imports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"])(TokenMaterialModule, { exports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"])(TokenMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                exports: modules,
            }]
    }], null, null); })();

function TokenTableComponent_div_8_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"])(0, "mat-spinner");
} }
function TokenTableComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(0, "div", 16);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r15 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"])(" ", ctx_r15.errorText, " ");
} }
function TokenTableComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(0, "div", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"])(1, TokenTableComponent_div_8_mat_spinner_1_Template, 1, 0, "mat-spinner", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"])(2, TokenTableComponent_div_8_div_2_Template, 2, 1, "div", 15);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
} if (rf & 2) {
    const loading_r13 = ctx.ngIf;
    const ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("ngIf", loading_r13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("ngIf", ctx_r0.hasError);
} }
function TokenTableComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(0, "th", 17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"])(1, " Wallet Descripcion ");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
} }
function TokenTableComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(0, "td", 18);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"])(" ", row_r16.wallet.walleDescripcion, " ");
} }
function TokenTableComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(0, "th", 17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"])(1, " Device Type ");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
} }
function TokenTableComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(0, "td", 18);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
} if (rf & 2) {
    const row_r17 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"])(" ", row_r17.device.deviceType, " ");
} }
function TokenTableComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(0, "th", 17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"])(1, " Device Description ");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
} }
function TokenTableComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(0, "td", 18);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"])(" ", row_r18.device.deviceDescription, " ");
} }
function TokenTableComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(0, "th", 17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"])(1, " Token Number ");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
} }
function TokenTableComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(0, "td", 18);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"])(" ", row_r19.tokenNumber, " ");
} }
function TokenTableComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(0, "th", 17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"])(1, " Token Status ");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
} }
function TokenTableComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(0, "td", 18);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"])(" ", row_r20.tokenStatus.statusDescripcion, " ");
} }
function TokenTableComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"])(0, "tr", 19);
} }
function TokenTableComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"])(0, "tr", 20);
} }
class TokenTableComponent {
    constructor(tokenService, activatedRoute) {
        this.tokenService = tokenService;
        this.activatedRoute = activatedRoute;
        this.displayedColumns = [
            'walletDescripcion',
            'deviceType',
            'deviceDescription',
            'TokenNumber',
            'tokenStatus'
        ];
        this.hasError = false;
        this.errorText = '';
        this.skipLoading = false;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_9__["SubSink"]();
        this.useNgRxData = false;
        this.isLoadingResults$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](true);
        this.refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    getTokens(customerId, cardId) {
        return this.tokenService.getTokens(customerId, cardId);
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    ngAfterViewInit() {
        this.activatedRoute.paramMap.subscribe((parametros) => {
            this.cardId = parametros.get('cardId');
            this.customerId = parametros.get('customerId');
        });
        if (this.skipLoading) {
            return;
        }
        this.items$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.refresh$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => {
            this.isLoadingResults$.next(true);
            return this.getTokens(this.customerId, this.cardId);
        }), 
        //map((results: { message: { response: IToken[] } } ) => {
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((results) => {
            this.isLoadingResults$.next(false);
            this.hasError = false;
            //return results.message.response;
            return results.data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(err => {
            this.isLoadingResults$.next(false);
            this.hasError = true;
            this.errorText = err;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
        }));
        this.items$.subscribe();
    }
}
/** @nocollapse */ TokenTableComponent.ɵfac = function TokenTableComponent_Factory(t) { return new (t || TokenTableComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"])(TokenService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"])(_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"])); };
/** @nocollapse */ TokenTableComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"])({ type: TokenTableComponent, selectors: [["omnichannel2-commercial-plataform-wallet-management-token-table"]], decls: 29, vars: 10, consts: [[2, "text-align", "center"], [1, "mat-elevation-z8"], ["class", "loading-shade", 4, "ngIf"], ["mat-table", "", 1, "full-width", 3, "dataSource"], ["matColumnDef", "walletDescripcion"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "deviceType"], ["matColumnDef", "deviceDescription"], ["matColumnDef", "TokenNumber"], ["matColumnDef", "tokenStatus"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "loading-shade"], [4, "ngIf"], ["class", "error", 4, "ngIf"], [1, "error"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TokenTableComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(0, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(1, "h1");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"])(2, " Gestion de Tarjetas ");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(3, "h4");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"])(4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(5, "h4");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"])(6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(7, "div", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"])(8, TokenTableComponent_div_8_Template, 3, 2, "div", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"])(9, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(10, "table", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"])(11, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"])(12, 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"])(13, TokenTableComponent_th_13_Template, 2, 0, "th", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"])(14, TokenTableComponent_td_14_Template, 2, 1, "td", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"])(15, 7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"])(16, TokenTableComponent_th_16_Template, 2, 0, "th", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"])(17, TokenTableComponent_td_17_Template, 2, 1, "td", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"])(18, 8);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"])(19, TokenTableComponent_th_19_Template, 2, 0, "th", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"])(20, TokenTableComponent_td_20_Template, 2, 1, "td", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"])(21, 9);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"])(22, TokenTableComponent_th_22_Template, 2, 0, "th", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"])(23, TokenTableComponent_td_23_Template, 2, 1, "td", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"])(24, 10);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"])(25, TokenTableComponent_th_25_Template, 2, 0, "th", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"])(26, TokenTableComponent_td_26_Template, 2, 1, "td", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"])(27, TokenTableComponent_tr_27_Template, 1, 0, "tr", 11);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"])(28, TokenTableComponent_tr_28_Template, 1, 0, "tr", 12);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"])(" CustomerId: ", ctx.customerId, "\n");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"])(" CardID: ", ctx.cardId, "\n");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("ngIf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"])(9, 6, ctx.loading$));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("dataSource", Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"])(11, 8, ctx.items$));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(17);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("matHeaderRowDef", ctx.displayedColumns);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRowDef"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["[_nghost-%COMP%]{display:block;font-family:sans-serif;min-width:300px;max-width:600px;margin:50px auto}h1[_ngcontent-%COMP%]{text-align:center;margin-left:18px;font-size:24px}h2[_ngcontent-%COMP%]{text-align:center;font-size:20px;margin:40px 0 10px}.loading-shade[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:56px;right:0;background:rgba(0,0,0,.15);z-index:1;display:flex;align-items:center;justify-content:center}.full-width[_ngcontent-%COMP%]{width:100%}.mat-column-TokenNumber[_ngcontent-%COMP%]{flex:0 0 28%!important;width:28%!important}"] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"])(TokenTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'omnichannel2-commercial-plataform-wallet-management-token-table',
                templateUrl: './token-table.component.html',
                styleUrls: ['./token-table.component.css']
            }]
    }], function () { return [{ type: TokenService }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"] }]; }, null); })();

const routes = [
    {
        path: '',
        component: TokenTableComponent
    }
];
class FrontCommonModule {
}
/** @nocollapse */ FrontCommonModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"])({ type: FrontCommonModule });
/** @nocollapse */ FrontCommonModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"])({ factory: function FrontCommonModule_Factory(t) { return new (t || FrontCommonModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            BusinessApiModule,
            TokenMaterialModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"])(FrontCommonModule, { declarations: [TokenTableComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
        BusinessApiModule,
        TokenMaterialModule, _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"])(FrontCommonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                    BusinessApiModule,
                    TokenMaterialModule,
                    _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
                ],
                declarations: [TokenTableComponent]
            }]
    }], null, null); })();

class Token {
    constructor(tokenId = '', tokenNumber = '', tokenStatus = {
        statusId: '',
        statusDescripcion: '',
    }, device = {
        deviceId: '',
        deviceNumber: '',
        deviceType: '',
        deviceDescription: '',
    }, wallet = {
        walleId: '',
        walleDescripcion: '',
    }) {
        this.tokenId = tokenId;
        this.tokenNumber = tokenNumber;
        this.tokenStatus = tokenStatus;
        this.device = device;
        this.wallet = wallet;
    }
    static Build(token) {
        if (!token) {
            return new Token();
        }
        return new Token(token.tokenId, token.tokenNumber, token.tokenStatus, token.device, token.wallet);
    }
    toJSON() {
        const serialized = Object.assign(this);
        return serialized;
    }
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=omnichannel2-commercial-plataform-wallet-management-front-common.js.map


/***/ }),

/***/ "../../node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** C:/Users/n_sol/dev/monorepo-wallet/omnichannel2-commercial-plataform-wallet-management/node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: AUTO_STYLE, AnimationBuilder, AnimationFactory, NoopAnimationPlayer, animate, animateChild, animation, group, keyframes, query, sequence, stagger, state, style, transition, trigger, useAnimation, ɵAnimationGroupPlayer, ɵPRE_STYLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTO_STYLE", function() { return AUTO_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationBuilder", function() { return AnimationBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFactory", function() { return AnimationFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopAnimationPlayer", function() { return NoopAnimationPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateChild", function() { return animateChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animation", function() { return animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "group", function() { return group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequence", function() { return sequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger", function() { return stagger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnimation", function() { return useAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵAnimationGroupPlayer", function() { return AnimationGroupPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵPRE_STYLE", function() { return ɵPRE_STYLE; });
/**
 * @license Angular v9.1.0
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/src/animation_builder.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An injectable service that produces an animation sequence programmatically within an
 * Angular component or directive.
 * Provided by the `BrowserAnimationsModule` or `NoopAnimationsModule`.
 *
 * \@usageNotes
 *
 * To use this service, add it to your component or directive as a dependency.
 * The service is instantiated along with your component.
 *
 * Apps do not typically need to create their own animation players, but if you
 * do need to, follow these steps:
 *
 * 1. Use the `build()` method to create a programmatic animation using the
 * `animate()` function. The method returns an `AnimationFactory` instance.
 *
 * 2. Use the factory object to create an `AnimationPlayer` and attach it to a DOM element.
 *
 * 3. Use the player object to control the animation programmatically.
 *
 * For example:
 *
 * ```ts
 * // import the service from BrowserAnimationsModule
 * import {AnimationBuilder} from '\@angular/animations';
 * // require the service as a dependency
 * class MyCmp {
 *   constructor(private _builder: AnimationBuilder) {}
 *
 *   makeAnimation(element: any) {
 *     // first define a reusable animation
 *     const myAnimation = this._builder.build([
 *       style({ width: 0 }),
 *       animate(1000, style({ width: '100px' }))
 *     ]);
 *
 *     // use the returned factory object to create a player
 *     const player = myAnimation.create(element);
 *
 *     player.play();
 *   }
 * }
 * ```
 *
 * \@publicApi
 * @abstract
 */
class AnimationBuilder {
}
if (false) {}
/**
 * A factory object returned from the `AnimationBuilder`.`build()` method.
 *
 * \@publicApi
 * @abstract
 */
class AnimationFactory {
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/src/animation_metadata.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Represents a set of CSS styles for use in an animation style.
 * @record
 */
function ɵStyleData() { }
/** @enum {number} */
const AnimationMetadataType = {
    /**
     * Associates a named animation state with a set of CSS styles.
     * See `state()`
     */
    State: 0,
    /**
     * Data for a transition from one animation state to another.
     * See `transition()`
     */
    Transition: 1,
    /**
     * Contains a set of animation steps.
     * See `sequence()`
     */
    Sequence: 2,
    /**
     * Contains a set of animation steps.
     * See `{@link animations/group group()}`
     */
    Group: 3,
    /**
     * Contains an animation step.
     * See `animate()`
     */
    Animate: 4,
    /**
     * Contains a set of animation steps.
     * See `keyframes()`
     */
    Keyframes: 5,
    /**
     * Contains a set of CSS property-value pairs into a named style.
     * See `style()`
     */
    Style: 6,
    /**
     * Associates an animation with an entry trigger that can be attached to an element.
     * See `trigger()`
     */
    Trigger: 7,
    /**
     * Contains a re-usable animation.
     * See `animation()`
     */
    Reference: 8,
    /**
     * Contains data to use in executing child animations returned by a query.
     * See `animateChild()`
     */
    AnimateChild: 9,
    /**
     * Contains animation parameters for a re-usable animation.
     * See `useAnimation()`
     */
    AnimateRef: 10,
    /**
     * Contains child-animation query data.
     * See `query()`
     */
    Query: 11,
    /**
     * Contains data for staggering an animation sequence.
     * See `stagger()`
     */
    Stagger: 12,
};
/**
 * Specifies automatic styling.
 *
 * \@publicApi
 * @type {?}
 */
const AUTO_STYLE = '*';
/**
 * Base for animation data structures.
 *
 * \@publicApi
 * @record
 */
function AnimationMetadata() { }
if (false) {}
/**
 * Contains an animation trigger. Instantiated and returned by the
 * `trigger()` function.
 *
 * \@publicApi
 * @record
 */
function AnimationTriggerMetadata() { }
if (false) {}
/**
 * Encapsulates an animation state by associating a state name with a set of CSS styles.
 * Instantiated and returned by the `state()` function.
 *
 * \@publicApi
 * @record
 */
function AnimationStateMetadata() { }
if (false) {}
/**
 * Encapsulates an animation transition. Instantiated and returned by the
 * `transition()` function.
 *
 * \@publicApi
 * @record
 */
function AnimationTransitionMetadata() { }
if (false) {}
/**
 * Encapsulates a reusable animation, which is a collection of individual animation steps.
 * Instantiated and returned by the `animation()` function, and
 * passed to the `useAnimation()` function.
 *
 * \@publicApi
 * @record
 */
function AnimationReferenceMetadata() { }
if (false) {}
/**
 * Encapsulates an animation query. Instantiated and returned by
 * the `query()` function.
 *
 * \@publicApi
 * @record
 */
function AnimationQueryMetadata() { }
if (false) {}
/**
 * Encapsulates a keyframes sequence. Instantiated and returned by
 * the `keyframes()` function.
 *
 * \@publicApi
 * @record
 */
function AnimationKeyframesSequenceMetadata() { }
if (false) {}
/**
 * Encapsulates an animation style. Instantiated and returned by
 * the `style()` function.
 *
 * \@publicApi
 * @record
 */
function AnimationStyleMetadata() { }
if (false) {}
/**
 * Encapsulates an animation step. Instantiated and returned by
 * the `animate()` function.
 *
 * \@publicApi
 * @record
 */
function AnimationAnimateMetadata() { }
if (false) {}
/**
 * Encapsulates a child animation, that can be run explicitly when the parent is run.
 * Instantiated and returned by the `animateChild` function.
 *
 * \@publicApi
 * @record
 */
function AnimationAnimateChildMetadata() { }
if (false) {}
/**
 * Encapsulates a reusable animation.
 * Instantiated and returned by the `useAnimation()` function.
 *
 * \@publicApi
 * @record
 */
function AnimationAnimateRefMetadata() { }
if (false) {}
/**
 * Encapsulates an animation sequence.
 * Instantiated and returned by the `sequence()` function.
 *
 * \@publicApi
 * @record
 */
function AnimationSequenceMetadata() { }
if (false) {}
/**
 * Encapsulates an animation group.
 * Instantiated and returned by the `{\@link animations/group group()}` function.
 *
 * \@publicApi
 * @record
 */
function AnimationGroupMetadata() { }
if (false) {}
/**
 * Encapsulates parameters for staggering the start times of a set of animation steps.
 * Instantiated and returned by the `stagger()` function.
 *
 * \@publicApi
 *
 * @record
 */
function AnimationStaggerMetadata() { }
if (false) {}
/**
 * Creates a named animation trigger, containing a  list of `state()`
 * and `transition()` entries to be evaluated when the expression
 * bound to the trigger changes.
 *
 * \@usageNotes
 * Define an animation trigger in the `animations` section of `\@Component` metadata.
 * In the template, reference the trigger by name and bind it to a trigger expression that
 * evaluates to a defined animation state, using the following format:
 *
 * `[\@triggerName]="expression"`
 *
 * Animation trigger bindings convert all values to strings, and then match the
 * previous and current values against any linked transitions.
 * Booleans can be specified as `1` or `true` and `0` or `false`.
 *
 * ### Usage Example
 *
 * The following example creates an animation trigger reference based on the provided
 * name value.
 * The provided animation value is expected to be an array consisting of state and
 * transition declarations.
 *
 * ```typescript
 * \@Component({
 *   selector: "my-component",
 *   templateUrl: "my-component-tpl.html",
 *   animations: [
 *     trigger("myAnimationTrigger", [
 *       state(...),
 *       state(...),
 *       transition(...),
 *       transition(...)
 *     ])
 *   ]
 * })
 * class MyComponent {
 *   myStatusExp = "something";
 * }
 * ```
 *
 * The template associated with this component makes use of the defined trigger
 * by binding to an element within its template code.
 *
 * ```html
 * <!-- somewhere inside of my-component-tpl.html -->
 * <div [\@myAnimationTrigger]="myStatusExp">...</div>
 * ```
 *
 * ### Using an inline function
 * The `transition` animation method also supports reading an inline function which can decide
 * if its associated animation should be run.
 *
 * ```typescript
 * // this method is run each time the `myAnimationTrigger` trigger value changes.
 * function myInlineMatcherFn(fromState: string, toState: string, element: any, params: {[key:
 * string]: any}): boolean {
 *   // notice that `element` and `params` are also available here
 *   return toState == 'yes-please-animate';
 * }
 *  /
 *   selector: 'my-component',
 *   templateUrl: 'my-component-tpl.html',
 *   animations: [
 *     trigger('myAnimationTrigger', [
 *       transition(myInlineMatcherFn, [
 *         // the animation sequence code
 *       ]),
 *     ])
 *   ]
 * })
 * class MyComponent {
 *   myStatusExp = "yes-please-animate";
 * }
 * ```
 *
 * ### Disabling Animations
 * When true, the special animation control binding `\@.disabled` binding prevents
 * all animations from rendering.
 * Place the  `\@.disabled` binding on an element to disable
 * animations on the element itself, as well as any inner animation triggers
 * within the element.
 *
 * The following example shows how to use this feature:
 *
 * ```typescript /
 *   selector: 'my-component',
 *   template: `
 *     <div [\@.disabled]="isDisabled">
 *       <div [\@childAnimation]="exp"></div>
 *     </div>
 *   `,
 *   animations: [
 *     trigger("childAnimation", [
 *       // ...
 *     ])
 *   ]
 * })
 * class MyComponent {
 *   isDisabled = true;
 *   exp = '...';
 * }
 * ```
 *
 * When `\@.disabled` is true, it prevents the `\@childAnimation` trigger from animating,
 * along with any inner animations.
 *
 * ### Disable animations application-wide
 * When an area of the template is set to have animations disabled,
 * **all** inner components have their animations disabled as well.
 * This means that you can disable all animations for an app
 * by placing a host binding set on `\@.disabled` on the topmost Angular component.
 *
 * ```typescript
 * import {Component, HostBinding} from '\@angular/core';
 *  /
 *   selector: 'app-component',
 *   templateUrl: 'app.component.html',
 * })
 * class AppComponent {
 * \@HostBinding('@.disabled')
 *   public animationsDisabled = true;
 * }
 * ```
 *
 * ### Overriding disablement of inner animations
 * Despite inner animations being disabled, a parent animation can `query()`
 * for inner elements located in disabled areas of the template and still animate
 * them if needed. This is also the case for when a sub animation is
 * queried by a parent and then later animated using `animateChild()`.
 *
 * ### Detecting when an animation is disabled
 * If a region of the DOM (or the entire application) has its animations disabled, the animation
 * trigger callbacks still fire, but for zero seconds. When the callback fires, it provides
 * an instance of an `AnimationEvent`. If animations are disabled,
 * the `.disabled` flag on the event is true.
 *
 * \@publicApi
 * @param {?} name An identifying string.
 * @param {?} definitions  An animation definition object, containing an array of `state()`
 * and `transition()` declarations.
 *
 * @return {?} An object that encapsulates the trigger data.
 *
 */
function trigger(name, definitions) {
    return { type: 7 /* Trigger */, name, definitions, options: {} };
}
/**
 * Defines an animation step that combines styling information with timing information.
 *
 * \@usageNotes
 * Call within an animation `sequence()`, `{\@link animations/group group()}`, or
 * `transition()` call to specify an animation step
 * that applies given style data to the parent animation for a given amount of time.
 *
 * ### Syntax Examples
 * **Timing examples**
 *
 * The following examples show various `timings` specifications.
 * - `animate(500)` : Duration is 500 milliseconds.
 * - `animate("1s")` : Duration is 1000 milliseconds.
 * - `animate("100ms 0.5s")` : Duration is 100 milliseconds, delay is 500 milliseconds.
 * - `animate("5s ease-in")` : Duration is 5000 milliseconds, easing in.
 * - `animate("5s 10ms cubic-bezier(.17,.67,.88,.1)")` : Duration is 5000 milliseconds, delay is 10
 * milliseconds, easing according to a bezier curve.
 *
 * **Style examples**
 *
 * The following example calls `style()` to set a single CSS style.
 * ```typescript
 * animate(500, style({ background: "red" }))
 * ```
 * The following example calls `keyframes()` to set a CSS style
 * to different values for successive keyframes.
 * ```typescript
 * animate(500, keyframes(
 *  [
 *   style({ background: "blue" })),
 *   style({ background: "red" }))
 *  ])
 * ```
 *
 * \@publicApi
 * @param {?} timings Sets `AnimateTimings` for the parent animation.
 * A string in the format "duration [delay] [easing]".
 *  - Duration and delay are expressed as a number and optional time unit,
 * such as "1s" or "10ms" for one second and 10 milliseconds, respectively.
 * The default unit is milliseconds.
 *  - The easing value controls how the animation accelerates and decelerates
 * during its runtime. Value is one of  `ease`, `ease-in`, `ease-out`,
 * `ease-in-out`, or a `cubic-bezier()` function call.
 * If not supplied, no easing is applied.
 *
 * For example, the string "1s 100ms ease-out" specifies a duration of
 * 1000 milliseconds, and delay of 100 ms, and the "ease-out" easing style,
 * which decelerates near the end of the duration.
 * @param {?=} styles Sets AnimationStyles for the parent animation.
 * A function call to either `style()` or `keyframes()`
 * that returns a collection of CSS style entries to be applied to the parent animation.
 * When null, uses the styles from the destination state.
 * This is useful when describing an animation step that will complete an animation;
 * see "Animating to the final state" in `transitions()`.
 * @return {?} An object that encapsulates the animation step.
 *
 */
function animate(timings, styles = null) {
    return { type: 4 /* Animate */, styles, timings };
}
/**
 * \@description Defines a list of animation steps to be run in parallel.
 *
 * \@usageNotes
 * Grouped animations are useful when a series of styles must be
 * animated at different starting times and closed off at different ending times.
 *
 * When called within a `sequence()` or a
 * `transition()` call, does not continue to the next
 * instruction until all of the inner animation steps have completed.
 *
 * \@publicApi
 * @param {?} steps An array of animation step objects.
 * - When steps are defined by `style()` or `animate()`
 * function calls, each call within the group is executed instantly.
 * - To specify offset styles to be applied at a later time, define steps with
 * `keyframes()`, or use `animate()` calls with a delay value.
 * For example:
 *
 * ```typescript
 * group([
 *   animate("1s", style({ background: "black" })),
 *   animate("2s", style({ color: "white" }))
 * ])
 * ```
 *
 * @param {?=} options An options object containing a delay and
 * developer-defined parameters that provide styling defaults and
 * can be overridden on invocation.
 *
 * @return {?} An object that encapsulates the group data.
 *
 */
function group(steps, options = null) {
    return { type: 3 /* Group */, steps, options };
}
/**
 * Defines a list of animation steps to be run sequentially, one by one.
 *
 * \@usageNotes
 * When you pass an array of steps to a
 * `transition()` call, the steps run sequentially by default.
 * Compare this to the `{\@link animations/group group()}` call, which runs animation steps in parallel.
 *
 * When a sequence is used within a `{\@link animations/group group()}` or a `transition()` call,
 * execution continues to the next instruction only after each of the inner animation
 * steps have completed.
 *
 * \@publicApi
 *
 * @param {?} steps An array of animation step objects.
 * - Steps defined by `style()` calls apply the styling data immediately.
 * - Steps defined by `animate()` calls apply the styling data over time
 *   as specified by the timing data.
 *
 * ```typescript
 * sequence([
 *   style({ opacity: 0 }),
 *   animate("1s", style({ opacity: 1 }))
 * ])
 * ```
 *
 * @param {?=} options An options object containing a delay and
 * developer-defined parameters that provide styling defaults and
 * can be overridden on invocation.
 *
 * @return {?} An object that encapsulates the sequence data.
 *
 */
function sequence(steps, options = null) {
    return { type: 2 /* Sequence */, steps, options };
}
/**
 * Declares a key/value object containing CSS properties/styles that
 * can then be used for an animation `state`, within an animation `sequence`,
 * or as styling data for calls to `animate()` and `keyframes()`.
 *
 * \@usageNotes
 * The following examples create animation styles that collect a set of
 * CSS property values:
 *
 * ```typescript
 * // string values for CSS properties
 * style({ background: "red", color: "blue" })
 *
 * // numerical pixel values
 * style({ width: 100, height: 0 })
 * ```
 *
 * The following example uses auto-styling to allow a component to animate from
 * a height of 0 up to the height of the parent element:
 *
 * ```
 * style({ height: 0 }),
 * animate("1s", style({ height: "*" }))
 * ```
 *
 * \@publicApi
 *
 * @param {?} tokens A set of CSS styles or HTML styles associated with an animation state.
 * The value can be any of the following:
 * - A key-value style pair associating a CSS property with a value.
 * - An array of key-value style pairs.
 * - An asterisk (*), to use auto-styling, where styles are derived from the element
 * being animated and applied to the animation when it starts.
 *
 * Auto-styling can be used to define a state that depends on layout or other
 * environmental factors.
 *
 * @return {?} An object that encapsulates the style data.
 *
 */
function style(tokens) {
    return { type: 6 /* Style */, styles: tokens, offset: null };
}
/**
 * Declares an animation state within a trigger attached to an element.
 *
 * \@usageNotes
 * Use the `trigger()` function to register states to an animation trigger.
 * Use the `transition()` function to animate between states.
 * When a state is active within a component, its associated styles persist on the element,
 * even when the animation ends.
 *
 * \@publicApi
 *
 * @param {?} name One or more names for the defined state in a comma-separated string.
 * The following reserved state names can be supplied to define a style for specific use
 * cases:
 *
 * - `void` You can associate styles with this name to be used when
 * the element is detached from the application. For example, when an `ngIf` evaluates
 * to false, the state of the associated element is void.
 *  - `*` (asterisk) Indicates the default state. You can associate styles with this name
 * to be used as the fallback when the state that is being animated is not declared
 * within the trigger.
 *
 * @param {?} styles A set of CSS styles associated with this state, created using the
 * `style()` function.
 * This set of styles persists on the element once the state has been reached.
 * @param {?=} options Parameters that can be passed to the state when it is invoked.
 * 0 or more key-value pairs.
 * @return {?} An object that encapsulates the new state data.
 *
 */
function state(name, styles, options) {
    return { type: 0 /* State */, name, styles, options };
}
/**
 * Defines a set of animation styles, associating each style with an optional `offset` value.
 *
 * \@usageNotes
 * Use with the `animate()` call. Instead of applying animations
 * from the current state
 * to the destination state, keyframes describe how each style entry is applied and at what point
 * within the animation arc.
 * Compare [CSS Keyframe Animations](https://www.w3schools.com/css/css3_animations.asp).
 *
 * ### Usage
 *
 * In the following example, the offset values describe
 * when each `backgroundColor` value is applied. The color is red at the start, and changes to
 * blue when 20% of the total time has elapsed.
 *
 * ```typescript
 * // the provided offset values
 * animate("5s", keyframes([
 *   style({ backgroundColor: "red", offset: 0 }),
 *   style({ backgroundColor: "blue", offset: 0.2 }),
 *   style({ backgroundColor: "orange", offset: 0.3 }),
 *   style({ backgroundColor: "black", offset: 1 })
 * ]))
 * ```
 *
 * If there are no `offset` values specified in the style entries, the offsets
 * are calculated automatically.
 *
 * ```typescript
 * animate("5s", keyframes([
 *   style({ backgroundColor: "red" }) // offset = 0
 *   style({ backgroundColor: "blue" }) // offset = 0.33
 *   style({ backgroundColor: "orange" }) // offset = 0.66
 *   style({ backgroundColor: "black" }) // offset = 1
 * ]))
 * ```
 * \@publicApi
 * @param {?} steps A set of animation styles with optional offset data.
 * The optional `offset` value for a style specifies a percentage of the total animation
 * time at which that style is applied.
 * @return {?} An object that encapsulates the keyframes data.
 *
 */
function keyframes(steps) {
    return { type: 5 /* Keyframes */, steps };
}
/**
 * Declares an animation transition as a sequence of animation steps to run when a given
 * condition is satisfied. The condition is a Boolean expression or function that compares
 * the previous and current animation states, and returns true if this transition should occur.
 * When the state criteria of a defined transition are met, the associated animation is
 * triggered.
 *
 * \@usageNotes
 * The template associated with a component binds an animation trigger to an element.
 *
 * ```HTML
 * <!-- somewhere inside of my-component-tpl.html -->
 * <div [\@myAnimationTrigger]="myStatusExp">...</div>
 * ```
 *
 * All transitions are defined within an animation trigger,
 * along with named states that the transitions change to and from.
 *
 * ```typescript
 * trigger("myAnimationTrigger", [
 *  // define states
 *  state("on", style({ background: "green" })),
 *  state("off", style({ background: "grey" })),
 *  ...]
 * ```
 *
 * Note that when you call the `sequence()` function within a `{\@link animations/group group()}`
 * or a `transition()` call, execution does not continue to the next instruction
 * until each of the inner animation steps have completed.
 *
 * ### Syntax examples
 *
 * The following examples define transitions between the two defined states (and default states),
 * using various options:
 *
 * ```typescript
 * // Transition occurs when the state value
 * // bound to "myAnimationTrigger" changes from "on" to "off"
 * transition("on => off", animate(500))
 * // Run the same animation for both directions
 * transition("on <=> off", animate(500))
 * // Define multiple state-change pairs separated by commas
 * transition("on => off, off => void", animate(500))
 * ```
 *
 * ### Special values for state-change expressions
 *
 * - Catch-all state change for when an element is inserted into the page and the
 * destination state is unknown:
 *
 * ```typescript
 * transition("void => *", [
 *  style({ opacity: 0 }),
 *  animate(500)
 *  ])
 * ```
 *
 * - Capture a state change between any states:
 *
 *  `transition("* => *", animate("1s 0s"))`
 *
 * - Entry and exit transitions:
 *
 * ```typescript
 * transition(":enter", [
 *   style({ opacity: 0 }),
 *   animate(500, style({ opacity: 1 }))
 *   ]),
 * transition(":leave", [
 *   animate(500, style({ opacity: 0 }))
 *   ])
 * ```
 *
 * - Use `:increment` and `:decrement` to initiate transitions:
 *
 * ```typescript
 * transition(":increment", group([
 *  query(':enter', [
 *     style({ left: '100%' }),
 *     animate('0.5s ease-out', style('*'))
 *   ]),
 *  query(':leave', [
 *     animate('0.5s ease-out', style({ left: '-100%' }))
 *  ])
 * ]))
 *
 * transition(":decrement", group([
 *  query(':enter', [
 *     style({ left: '100%' }),
 *     animate('0.5s ease-out', style('*'))
 *   ]),
 *  query(':leave', [
 *     animate('0.5s ease-out', style({ left: '-100%' }))
 *  ])
 * ]))
 * ```
 *
 * ### State-change functions
 *
 * Here is an example of a `fromState` specified as a state-change function that invokes an
 * animation when true:
 *
 * ```typescript
 * transition((fromState, toState) =>
 *  {
 *   return fromState == "off" && toState == "on";
 *  },
 *  animate("1s 0s"))
 * ```
 *
 * ### Animating to the final state
 *
 * If the final step in a transition is a call to `animate()` that uses a timing value
 * with no style data, that step is automatically considered the final animation arc,
 * for the element to reach the final state. Angular automatically adds or removes
 * CSS styles to ensure that the element is in the correct final state.
 *
 * The following example defines a transition that starts by hiding the element,
 * then makes sure that it animates properly to whatever state is currently active for trigger:
 *
 * ```typescript
 * transition("void => *", [
 *   style({ opacity: 0 }),
 *   animate(500)
 *  ])
 * ```
 * ### Boolean value matching
 * If a trigger binding value is a Boolean, it can be matched using a transition expression
 * that compares true and false or 1 and 0. For example:
 *
 * ```
 * // in the template
 * <div [\@openClose]="open ? true : false">...</div>
 * // in the component metadata
 * trigger('openClose', [
 *   state('true', style({ height: '*' })),
 *   state('false', style({ height: '0px' })),
 *   transition('false <=> true', animate(500))
 * ])
 * ```
 *
 * \@publicApi
 *
 * @param {?} stateChangeExpr A Boolean expression or function that compares the previous and current
 * animation states, and returns true if this transition should occur. Note that  "true" and "false"
 * match 1 and 0, respectively. An expression is evaluated each time a state change occurs in the
 * animation trigger element.
 * The animation steps run when the expression evaluates to true.
 *
 * - A state-change string takes the form "state1 => state2", where each side is a defined animation
 * state, or an asterix (*) to refer to a dynamic start or end state.
 *   - The expression string can contain multiple comma-separated statements;
 * for example "state1 => state2, state3 => state4".
 *   - Special values `:enter` and `:leave` initiate a transition on the entry and exit states,
 * equivalent to  "void => *"  and "* => void".
 *   - Special values `:increment` and `:decrement` initiate a transition when a numeric value has
 * increased or decreased in value.
 * - A function is executed each time a state change occurs in the animation trigger element.
 * The animation steps run when the function returns true.
 *
 * @param {?} steps One or more animation objects, as returned by the `animate()` or
 * `sequence()` function, that form a transformation from one state to another.
 * A sequence is used by default when you pass an array.
 * @param {?=} options An options object that can contain a delay value for the start of the animation,
 * and additional developer-defined parameters. Provided values for additional parameters are used
 * as defaults, and override values can be passed to the caller on invocation.
 * @return {?} An object that encapsulates the transition data.
 *
 */
function transition(stateChangeExpr, steps, options = null) {
    return { type: 1 /* Transition */, expr: stateChangeExpr, animation: steps, options };
}
/**
 * Produces a reusable animation that can be invoked in another animation or sequence,
 * by calling the `useAnimation()` function.
 *
 * \@usageNotes
 * The following example defines a reusable animation, providing some default parameter
 * values.
 *
 * ```typescript
 * var fadeAnimation = animation([
 *   style({ opacity: '{{ start }}' }),
 *   animate('{{ time }}',
 *   style({ opacity: '{{ end }}'}))
 *   ],
 *   { params: { time: '1000ms', start: 0, end: 1 }});
 * ```
 *
 * The following invokes the defined animation with a call to `useAnimation()`,
 * passing in override parameter values.
 *
 * ```js
 * useAnimation(fadeAnimation, {
 *   params: {
 *     time: '2s',
 *     start: 1,
 *     end: 0
 *   }
 * })
 * ```
 *
 * If any of the passed-in parameter values are missing from this call,
 * the default values are used. If one or more parameter values are missing before a step is
 * animated, `useAnimation()` throws an error.
 *
 * \@publicApi
 * @param {?} steps One or more animation objects, as returned by the `animate()`
 * or `sequence()` function, that form a transformation from one state to another.
 * A sequence is used by default when you pass an array.
 * @param {?=} options An options object that can contain a delay value for the start of the
 * animation, and additional developer-defined parameters.
 * Provided values for additional parameters are used as defaults,
 * and override values can be passed to the caller on invocation.
 * @return {?} An object that encapsulates the animation data.
 *
 */
function animation(steps, options = null) {
    return { type: 8 /* Reference */, animation: steps, options };
}
/**
 * Executes a queried inner animation element within an animation sequence.
 *
 * \@usageNotes
 * Each time an animation is triggered in Angular, the parent animation
 * has priority and any child animations are blocked. In order
 * for a child animation to run, the parent animation must query each of the elements
 * containing child animations, and run them using this function.
 *
 * Note that this feature is designed to be used with `query()` and it will only work
 * with animations that are assigned using the Angular animation library. CSS keyframes
 * and transitions are not handled by this API.
 *
 * \@publicApi
 * @param {?=} options An options object that can contain a delay value for the start of the
 * animation, and additional override values for developer-defined parameters.
 * @return {?} An object that encapsulates the child animation data.
 *
 */
function animateChild(options = null) {
    return { type: 9 /* AnimateChild */, options };
}
/**
 * Starts a reusable animation that is created using the `animation()` function.
 *
 * \@publicApi
 * @param {?} animation The reusable animation to start.
 * @param {?=} options An options object that can contain a delay value for the start of
 * the animation, and additional override values for developer-defined parameters.
 * @return {?} An object that contains the animation parameters.
 *
 */
function useAnimation(animation, options = null) {
    return { type: 10 /* AnimateRef */, animation, options };
}
/**
 * Finds one or more inner elements within the current element that is
 * being animated within a sequence. Use with `animate()`.
 *
 * \@usageNotes
 * Tokens can be merged into a combined query selector string. For example:
 *
 * ```typescript
 *  query(':self, .record:enter, .record:leave, \@subTrigger', [...])
 * ```
 *
 * The `query()` function collects multiple elements and works internally by using
 * `element.querySelectorAll`. Use the `limit` field of an options object to limit
 * the total number of items to be collected. For example:
 *
 * ```js
 * query('div', [
 *   animate(...),
 *   animate(...)
 * ], { limit: 1 })
 * ```
 *
 * By default, throws an error when zero items are found. Set the
 * `optional` flag to ignore this error. For example:
 *
 * ```js
 * query('.some-element-that-may-not-be-there', [
 *   animate(...),
 *   animate(...)
 * ], { optional: true })
 * ```
 *
 * ### Usage Example
 *
 * The following example queries for inner elements and animates them
 * individually using `animate()`.
 *
 * ```typescript
 * \@Component({
 *   selector: 'inner',
 *   template: `
 *     <div [\@queryAnimation]="exp">
 *       <h1>Title</h1>
 *       <div class="content">
 *         Blah blah blah
 *       </div>
 *     </div>
 *   `,
 *   animations: [
 *    trigger('queryAnimation', [
 *      transition('* => goAnimate', [
 *        // hide the inner elements
 *        query('h1', style({ opacity: 0 })),
 *        query('.content', style({ opacity: 0 })),
 *
 *        // animate the inner elements in, one by one
 *        query('h1', animate(1000, style({ opacity: 1 }))),
 *        query('.content', animate(1000, style({ opacity: 1 }))),
 *      ])
 *    ])
 *  ]
 * })
 * class Cmp {
 *   exp = '';
 *
 *   goAnimate() {
 *     this.exp = 'goAnimate';
 *   }
 * }
 * ```
 *
 * \@publicApi
 * @param {?} selector The element to query, or a set of elements that contain Angular-specific
 * characteristics, specified with one or more of the following tokens.
 *  - `query(":enter")` or `query(":leave")` : Query for newly inserted/removed elements.
 *  - `query(":animating")` : Query all currently animating elements.
 *  - `query("\@triggerName")` : Query elements that contain an animation trigger.
 *  - `query("\@*")` : Query all elements that contain an animation triggers.
 *  - `query(":self")` : Include the current element into the animation sequence.
 *
 * @param {?} animation One or more animation steps to apply to the queried element or elements.
 * An array is treated as an animation sequence.
 * @param {?=} options An options object. Use the 'limit' field to limit the total number of
 * items to collect.
 * @return {?} An object that encapsulates the query data.
 *
 */
function query(selector, animation, options = null) {
    return { type: 11 /* Query */, selector, animation, options };
}
/**
 * Use within an animation `query()` call to issue a timing gap after
 * each queried item is animated.
 *
 * \@usageNotes
 * In the following example, a container element wraps a list of items stamped out
 * by an `ngFor`. The container element contains an animation trigger that will later be set
 * to query for each of the inner items.
 *
 * Each time items are added, the opacity fade-in animation runs,
 * and each removed item is faded out.
 * When either of these animations occur, the stagger effect is
 * applied after each item's animation is started.
 *
 * ```html
 * <!-- list.component.html -->
 * <button (click)="toggle()">Show / Hide Items</button>
 * <hr />
 * <div [\@listAnimation]="items.length">
 *   <div *ngFor="let item of items">
 *     {{ item }}
 *   </div>
 * </div>
 * ```
 *
 * Here is the component code:
 *
 * ```typescript
 * import {trigger, transition, style, animate, query, stagger} from '\@angular/animations';
 * \@Component({
 *   templateUrl: 'list.component.html',
 *   animations: [
 *     trigger('listAnimation', [
 *     ...
 *     ])
 *   ]
 * })
 * class ListComponent {
 *   items = [];
 *
 *   showItems() {
 *     this.items = [0,1,2,3,4];
 *   }
 *
 *   hideItems() {
 *     this.items = [];
 *   }
 *
 *   toggle() {
 *     this.items.length ? this.hideItems() : this.showItems();
 *    }
 *  }
 * ```
 *
 * Here is the animation trigger code:
 *
 * ```typescript
 * trigger('listAnimation', [
 *   transition('* => *', [ // each time the binding value changes
 *     query(':leave', [
 *       stagger(100, [
 *         animate('0.5s', style({ opacity: 0 }))
 *       ])
 *     ]),
 *     query(':enter', [
 *       style({ opacity: 0 }),
 *       stagger(100, [
 *         animate('0.5s', style({ opacity: 1 }))
 *       ])
 *     ])
 *   ])
 * ])
 * ```
 *
 * \@publicApi
 * @param {?} timings A delay value.
 * @param {?} animation One ore more animation steps.
 * @return {?} An object that encapsulates the stagger data.
 *
 */
function stagger(timings, animation) {
    return { type: 12 /* Stagger */, timings, animation };
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/src/util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * @param {?} cb
 * @return {?}
 */
function scheduleMicroTask(cb) {
    Promise.resolve(null).then(cb);
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/src/players/animation_player.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Provides programmatic control of a reusable animation sequence,
 * built using the `build()` method of `AnimationBuilder`. The `build()` method
 * returns a factory, whose `create()` method instantiates and initializes this interface.
 *
 * @see `AnimationBuilder`
 * @see `AnimationFactory`
 * @see `animate()`
 *
 * \@publicApi
 * @record
 */
function AnimationPlayer() { }
if (false) {}
/**
 * An empty programmatic controller for reusable animations.
 * Used internally when animations are disabled, to avoid
 * checking for the null case when an animation player is expected.
 *
 * @see `animate()`
 * @see `AnimationPlayer`
 * @see `GroupPlayer`
 *
 * \@publicApi
 */
class NoopAnimationPlayer {
    /**
     * @param {?=} duration
     * @param {?=} delay
     */
    constructor(duration = 0, delay = 0) {
        this._onDoneFns = [];
        this._onStartFns = [];
        this._onDestroyFns = [];
        this._started = false;
        this._destroyed = false;
        this._finished = false;
        this.parentPlayer = null;
        this.totalTime = duration + delay;
    }
    /**
     * @private
     * @return {?}
     */
    _onFinish() {
        if (!this._finished) {
            this._finished = true;
            this._onDoneFns.forEach((/**
             * @param {?} fn
             * @return {?}
             */
            fn => fn()));
            this._onDoneFns = [];
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    onStart(fn) { this._onStartFns.push(fn); }
    /**
     * @param {?} fn
     * @return {?}
     */
    onDone(fn) { this._onDoneFns.push(fn); }
    /**
     * @param {?} fn
     * @return {?}
     */
    onDestroy(fn) { this._onDestroyFns.push(fn); }
    /**
     * @return {?}
     */
    hasStarted() { return this._started; }
    /**
     * @return {?}
     */
    init() { }
    /**
     * @return {?}
     */
    play() {
        if (!this.hasStarted()) {
            this._onStart();
            this.triggerMicrotask();
        }
        this._started = true;
    }
    /**
     * \@internal
     * @return {?}
     */
    triggerMicrotask() { scheduleMicroTask((/**
     * @return {?}
     */
    () => this._onFinish())); }
    /**
     * @private
     * @return {?}
     */
    _onStart() {
        this._onStartFns.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        fn => fn()));
        this._onStartFns = [];
    }
    /**
     * @return {?}
     */
    pause() { }
    /**
     * @return {?}
     */
    restart() { }
    /**
     * @return {?}
     */
    finish() { this._onFinish(); }
    /**
     * @return {?}
     */
    destroy() {
        if (!this._destroyed) {
            this._destroyed = true;
            if (!this.hasStarted()) {
                this._onStart();
            }
            this.finish();
            this._onDestroyFns.forEach((/**
             * @param {?} fn
             * @return {?}
             */
            fn => fn()));
            this._onDestroyFns = [];
        }
    }
    /**
     * @return {?}
     */
    reset() { }
    /**
     * @param {?} position
     * @return {?}
     */
    setPosition(position) { }
    /**
     * @return {?}
     */
    getPosition() { return 0; }
    /**
     * \@internal
     * @param {?} phaseName
     * @return {?}
     */
    triggerCallback(phaseName) {
        /** @type {?} */
        const methods = phaseName == 'start' ? this._onStartFns : this._onDoneFns;
        methods.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        fn => fn()));
        methods.length = 0;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/src/players/animation_group_player.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A programmatic controller for a group of reusable animations.
 * Used internally to control animations.
 *
 * @see `AnimationPlayer`
 * @see `{\@link animations/group group()}`
 *
 */
class AnimationGroupPlayer {
    /**
     * @param {?} _players
     */
    constructor(_players) {
        this._onDoneFns = [];
        this._onStartFns = [];
        this._finished = false;
        this._started = false;
        this._destroyed = false;
        this._onDestroyFns = [];
        this.parentPlayer = null;
        this.totalTime = 0;
        this.players = _players;
        /** @type {?} */
        let doneCount = 0;
        /** @type {?} */
        let destroyCount = 0;
        /** @type {?} */
        let startCount = 0;
        /** @type {?} */
        const total = this.players.length;
        if (total == 0) {
            scheduleMicroTask((/**
             * @return {?}
             */
            () => this._onFinish()));
        }
        else {
            this.players.forEach((/**
             * @param {?} player
             * @return {?}
             */
            player => {
                player.onDone((/**
                 * @return {?}
                 */
                () => {
                    if (++doneCount == total) {
                        this._onFinish();
                    }
                }));
                player.onDestroy((/**
                 * @return {?}
                 */
                () => {
                    if (++destroyCount == total) {
                        this._onDestroy();
                    }
                }));
                player.onStart((/**
                 * @return {?}
                 */
                () => {
                    if (++startCount == total) {
                        this._onStart();
                    }
                }));
            }));
        }
        this.totalTime = this.players.reduce((/**
         * @param {?} time
         * @param {?} player
         * @return {?}
         */
        (time, player) => Math.max(time, player.totalTime)), 0);
    }
    /**
     * @private
     * @return {?}
     */
    _onFinish() {
        if (!this._finished) {
            this._finished = true;
            this._onDoneFns.forEach((/**
             * @param {?} fn
             * @return {?}
             */
            fn => fn()));
            this._onDoneFns = [];
        }
    }
    /**
     * @return {?}
     */
    init() { this.players.forEach((/**
     * @param {?} player
     * @return {?}
     */
    player => player.init())); }
    /**
     * @param {?} fn
     * @return {?}
     */
    onStart(fn) { this._onStartFns.push(fn); }
    /**
     * @private
     * @return {?}
     */
    _onStart() {
        if (!this.hasStarted()) {
            this._started = true;
            this._onStartFns.forEach((/**
             * @param {?} fn
             * @return {?}
             */
            fn => fn()));
            this._onStartFns = [];
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    onDone(fn) { this._onDoneFns.push(fn); }
    /**
     * @param {?} fn
     * @return {?}
     */
    onDestroy(fn) { this._onDestroyFns.push(fn); }
    /**
     * @return {?}
     */
    hasStarted() { return this._started; }
    /**
     * @return {?}
     */
    play() {
        if (!this.parentPlayer) {
            this.init();
        }
        this._onStart();
        this.players.forEach((/**
         * @param {?} player
         * @return {?}
         */
        player => player.play()));
    }
    /**
     * @return {?}
     */
    pause() { this.players.forEach((/**
     * @param {?} player
     * @return {?}
     */
    player => player.pause())); }
    /**
     * @return {?}
     */
    restart() { this.players.forEach((/**
     * @param {?} player
     * @return {?}
     */
    player => player.restart())); }
    /**
     * @return {?}
     */
    finish() {
        this._onFinish();
        this.players.forEach((/**
         * @param {?} player
         * @return {?}
         */
        player => player.finish()));
    }
    /**
     * @return {?}
     */
    destroy() { this._onDestroy(); }
    /**
     * @private
     * @return {?}
     */
    _onDestroy() {
        if (!this._destroyed) {
            this._destroyed = true;
            this._onFinish();
            this.players.forEach((/**
             * @param {?} player
             * @return {?}
             */
            player => player.destroy()));
            this._onDestroyFns.forEach((/**
             * @param {?} fn
             * @return {?}
             */
            fn => fn()));
            this._onDestroyFns = [];
        }
    }
    /**
     * @return {?}
     */
    reset() {
        this.players.forEach((/**
         * @param {?} player
         * @return {?}
         */
        player => player.reset()));
        this._destroyed = false;
        this._finished = false;
        this._started = false;
    }
    /**
     * @param {?} p
     * @return {?}
     */
    setPosition(p) {
        /** @type {?} */
        const timeAtPosition = p * this.totalTime;
        this.players.forEach((/**
         * @param {?} player
         * @return {?}
         */
        player => {
            /** @type {?} */
            const position = player.totalTime ? Math.min(1, timeAtPosition / player.totalTime) : 1;
            player.setPosition(position);
        }));
    }
    /**
     * @return {?}
     */
    getPosition() {
        /** @type {?} */
        let min = 0;
        this.players.forEach((/**
         * @param {?} player
         * @return {?}
         */
        player => {
            /** @type {?} */
            const p = player.getPosition();
            min = Math.min(p, min);
        }));
        return min;
    }
    /**
     * @return {?}
     */
    beforeDestroy() {
        this.players.forEach((/**
         * @param {?} player
         * @return {?}
         */
        player => {
            if (player.beforeDestroy) {
                player.beforeDestroy();
            }
        }));
    }
    /**
     * \@internal
     * @param {?} phaseName
     * @return {?}
     */
    triggerCallback(phaseName) {
        /** @type {?} */
        const methods = phaseName == 'start' ? this._onStartFns : this._onDoneFns;
        methods.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        fn => fn()));
        methods.length = 0;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/src/private_export.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ɵPRE_STYLE = '!';

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/src/animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=animations.js.map

/***/ }),

/***/ "../../node_modules/@angular/animations/__ivy_ngcc__/fesm2015/browser.js":
/*!****************************************************************************************************************************************************************!*\
  !*** C:/Users/n_sol/dev/monorepo-wallet/omnichannel2-commercial-plataform-wallet-management/node_modules/@angular/animations/__ivy_ngcc__/fesm2015/browser.js ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: AnimationDriver, ɵAnimation, ɵAnimationEngine, ɵAnimationStyleNormalizer, ɵCssKeyframesDriver, ɵCssKeyframesPlayer, ɵNoopAnimationDriver, ɵNoopAnimationStyleNormalizer, ɵWebAnimationsDriver, ɵWebAnimationsPlayer, ɵWebAnimationsStyleNormalizer, ɵallowPreviousPlayerStylesMerge, ɵangular_packages_animations_browser_browser_a, ɵcontainsElement, ɵinvokeQuery, ɵmatchesElement, ɵsupportsWebAnimations, ɵvalidateStyleProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationDriver", function() { return AnimationDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵAnimation", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵAnimationEngine", function() { return AnimationEngine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵAnimationStyleNormalizer", function() { return AnimationStyleNormalizer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵCssKeyframesDriver", function() { return CssKeyframesDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵCssKeyframesPlayer", function() { return CssKeyframesPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNoopAnimationDriver", function() { return NoopAnimationDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNoopAnimationStyleNormalizer", function() { return NoopAnimationStyleNormalizer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵWebAnimationsDriver", function() { return WebAnimationsDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵWebAnimationsPlayer", function() { return WebAnimationsPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵWebAnimationsStyleNormalizer", function() { return WebAnimationsStyleNormalizer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵallowPreviousPlayerStylesMerge", function() { return allowPreviousPlayerStylesMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_animations_browser_browser_a", function() { return SpecialCasedStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵcontainsElement", function() { return containsElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵinvokeQuery", function() { return invokeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵmatchesElement", function() { return matchesElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵsupportsWebAnimations", function() { return supportsWebAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵvalidateStyleProperty", function() { return validateStyleProperty; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/**
 * @license Angular v9.1.0
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */




/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/render/shared.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */

function isBrowser() {
    return (typeof window !== 'undefined' && typeof window.document !== 'undefined');
}
/**
 * @return {?}
 */
function isNode() {
    // Checking only for `process` isn't enough to identify whether or not we're in a Node
    // environment, because Webpack by default will polyfill the `process`. While we can discern
    // that Webpack polyfilled it by looking at `process.browser`, it's very Webpack-specific and
    // might not be future-proof. Instead we look at the stringified version of `process` which
    // is `[object process]` in Node and `[object Object]` when polyfilled.
    return typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
}
/**
 * @param {?} players
 * @return {?}
 */
function optimizeGroupPlayer(players) {
    switch (players.length) {
        case 0:
            return new _angular_animations__WEBPACK_IMPORTED_MODULE_0__["NoopAnimationPlayer"]();
        case 1:
            return players[0];
        default:
            return new _angular_animations__WEBPACK_IMPORTED_MODULE_0__["ɵAnimationGroupPlayer"](players);
    }
}
/**
 * @param {?} driver
 * @param {?} normalizer
 * @param {?} element
 * @param {?} keyframes
 * @param {?=} preStyles
 * @param {?=} postStyles
 * @return {?}
 */
function normalizeKeyframes(driver, normalizer, element, keyframes, preStyles = {}, postStyles = {}) {
    /** @type {?} */
    const errors = [];
    /** @type {?} */
    const normalizedKeyframes = [];
    /** @type {?} */
    let previousOffset = -1;
    /** @type {?} */
    let previousKeyframe = null;
    keyframes.forEach((/**
     * @param {?} kf
     * @return {?}
     */
    kf => {
        /** @type {?} */
        const offset = (/** @type {?} */ (kf['offset']));
        /** @type {?} */
        const isSameOffset = offset == previousOffset;
        /** @type {?} */
        const normalizedKeyframe = (isSameOffset && previousKeyframe) || {};
        Object.keys(kf).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        prop => {
            /** @type {?} */
            let normalizedProp = prop;
            /** @type {?} */
            let normalizedValue = kf[prop];
            if (prop !== 'offset') {
                normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
                switch (normalizedValue) {
                    case _angular_animations__WEBPACK_IMPORTED_MODULE_0__["ɵPRE_STYLE"]:
                        normalizedValue = preStyles[prop];
                        break;
                    case _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"]:
                        normalizedValue = postStyles[prop];
                        break;
                    default:
                        normalizedValue =
                            normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
                        break;
                }
            }
            normalizedKeyframe[normalizedProp] = normalizedValue;
        }));
        if (!isSameOffset) {
            normalizedKeyframes.push(normalizedKeyframe);
        }
        previousKeyframe = normalizedKeyframe;
        previousOffset = offset;
    }));
    if (errors.length) {
        /** @type {?} */
        const LINE_START = '\n - ';
        throw new Error(`Unable to animate due to the following errors:${LINE_START}${errors.join(LINE_START)}`);
    }
    return normalizedKeyframes;
}
/**
 * @param {?} player
 * @param {?} eventName
 * @param {?} event
 * @param {?} callback
 * @return {?}
 */
function listenOnPlayer(player, eventName, event, callback) {
    switch (eventName) {
        case 'start':
            player.onStart((/**
             * @return {?}
             */
            () => callback(event && copyAnimationEvent(event, 'start', player))));
            break;
        case 'done':
            player.onDone((/**
             * @return {?}
             */
            () => callback(event && copyAnimationEvent(event, 'done', player))));
            break;
        case 'destroy':
            player.onDestroy((/**
             * @return {?}
             */
            () => callback(event && copyAnimationEvent(event, 'destroy', player))));
            break;
    }
}
/**
 * @param {?} e
 * @param {?} phaseName
 * @param {?} player
 * @return {?}
 */
function copyAnimationEvent(e, phaseName, player) {
    /** @type {?} */
    const totalTime = player.totalTime;
    /** @type {?} */
    const disabled = ((/** @type {?} */ (player))).disabled ? true : false;
    /** @type {?} */
    const event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == undefined ? e.totalTime : totalTime, disabled);
    /** @type {?} */
    const data = ((/** @type {?} */ (e)))['_data'];
    if (data != null) {
        ((/** @type {?} */ (event)))['_data'] = data;
    }
    return event;
}
/**
 * @param {?} element
 * @param {?} triggerName
 * @param {?} fromState
 * @param {?} toState
 * @param {?=} phaseName
 * @param {?=} totalTime
 * @param {?=} disabled
 * @return {?}
 */
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = '', totalTime = 0, disabled) {
    return { element, triggerName, fromState, toState, phaseName, totalTime, disabled: !!disabled };
}
/**
 * @param {?} map
 * @param {?} key
 * @param {?} defaultValue
 * @return {?}
 */
function getOrSetAsInMap(map, key, defaultValue) {
    /** @type {?} */
    let value;
    if (map instanceof Map) {
        value = map.get(key);
        if (!value) {
            map.set(key, value = defaultValue);
        }
    }
    else {
        value = map[key];
        if (!value) {
            value = map[key] = defaultValue;
        }
    }
    return value;
}
/**
 * @param {?} command
 * @return {?}
 */
function parseTimelineCommand(command) {
    /** @type {?} */
    const separatorPos = command.indexOf(':');
    /** @type {?} */
    const id = command.substring(1, separatorPos);
    /** @type {?} */
    const action = command.substr(separatorPos + 1);
    return [id, action];
}
/** @type {?} */
let _contains = (/**
 * @param {?} elm1
 * @param {?} elm2
 * @return {?}
 */
(elm1, elm2) => false);
const ɵ0 = _contains;
/** @type {?} */
let _matches = (/**
 * @param {?} element
 * @param {?} selector
 * @return {?}
 */
(element, selector) => false);
const ɵ1 = _matches;
/** @type {?} */
let _query = (/**
 * @param {?} element
 * @param {?} selector
 * @param {?} multi
 * @return {?}
 */
(element, selector, multi) => {
    return [];
});
const ɵ2 = _query;
// Define utility methods for browsers and platform-server(domino) where Element
// and utility methods exist.
/** @type {?} */
const _isNode = isNode();
if (_isNode || typeof Element !== 'undefined') {
    // this is well supported in all browsers
    _contains = (/**
     * @param {?} elm1
     * @param {?} elm2
     * @return {?}
     */
    (elm1, elm2) => { return (/** @type {?} */ (elm1.contains(elm2))); });
    _matches = ((/**
     * @return {?}
     */
    () => {
        if (_isNode || Element.prototype.matches) {
            return (/**
             * @param {?} element
             * @param {?} selector
             * @return {?}
             */
            (element, selector) => element.matches(selector));
        }
        else {
            /** @type {?} */
            const proto = (/** @type {?} */ (Element.prototype));
            /** @type {?} */
            const fn = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector ||
                proto.oMatchesSelector || proto.webkitMatchesSelector;
            if (fn) {
                return (/**
                 * @param {?} element
                 * @param {?} selector
                 * @return {?}
                 */
                (element, selector) => fn.apply(element, [selector]));
            }
            else {
                return _matches;
            }
        }
    }))();
    _query = (/**
     * @param {?} element
     * @param {?} selector
     * @param {?} multi
     * @return {?}
     */
    (element, selector, multi) => {
        /** @type {?} */
        let results = [];
        if (multi) {
            results.push(...element.querySelectorAll(selector));
        }
        else {
            /** @type {?} */
            const elm = element.querySelector(selector);
            if (elm) {
                results.push(elm);
            }
        }
        return results;
    });
}
/**
 * @param {?} prop
 * @return {?}
 */
function containsVendorPrefix(prop) {
    // Webkit is the only real popular vendor prefix nowadays
    // cc: http://shouldiprefix.com/
    return prop.substring(1, 6) == 'ebkit'; // webkit or Webkit
}
/** @type {?} */
let _CACHED_BODY = null;
/** @type {?} */
let _IS_WEBKIT = false;
/**
 * @param {?} prop
 * @return {?}
 */
function validateStyleProperty(prop) {
    if (!_CACHED_BODY) {
        _CACHED_BODY = getBodyNode() || {};
        _IS_WEBKIT = (/** @type {?} */ (_CACHED_BODY)).style ? ('WebkitAppearance' in (/** @type {?} */ (_CACHED_BODY)).style) : false;
    }
    /** @type {?} */
    let result = true;
    if ((/** @type {?} */ (_CACHED_BODY)).style && !containsVendorPrefix(prop)) {
        result = prop in (/** @type {?} */ (_CACHED_BODY)).style;
        if (!result && _IS_WEBKIT) {
            /** @type {?} */
            const camelProp = 'Webkit' + prop.charAt(0).toUpperCase() + prop.substr(1);
            result = camelProp in (/** @type {?} */ (_CACHED_BODY)).style;
        }
    }
    return result;
}
/**
 * @return {?}
 */
function getBodyNode() {
    if (typeof document != 'undefined') {
        return document.body;
    }
    return null;
}
/** @type {?} */
const matchesElement = _matches;
/** @type {?} */
const containsElement = _contains;
/** @type {?} */
const invokeQuery = _query;
/**
 * @param {?} object
 * @return {?}
 */
function hypenatePropsObject(object) {
    /** @type {?} */
    const newObj = {};
    Object.keys(object).forEach((/**
     * @param {?} prop
     * @return {?}
     */
    prop => {
        /** @type {?} */
        const newProp = prop.replace(/([a-z])([A-Z])/g, '$1-$2');
        newObj[newProp] = object[prop];
    }));
    return newObj;
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/render/animation_driver.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@publicApi
 */
class NoopAnimationDriver {
    /**
     * @param {?} prop
     * @return {?}
     */
    validateStyleProperty(prop) { return validateStyleProperty(prop); }
    /**
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    matchesElement(element, selector) {
        return matchesElement(element, selector);
    }
    /**
     * @param {?} elm1
     * @param {?} elm2
     * @return {?}
     */
    containsElement(elm1, elm2) { return containsElement(elm1, elm2); }
    /**
     * @param {?} element
     * @param {?} selector
     * @param {?} multi
     * @return {?}
     */
    query(element, selector, multi) {
        return invokeQuery(element, selector, multi);
    }
    /**
     * @param {?} element
     * @param {?} prop
     * @param {?=} defaultValue
     * @return {?}
     */
    computeStyle(element, prop, defaultValue) {
        return defaultValue || '';
    }
    /**
     * @param {?} element
     * @param {?} keyframes
     * @param {?} duration
     * @param {?} delay
     * @param {?} easing
     * @param {?=} previousPlayers
     * @param {?=} scrubberAccessRequested
     * @return {?}
     */
    animate(element, keyframes, duration, delay, easing, previousPlayers = [], scrubberAccessRequested) {
        return new _angular_animations__WEBPACK_IMPORTED_MODULE_0__["NoopAnimationPlayer"](duration, delay);
    }
}
NoopAnimationDriver.ɵfac = function NoopAnimationDriver_Factory(t) { return new (t || NoopAnimationDriver)(); };
NoopAnimationDriver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NoopAnimationDriver, factory: NoopAnimationDriver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NoopAnimationDriver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
/**
 * \@publicApi
 * @abstract
 */
class AnimationDriver {
}
AnimationDriver.NOOP = new NoopAnimationDriver();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ONE_SECOND = 1000;
/** @type {?} */
const SUBSTITUTION_EXPR_START = '{{';
/** @type {?} */
const SUBSTITUTION_EXPR_END = '}}';
/** @type {?} */
const ENTER_CLASSNAME = 'ng-enter';
/** @type {?} */
const LEAVE_CLASSNAME = 'ng-leave';
/** @type {?} */
const ENTER_SELECTOR = '.ng-enter';
/** @type {?} */
const LEAVE_SELECTOR = '.ng-leave';
/** @type {?} */
const NG_TRIGGER_CLASSNAME = 'ng-trigger';
/** @type {?} */
const NG_TRIGGER_SELECTOR = '.ng-trigger';
/** @type {?} */
const NG_ANIMATING_CLASSNAME = 'ng-animating';
/** @type {?} */
const NG_ANIMATING_SELECTOR = '.ng-animating';
/**
 * @param {?} value
 * @return {?}
 */
function resolveTimingValue(value) {
    if (typeof value == 'number')
        return value;
    /** @type {?} */
    const matches = value.match(/^(-?[\.\d]+)(m?s)/);
    if (!matches || matches.length < 2)
        return 0;
    return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}
/**
 * @param {?} value
 * @param {?} unit
 * @return {?}
 */
function _convertTimeValueToMS(value, unit) {
    switch (unit) {
        case 's':
            return value * ONE_SECOND;
        default: // ms or something else
            return value;
    }
}
/**
 * @param {?} timings
 * @param {?} errors
 * @param {?=} allowNegativeValues
 * @return {?}
 */
function resolveTiming(timings, errors, allowNegativeValues) {
    return timings.hasOwnProperty('duration') ?
        (/** @type {?} */ (timings)) :
        parseTimeExpression((/** @type {?} */ (timings)), errors, allowNegativeValues);
}
/**
 * @param {?} exp
 * @param {?} errors
 * @param {?=} allowNegativeValues
 * @return {?}
 */
function parseTimeExpression(exp, errors, allowNegativeValues) {
    /** @type {?} */
    const regex = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
    /** @type {?} */
    let duration;
    /** @type {?} */
    let delay = 0;
    /** @type {?} */
    let easing = '';
    if (typeof exp === 'string') {
        /** @type {?} */
        const matches = exp.match(regex);
        if (matches === null) {
            errors.push(`The provided timing value "${exp}" is invalid.`);
            return { duration: 0, delay: 0, easing: '' };
        }
        duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
        /** @type {?} */
        const delayMatch = matches[3];
        if (delayMatch != null) {
            delay = _convertTimeValueToMS(parseFloat(delayMatch), matches[4]);
        }
        /** @type {?} */
        const easingVal = matches[5];
        if (easingVal) {
            easing = easingVal;
        }
    }
    else {
        duration = exp;
    }
    if (!allowNegativeValues) {
        /** @type {?} */
        let containsErrors = false;
        /** @type {?} */
        let startIndex = errors.length;
        if (duration < 0) {
            errors.push(`Duration values below 0 are not allowed for this animation step.`);
            containsErrors = true;
        }
        if (delay < 0) {
            errors.push(`Delay values below 0 are not allowed for this animation step.`);
            containsErrors = true;
        }
        if (containsErrors) {
            errors.splice(startIndex, 0, `The provided timing value "${exp}" is invalid.`);
        }
    }
    return { duration, delay, easing };
}
/**
 * @param {?} obj
 * @param {?=} destination
 * @return {?}
 */
function copyObj(obj, destination = {}) {
    Object.keys(obj).forEach((/**
     * @param {?} prop
     * @return {?}
     */
    prop => { destination[prop] = obj[prop]; }));
    return destination;
}
/**
 * @param {?} styles
 * @return {?}
 */
function normalizeStyles(styles) {
    /** @type {?} */
    const normalizedStyles = {};
    if (Array.isArray(styles)) {
        styles.forEach((/**
         * @param {?} data
         * @return {?}
         */
        data => copyStyles(data, false, normalizedStyles)));
    }
    else {
        copyStyles(styles, false, normalizedStyles);
    }
    return normalizedStyles;
}
/**
 * @param {?} styles
 * @param {?} readPrototype
 * @param {?=} destination
 * @return {?}
 */
function copyStyles(styles, readPrototype, destination = {}) {
    if (readPrototype) {
        // we make use of a for-in loop so that the
        // prototypically inherited properties are
        // revealed from the backFill map
        for (let prop in styles) {
            destination[prop] = styles[prop];
        }
    }
    else {
        copyObj(styles, destination);
    }
    return destination;
}
/**
 * @param {?} element
 * @param {?} key
 * @param {?} value
 * @return {?}
 */
function getStyleAttributeString(element, key, value) {
    // Return the key-value pair string to be added to the style attribute for the
    // given CSS style key.
    if (value) {
        return key + ':' + value + ';';
    }
    else {
        return '';
    }
}
/**
 * @param {?} element
 * @return {?}
 */
function writeStyleAttribute(element) {
    // Read the style property of the element and manually reflect it to the
    // style attribute. This is needed because Domino on platform-server doesn't
    // understand the full set of allowed CSS properties and doesn't reflect some
    // of them automatically.
    /** @type {?} */
    let styleAttrValue = '';
    for (let i = 0; i < element.style.length; i++) {
        /** @type {?} */
        const key = element.style.item(i);
        styleAttrValue += getStyleAttributeString(element, key, element.style.getPropertyValue(key));
    }
    for (const key in element.style) {
        // Skip internal Domino properties that don't need to be reflected.
        if (!element.style.hasOwnProperty(key) || key.startsWith('_')) {
            continue;
        }
        /** @type {?} */
        const dashKey = camelCaseToDashCase(key);
        styleAttrValue += getStyleAttributeString(element, dashKey, element.style[key]);
    }
    element.setAttribute('style', styleAttrValue);
}
/**
 * @param {?} element
 * @param {?} styles
 * @param {?=} formerStyles
 * @return {?}
 */
function setStyles(element, styles, formerStyles) {
    if (element['style']) {
        Object.keys(styles).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        prop => {
            /** @type {?} */
            const camelProp = dashCaseToCamelCase(prop);
            if (formerStyles && !formerStyles.hasOwnProperty(prop)) {
                formerStyles[prop] = element.style[camelProp];
            }
            element.style[camelProp] = styles[prop];
        }));
        // On the server set the 'style' attribute since it's not automatically reflected.
        if (isNode()) {
            writeStyleAttribute(element);
        }
    }
}
/**
 * @param {?} element
 * @param {?} styles
 * @return {?}
 */
function eraseStyles(element, styles) {
    if (element['style']) {
        Object.keys(styles).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        prop => {
            /** @type {?} */
            const camelProp = dashCaseToCamelCase(prop);
            element.style[camelProp] = '';
        }));
        // On the server set the 'style' attribute since it's not automatically reflected.
        if (isNode()) {
            writeStyleAttribute(element);
        }
    }
}
/**
 * @param {?} steps
 * @return {?}
 */
function normalizeAnimationEntry(steps) {
    if (Array.isArray(steps)) {
        if (steps.length == 1)
            return steps[0];
        return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["sequence"])(steps);
    }
    return (/** @type {?} */ (steps));
}
/**
 * @param {?} value
 * @param {?} options
 * @param {?} errors
 * @return {?}
 */
function validateStyleParams(value, options, errors) {
    /** @type {?} */
    const params = options.params || {};
    /** @type {?} */
    const matches = extractStyleParams(value);
    if (matches.length) {
        matches.forEach((/**
         * @param {?} varName
         * @return {?}
         */
        varName => {
            if (!params.hasOwnProperty(varName)) {
                errors.push(`Unable to resolve the local animation param ${varName} in the given list of values`);
            }
        }));
    }
}
/** @type {?} */
const PARAM_REGEX = new RegExp(`${SUBSTITUTION_EXPR_START}\\s*(.+?)\\s*${SUBSTITUTION_EXPR_END}`, 'g');
/**
 * @param {?} value
 * @return {?}
 */
function extractStyleParams(value) {
    /** @type {?} */
    let params = [];
    if (typeof value === 'string') {
        /** @type {?} */
        let match;
        while (match = PARAM_REGEX.exec(value)) {
            params.push((/** @type {?} */ (match[1])));
        }
        PARAM_REGEX.lastIndex = 0;
    }
    return params;
}
/**
 * @param {?} value
 * @param {?} params
 * @param {?} errors
 * @return {?}
 */
function interpolateParams(value, params, errors) {
    /** @type {?} */
    const original = value.toString();
    /** @type {?} */
    const str = original.replace(PARAM_REGEX, (/**
     * @param {?} _
     * @param {?} varName
     * @return {?}
     */
    (_, varName) => {
        /** @type {?} */
        let localVal = params[varName];
        // this means that the value was never overridden by the data passed in by the user
        if (!params.hasOwnProperty(varName)) {
            errors.push(`Please provide a value for the animation param ${varName}`);
            localVal = '';
        }
        return localVal.toString();
    }));
    // we do this to assert that numeric values stay as they are
    return str == original ? value : str;
}
/**
 * @param {?} iterator
 * @return {?}
 */
function iteratorToArray(iterator) {
    /** @type {?} */
    const arr = [];
    /** @type {?} */
    let item = iterator.next();
    while (!item.done) {
        arr.push(item.value);
        item = iterator.next();
    }
    return arr;
}
/**
 * @param {?} source
 * @param {?} destination
 * @return {?}
 */
function mergeAnimationOptions(source, destination) {
    if (source.params) {
        /** @type {?} */
        const p0 = source.params;
        if (!destination.params) {
            destination.params = {};
        }
        /** @type {?} */
        const p1 = destination.params;
        Object.keys(p0).forEach((/**
         * @param {?} param
         * @return {?}
         */
        param => {
            if (!p1.hasOwnProperty(param)) {
                p1[param] = p0[param];
            }
        }));
    }
    return destination;
}
/** @type {?} */
const DASH_CASE_REGEXP = /-+([a-z0-9])/g;
/**
 * @param {?} input
 * @return {?}
 */
function dashCaseToCamelCase(input) {
    return input.replace(DASH_CASE_REGEXP, (/**
     * @param {...?} m
     * @return {?}
     */
    (...m) => m[1].toUpperCase()));
}
/**
 * @param {?} input
 * @return {?}
 */
function camelCaseToDashCase(input) {
    return input.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
/**
 * @param {?} duration
 * @param {?} delay
 * @return {?}
 */
function allowPreviousPlayerStylesMerge(duration, delay) {
    return duration === 0 || delay === 0;
}
/**
 * @param {?} element
 * @param {?} keyframes
 * @param {?} previousStyles
 * @return {?}
 */
function balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles) {
    /** @type {?} */
    const previousStyleProps = Object.keys(previousStyles);
    if (previousStyleProps.length && keyframes.length) {
        /** @type {?} */
        let startingKeyframe = keyframes[0];
        /** @type {?} */
        let missingStyleProps = [];
        previousStyleProps.forEach((/**
         * @param {?} prop
         * @return {?}
         */
        prop => {
            if (!startingKeyframe.hasOwnProperty(prop)) {
                missingStyleProps.push(prop);
            }
            startingKeyframe[prop] = previousStyles[prop];
        }));
        if (missingStyleProps.length) {
            // tslint:disable-next-line
            for (var i = 1; i < keyframes.length; i++) {
                /** @type {?} */
                let kf = keyframes[i];
                missingStyleProps.forEach((/**
                 * @param {?} prop
                 * @return {?}
                 */
                function (prop) { kf[prop] = computeStyle(element, prop); }));
            }
        }
    }
    return keyframes;
}
/**
 * @param {?} visitor
 * @param {?} node
 * @param {?} context
 * @return {?}
 */
function visitDslNode(visitor, node, context) {
    switch (node.type) {
        case 7 /* Trigger */:
            return visitor.visitTrigger(node, context);
        case 0 /* State */:
            return visitor.visitState(node, context);
        case 1 /* Transition */:
            return visitor.visitTransition(node, context);
        case 2 /* Sequence */:
            return visitor.visitSequence(node, context);
        case 3 /* Group */:
            return visitor.visitGroup(node, context);
        case 4 /* Animate */:
            return visitor.visitAnimate(node, context);
        case 5 /* Keyframes */:
            return visitor.visitKeyframes(node, context);
        case 6 /* Style */:
            return visitor.visitStyle(node, context);
        case 8 /* Reference */:
            return visitor.visitReference(node, context);
        case 9 /* AnimateChild */:
            return visitor.visitAnimateChild(node, context);
        case 10 /* AnimateRef */:
            return visitor.visitAnimateRef(node, context);
        case 11 /* Query */:
            return visitor.visitQuery(node, context);
        case 12 /* Stagger */:
            return visitor.visitStagger(node, context);
        default:
            throw new Error(`Unable to resolve animation metadata node #${node.type}`);
    }
}
/**
 * @param {?} element
 * @param {?} prop
 * @return {?}
 */
function computeStyle(element, prop) {
    return ((/** @type {?} */ (window.getComputedStyle(element))))[prop];
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/dsl/animation_transition_expr.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * @type {?}
 */
const ANY_STATE = '*';
/**
 * @param {?} transitionValue
 * @param {?} errors
 * @return {?}
 */
function parseTransitionExpr(transitionValue, errors) {
    /** @type {?} */
    const expressions = [];
    if (typeof transitionValue == 'string') {
        transitionValue.split(/\s*,\s*/).forEach((/**
         * @param {?} str
         * @return {?}
         */
        str => parseInnerTransitionStr(str, expressions, errors)));
    }
    else {
        expressions.push((/** @type {?} */ (transitionValue)));
    }
    return expressions;
}
/**
 * @param {?} eventStr
 * @param {?} expressions
 * @param {?} errors
 * @return {?}
 */
function parseInnerTransitionStr(eventStr, expressions, errors) {
    if (eventStr[0] == ':') {
        /** @type {?} */
        const result = parseAnimationAlias(eventStr, errors);
        if (typeof result == 'function') {
            expressions.push(result);
            return;
        }
        eventStr = result;
    }
    /** @type {?} */
    const match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
    if (match == null || match.length < 4) {
        errors.push(`The provided transition expression "${eventStr}" is not supported`);
        return expressions;
    }
    /** @type {?} */
    const fromState = match[1];
    /** @type {?} */
    const separator = match[2];
    /** @type {?} */
    const toState = match[3];
    expressions.push(makeLambdaFromStates(fromState, toState));
    /** @type {?} */
    const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
    if (separator[0] == '<' && !isFullAnyStateExpr) {
        expressions.push(makeLambdaFromStates(toState, fromState));
    }
}
/**
 * @param {?} alias
 * @param {?} errors
 * @return {?}
 */
function parseAnimationAlias(alias, errors) {
    switch (alias) {
        case ':enter':
            return 'void => *';
        case ':leave':
            return '* => void';
        case ':increment':
            return (/**
             * @param {?} fromState
             * @param {?} toState
             * @return {?}
             */
            (fromState, toState) => parseFloat(toState) > parseFloat(fromState));
        case ':decrement':
            return (/**
             * @param {?} fromState
             * @param {?} toState
             * @return {?}
             */
            (fromState, toState) => parseFloat(toState) < parseFloat(fromState));
        default:
            errors.push(`The transition alias value "${alias}" is not supported`);
            return '* => *';
    }
}
// DO NOT REFACTOR ... keep the follow set instantiations
// with the values intact (closure compiler for some reason
// removes follow-up lines that add the values outside of
// the constructor...
/** @type {?} */
const TRUE_BOOLEAN_VALUES = new Set(['true', '1']);
/** @type {?} */
const FALSE_BOOLEAN_VALUES = new Set(['false', '0']);
/**
 * @param {?} lhs
 * @param {?} rhs
 * @return {?}
 */
function makeLambdaFromStates(lhs, rhs) {
    /** @type {?} */
    const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
    /** @type {?} */
    const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
    return (/**
     * @param {?} fromState
     * @param {?} toState
     * @return {?}
     */
    (fromState, toState) => {
        /** @type {?} */
        let lhsMatch = lhs == ANY_STATE || lhs == fromState;
        /** @type {?} */
        let rhsMatch = rhs == ANY_STATE || rhs == toState;
        if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === 'boolean') {
            lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
        }
        if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === 'boolean') {
            rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
        }
        return lhsMatch && rhsMatch;
    });
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/dsl/animation_ast_builder.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SELF_TOKEN = ':self';
/** @type {?} */
const SELF_TOKEN_REGEX = new RegExp(`\s*${SELF_TOKEN}\s*,?`, 'g');
/*
 * [Validation]
 * The visitor code below will traverse the animation AST generated by the animation verb functions
 * (the output is a tree of objects) and attempt to perform a series of validations on the data. The
 * following corner-cases will be validated:
 *
 * 1. Overlap of animations
 * Given that a CSS property cannot be animated in more than one place at the same time, it's
 * important that this behavior is detected and validated. The way in which this occurs is that
 * each time a style property is examined, a string-map containing the property will be updated with
 * the start and end times for when the property is used within an animation step.
 *
 * If there are two or more parallel animations that are currently running (these are invoked by the
 * group()) on the same element then the validator will throw an error. Since the start/end timing
 * values are collected for each property then if the current animation step is animating the same
 * property and its timing values fall anywhere into the window of time that the property is
 * currently being animated within then this is what causes an error.
 *
 * 2. Timing values
 * The validator will validate to see if a timing value of `duration delay easing` or
 * `durationNumber` is valid or not.
 *
 * (note that upon validation the code below will replace the timing data with an object containing
 * {duration,delay,easing}.
 *
 * 3. Offset Validation
 * Each of the style() calls are allowed to have an offset value when placed inside of keyframes().
 * Offsets within keyframes() are considered valid when:
 *
 *   - No offsets are used at all
 *   - Each style() entry contains an offset value
 *   - Each offset is between 0 and 1
 *   - Each offset is greater to or equal than the previous one
 *
 * Otherwise an error will be thrown.
 */
/**
 * @param {?} driver
 * @param {?} metadata
 * @param {?} errors
 * @return {?}
 */
function buildAnimationAst(driver, metadata, errors) {
    return new AnimationAstBuilderVisitor(driver).build(metadata, errors);
}
/** @type {?} */
const ROOT_SELECTOR = '';
class AnimationAstBuilderVisitor {
    /**
     * @param {?} _driver
     */
    constructor(_driver) {
        this._driver = _driver;
    }
    /**
     * @param {?} metadata
     * @param {?} errors
     * @return {?}
     */
    build(metadata, errors) {
        /** @type {?} */
        const context = new AnimationAstBuilderContext(errors);
        this._resetContextStyleTimingState(context);
        return (/** @type {?} */ (visitDslNode(this, normalizeAnimationEntry(metadata), context)));
    }
    /**
     * @private
     * @param {?} context
     * @return {?}
     */
    _resetContextStyleTimingState(context) {
        context.currentQuerySelector = ROOT_SELECTOR;
        context.collectedStyles = {};
        context.collectedStyles[ROOT_SELECTOR] = {};
        context.currentTime = 0;
    }
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    visitTrigger(metadata, context) {
        /** @type {?} */
        let queryCount = context.queryCount = 0;
        /** @type {?} */
        let depCount = context.depCount = 0;
        /** @type {?} */
        const states = [];
        /** @type {?} */
        const transitions = [];
        if (metadata.name.charAt(0) == '@') {
            context.errors.push('animation triggers cannot be prefixed with an `@` sign (e.g. trigger(\'@foo\', [...]))');
        }
        metadata.definitions.forEach((/**
         * @param {?} def
         * @return {?}
         */
        def => {
            this._resetContextStyleTimingState(context);
            if (def.type == 0 /* State */) {
                /** @type {?} */
                const stateDef = (/** @type {?} */ (def));
                /** @type {?} */
                const name = stateDef.name;
                name.toString().split(/\s*,\s*/).forEach((/**
                 * @param {?} n
                 * @return {?}
                 */
                n => {
                    stateDef.name = n;
                    states.push(this.visitState(stateDef, context));
                }));
                stateDef.name = name;
            }
            else if (def.type == 1 /* Transition */) {
                /** @type {?} */
                const transition = this.visitTransition((/** @type {?} */ (def)), context);
                queryCount += transition.queryCount;
                depCount += transition.depCount;
                transitions.push(transition);
            }
            else {
                context.errors.push('only state() and transition() definitions can sit inside of a trigger()');
            }
        }));
        return {
            type: 7 /* Trigger */,
            name: metadata.name, states, transitions, queryCount, depCount,
            options: null
        };
    }
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    visitState(metadata, context) {
        /** @type {?} */
        const styleAst = this.visitStyle(metadata.styles, context);
        /** @type {?} */
        const astParams = (metadata.options && metadata.options.params) || null;
        if (styleAst.containsDynamicStyles) {
            /** @type {?} */
            const missingSubs = new Set();
            /** @type {?} */
            const params = astParams || {};
            styleAst.styles.forEach((/**
             * @param {?} value
             * @return {?}
             */
            value => {
                if (isObject(value)) {
                    /** @type {?} */
                    const stylesObj = (/** @type {?} */ (value));
                    Object.keys(stylesObj).forEach((/**
                     * @param {?} prop
                     * @return {?}
                     */
                    prop => {
                        extractStyleParams(stylesObj[prop]).forEach((/**
                         * @param {?} sub
                         * @return {?}
                         */
                        sub => {
                            if (!params.hasOwnProperty(sub)) {
                                missingSubs.add(sub);
                            }
                        }));
                    }));
                }
            }));
            if (missingSubs.size) {
                /** @type {?} */
                const missingSubsArr = iteratorToArray(missingSubs.values());
                context.errors.push(`state("${metadata.name}", ...) must define default values for all the following style substitutions: ${missingSubsArr.join(', ')}`);
            }
        }
        return {
            type: 0 /* State */,
            name: metadata.name,
            style: styleAst,
            options: astParams ? { params: astParams } : null
        };
    }
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    visitTransition(metadata, context) {
        context.queryCount = 0;
        context.depCount = 0;
        /** @type {?} */
        const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
        /** @type {?} */
        const matchers = parseTransitionExpr(metadata.expr, context.errors);
        return {
            type: 1 /* Transition */,
            matchers,
            animation,
            queryCount: context.queryCount,
            depCount: context.depCount,
            options: normalizeAnimationOptions(metadata.options)
        };
    }
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    visitSequence(metadata, context) {
        return {
            type: 2 /* Sequence */,
            steps: metadata.steps.map((/**
             * @param {?} s
             * @return {?}
             */
            s => visitDslNode(this, s, context))),
            options: normalizeAnimationOptions(metadata.options)
        };
    }
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    visitGroup(metadata, context) {
        /** @type {?} */
        const currentTime = context.currentTime;
        /** @type {?} */
        let furthestTime = 0;
        /** @type {?} */
        const steps = metadata.steps.map((/**
         * @param {?} step
         * @return {?}
         */
        step => {
            context.currentTime = currentTime;
            /** @type {?} */
            const innerAst = visitDslNode(this, step, context);
            furthestTime = Math.max(furthestTime, context.currentTime);
            return innerAst;
        }));
        context.currentTime = furthestTime;
        return {
            type: 3 /* Group */,
            steps,
            options: normalizeAnimationOptions(metadata.options)
        };
    }
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    visitAnimate(metadata, context) {
        /** @type {?} */
        const timingAst = constructTimingAst(metadata.timings, context.errors);
        context.currentAnimateTimings = timingAst;
        /** @type {?} */
        let styleAst;
        /** @type {?} */
        let styleMetadata = metadata.styles ? metadata.styles : Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({});
        if (styleMetadata.type == 5 /* Keyframes */) {
            styleAst = this.visitKeyframes((/** @type {?} */ (styleMetadata)), context);
        }
        else {
            /** @type {?} */
            let styleMetadata = (/** @type {?} */ (metadata.styles));
            /** @type {?} */
            let isEmpty = false;
            if (!styleMetadata) {
                isEmpty = true;
                /** @type {?} */
                const newStyleData = {};
                if (timingAst.easing) {
                    newStyleData['easing'] = timingAst.easing;
                }
                styleMetadata = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])(newStyleData);
            }
            context.currentTime += timingAst.duration + timingAst.delay;
            /** @type {?} */
            const _styleAst = this.visitStyle(styleMetadata, context);
            _styleAst.isEmptyStep = isEmpty;
            styleAst = _styleAst;
        }
        context.currentAnimateTimings = null;
        return {
            type: 4 /* Animate */,
            timings: timingAst,
            style: styleAst,
            options: null
        };
    }
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    visitStyle(metadata, context) {
        /** @type {?} */
        const ast = this._makeStyleAst(metadata, context);
        this._validateStyleAst(ast, context);
        return ast;
    }
    /**
     * @private
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    _makeStyleAst(metadata, context) {
        /** @type {?} */
        const styles = [];
        if (Array.isArray(metadata.styles)) {
            ((/** @type {?} */ (metadata.styles))).forEach((/**
             * @param {?} styleTuple
             * @return {?}
             */
            styleTuple => {
                if (typeof styleTuple == 'string') {
                    if (styleTuple == _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"]) {
                        styles.push(styleTuple);
                    }
                    else {
                        context.errors.push(`The provided style string value ${styleTuple} is not allowed.`);
                    }
                }
                else {
                    styles.push(styleTuple);
                }
            }));
        }
        else {
            styles.push(metadata.styles);
        }
        /** @type {?} */
        let containsDynamicStyles = false;
        /** @type {?} */
        let collectedEasing = null;
        styles.forEach((/**
         * @param {?} styleData
         * @return {?}
         */
        styleData => {
            if (isObject(styleData)) {
                /** @type {?} */
                const styleMap = (/** @type {?} */ (styleData));
                /** @type {?} */
                const easing = styleMap['easing'];
                if (easing) {
                    collectedEasing = (/** @type {?} */ (easing));
                    delete styleMap['easing'];
                }
                if (!containsDynamicStyles) {
                    for (let prop in styleMap) {
                        /** @type {?} */
                        const value = styleMap[prop];
                        if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
                            containsDynamicStyles = true;
                            break;
                        }
                    }
                }
            }
        }));
        return {
            type: 6 /* Style */,
            styles,
            easing: collectedEasing,
            offset: metadata.offset, containsDynamicStyles,
            options: null
        };
    }
    /**
     * @private
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    _validateStyleAst(ast, context) {
        /** @type {?} */
        const timings = context.currentAnimateTimings;
        /** @type {?} */
        let endTime = context.currentTime;
        /** @type {?} */
        let startTime = context.currentTime;
        if (timings && startTime > 0) {
            startTime -= timings.duration + timings.delay;
        }
        ast.styles.forEach((/**
         * @param {?} tuple
         * @return {?}
         */
        tuple => {
            if (typeof tuple == 'string')
                return;
            Object.keys(tuple).forEach((/**
             * @param {?} prop
             * @return {?}
             */
            prop => {
                if (!this._driver.validateStyleProperty(prop)) {
                    context.errors.push(`The provided animation property "${prop}" is not a supported CSS property for animations`);
                    return;
                }
                /** @type {?} */
                const collectedStyles = context.collectedStyles[(/** @type {?} */ (context.currentQuerySelector))];
                /** @type {?} */
                const collectedEntry = collectedStyles[prop];
                /** @type {?} */
                let updateCollectedStyle = true;
                if (collectedEntry) {
                    if (startTime != endTime && startTime >= collectedEntry.startTime &&
                        endTime <= collectedEntry.endTime) {
                        context.errors.push(`The CSS property "${prop}" that exists between the times of "${collectedEntry.startTime}ms" and "${collectedEntry.endTime}ms" is also being animated in a parallel animation between the times of "${startTime}ms" and "${endTime}ms"`);
                        updateCollectedStyle = false;
                    }
                    // we always choose the smaller start time value since we
                    // want to have a record of the entire animation window where
                    // the style property is being animated in between
                    startTime = collectedEntry.startTime;
                }
                if (updateCollectedStyle) {
                    collectedStyles[prop] = { startTime, endTime };
                }
                if (context.options) {
                    validateStyleParams(tuple[prop], context.options, context.errors);
                }
            }));
        }));
    }
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    visitKeyframes(metadata, context) {
        /** @type {?} */
        const ast = { type: 5 /* Keyframes */, styles: [], options: null };
        if (!context.currentAnimateTimings) {
            context.errors.push(`keyframes() must be placed inside of a call to animate()`);
            return ast;
        }
        /** @type {?} */
        const MAX_KEYFRAME_OFFSET = 1;
        /** @type {?} */
        let totalKeyframesWithOffsets = 0;
        /** @type {?} */
        const offsets = [];
        /** @type {?} */
        let offsetsOutOfOrder = false;
        /** @type {?} */
        let keyframesOutOfRange = false;
        /** @type {?} */
        let previousOffset = 0;
        /** @type {?} */
        const keyframes = metadata.steps.map((/**
         * @param {?} styles
         * @return {?}
         */
        styles => {
            /** @type {?} */
            const style = this._makeStyleAst(styles, context);
            /** @type {?} */
            let offsetVal = style.offset != null ? style.offset : consumeOffset(style.styles);
            /** @type {?} */
            let offset = 0;
            if (offsetVal != null) {
                totalKeyframesWithOffsets++;
                offset = style.offset = offsetVal;
            }
            keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
            offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
            previousOffset = offset;
            offsets.push(offset);
            return style;
        }));
        if (keyframesOutOfRange) {
            context.errors.push(`Please ensure that all keyframe offsets are between 0 and 1`);
        }
        if (offsetsOutOfOrder) {
            context.errors.push(`Please ensure that all keyframe offsets are in order`);
        }
        /** @type {?} */
        const length = metadata.steps.length;
        /** @type {?} */
        let generatedOffset = 0;
        if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
            context.errors.push(`Not all style() steps within the declared keyframes() contain offsets`);
        }
        else if (totalKeyframesWithOffsets == 0) {
            generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
        }
        /** @type {?} */
        const limit = length - 1;
        /** @type {?} */
        const currentTime = context.currentTime;
        /** @type {?} */
        const currentAnimateTimings = (/** @type {?} */ (context.currentAnimateTimings));
        /** @type {?} */
        const animateDuration = currentAnimateTimings.duration;
        keyframes.forEach((/**
         * @param {?} kf
         * @param {?} i
         * @return {?}
         */
        (kf, i) => {
            /** @type {?} */
            const offset = generatedOffset > 0 ? (i == limit ? 1 : (generatedOffset * i)) : offsets[i];
            /** @type {?} */
            const durationUpToThisFrame = offset * animateDuration;
            context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
            currentAnimateTimings.duration = durationUpToThisFrame;
            this._validateStyleAst(kf, context);
            kf.offset = offset;
            ast.styles.push(kf);
        }));
        return ast;
    }
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    visitReference(metadata, context) {
        return {
            type: 8 /* Reference */,
            animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
            options: normalizeAnimationOptions(metadata.options)
        };
    }
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    visitAnimateChild(metadata, context) {
        context.depCount++;
        return {
            type: 9 /* AnimateChild */,
            options: normalizeAnimationOptions(metadata.options)
        };
    }
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    visitAnimateRef(metadata, context) {
        return {
            type: 10 /* AnimateRef */,
            animation: this.visitReference(metadata.animation, context),
            options: normalizeAnimationOptions(metadata.options)
        };
    }
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    visitQuery(metadata, context) {
        /** @type {?} */
        const parentSelector = (/** @type {?} */ (context.currentQuerySelector));
        /** @type {?} */
        const options = (/** @type {?} */ ((metadata.options || {})));
        context.queryCount++;
        context.currentQuery = metadata;
        const [selector, includeSelf] = normalizeSelector(metadata.selector);
        context.currentQuerySelector =
            parentSelector.length ? (parentSelector + ' ' + selector) : selector;
        getOrSetAsInMap(context.collectedStyles, context.currentQuerySelector, {});
        /** @type {?} */
        const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
        context.currentQuery = null;
        context.currentQuerySelector = parentSelector;
        return {
            type: 11 /* Query */,
            selector,
            limit: options.limit || 0,
            optional: !!options.optional, includeSelf, animation,
            originalSelector: metadata.selector,
            options: normalizeAnimationOptions(metadata.options)
        };
    }
    /**
     * @param {?} metadata
     * @param {?} context
     * @return {?}
     */
    visitStagger(metadata, context) {
        if (!context.currentQuery) {
            context.errors.push(`stagger() can only be used inside of query()`);
        }
        /** @type {?} */
        const timings = metadata.timings === 'full' ?
            { duration: 0, delay: 0, easing: 'full' } :
            resolveTiming(metadata.timings, context.errors, true);
        return {
            type: 12 /* Stagger */,
            animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context), timings,
            options: null
        };
    }
}
if (false) {}
/**
 * @param {?} selector
 * @return {?}
 */
function normalizeSelector(selector) {
    /** @type {?} */
    const hasAmpersand = selector.split(/\s*,\s*/).find((/**
     * @param {?} token
     * @return {?}
     */
    token => token == SELF_TOKEN)) ? true : false;
    if (hasAmpersand) {
        selector = selector.replace(SELF_TOKEN_REGEX, '');
    }
    // the :enter and :leave selectors are filled in at runtime during timeline building
    selector = selector.replace(/@\*/g, NG_TRIGGER_SELECTOR)
        .replace(/@\w+/g, (/**
     * @param {?} match
     * @return {?}
     */
    match => NG_TRIGGER_SELECTOR + '-' + match.substr(1)))
        .replace(/:animating/g, NG_ANIMATING_SELECTOR);
    return [selector, hasAmpersand];
}
/**
 * @param {?} obj
 * @return {?}
 */
function normalizeParams(obj) {
    return obj ? copyObj(obj) : null;
}
class AnimationAstBuilderContext {
    /**
     * @param {?} errors
     */
    constructor(errors) {
        this.errors = errors;
        this.queryCount = 0;
        this.depCount = 0;
        this.currentTransition = null;
        this.currentQuery = null;
        this.currentQuerySelector = null;
        this.currentAnimateTimings = null;
        this.currentTime = 0;
        this.collectedStyles = {};
        this.options = null;
    }
}
if (false) {}
/**
 * @param {?} styles
 * @return {?}
 */
function consumeOffset(styles) {
    if (typeof styles == 'string')
        return null;
    /** @type {?} */
    let offset = null;
    if (Array.isArray(styles)) {
        styles.forEach((/**
         * @param {?} styleTuple
         * @return {?}
         */
        styleTuple => {
            if (isObject(styleTuple) && styleTuple.hasOwnProperty('offset')) {
                /** @type {?} */
                const obj = (/** @type {?} */ (styleTuple));
                offset = parseFloat((/** @type {?} */ (obj['offset'])));
                delete obj['offset'];
            }
        }));
    }
    else if (isObject(styles) && styles.hasOwnProperty('offset')) {
        /** @type {?} */
        const obj = styles;
        offset = parseFloat((/** @type {?} */ (obj['offset'])));
        delete obj['offset'];
    }
    return offset;
}
/**
 * @param {?} value
 * @return {?}
 */
function isObject(value) {
    return !Array.isArray(value) && typeof value == 'object';
}
/**
 * @param {?} value
 * @param {?} errors
 * @return {?}
 */
function constructTimingAst(value, errors) {
    /** @type {?} */
    let timings = null;
    if (value.hasOwnProperty('duration')) {
        timings = (/** @type {?} */ (value));
    }
    else if (typeof value == 'number') {
        /** @type {?} */
        const duration = resolveTiming(value, errors).duration;
        return makeTimingAst(duration, 0, '');
    }
    /** @type {?} */
    const strValue = (/** @type {?} */ (value));
    /** @type {?} */
    const isDynamic = strValue.split(/\s+/).some((/**
     * @param {?} v
     * @return {?}
     */
    v => v.charAt(0) == '{' && v.charAt(1) == '{'));
    if (isDynamic) {
        /** @type {?} */
        const ast = (/** @type {?} */ (makeTimingAst(0, 0, '')));
        ast.dynamic = true;
        ast.strValue = strValue;
        return (/** @type {?} */ (ast));
    }
    timings = timings || resolveTiming(strValue, errors);
    return makeTimingAst(timings.duration, timings.delay, timings.easing);
}
/**
 * @param {?} options
 * @return {?}
 */
function normalizeAnimationOptions(options) {
    if (options) {
        options = copyObj(options);
        if (options['params']) {
            options['params'] = (/** @type {?} */ (normalizeParams(options['params'])));
        }
    }
    else {
        options = {};
    }
    return options;
}
/**
 * @param {?} duration
 * @param {?} delay
 * @param {?} easing
 * @return {?}
 */
function makeTimingAst(duration, delay, easing) {
    return { duration, delay, easing };
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/dsl/animation_timeline_instruction.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AnimationTimelineInstruction() { }
if (false) {}
/**
 * @param {?} element
 * @param {?} keyframes
 * @param {?} preStyleProps
 * @param {?} postStyleProps
 * @param {?} duration
 * @param {?} delay
 * @param {?=} easing
 * @param {?=} subTimeline
 * @return {?}
 */
function createTimelineInstruction(element, keyframes, preStyleProps, postStyleProps, duration, delay, easing = null, subTimeline = false) {
    return {
        type: 1 /* TimelineAnimation */,
        element,
        keyframes,
        preStyleProps,
        postStyleProps,
        duration,
        delay,
        totalTime: duration + delay, easing, subTimeline
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/dsl/element_instruction_map.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ElementInstructionMap {
    constructor() {
        this._map = new Map();
    }
    /**
     * @param {?} element
     * @return {?}
     */
    consume(element) {
        /** @type {?} */
        let instructions = this._map.get(element);
        if (instructions) {
            this._map.delete(element);
        }
        else {
            instructions = [];
        }
        return instructions;
    }
    /**
     * @param {?} element
     * @param {?} instructions
     * @return {?}
     */
    append(element, instructions) {
        /** @type {?} */
        let existingInstructions = this._map.get(element);
        if (!existingInstructions) {
            this._map.set(element, existingInstructions = []);
        }
        existingInstructions.push(...instructions);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    has(element) { return this._map.has(element); }
    /**
     * @return {?}
     */
    clear() { this._map.clear(); }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/dsl/animation_timeline_builder.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ONE_FRAME_IN_MILLISECONDS = 1;
/** @type {?} */
const ENTER_TOKEN = ':enter';
/** @type {?} */
const ENTER_TOKEN_REGEX = new RegExp(ENTER_TOKEN, 'g');
/** @type {?} */
const LEAVE_TOKEN = ':leave';
/** @type {?} */
const LEAVE_TOKEN_REGEX = new RegExp(LEAVE_TOKEN, 'g');
/*
 * The code within this file aims to generate web-animations-compatible keyframes from Angular's
 * animation DSL code.
 *
 * The code below will be converted from:
 *
 * ```
 * sequence([
 *   style({ opacity: 0 }),
 *   animate(1000, style({ opacity: 0 }))
 * ])
 * ```
 *
 * To:
 * ```
 * keyframes = [{ opacity: 0, offset: 0 }, { opacity: 1, offset: 1 }]
 * duration = 1000
 * delay = 0
 * easing = ''
 * ```
 *
 * For this operation to cover the combination of animation verbs (style, animate, group, etc...) a
 * combination of prototypical inheritance, AST traversal and merge-sort-like algorithms are used.
 *
 * [AST Traversal]
 * Each of the animation verbs, when executed, will return an string-map object representing what
 * type of action it is (style, animate, group, etc...) and the data associated with it. This means
 * that when functional composition mix of these functions is evaluated (like in the example above)
 * then it will end up producing a tree of objects representing the animation itself.
 *
 * When this animation object tree is processed by the visitor code below it will visit each of the
 * verb statements within the visitor. And during each visit it will build the context of the
 * animation keyframes by interacting with the `TimelineBuilder`.
 *
 * [TimelineBuilder]
 * This class is responsible for tracking the styles and building a series of keyframe objects for a
 * timeline between a start and end time. The builder starts off with an initial timeline and each
 * time the AST comes across a `group()`, `keyframes()` or a combination of the two wihtin a
 * `sequence()` then it will generate a sub timeline for each step as well as a new one after
 * they are complete.
 *
 * As the AST is traversed, the timing state on each of the timelines will be incremented. If a sub
 * timeline was created (based on one of the cases above) then the parent timeline will attempt to
 * merge the styles used within the sub timelines into itself (only with group() this will happen).
 * This happens with a merge operation (much like how the merge works in mergesort) and it will only
 * copy the most recently used styles from the sub timelines into the parent timeline. This ensures
 * that if the styles are used later on in another phase of the animation then they will be the most
 * up-to-date values.
 *
 * [How Missing Styles Are Updated]
 * Each timeline has a `backFill` property which is responsible for filling in new styles into
 * already processed keyframes if a new style shows up later within the animation sequence.
 *
 * ```
 * sequence([
 *   style({ width: 0 }),
 *   animate(1000, style({ width: 100 })),
 *   animate(1000, style({ width: 200 })),
 *   animate(1000, style({ width: 300 }))
 *   animate(1000, style({ width: 400, height: 400 })) // notice how `height` doesn't exist anywhere
 * else
 * ])
 * ```
 *
 * What is happening here is that the `height` value is added later in the sequence, but is missing
 * from all previous animation steps. Therefore when a keyframe is created it would also be missing
 * from all previous keyframes up until where it is first used. For the timeline keyframe generation
 * to properly fill in the style it will place the previous value (the value from the parent
 * timeline) or a default value of `*` into the backFill object. Given that each of the keyframe
 * styles are objects that prototypically inhert from the backFill object, this means that if a
 * value is added into the backFill then it will automatically propagate any missing values to all
 * keyframes. Therefore the missing `height` value will be properly filled into the already
 * processed keyframes.
 *
 * When a sub-timeline is created it will have its own backFill property. This is done so that
 * styles present within the sub-timeline do not accidentally seep into the previous/future timeline
 * keyframes
 *
 * (For prototypically-inherited contents to be detected a `for(i in obj)` loop must be used.)
 *
 * [Validation]
 * The code in this file is not responsible for validation. That functionality happens with within
 * the `AnimationValidatorVisitor` code.
 */
/**
 * @param {?} driver
 * @param {?} rootElement
 * @param {?} ast
 * @param {?} enterClassName
 * @param {?} leaveClassName
 * @param {?=} startingStyles
 * @param {?=} finalStyles
 * @param {?=} options
 * @param {?=} subInstructions
 * @param {?=} errors
 * @return {?}
 */
function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = {}, finalStyles = {}, options, subInstructions, errors = []) {
    return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors);
}
class AnimationTimelineBuilderVisitor {
    /**
     * @param {?} driver
     * @param {?} rootElement
     * @param {?} ast
     * @param {?} enterClassName
     * @param {?} leaveClassName
     * @param {?} startingStyles
     * @param {?} finalStyles
     * @param {?} options
     * @param {?=} subInstructions
     * @param {?=} errors
     * @return {?}
     */
    buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors = []) {
        subInstructions = subInstructions || new ElementInstructionMap();
        /** @type {?} */
        const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
        context.options = options;
        context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
        visitDslNode(this, ast, context);
        // this checks to see if an actual animation happened
        /** @type {?} */
        const timelines = context.timelines.filter((/**
         * @param {?} timeline
         * @return {?}
         */
        timeline => timeline.containsAnimation()));
        if (timelines.length && Object.keys(finalStyles).length) {
            /** @type {?} */
            const tl = timelines[timelines.length - 1];
            if (!tl.allowOnlyTimelineStyles()) {
                tl.setStyles([finalStyles], null, context.errors, options);
            }
        }
        return timelines.length ? timelines.map((/**
         * @param {?} timeline
         * @return {?}
         */
        timeline => timeline.buildKeyframes())) :
            [createTimelineInstruction(rootElement, [], [], [], 0, 0, '', false)];
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitTrigger(ast, context) {
        // these values are not visited in this AST
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitState(ast, context) {
        // these values are not visited in this AST
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitTransition(ast, context) {
        // these values are not visited in this AST
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitAnimateChild(ast, context) {
        /** @type {?} */
        const elementInstructions = context.subInstructions.consume(context.element);
        if (elementInstructions) {
            /** @type {?} */
            const innerContext = context.createSubContext(ast.options);
            /** @type {?} */
            const startTime = context.currentTimeline.currentTime;
            /** @type {?} */
            const endTime = this._visitSubInstructions(elementInstructions, innerContext, (/** @type {?} */ (innerContext.options)));
            if (startTime != endTime) {
                // we do this on the upper context because we created a sub context for
                // the sub child animations
                context.transformIntoNewTimeline(endTime);
            }
        }
        context.previousNode = ast;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitAnimateRef(ast, context) {
        /** @type {?} */
        const innerContext = context.createSubContext(ast.options);
        innerContext.transformIntoNewTimeline();
        this.visitReference(ast.animation, innerContext);
        context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
        context.previousNode = ast;
    }
    /**
     * @private
     * @param {?} instructions
     * @param {?} context
     * @param {?} options
     * @return {?}
     */
    _visitSubInstructions(instructions, context, options) {
        /** @type {?} */
        const startTime = context.currentTimeline.currentTime;
        /** @type {?} */
        let furthestTime = startTime;
        // this is a special-case for when a user wants to skip a sub
        // animation from being fired entirely.
        /** @type {?} */
        const duration = options.duration != null ? resolveTimingValue(options.duration) : null;
        /** @type {?} */
        const delay = options.delay != null ? resolveTimingValue(options.delay) : null;
        if (duration !== 0) {
            instructions.forEach((/**
             * @param {?} instruction
             * @return {?}
             */
            instruction => {
                /** @type {?} */
                const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay);
                furthestTime =
                    Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
            }));
        }
        return furthestTime;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitReference(ast, context) {
        context.updateOptions(ast.options, true);
        visitDslNode(this, ast.animation, context);
        context.previousNode = ast;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitSequence(ast, context) {
        /** @type {?} */
        const subContextCount = context.subContextCount;
        /** @type {?} */
        let ctx = context;
        /** @type {?} */
        const options = ast.options;
        if (options && (options.params || options.delay)) {
            ctx = context.createSubContext(options);
            ctx.transformIntoNewTimeline();
            if (options.delay != null) {
                if (ctx.previousNode.type == 6 /* Style */) {
                    ctx.currentTimeline.snapshotCurrentStyles();
                    ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
                }
                /** @type {?} */
                const delay = resolveTimingValue(options.delay);
                ctx.delayNextStep(delay);
            }
        }
        if (ast.steps.length) {
            ast.steps.forEach((/**
             * @param {?} s
             * @return {?}
             */
            s => visitDslNode(this, s, ctx)));
            // this is here just incase the inner steps only contain or end with a style() call
            ctx.currentTimeline.applyStylesToKeyframe();
            // this means that some animation function within the sequence
            // ended up creating a sub timeline (which means the current
            // timeline cannot overlap with the contents of the sequence)
            if (ctx.subContextCount > subContextCount) {
                ctx.transformIntoNewTimeline();
            }
        }
        context.previousNode = ast;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitGroup(ast, context) {
        /** @type {?} */
        const innerTimelines = [];
        /** @type {?} */
        let furthestTime = context.currentTimeline.currentTime;
        /** @type {?} */
        const delay = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
        ast.steps.forEach((/**
         * @param {?} s
         * @return {?}
         */
        s => {
            /** @type {?} */
            const innerContext = context.createSubContext(ast.options);
            if (delay) {
                innerContext.delayNextStep(delay);
            }
            visitDslNode(this, s, innerContext);
            furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
            innerTimelines.push(innerContext.currentTimeline);
        }));
        // this operation is run after the AST loop because otherwise
        // if the parent timeline's collected styles were updated then
        // it would pass in invalid data into the new-to-be forked items
        innerTimelines.forEach((/**
         * @param {?} timeline
         * @return {?}
         */
        timeline => context.currentTimeline.mergeTimelineCollectedStyles(timeline)));
        context.transformIntoNewTimeline(furthestTime);
        context.previousNode = ast;
    }
    /**
     * @private
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    _visitTiming(ast, context) {
        if (((/** @type {?} */ (ast))).dynamic) {
            /** @type {?} */
            const strValue = ((/** @type {?} */ (ast))).strValue;
            /** @type {?} */
            const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
            return resolveTiming(timingValue, context.errors);
        }
        else {
            return { duration: ast.duration, delay: ast.delay, easing: ast.easing };
        }
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitAnimate(ast, context) {
        /** @type {?} */
        const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
        /** @type {?} */
        const timeline = context.currentTimeline;
        if (timings.delay) {
            context.incrementTime(timings.delay);
            timeline.snapshotCurrentStyles();
        }
        /** @type {?} */
        const style = ast.style;
        if (style.type == 5 /* Keyframes */) {
            this.visitKeyframes(style, context);
        }
        else {
            context.incrementTime(timings.duration);
            this.visitStyle((/** @type {?} */ (style)), context);
            timeline.applyStylesToKeyframe();
        }
        context.currentAnimateTimings = null;
        context.previousNode = ast;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitStyle(ast, context) {
        /** @type {?} */
        const timeline = context.currentTimeline;
        /** @type {?} */
        const timings = (/** @type {?} */ (context.currentAnimateTimings));
        // this is a special case for when a style() call
        // directly follows  an animate() call (but not inside of an animate() call)
        if (!timings && timeline.getCurrentStyleProperties().length) {
            timeline.forwardFrame();
        }
        /** @type {?} */
        const easing = (timings && timings.easing) || ast.easing;
        if (ast.isEmptyStep) {
            timeline.applyEmptyStep(easing);
        }
        else {
            timeline.setStyles(ast.styles, easing, context.errors, context.options);
        }
        context.previousNode = ast;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitKeyframes(ast, context) {
        /** @type {?} */
        const currentAnimateTimings = (/** @type {?} */ (context.currentAnimateTimings));
        /** @type {?} */
        const startTime = ((/** @type {?} */ (context.currentTimeline))).duration;
        /** @type {?} */
        const duration = currentAnimateTimings.duration;
        /** @type {?} */
        const innerContext = context.createSubContext();
        /** @type {?} */
        const innerTimeline = innerContext.currentTimeline;
        innerTimeline.easing = currentAnimateTimings.easing;
        ast.styles.forEach((/**
         * @param {?} step
         * @return {?}
         */
        step => {
            /** @type {?} */
            const offset = step.offset || 0;
            innerTimeline.forwardTime(offset * duration);
            innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
            innerTimeline.applyStylesToKeyframe();
        }));
        // this will ensure that the parent timeline gets all the styles from
        // the child even if the new timeline below is not used
        context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
        // we do this because the window between this timeline and the sub timeline
        // should ensure that the styles within are exactly the same as they were before
        context.transformIntoNewTimeline(startTime + duration);
        context.previousNode = ast;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitQuery(ast, context) {
        // in the event that the first step before this is a style step we need
        // to ensure the styles are applied before the children are animated
        /** @type {?} */
        const startTime = context.currentTimeline.currentTime;
        /** @type {?} */
        const options = (/** @type {?} */ ((ast.options || {})));
        /** @type {?} */
        const delay = options.delay ? resolveTimingValue(options.delay) : 0;
        if (delay && (context.previousNode.type === 6 /* Style */ ||
            (startTime == 0 && context.currentTimeline.getCurrentStyleProperties().length))) {
            context.currentTimeline.snapshotCurrentStyles();
            context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        /** @type {?} */
        let furthestTime = startTime;
        /** @type {?} */
        const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
        context.currentQueryTotal = elms.length;
        /** @type {?} */
        let sameElementTimeline = null;
        elms.forEach((/**
         * @param {?} element
         * @param {?} i
         * @return {?}
         */
        (element, i) => {
            context.currentQueryIndex = i;
            /** @type {?} */
            const innerContext = context.createSubContext(ast.options, element);
            if (delay) {
                innerContext.delayNextStep(delay);
            }
            if (element === context.element) {
                sameElementTimeline = innerContext.currentTimeline;
            }
            visitDslNode(this, ast.animation, innerContext);
            // this is here just incase the inner steps only contain or end
            // with a style() call (which is here to signal that this is a preparatory
            // call to style an element before it is animated again)
            innerContext.currentTimeline.applyStylesToKeyframe();
            /** @type {?} */
            const endTime = innerContext.currentTimeline.currentTime;
            furthestTime = Math.max(furthestTime, endTime);
        }));
        context.currentQueryIndex = 0;
        context.currentQueryTotal = 0;
        context.transformIntoNewTimeline(furthestTime);
        if (sameElementTimeline) {
            context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
            context.currentTimeline.snapshotCurrentStyles();
        }
        context.previousNode = ast;
    }
    /**
     * @param {?} ast
     * @param {?} context
     * @return {?}
     */
    visitStagger(ast, context) {
        /** @type {?} */
        const parentContext = (/** @type {?} */ (context.parentContext));
        /** @type {?} */
        const tl = context.currentTimeline;
        /** @type {?} */
        const timings = ast.timings;
        /** @type {?} */
        const duration = Math.abs(timings.duration);
        /** @type {?} */
        const maxTime = duration * (context.currentQueryTotal - 1);
        /** @type {?} */
        let delay = duration * context.currentQueryIndex;
        /** @type {?} */
        let staggerTransformer = timings.duration < 0 ? 'reverse' : timings.easing;
        switch (staggerTransformer) {
            case 'reverse':
                delay = maxTime - delay;
                break;
            case 'full':
                delay = parentContext.currentStaggerTime;
                break;
        }
        /** @type {?} */
        const timeline = context.currentTimeline;
        if (delay) {
            timeline.delayNextStep(delay);
        }
        /** @type {?} */
        const startingTime = timeline.currentTime;
        visitDslNode(this, ast.animation, context);
        context.previousNode = ast;
        // time = duration + delay
        // the reason why this computation is so complex is because
        // the inner timeline may either have a delay value or a stretched
        // keyframe depending on if a subtimeline is not used or is used.
        parentContext.currentStaggerTime =
            (tl.currentTime - startingTime) + (tl.startTime - parentContext.currentTimeline.startTime);
    }
}
/** @type {?} */
const DEFAULT_NOOP_PREVIOUS_NODE = (/** @type {?} */ ({}));
class AnimationTimelineContext {
    /**
     * @param {?} _driver
     * @param {?} element
     * @param {?} subInstructions
     * @param {?} _enterClassName
     * @param {?} _leaveClassName
     * @param {?} errors
     * @param {?} timelines
     * @param {?=} initialTimeline
     */
    constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
        this._driver = _driver;
        this.element = element;
        this.subInstructions = subInstructions;
        this._enterClassName = _enterClassName;
        this._leaveClassName = _leaveClassName;
        this.errors = errors;
        this.timelines = timelines;
        this.parentContext = null;
        this.currentAnimateTimings = null;
        this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        this.subContextCount = 0;
        this.options = {};
        this.currentQueryIndex = 0;
        this.currentQueryTotal = 0;
        this.currentStaggerTime = 0;
        this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
        timelines.push(this.currentTimeline);
    }
    /**
     * @return {?}
     */
    get params() { return this.options.params; }
    /**
     * @param {?} options
     * @param {?=} skipIfExists
     * @return {?}
     */
    updateOptions(options, skipIfExists) {
        if (!options)
            return;
        /** @type {?} */
        const newOptions = (/** @type {?} */ (options));
        /** @type {?} */
        let optionsToUpdate = this.options;
        // NOTE: this will get patched up when other animation methods support duration overrides
        if (newOptions.duration != null) {
            ((/** @type {?} */ (optionsToUpdate))).duration = resolveTimingValue(newOptions.duration);
        }
        if (newOptions.delay != null) {
            optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
        }
        /** @type {?} */
        const newParams = newOptions.params;
        if (newParams) {
            /** @type {?} */
            let paramsToUpdate = (/** @type {?} */ (optionsToUpdate.params));
            if (!paramsToUpdate) {
                paramsToUpdate = this.options.params = {};
            }
            Object.keys(newParams).forEach((/**
             * @param {?} name
             * @return {?}
             */
            name => {
                if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name)) {
                    paramsToUpdate[name] = interpolateParams(newParams[name], paramsToUpdate, this.errors);
                }
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    _copyOptions() {
        /** @type {?} */
        const options = {};
        if (this.options) {
            /** @type {?} */
            const oldParams = this.options.params;
            if (oldParams) {
                /** @type {?} */
                const params = options['params'] = {};
                Object.keys(oldParams).forEach((/**
                 * @param {?} name
                 * @return {?}
                 */
                name => { params[name] = oldParams[name]; }));
            }
        }
        return options;
    }
    /**
     * @param {?=} options
     * @param {?=} element
     * @param {?=} newTime
     * @return {?}
     */
    createSubContext(options = null, element, newTime) {
        /** @type {?} */
        const target = element || this.element;
        /** @type {?} */
        const context = new AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
        context.previousNode = this.previousNode;
        context.currentAnimateTimings = this.currentAnimateTimings;
        context.options = this._copyOptions();
        context.updateOptions(options);
        context.currentQueryIndex = this.currentQueryIndex;
        context.currentQueryTotal = this.currentQueryTotal;
        context.parentContext = this;
        this.subContextCount++;
        return context;
    }
    /**
     * @param {?=} newTime
     * @return {?}
     */
    transformIntoNewTimeline(newTime) {
        this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
        this.timelines.push(this.currentTimeline);
        return this.currentTimeline;
    }
    /**
     * @param {?} instruction
     * @param {?} duration
     * @param {?} delay
     * @return {?}
     */
    appendInstructionToTimeline(instruction, duration, delay) {
        /** @type {?} */
        const updatedTimings = {
            duration: duration != null ? duration : instruction.duration,
            delay: this.currentTimeline.currentTime + (delay != null ? delay : 0) + instruction.delay,
            easing: ''
        };
        /** @type {?} */
        const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
        this.timelines.push(builder);
        return updatedTimings;
    }
    /**
     * @param {?} time
     * @return {?}
     */
    incrementTime(time) {
        this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
    }
    /**
     * @param {?} delay
     * @return {?}
     */
    delayNextStep(delay) {
        // negative delays are not yet supported
        if (delay > 0) {
            this.currentTimeline.delayNextStep(delay);
        }
    }
    /**
     * @param {?} selector
     * @param {?} originalSelector
     * @param {?} limit
     * @param {?} includeSelf
     * @param {?} optional
     * @param {?} errors
     * @return {?}
     */
    invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
        /** @type {?} */
        let results = [];
        if (includeSelf) {
            results.push(this.element);
        }
        if (selector.length > 0) { // if :self is only used then the selector is empty
            selector = selector.replace(ENTER_TOKEN_REGEX, '.' + this._enterClassName);
            selector = selector.replace(LEAVE_TOKEN_REGEX, '.' + this._leaveClassName);
            /** @type {?} */
            const multi = limit != 1;
            /** @type {?} */
            let elements = this._driver.query(this.element, selector, multi);
            if (limit !== 0) {
                elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) :
                    elements.slice(0, limit);
            }
            results.push(...elements);
        }
        if (!optional && results.length == 0) {
            errors.push(`\`query("${originalSelector}")\` returned zero elements. (Use \`query("${originalSelector}", { optional: true })\` if you wish to allow this.)`);
        }
        return results;
    }
}
if (false) {}
class TimelineBuilder {
    /**
     * @param {?} _driver
     * @param {?} element
     * @param {?} startTime
     * @param {?=} _elementTimelineStylesLookup
     */
    constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
        this._driver = _driver;
        this.element = element;
        this.startTime = startTime;
        this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
        this.duration = 0;
        this._previousKeyframe = {};
        this._currentKeyframe = {};
        this._keyframes = new Map();
        this._styleSummary = {};
        this._pendingStyles = {};
        this._backFill = {};
        this._currentEmptyStepKeyframe = null;
        if (!this._elementTimelineStylesLookup) {
            this._elementTimelineStylesLookup = new Map();
        }
        this._localTimelineStyles = Object.create(this._backFill, {});
        this._globalTimelineStyles = (/** @type {?} */ (this._elementTimelineStylesLookup.get(element)));
        if (!this._globalTimelineStyles) {
            this._globalTimelineStyles = this._localTimelineStyles;
            this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
        }
        this._loadKeyframe();
    }
    /**
     * @return {?}
     */
    containsAnimation() {
        switch (this._keyframes.size) {
            case 0:
                return false;
            case 1:
                return this.getCurrentStyleProperties().length > 0;
            default:
                return true;
        }
    }
    /**
     * @return {?}
     */
    getCurrentStyleProperties() { return Object.keys(this._currentKeyframe); }
    /**
     * @return {?}
     */
    get currentTime() { return this.startTime + this.duration; }
    /**
     * @param {?} delay
     * @return {?}
     */
    delayNextStep(delay) {
        // in the event that a style() step is placed right before a stagger()
        // and that style() step is the very first style() value in the animation
        // then we need to make a copy of the keyframe [0, copy, 1] so that the delay
        // properly applies the style() values to work with the stagger...
        /** @type {?} */
        const hasPreStyleStep = this._keyframes.size == 1 && Object.keys(this._pendingStyles).length;
        if (this.duration || hasPreStyleStep) {
            this.forwardTime(this.currentTime + delay);
            if (hasPreStyleStep) {
                this.snapshotCurrentStyles();
            }
        }
        else {
            this.startTime += delay;
        }
    }
    /**
     * @param {?} element
     * @param {?=} currentTime
     * @return {?}
     */
    fork(element, currentTime) {
        this.applyStylesToKeyframe();
        return new TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
    }
    /**
     * @private
     * @return {?}
     */
    _loadKeyframe() {
        if (this._currentKeyframe) {
            this._previousKeyframe = this._currentKeyframe;
        }
        this._currentKeyframe = (/** @type {?} */ (this._keyframes.get(this.duration)));
        if (!this._currentKeyframe) {
            this._currentKeyframe = Object.create(this._backFill, {});
            this._keyframes.set(this.duration, this._currentKeyframe);
        }
    }
    /**
     * @return {?}
     */
    forwardFrame() {
        this.duration += ONE_FRAME_IN_MILLISECONDS;
        this._loadKeyframe();
    }
    /**
     * @param {?} time
     * @return {?}
     */
    forwardTime(time) {
        this.applyStylesToKeyframe();
        this.duration = time;
        this._loadKeyframe();
    }
    /**
     * @private
     * @param {?} prop
     * @param {?} value
     * @return {?}
     */
    _updateStyle(prop, value) {
        this._localTimelineStyles[prop] = value;
        this._globalTimelineStyles[prop] = value;
        this._styleSummary[prop] = { time: this.currentTime, value };
    }
    /**
     * @return {?}
     */
    allowOnlyTimelineStyles() { return this._currentEmptyStepKeyframe !== this._currentKeyframe; }
    /**
     * @param {?} easing
     * @return {?}
     */
    applyEmptyStep(easing) {
        if (easing) {
            this._previousKeyframe['easing'] = easing;
        }
        // special case for animate(duration):
        // all missing styles are filled with a `*` value then
        // if any destination styles are filled in later on the same
        // keyframe then they will override the overridden styles
        // We use `_globalTimelineStyles` here because there may be
        // styles in previous keyframes that are not present in this timeline
        Object.keys(this._globalTimelineStyles).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        prop => {
            this._backFill[prop] = this._globalTimelineStyles[prop] || _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"];
            this._currentKeyframe[prop] = _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"];
        }));
        this._currentEmptyStepKeyframe = this._currentKeyframe;
    }
    /**
     * @param {?} input
     * @param {?} easing
     * @param {?} errors
     * @param {?=} options
     * @return {?}
     */
    setStyles(input, easing, errors, options) {
        if (easing) {
            this._previousKeyframe['easing'] = easing;
        }
        /** @type {?} */
        const params = (options && options.params) || {};
        /** @type {?} */
        const styles = flattenStyles(input, this._globalTimelineStyles);
        Object.keys(styles).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        prop => {
            /** @type {?} */
            const val = interpolateParams(styles[prop], params, errors);
            this._pendingStyles[prop] = val;
            if (!this._localTimelineStyles.hasOwnProperty(prop)) {
                this._backFill[prop] = this._globalTimelineStyles.hasOwnProperty(prop) ?
                    this._globalTimelineStyles[prop] :
                    _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"];
            }
            this._updateStyle(prop, val);
        }));
    }
    /**
     * @return {?}
     */
    applyStylesToKeyframe() {
        /** @type {?} */
        const styles = this._pendingStyles;
        /** @type {?} */
        const props = Object.keys(styles);
        if (props.length == 0)
            return;
        this._pendingStyles = {};
        props.forEach((/**
         * @param {?} prop
         * @return {?}
         */
        prop => {
            /** @type {?} */
            const val = styles[prop];
            this._currentKeyframe[prop] = val;
        }));
        Object.keys(this._localTimelineStyles).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        prop => {
            if (!this._currentKeyframe.hasOwnProperty(prop)) {
                this._currentKeyframe[prop] = this._localTimelineStyles[prop];
            }
        }));
    }
    /**
     * @return {?}
     */
    snapshotCurrentStyles() {
        Object.keys(this._localTimelineStyles).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        prop => {
            /** @type {?} */
            const val = this._localTimelineStyles[prop];
            this._pendingStyles[prop] = val;
            this._updateStyle(prop, val);
        }));
    }
    /**
     * @return {?}
     */
    getFinalKeyframe() { return this._keyframes.get(this.duration); }
    /**
     * @return {?}
     */
    get properties() {
        /** @type {?} */
        const properties = [];
        for (let prop in this._currentKeyframe) {
            properties.push(prop);
        }
        return properties;
    }
    /**
     * @param {?} timeline
     * @return {?}
     */
    mergeTimelineCollectedStyles(timeline) {
        Object.keys(timeline._styleSummary).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        prop => {
            /** @type {?} */
            const details0 = this._styleSummary[prop];
            /** @type {?} */
            const details1 = timeline._styleSummary[prop];
            if (!details0 || details1.time > details0.time) {
                this._updateStyle(prop, details1.value);
            }
        }));
    }
    /**
     * @return {?}
     */
    buildKeyframes() {
        this.applyStylesToKeyframe();
        /** @type {?} */
        const preStyleProps = new Set();
        /** @type {?} */
        const postStyleProps = new Set();
        /** @type {?} */
        const isEmpty = this._keyframes.size === 1 && this.duration === 0;
        /** @type {?} */
        let finalKeyframes = [];
        this._keyframes.forEach((/**
         * @param {?} keyframe
         * @param {?} time
         * @return {?}
         */
        (keyframe, time) => {
            /** @type {?} */
            const finalKeyframe = copyStyles(keyframe, true);
            Object.keys(finalKeyframe).forEach((/**
             * @param {?} prop
             * @return {?}
             */
            prop => {
                /** @type {?} */
                const value = finalKeyframe[prop];
                if (value == _angular_animations__WEBPACK_IMPORTED_MODULE_0__["ɵPRE_STYLE"]) {
                    preStyleProps.add(prop);
                }
                else if (value == _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"]) {
                    postStyleProps.add(prop);
                }
            }));
            if (!isEmpty) {
                finalKeyframe['offset'] = time / this.duration;
            }
            finalKeyframes.push(finalKeyframe);
        }));
        /** @type {?} */
        const preProps = preStyleProps.size ? iteratorToArray(preStyleProps.values()) : [];
        /** @type {?} */
        const postProps = postStyleProps.size ? iteratorToArray(postStyleProps.values()) : [];
        // special case for a 0-second animation (which is designed just to place styles onscreen)
        if (isEmpty) {
            /** @type {?} */
            const kf0 = finalKeyframes[0];
            /** @type {?} */
            const kf1 = copyObj(kf0);
            kf0['offset'] = 0;
            kf1['offset'] = 1;
            finalKeyframes = [kf0, kf1];
        }
        return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
    }
}
if (false) {}
class SubTimelineBuilder extends TimelineBuilder {
    /**
     * @param {?} driver
     * @param {?} element
     * @param {?} keyframes
     * @param {?} preStyleProps
     * @param {?} postStyleProps
     * @param {?} timings
     * @param {?=} _stretchStartingKeyframe
     */
    constructor(driver, element, keyframes, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
        super(driver, element, timings.delay);
        this.element = element;
        this.keyframes = keyframes;
        this.preStyleProps = preStyleProps;
        this.postStyleProps = postStyleProps;
        this._stretchStartingKeyframe = _stretchStartingKeyframe;
        this.timings = { duration: timings.duration, delay: timings.delay, easing: timings.easing };
    }
    /**
     * @return {?}
     */
    containsAnimation() { return this.keyframes.length > 1; }
    /**
     * @return {?}
     */
    buildKeyframes() {
        /** @type {?} */
        let keyframes = this.keyframes;
        let { delay, duration, easing } = this.timings;
        if (this._stretchStartingKeyframe && delay) {
            /** @type {?} */
            const newKeyframes = [];
            /** @type {?} */
            const totalTime = duration + delay;
            /** @type {?} */
            const startingGap = delay / totalTime;
            // the original starting keyframe now starts once the delay is done
            /** @type {?} */
            const newFirstKeyframe = copyStyles(keyframes[0], false);
            newFirstKeyframe['offset'] = 0;
            newKeyframes.push(newFirstKeyframe);
            /** @type {?} */
            const oldFirstKeyframe = copyStyles(keyframes[0], false);
            oldFirstKeyframe['offset'] = roundOffset(startingGap);
            newKeyframes.push(oldFirstKeyframe);
            /*
                    When the keyframe is stretched then it means that the delay before the animation
                    starts is gone. Instead the first keyframe is placed at the start of the animation
                    and it is then copied to where it starts when the original delay is over. This basically
                    means nothing animates during that delay, but the styles are still renderered. For this
                    to work the original offset values that exist in the original keyframes must be "warped"
                    so that they can take the new keyframe + delay into account.
            
                    delay=1000, duration=1000, keyframes = 0 .5 1
            
                    turns into
            
                    delay=0, duration=2000, keyframes = 0 .33 .66 1
                   */
            // offsets between 1 ... n -1 are all warped by the keyframe stretch
            /** @type {?} */
            const limit = keyframes.length - 1;
            for (let i = 1; i <= limit; i++) {
                /** @type {?} */
                let kf = copyStyles(keyframes[i], false);
                /** @type {?} */
                const oldOffset = (/** @type {?} */ (kf['offset']));
                /** @type {?} */
                const timeAtKeyframe = delay + oldOffset * duration;
                kf['offset'] = roundOffset(timeAtKeyframe / totalTime);
                newKeyframes.push(kf);
            }
            // the new starting keyframe should be added at the start
            duration = totalTime;
            delay = 0;
            easing = '';
            keyframes = newKeyframes;
        }
        return createTimelineInstruction(this.element, keyframes, this.preStyleProps, this.postStyleProps, duration, delay, easing, true);
    }
}
if (false) {}
/**
 * @param {?} offset
 * @param {?=} decimalPoints
 * @return {?}
 */
function roundOffset(offset, decimalPoints = 3) {
    /** @type {?} */
    const mult = Math.pow(10, decimalPoints - 1);
    return Math.round(offset * mult) / mult;
}
/**
 * @param {?} input
 * @param {?} allStyles
 * @return {?}
 */
function flattenStyles(input, allStyles) {
    /** @type {?} */
    const styles = {};
    /** @type {?} */
    let allProperties;
    input.forEach((/**
     * @param {?} token
     * @return {?}
     */
    token => {
        if (token === '*') {
            allProperties = allProperties || Object.keys(allStyles);
            allProperties.forEach((/**
             * @param {?} prop
             * @return {?}
             */
            prop => { styles[prop] = _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"]; }));
        }
        else {
            copyStyles((/** @type {?} */ (token)), false, styles);
        }
    }));
    return styles;
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/dsl/animation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Animation {
    /**
     * @param {?} _driver
     * @param {?} input
     */
    constructor(_driver, input) {
        this._driver = _driver;
        /** @type {?} */
        const errors = [];
        /** @type {?} */
        const ast = buildAnimationAst(_driver, input, errors);
        if (errors.length) {
            /** @type {?} */
            const errorMessage = `animation validation failed:\n${errors.join("\n")}`;
            throw new Error(errorMessage);
        }
        this._animationAst = ast;
    }
    /**
     * @param {?} element
     * @param {?} startingStyles
     * @param {?} destinationStyles
     * @param {?} options
     * @param {?=} subInstructions
     * @return {?}
     */
    buildTimelines(element, startingStyles, destinationStyles, options, subInstructions) {
        /** @type {?} */
        const start = Array.isArray(startingStyles) ? normalizeStyles(startingStyles) :
            (/** @type {?} */ (startingStyles));
        /** @type {?} */
        const dest = Array.isArray(destinationStyles) ? normalizeStyles(destinationStyles) :
            (/** @type {?} */ (destinationStyles));
        /** @type {?} */
        const errors = [];
        subInstructions = subInstructions || new ElementInstructionMap();
        /** @type {?} */
        const result = buildAnimationTimelines(this._driver, element, this._animationAst, ENTER_CLASSNAME, LEAVE_CLASSNAME, start, dest, options, subInstructions, errors);
        if (errors.length) {
            /** @type {?} */
            const errorMessage = `animation building failed:\n${errors.join("\n")}`;
            throw new Error(errorMessage);
        }
        return result;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/dsl/style_normalization/animation_style_normalizer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@publicApi
 * @abstract
 */
class AnimationStyleNormalizer {
}
if (false) {}
/**
 * \@publicApi
 */
class NoopAnimationStyleNormalizer {
    /**
     * @param {?} propertyName
     * @param {?} errors
     * @return {?}
     */
    normalizePropertyName(propertyName, errors) { return propertyName; }
    /**
     * @param {?} userProvidedProperty
     * @param {?} normalizedProperty
     * @param {?} value
     * @param {?} errors
     * @return {?}
     */
    normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
        return (/** @type {?} */ (value));
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/dsl/style_normalization/web_animations_style_normalizer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WebAnimationsStyleNormalizer extends AnimationStyleNormalizer {
    /**
     * @param {?} propertyName
     * @param {?} errors
     * @return {?}
     */
    normalizePropertyName(propertyName, errors) {
        return dashCaseToCamelCase(propertyName);
    }
    /**
     * @param {?} userProvidedProperty
     * @param {?} normalizedProperty
     * @param {?} value
     * @param {?} errors
     * @return {?}
     */
    normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
        /** @type {?} */
        let unit = '';
        /** @type {?} */
        const strVal = value.toString().trim();
        if (DIMENSIONAL_PROP_MAP[normalizedProperty] && value !== 0 && value !== '0') {
            if (typeof value === 'number') {
                unit = 'px';
            }
            else {
                /** @type {?} */
                const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
                if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
                    errors.push(`Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
                }
            }
        }
        return strVal + unit;
    }
}
const ɵ0$1 = /**
 * @return {?}
 */
() => makeBooleanMap('width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective'
    .split(','));
/** @type {?} */
const DIMENSIONAL_PROP_MAP = ((ɵ0$1))();
/**
 * @param {?} keys
 * @return {?}
 */
function makeBooleanMap(keys) {
    /** @type {?} */
    const map = {};
    keys.forEach((/**
     * @param {?} key
     * @return {?}
     */
    key => map[key] = true));
    return map;
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/dsl/animation_transition_instruction.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AnimationTransitionInstruction() { }
if (false) {}
/**
 * @param {?} element
 * @param {?} triggerName
 * @param {?} fromState
 * @param {?} toState
 * @param {?} isRemovalTransition
 * @param {?} fromStyles
 * @param {?} toStyles
 * @param {?} timelines
 * @param {?} queriedElements
 * @param {?} preStyleProps
 * @param {?} postStyleProps
 * @param {?} totalTime
 * @param {?=} errors
 * @return {?}
 */
function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
    return {
        type: 0 /* TransitionAnimation */,
        element,
        triggerName,
        isRemovalTransition,
        fromState,
        fromStyles,
        toState,
        toStyles,
        timelines,
        queriedElements,
        preStyleProps,
        postStyleProps,
        totalTime,
        errors
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/dsl/animation_transition_factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EMPTY_OBJECT = {};
class AnimationTransitionFactory {
    /**
     * @param {?} _triggerName
     * @param {?} ast
     * @param {?} _stateStyles
     */
    constructor(_triggerName, ast, _stateStyles) {
        this._triggerName = _triggerName;
        this.ast = ast;
        this._stateStyles = _stateStyles;
    }
    /**
     * @param {?} currentState
     * @param {?} nextState
     * @param {?} element
     * @param {?} params
     * @return {?}
     */
    match(currentState, nextState, element, params) {
        return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
    }
    /**
     * @param {?} stateName
     * @param {?} params
     * @param {?} errors
     * @return {?}
     */
    buildStyles(stateName, params, errors) {
        /** @type {?} */
        const backupStateStyler = this._stateStyles['*'];
        /** @type {?} */
        const stateStyler = this._stateStyles[stateName];
        /** @type {?} */
        const backupStyles = backupStateStyler ? backupStateStyler.buildStyles(params, errors) : {};
        return stateStyler ? stateStyler.buildStyles(params, errors) : backupStyles;
    }
    /**
     * @param {?} driver
     * @param {?} element
     * @param {?} currentState
     * @param {?} nextState
     * @param {?} enterClassName
     * @param {?} leaveClassName
     * @param {?=} currentOptions
     * @param {?=} nextOptions
     * @param {?=} subInstructions
     * @param {?=} skipAstBuild
     * @return {?}
     */
    build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
        /** @type {?} */
        const errors = [];
        /** @type {?} */
        const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
        /** @type {?} */
        const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
        /** @type {?} */
        const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
        /** @type {?} */
        const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
        /** @type {?} */
        const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
        /** @type {?} */
        const queriedElements = new Set();
        /** @type {?} */
        const preStyleMap = new Map();
        /** @type {?} */
        const postStyleMap = new Map();
        /** @type {?} */
        const isRemoval = nextState === 'void';
        /** @type {?} */
        const animationOptions = { params: Object.assign(Object.assign({}, transitionAnimationParams), nextAnimationParams) };
        /** @type {?} */
        const timelines = skipAstBuild ? [] : buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
        /** @type {?} */
        let totalTime = 0;
        timelines.forEach((/**
         * @param {?} tl
         * @return {?}
         */
        tl => { totalTime = Math.max(tl.duration + tl.delay, totalTime); }));
        if (errors.length) {
            return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
        }
        timelines.forEach((/**
         * @param {?} tl
         * @return {?}
         */
        tl => {
            /** @type {?} */
            const elm = tl.element;
            /** @type {?} */
            const preProps = getOrSetAsInMap(preStyleMap, elm, {});
            tl.preStyleProps.forEach((/**
             * @param {?} prop
             * @return {?}
             */
            prop => preProps[prop] = true));
            /** @type {?} */
            const postProps = getOrSetAsInMap(postStyleMap, elm, {});
            tl.postStyleProps.forEach((/**
             * @param {?} prop
             * @return {?}
             */
            prop => postProps[prop] = true));
            if (elm !== element) {
                queriedElements.add(elm);
            }
        }));
        /** @type {?} */
        const queriedElementsList = iteratorToArray(queriedElements.values());
        return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, queriedElementsList, preStyleMap, postStyleMap, totalTime);
    }
}
if (false) {}
/**
 * @param {?} matchFns
 * @param {?} currentState
 * @param {?} nextState
 * @param {?} element
 * @param {?} params
 * @return {?}
 */
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
    return matchFns.some((/**
     * @param {?} fn
     * @return {?}
     */
    fn => fn(currentState, nextState, element, params)));
}
class AnimationStateStyles {
    /**
     * @param {?} styles
     * @param {?} defaultParams
     */
    constructor(styles, defaultParams) {
        this.styles = styles;
        this.defaultParams = defaultParams;
    }
    /**
     * @param {?} params
     * @param {?} errors
     * @return {?}
     */
    buildStyles(params, errors) {
        /** @type {?} */
        const finalStyles = {};
        /** @type {?} */
        const combinedParams = copyObj(this.defaultParams);
        Object.keys(params).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            /** @type {?} */
            const value = params[key];
            if (value != null) {
                combinedParams[key] = value;
            }
        }));
        this.styles.styles.forEach((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            if (typeof value !== 'string') {
                /** @type {?} */
                const styleObj = (/** @type {?} */ (value));
                Object.keys(styleObj).forEach((/**
                 * @param {?} prop
                 * @return {?}
                 */
                prop => {
                    /** @type {?} */
                    let val = styleObj[prop];
                    if (val.length > 1) {
                        val = interpolateParams(val, combinedParams, errors);
                    }
                    finalStyles[prop] = val;
                }));
            }
        }));
        return finalStyles;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/dsl/animation_trigger.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@publicApi
 * @param {?} name
 * @param {?} ast
 * @return {?}
 */
function buildTrigger(name, ast) {
    return new AnimationTrigger(name, ast);
}
/**
 * \@publicApi
 */
class AnimationTrigger {
    /**
     * @param {?} name
     * @param {?} ast
     */
    constructor(name, ast) {
        this.name = name;
        this.ast = ast;
        this.transitionFactories = [];
        this.states = {};
        ast.states.forEach((/**
         * @param {?} ast
         * @return {?}
         */
        ast => {
            /** @type {?} */
            const defaultParams = (ast.options && ast.options.params) || {};
            this.states[ast.name] = new AnimationStateStyles(ast.style, defaultParams);
        }));
        balanceProperties(this.states, 'true', '1');
        balanceProperties(this.states, 'false', '0');
        ast.transitions.forEach((/**
         * @param {?} ast
         * @return {?}
         */
        ast => {
            this.transitionFactories.push(new AnimationTransitionFactory(name, ast, this.states));
        }));
        this.fallbackTransition = createFallbackTransition(name, this.states);
    }
    /**
     * @return {?}
     */
    get containsQueries() { return this.ast.queryCount > 0; }
    /**
     * @param {?} currentState
     * @param {?} nextState
     * @param {?} element
     * @param {?} params
     * @return {?}
     */
    matchTransition(currentState, nextState, element, params) {
        /** @type {?} */
        const entry = this.transitionFactories.find((/**
         * @param {?} f
         * @return {?}
         */
        f => f.match(currentState, nextState, element, params)));
        return entry || null;
    }
    /**
     * @param {?} currentState
     * @param {?} params
     * @param {?} errors
     * @return {?}
     */
    matchStyles(currentState, params, errors) {
        return this.fallbackTransition.buildStyles(currentState, params, errors);
    }
}
if (false) {}
/**
 * @param {?} triggerName
 * @param {?} states
 * @return {?}
 */
function createFallbackTransition(triggerName, states) {
    /** @type {?} */
    const matchers = [(/**
         * @param {?} fromState
         * @param {?} toState
         * @return {?}
         */
        (fromState, toState) => true)];
    /** @type {?} */
    const animation = { type: 2 /* Sequence */, steps: [], options: null };
    /** @type {?} */
    const transition = {
        type: 1 /* Transition */,
        animation,
        matchers,
        options: null,
        queryCount: 0,
        depCount: 0
    };
    return new AnimationTransitionFactory(triggerName, transition, states);
}
/**
 * @param {?} obj
 * @param {?} key1
 * @param {?} key2
 * @return {?}
 */
function balanceProperties(obj, key1, key2) {
    if (obj.hasOwnProperty(key1)) {
        if (!obj.hasOwnProperty(key2)) {
            obj[key2] = obj[key1];
        }
    }
    else if (obj.hasOwnProperty(key2)) {
        obj[key1] = obj[key2];
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/render/timeline_animation_engine.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EMPTY_INSTRUCTION_MAP = new ElementInstructionMap();
class TimelineAnimationEngine {
    /**
     * @param {?} bodyNode
     * @param {?} _driver
     * @param {?} _normalizer
     */
    constructor(bodyNode, _driver, _normalizer) {
        this.bodyNode = bodyNode;
        this._driver = _driver;
        this._normalizer = _normalizer;
        this._animations = {};
        this._playersById = {};
        this.players = [];
    }
    /**
     * @param {?} id
     * @param {?} metadata
     * @return {?}
     */
    register(id, metadata) {
        /** @type {?} */
        const errors = [];
        /** @type {?} */
        const ast = buildAnimationAst(this._driver, metadata, errors);
        if (errors.length) {
            throw new Error(`Unable to build the animation due to the following errors: ${errors.join("\n")}`);
        }
        else {
            this._animations[id] = ast;
        }
    }
    /**
     * @private
     * @param {?} i
     * @param {?} preStyles
     * @param {?=} postStyles
     * @return {?}
     */
    _buildPlayer(i, preStyles, postStyles) {
        /** @type {?} */
        const element = i.element;
        /** @type {?} */
        const keyframes = normalizeKeyframes(this._driver, this._normalizer, element, i.keyframes, preStyles, postStyles);
        return this._driver.animate(element, keyframes, i.duration, i.delay, i.easing, [], true);
    }
    /**
     * @param {?} id
     * @param {?} element
     * @param {?=} options
     * @return {?}
     */
    create(id, element, options = {}) {
        /** @type {?} */
        const errors = [];
        /** @type {?} */
        const ast = this._animations[id];
        /** @type {?} */
        let instructions;
        /** @type {?} */
        const autoStylesMap = new Map();
        if (ast) {
            instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, {}, {}, options, EMPTY_INSTRUCTION_MAP, errors);
            instructions.forEach((/**
             * @param {?} inst
             * @return {?}
             */
            inst => {
                /** @type {?} */
                const styles = getOrSetAsInMap(autoStylesMap, inst.element, {});
                inst.postStyleProps.forEach((/**
                 * @param {?} prop
                 * @return {?}
                 */
                prop => styles[prop] = null));
            }));
        }
        else {
            errors.push('The requested animation doesn\'t exist or has already been destroyed');
            instructions = [];
        }
        if (errors.length) {
            throw new Error(`Unable to create the animation due to the following errors: ${errors.join("\n")}`);
        }
        autoStylesMap.forEach((/**
         * @param {?} styles
         * @param {?} element
         * @return {?}
         */
        (styles, element) => {
            Object.keys(styles).forEach((/**
             * @param {?} prop
             * @return {?}
             */
            prop => { styles[prop] = this._driver.computeStyle(element, prop, _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"]); }));
        }));
        /** @type {?} */
        const players = instructions.map((/**
         * @param {?} i
         * @return {?}
         */
        i => {
            /** @type {?} */
            const styles = autoStylesMap.get(i.element);
            return this._buildPlayer(i, {}, styles);
        }));
        /** @type {?} */
        const player = optimizeGroupPlayer(players);
        this._playersById[id] = player;
        player.onDestroy((/**
         * @return {?}
         */
        () => this.destroy(id)));
        this.players.push(player);
        return player;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    destroy(id) {
        /** @type {?} */
        const player = this._getPlayer(id);
        player.destroy();
        delete this._playersById[id];
        /** @type {?} */
        const index = this.players.indexOf(player);
        if (index >= 0) {
            this.players.splice(index, 1);
        }
    }
    /**
     * @private
     * @param {?} id
     * @return {?}
     */
    _getPlayer(id) {
        /** @type {?} */
        const player = this._playersById[id];
        if (!player) {
            throw new Error(`Unable to find the timeline player referenced by ${id}`);
        }
        return player;
    }
    /**
     * @param {?} id
     * @param {?} element
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    listen(id, element, eventName, callback) {
        // triggerName, fromState, toState are all ignored for timeline animations
        /** @type {?} */
        const baseEvent = makeAnimationEvent(element, '', '', '');
        listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
        return (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @param {?} id
     * @param {?} element
     * @param {?} command
     * @param {?} args
     * @return {?}
     */
    command(id, element, command, args) {
        if (command == 'register') {
            this.register(id, (/** @type {?} */ (args[0])));
            return;
        }
        if (command == 'create') {
            /** @type {?} */
            const options = (/** @type {?} */ ((args[0] || {})));
            this.create(id, element, options);
            return;
        }
        /** @type {?} */
        const player = this._getPlayer(id);
        switch (command) {
            case 'play':
                player.play();
                break;
            case 'pause':
                player.pause();
                break;
            case 'reset':
                player.reset();
                break;
            case 'restart':
                player.restart();
                break;
            case 'finish':
                player.finish();
                break;
            case 'init':
                player.init();
                break;
            case 'setPosition':
                player.setPosition(parseFloat((/** @type {?} */ (args[0]))));
                break;
            case 'destroy':
                this.destroy(id);
                break;
        }
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/render/transition_animation_engine.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const QUEUED_CLASSNAME = 'ng-animate-queued';
/** @type {?} */
const QUEUED_SELECTOR = '.ng-animate-queued';
/** @type {?} */
const DISABLED_CLASSNAME = 'ng-animate-disabled';
/** @type {?} */
const DISABLED_SELECTOR = '.ng-animate-disabled';
/** @type {?} */
const STAR_CLASSNAME = 'ng-star-inserted';
/** @type {?} */
const STAR_SELECTOR = '.ng-star-inserted';
/** @type {?} */
const EMPTY_PLAYER_ARRAY = [];
/** @type {?} */
const NULL_REMOVAL_STATE = {
    namespaceId: '',
    setForRemoval: false,
    setForMove: false,
    hasAnimation: false,
    removedBeforeQueried: false
};
/** @type {?} */
const NULL_REMOVED_QUERIED_STATE = {
    namespaceId: '',
    setForMove: false,
    setForRemoval: false,
    hasAnimation: false,
    removedBeforeQueried: true
};
/**
 * @record
 */
function TriggerListener() { }
if (false) {}
/**
 * @record
 */
function QueueInstruction() { }
if (false) {}
/** @type {?} */
const REMOVAL_FLAG = '__ng_removed';
/**
 * @record
 */
function ElementAnimationState() { }
if (false) {}
class StateValue {
    /**
     * @param {?} input
     * @param {?=} namespaceId
     */
    constructor(input, namespaceId = '') {
        this.namespaceId = namespaceId;
        /** @type {?} */
        const isObj = input && input.hasOwnProperty('value');
        /** @type {?} */
        const value = isObj ? input['value'] : input;
        this.value = normalizeTriggerValue(value);
        if (isObj) {
            /** @type {?} */
            const options = copyObj((/** @type {?} */ (input)));
            delete options['value'];
            this.options = (/** @type {?} */ (options));
        }
        else {
            this.options = {};
        }
        if (!this.options.params) {
            this.options.params = {};
        }
    }
    /**
     * @return {?}
     */
    get params() { return (/** @type {?} */ (this.options.params)); }
    /**
     * @param {?} options
     * @return {?}
     */
    absorbOptions(options) {
        /** @type {?} */
        const newParams = options.params;
        if (newParams) {
            /** @type {?} */
            const oldParams = (/** @type {?} */ (this.options.params));
            Object.keys(newParams).forEach((/**
             * @param {?} prop
             * @return {?}
             */
            prop => {
                if (oldParams[prop] == null) {
                    oldParams[prop] = newParams[prop];
                }
            }));
        }
    }
}
if (false) {}
/** @type {?} */
const VOID_VALUE = 'void';
/** @type {?} */
const DEFAULT_STATE_VALUE = new StateValue(VOID_VALUE);
class AnimationTransitionNamespace {
    /**
     * @param {?} id
     * @param {?} hostElement
     * @param {?} _engine
     */
    constructor(id, hostElement, _engine) {
        this.id = id;
        this.hostElement = hostElement;
        this._engine = _engine;
        this.players = [];
        this._triggers = {};
        this._queue = [];
        this._elementListeners = new Map();
        this._hostClassName = 'ng-tns-' + id;
        addClass(hostElement, this._hostClassName);
    }
    /**
     * @param {?} element
     * @param {?} name
     * @param {?} phase
     * @param {?} callback
     * @return {?}
     */
    listen(element, name, phase, callback) {
        if (!this._triggers.hasOwnProperty(name)) {
            throw new Error(`Unable to listen on the animation trigger event "${phase}" because the animation trigger "${name}" doesn\'t exist!`);
        }
        if (phase == null || phase.length == 0) {
            throw new Error(`Unable to listen on the animation trigger "${name}" because the provided event is undefined!`);
        }
        if (!isTriggerEventValid(phase)) {
            throw new Error(`The provided animation trigger event "${phase}" for the animation trigger "${name}" is not supported!`);
        }
        /** @type {?} */
        const listeners = getOrSetAsInMap(this._elementListeners, element, []);
        /** @type {?} */
        const data = { name, phase, callback };
        listeners.push(data);
        /** @type {?} */
        const triggersWithStates = getOrSetAsInMap(this._engine.statesByElement, element, {});
        if (!triggersWithStates.hasOwnProperty(name)) {
            addClass(element, NG_TRIGGER_CLASSNAME);
            addClass(element, NG_TRIGGER_CLASSNAME + '-' + name);
            triggersWithStates[name] = DEFAULT_STATE_VALUE;
        }
        return (/**
         * @return {?}
         */
        () => {
            // the event listener is removed AFTER the flush has occurred such
            // that leave animations callbacks can fire (otherwise if the node
            // is removed in between then the listeners would be deregistered)
            this._engine.afterFlush((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const index = listeners.indexOf(data);
                if (index >= 0) {
                    listeners.splice(index, 1);
                }
                if (!this._triggers[name]) {
                    delete triggersWithStates[name];
                }
            }));
        });
    }
    /**
     * @param {?} name
     * @param {?} ast
     * @return {?}
     */
    register(name, ast) {
        if (this._triggers[name]) {
            // throw
            return false;
        }
        else {
            this._triggers[name] = ast;
            return true;
        }
    }
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    _getTrigger(name) {
        /** @type {?} */
        const trigger = this._triggers[name];
        if (!trigger) {
            throw new Error(`The provided animation trigger "${name}" has not been registered!`);
        }
        return trigger;
    }
    /**
     * @param {?} element
     * @param {?} triggerName
     * @param {?} value
     * @param {?=} defaultToFallback
     * @return {?}
     */
    trigger(element, triggerName, value, defaultToFallback = true) {
        /** @type {?} */
        const trigger = this._getTrigger(triggerName);
        /** @type {?} */
        const player = new TransitionAnimationPlayer(this.id, triggerName, element);
        /** @type {?} */
        let triggersWithStates = this._engine.statesByElement.get(element);
        if (!triggersWithStates) {
            addClass(element, NG_TRIGGER_CLASSNAME);
            addClass(element, NG_TRIGGER_CLASSNAME + '-' + triggerName);
            this._engine.statesByElement.set(element, triggersWithStates = {});
        }
        /** @type {?} */
        let fromState = triggersWithStates[triggerName];
        /** @type {?} */
        const toState = new StateValue(value, this.id);
        /** @type {?} */
        const isObj = value && value.hasOwnProperty('value');
        if (!isObj && fromState) {
            toState.absorbOptions(fromState.options);
        }
        triggersWithStates[triggerName] = toState;
        if (!fromState) {
            fromState = DEFAULT_STATE_VALUE;
        }
        /** @type {?} */
        const isRemoval = toState.value === VOID_VALUE;
        // normally this isn't reached by here, however, if an object expression
        // is passed in then it may be a new object each time. Comparing the value
        // is important since that will stay the same despite there being a new object.
        // The removal arc here is special cased because the same element is triggered
        // twice in the event that it contains animations on the outer/inner portions
        // of the host container
        if (!isRemoval && fromState.value === toState.value) {
            // this means that despite the value not changing, some inner params
            // have changed which means that the animation final styles need to be applied
            if (!objEquals(fromState.params, toState.params)) {
                /** @type {?} */
                const errors = [];
                /** @type {?} */
                const fromStyles = trigger.matchStyles(fromState.value, fromState.params, errors);
                /** @type {?} */
                const toStyles = trigger.matchStyles(toState.value, toState.params, errors);
                if (errors.length) {
                    this._engine.reportError(errors);
                }
                else {
                    this._engine.afterFlush((/**
                     * @return {?}
                     */
                    () => {
                        eraseStyles(element, fromStyles);
                        setStyles(element, toStyles);
                    }));
                }
            }
            return;
        }
        /** @type {?} */
        const playersOnElement = getOrSetAsInMap(this._engine.playersByElement, element, []);
        playersOnElement.forEach((/**
         * @param {?} player
         * @return {?}
         */
        player => {
            // only remove the player if it is queued on the EXACT same trigger/namespace
            // we only also deal with queued players here because if the animation has
            // started then we want to keep the player alive until the flush happens
            // (which is where the previousPlayers are passed into the new palyer)
            if (player.namespaceId == this.id && player.triggerName == triggerName && player.queued) {
                player.destroy();
            }
        }));
        /** @type {?} */
        let transition = trigger.matchTransition(fromState.value, toState.value, element, toState.params);
        /** @type {?} */
        let isFallbackTransition = false;
        if (!transition) {
            if (!defaultToFallback)
                return;
            transition = trigger.fallbackTransition;
            isFallbackTransition = true;
        }
        this._engine.totalQueuedPlayers++;
        this._queue.push({ element, triggerName, transition, fromState, toState, player, isFallbackTransition });
        if (!isFallbackTransition) {
            addClass(element, QUEUED_CLASSNAME);
            player.onStart((/**
             * @return {?}
             */
            () => { removeClass(element, QUEUED_CLASSNAME); }));
        }
        player.onDone((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let index = this.players.indexOf(player);
            if (index >= 0) {
                this.players.splice(index, 1);
            }
            /** @type {?} */
            const players = this._engine.playersByElement.get(element);
            if (players) {
                /** @type {?} */
                let index = players.indexOf(player);
                if (index >= 0) {
                    players.splice(index, 1);
                }
            }
        }));
        this.players.push(player);
        playersOnElement.push(player);
        return player;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    deregister(name) {
        delete this._triggers[name];
        this._engine.statesByElement.forEach((/**
         * @param {?} stateMap
         * @param {?} element
         * @return {?}
         */
        (stateMap, element) => { delete stateMap[name]; }));
        this._elementListeners.forEach((/**
         * @param {?} listeners
         * @param {?} element
         * @return {?}
         */
        (listeners, element) => {
            this._elementListeners.set(element, listeners.filter((/**
             * @param {?} entry
             * @return {?}
             */
            entry => { return entry.name != name; })));
        }));
    }
    /**
     * @param {?} element
     * @return {?}
     */
    clearElementCache(element) {
        this._engine.statesByElement.delete(element);
        this._elementListeners.delete(element);
        /** @type {?} */
        const elementPlayers = this._engine.playersByElement.get(element);
        if (elementPlayers) {
            elementPlayers.forEach((/**
             * @param {?} player
             * @return {?}
             */
            player => player.destroy()));
            this._engine.playersByElement.delete(element);
        }
    }
    /**
     * @private
     * @param {?} rootElement
     * @param {?} context
     * @return {?}
     */
    _signalRemovalForInnerTriggers(rootElement, context) {
        /** @type {?} */
        const elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true);
        // emulate a leave animation for all inner nodes within this node.
        // If there are no animations found for any of the nodes then clear the cache
        // for the element.
        elements.forEach((/**
         * @param {?} elm
         * @return {?}
         */
        elm => {
            // this means that an inner remove() operation has already kicked off
            // the animation on this element...
            if (elm[REMOVAL_FLAG])
                return;
            /** @type {?} */
            const namespaces = this._engine.fetchNamespacesByElement(elm);
            if (namespaces.size) {
                namespaces.forEach((/**
                 * @param {?} ns
                 * @return {?}
                 */
                ns => ns.triggerLeaveAnimation(elm, context, false, true)));
            }
            else {
                this.clearElementCache(elm);
            }
        }));
        // If the child elements were removed along with the parent, their animations might not
        // have completed. Clear all the elements from the cache so we don't end up with a memory leak.
        this._engine.afterFlushAnimationsDone((/**
         * @return {?}
         */
        () => elements.forEach((/**
         * @param {?} elm
         * @return {?}
         */
        elm => this.clearElementCache(elm)))));
    }
    /**
     * @param {?} element
     * @param {?} context
     * @param {?=} destroyAfterComplete
     * @param {?=} defaultToFallback
     * @return {?}
     */
    triggerLeaveAnimation(element, context, destroyAfterComplete, defaultToFallback) {
        /** @type {?} */
        const triggerStates = this._engine.statesByElement.get(element);
        if (triggerStates) {
            /** @type {?} */
            const players = [];
            Object.keys(triggerStates).forEach((/**
             * @param {?} triggerName
             * @return {?}
             */
            triggerName => {
                // this check is here in the event that an element is removed
                // twice (both on the host level and the component level)
                if (this._triggers[triggerName]) {
                    /** @type {?} */
                    const player = this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);
                    if (player) {
                        players.push(player);
                    }
                }
            }));
            if (players.length) {
                this._engine.markElementAsRemoved(this.id, element, true, context);
                if (destroyAfterComplete) {
                    optimizeGroupPlayer(players).onDone((/**
                     * @return {?}
                     */
                    () => this._engine.processLeaveNode(element)));
                }
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    prepareLeaveAnimationListeners(element) {
        /** @type {?} */
        const listeners = this._elementListeners.get(element);
        if (listeners) {
            /** @type {?} */
            const visitedTriggers = new Set();
            listeners.forEach((/**
             * @param {?} listener
             * @return {?}
             */
            listener => {
                /** @type {?} */
                const triggerName = listener.name;
                if (visitedTriggers.has(triggerName))
                    return;
                visitedTriggers.add(triggerName);
                /** @type {?} */
                const trigger = this._triggers[triggerName];
                /** @type {?} */
                const transition = trigger.fallbackTransition;
                /** @type {?} */
                const elementStates = (/** @type {?} */ (this._engine.statesByElement.get(element)));
                /** @type {?} */
                const fromState = elementStates[triggerName] || DEFAULT_STATE_VALUE;
                /** @type {?} */
                const toState = new StateValue(VOID_VALUE);
                /** @type {?} */
                const player = new TransitionAnimationPlayer(this.id, triggerName, element);
                this._engine.totalQueuedPlayers++;
                this._queue.push({
                    element,
                    triggerName,
                    transition,
                    fromState,
                    toState,
                    player,
                    isFallbackTransition: true
                });
            }));
        }
    }
    /**
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    removeNode(element, context) {
        /** @type {?} */
        const engine = this._engine;
        if (element.childElementCount) {
            this._signalRemovalForInnerTriggers(element, context);
        }
        // this means that a * => VOID animation was detected and kicked off
        if (this.triggerLeaveAnimation(element, context, true))
            return;
        // find the player that is animating and make sure that the
        // removal is delayed until that player has completed
        /** @type {?} */
        let containsPotentialParentTransition = false;
        if (engine.totalAnimations) {
            /** @type {?} */
            const currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
            // when this `if statement` does not continue forward it means that
            // a previous animation query has selected the current element and
            // is animating it. In this situation want to continue forwards and
            // allow the element to be queued up for animation later.
            if (currentPlayers && currentPlayers.length) {
                containsPotentialParentTransition = true;
            }
            else {
                /** @type {?} */
                let parent = element;
                while (parent = parent.parentNode) {
                    /** @type {?} */
                    const triggers = engine.statesByElement.get(parent);
                    if (triggers) {
                        containsPotentialParentTransition = true;
                        break;
                    }
                }
            }
        }
        // at this stage we know that the element will either get removed
        // during flush or will be picked up by a parent query. Either way
        // we need to fire the listeners for this element when it DOES get
        // removed (once the query parent animation is done or after flush)
        this.prepareLeaveAnimationListeners(element);
        // whether or not a parent has an animation we need to delay the deferral of the leave
        // operation until we have more information (which we do after flush() has been called)
        if (containsPotentialParentTransition) {
            engine.markElementAsRemoved(this.id, element, false, context);
        }
        else {
            /** @type {?} */
            const removalFlag = element[REMOVAL_FLAG];
            if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
                // we do this after the flush has occurred such
                // that the callbacks can be fired
                engine.afterFlush((/**
                 * @return {?}
                 */
                () => this.clearElementCache(element)));
                engine.destroyInnerAnimations(element);
                engine._onRemovalComplete(element, context);
            }
        }
    }
    /**
     * @param {?} element
     * @param {?} parent
     * @return {?}
     */
    insertNode(element, parent) { addClass(element, this._hostClassName); }
    /**
     * @param {?} microtaskId
     * @return {?}
     */
    drainQueuedTransitions(microtaskId) {
        /** @type {?} */
        const instructions = [];
        this._queue.forEach((/**
         * @param {?} entry
         * @return {?}
         */
        entry => {
            /** @type {?} */
            const player = entry.player;
            if (player.destroyed)
                return;
            /** @type {?} */
            const element = entry.element;
            /** @type {?} */
            const listeners = this._elementListeners.get(element);
            if (listeners) {
                listeners.forEach((/**
                 * @param {?} listener
                 * @return {?}
                 */
                (listener) => {
                    if (listener.name == entry.triggerName) {
                        /** @type {?} */
                        const baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
                        ((/** @type {?} */ (baseEvent)))['_data'] = microtaskId;
                        listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
                    }
                }));
            }
            if (player.markedForDestroy) {
                this._engine.afterFlush((/**
                 * @return {?}
                 */
                () => {
                    // now we can destroy the element properly since the event listeners have
                    // been bound to the player
                    player.destroy();
                }));
            }
            else {
                instructions.push(entry);
            }
        }));
        this._queue = [];
        return instructions.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            // if depCount == 0 them move to front
            // otherwise if a contains b then move back
            /** @type {?} */
            const d0 = a.transition.ast.depCount;
            /** @type {?} */
            const d1 = b.transition.ast.depCount;
            if (d0 == 0 || d1 == 0) {
                return d0 - d1;
            }
            return this._engine.driver.containsElement(a.element, b.element) ? 1 : -1;
        }));
    }
    /**
     * @param {?} context
     * @return {?}
     */
    destroy(context) {
        this.players.forEach((/**
         * @param {?} p
         * @return {?}
         */
        p => p.destroy()));
        this._signalRemovalForInnerTriggers(this.hostElement, context);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    elementContainsData(element) {
        /** @type {?} */
        let containsData = false;
        if (this._elementListeners.has(element))
            containsData = true;
        containsData =
            (this._queue.find((/**
             * @param {?} entry
             * @return {?}
             */
            entry => entry.element === element)) ? true : false) || containsData;
        return containsData;
    }
}
if (false) {}
/**
 * @record
 */
function QueuedTransition() { }
if (false) {}
class TransitionAnimationEngine {
    /**
     * @param {?} bodyNode
     * @param {?} driver
     * @param {?} _normalizer
     */
    constructor(bodyNode, driver, _normalizer) {
        this.bodyNode = bodyNode;
        this.driver = driver;
        this._normalizer = _normalizer;
        this.players = [];
        this.newHostElements = new Map();
        this.playersByElement = new Map();
        this.playersByQueriedElement = new Map();
        this.statesByElement = new Map();
        this.disabledNodes = new Set();
        this.totalAnimations = 0;
        this.totalQueuedPlayers = 0;
        this._namespaceLookup = {};
        this._namespaceList = [];
        this._flushFns = [];
        this._whenQuietFns = [];
        this.namespacesByHostElement = new Map();
        this.collectedEnterElements = [];
        this.collectedLeaveElements = [];
        // this method is designed to be overridden by the code that uses this engine
        this.onRemovalComplete = (/**
         * @param {?} element
         * @param {?} context
         * @return {?}
         */
        (element, context) => { });
    }
    /**
     * \@internal
     * @param {?} element
     * @param {?} context
     * @return {?}
     */
    _onRemovalComplete(element, context) { this.onRemovalComplete(element, context); }
    /**
     * @return {?}
     */
    get queuedPlayers() {
        /** @type {?} */
        const players = [];
        this._namespaceList.forEach((/**
         * @param {?} ns
         * @return {?}
         */
        ns => {
            ns.players.forEach((/**
             * @param {?} player
             * @return {?}
             */
            player => {
                if (player.queued) {
                    players.push(player);
                }
            }));
        }));
        return players;
    }
    /**
     * @param {?} namespaceId
     * @param {?} hostElement
     * @return {?}
     */
    createNamespace(namespaceId, hostElement) {
        /** @type {?} */
        const ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
        if (hostElement.parentNode) {
            this._balanceNamespaceList(ns, hostElement);
        }
        else {
            // defer this later until flush during when the host element has
            // been inserted so that we know exactly where to place it in
            // the namespace list
            this.newHostElements.set(hostElement, ns);
            // given that this host element is apart of the animation code, it
            // may or may not be inserted by a parent node that is an of an
            // animation renderer type. If this happens then we can still have
            // access to this item when we query for :enter nodes. If the parent
            // is a renderer then the set data-structure will normalize the entry
            this.collectEnterElement(hostElement);
        }
        return this._namespaceLookup[namespaceId] = ns;
    }
    /**
     * @private
     * @param {?} ns
     * @param {?} hostElement
     * @return {?}
     */
    _balanceNamespaceList(ns, hostElement) {
        /** @type {?} */
        const limit = this._namespaceList.length - 1;
        if (limit >= 0) {
            /** @type {?} */
            let found = false;
            for (let i = limit; i >= 0; i--) {
                /** @type {?} */
                const nextNamespace = this._namespaceList[i];
                if (this.driver.containsElement(nextNamespace.hostElement, hostElement)) {
                    this._namespaceList.splice(i + 1, 0, ns);
                    found = true;
                    break;
                }
            }
            if (!found) {
                this._namespaceList.splice(0, 0, ns);
            }
        }
        else {
            this._namespaceList.push(ns);
        }
        this.namespacesByHostElement.set(hostElement, ns);
        return ns;
    }
    /**
     * @param {?} namespaceId
     * @param {?} hostElement
     * @return {?}
     */
    register(namespaceId, hostElement) {
        /** @type {?} */
        let ns = this._namespaceLookup[namespaceId];
        if (!ns) {
            ns = this.createNamespace(namespaceId, hostElement);
        }
        return ns;
    }
    /**
     * @param {?} namespaceId
     * @param {?} name
     * @param {?} trigger
     * @return {?}
     */
    registerTrigger(namespaceId, name, trigger) {
        /** @type {?} */
        let ns = this._namespaceLookup[namespaceId];
        if (ns && ns.register(name, trigger)) {
            this.totalAnimations++;
        }
    }
    /**
     * @param {?} namespaceId
     * @param {?} context
     * @return {?}
     */
    destroy(namespaceId, context) {
        if (!namespaceId)
            return;
        /** @type {?} */
        const ns = this._fetchNamespace(namespaceId);
        this.afterFlush((/**
         * @return {?}
         */
        () => {
            this.namespacesByHostElement.delete(ns.hostElement);
            delete this._namespaceLookup[namespaceId];
            /** @type {?} */
            const index = this._namespaceList.indexOf(ns);
            if (index >= 0) {
                this._namespaceList.splice(index, 1);
            }
        }));
        this.afterFlushAnimationsDone((/**
         * @return {?}
         */
        () => ns.destroy(context)));
    }
    /**
     * @private
     * @param {?} id
     * @return {?}
     */
    _fetchNamespace(id) { return this._namespaceLookup[id]; }
    /**
     * @param {?} element
     * @return {?}
     */
    fetchNamespacesByElement(element) {
        // normally there should only be one namespace per element, however
        // if @triggers are placed on both the component element and then
        // its host element (within the component code) then there will be
        // two namespaces returned. We use a set here to simply the dedupe
        // of namespaces incase there are multiple triggers both the elm and host
        /** @type {?} */
        const namespaces = new Set();
        /** @type {?} */
        const elementStates = this.statesByElement.get(element);
        if (elementStates) {
            /** @type {?} */
            const keys = Object.keys(elementStates);
            for (let i = 0; i < keys.length; i++) {
                /** @type {?} */
                const nsId = elementStates[keys[i]].namespaceId;
                if (nsId) {
                    /** @type {?} */
                    const ns = this._fetchNamespace(nsId);
                    if (ns) {
                        namespaces.add(ns);
                    }
                }
            }
        }
        return namespaces;
    }
    /**
     * @param {?} namespaceId
     * @param {?} element
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    trigger(namespaceId, element, name, value) {
        if (isElementNode(element)) {
            /** @type {?} */
            const ns = this._fetchNamespace(namespaceId);
            if (ns) {
                ns.trigger(element, name, value);
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} namespaceId
     * @param {?} element
     * @param {?} parent
     * @param {?} insertBefore
     * @return {?}
     */
    insertNode(namespaceId, element, parent, insertBefore) {
        if (!isElementNode(element))
            return;
        // special case for when an element is removed and reinserted (move operation)
        // when this occurs we do not want to use the element for deletion later
        /** @type {?} */
        const details = (/** @type {?} */ (element[REMOVAL_FLAG]));
        if (details && details.setForRemoval) {
            details.setForRemoval = false;
            details.setForMove = true;
            /** @type {?} */
            const index = this.collectedLeaveElements.indexOf(element);
            if (index >= 0) {
                this.collectedLeaveElements.splice(index, 1);
            }
        }
        // in the event that the namespaceId is blank then the caller
        // code does not contain any animation code in it, but it is
        // just being called so that the node is marked as being inserted
        if (namespaceId) {
            /** @type {?} */
            const ns = this._fetchNamespace(namespaceId);
            // This if-statement is a workaround for router issue #21947.
            // The router sometimes hits a race condition where while a route
            // is being instantiated a new navigation arrives, triggering leave
            // animation of DOM that has not been fully initialized, until this
            // is resolved, we need to handle the scenario when DOM is not in a
            // consistent state during the animation.
            if (ns) {
                ns.insertNode(element, parent);
            }
        }
        // only *directives and host elements are inserted before
        if (insertBefore) {
            this.collectEnterElement(element);
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    collectEnterElement(element) { this.collectedEnterElements.push(element); }
    /**
     * @param {?} element
     * @param {?} value
     * @return {?}
     */
    markElementAsDisabled(element, value) {
        if (value) {
            if (!this.disabledNodes.has(element)) {
                this.disabledNodes.add(element);
                addClass(element, DISABLED_CLASSNAME);
            }
        }
        else if (this.disabledNodes.has(element)) {
            this.disabledNodes.delete(element);
            removeClass(element, DISABLED_CLASSNAME);
        }
    }
    /**
     * @param {?} namespaceId
     * @param {?} element
     * @param {?} isHostElement
     * @param {?} context
     * @return {?}
     */
    removeNode(namespaceId, element, isHostElement, context) {
        if (isElementNode(element)) {
            /** @type {?} */
            const ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
            if (ns) {
                ns.removeNode(element, context);
            }
            else {
                this.markElementAsRemoved(namespaceId, element, false, context);
            }
            if (isHostElement) {
                /** @type {?} */
                const hostNS = this.namespacesByHostElement.get(element);
                if (hostNS && hostNS.id !== namespaceId) {
                    hostNS.removeNode(element, context);
                }
            }
        }
        else {
            this._onRemovalComplete(element, context);
        }
    }
    /**
     * @param {?} namespaceId
     * @param {?} element
     * @param {?=} hasAnimation
     * @param {?=} context
     * @return {?}
     */
    markElementAsRemoved(namespaceId, element, hasAnimation, context) {
        this.collectedLeaveElements.push(element);
        element[REMOVAL_FLAG] = {
            namespaceId,
            setForRemoval: context, hasAnimation,
            removedBeforeQueried: false
        };
    }
    /**
     * @param {?} namespaceId
     * @param {?} element
     * @param {?} name
     * @param {?} phase
     * @param {?} callback
     * @return {?}
     */
    listen(namespaceId, element, name, phase, callback) {
        if (isElementNode(element)) {
            return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
        }
        return (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @private
     * @param {?} entry
     * @param {?} subTimelines
     * @param {?} enterClassName
     * @param {?} leaveClassName
     * @param {?=} skipBuildAst
     * @return {?}
     */
    _buildInstruction(entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
        return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
    }
    /**
     * @param {?} containerElement
     * @return {?}
     */
    destroyInnerAnimations(containerElement) {
        /** @type {?} */
        let elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
        elements.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => this.destroyActiveAnimationsForElement(element)));
        if (this.playersByQueriedElement.size == 0)
            return;
        elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
        elements.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => this.finishActiveQueriedAnimationOnElement(element)));
    }
    /**
     * @param {?} element
     * @return {?}
     */
    destroyActiveAnimationsForElement(element) {
        /** @type {?} */
        const players = this.playersByElement.get(element);
        if (players) {
            players.forEach((/**
             * @param {?} player
             * @return {?}
             */
            player => {
                // special case for when an element is set for destruction, but hasn't started.
                // in this situation we want to delay the destruction until the flush occurs
                // so that any event listeners attached to the player are triggered.
                if (player.queued) {
                    player.markedForDestroy = true;
                }
                else {
                    player.destroy();
                }
            }));
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    finishActiveQueriedAnimationOnElement(element) {
        /** @type {?} */
        const players = this.playersByQueriedElement.get(element);
        if (players) {
            players.forEach((/**
             * @param {?} player
             * @return {?}
             */
            player => player.finish()));
        }
    }
    /**
     * @return {?}
     */
    whenRenderingDone() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            if (this.players.length) {
                return optimizeGroupPlayer(this.players).onDone((/**
                 * @return {?}
                 */
                () => resolve()));
            }
            else {
                resolve();
            }
        }));
    }
    /**
     * @param {?} element
     * @return {?}
     */
    processLeaveNode(element) {
        /** @type {?} */
        const details = (/** @type {?} */ (element[REMOVAL_FLAG]));
        if (details && details.setForRemoval) {
            // this will prevent it from removing it twice
            element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
            if (details.namespaceId) {
                this.destroyInnerAnimations(element);
                /** @type {?} */
                const ns = this._fetchNamespace(details.namespaceId);
                if (ns) {
                    ns.clearElementCache(element);
                }
            }
            this._onRemovalComplete(element, details.setForRemoval);
        }
        if (this.driver.matchesElement(element, DISABLED_SELECTOR)) {
            this.markElementAsDisabled(element, false);
        }
        this.driver.query(element, DISABLED_SELECTOR, true).forEach((/**
         * @param {?} node
         * @return {?}
         */
        node => {
            this.markElementAsDisabled(node, false);
        }));
    }
    /**
     * @param {?=} microtaskId
     * @return {?}
     */
    flush(microtaskId = -1) {
        /** @type {?} */
        let players = [];
        if (this.newHostElements.size) {
            this.newHostElements.forEach((/**
             * @param {?} ns
             * @param {?} element
             * @return {?}
             */
            (ns, element) => this._balanceNamespaceList(ns, element)));
            this.newHostElements.clear();
        }
        if (this.totalAnimations && this.collectedEnterElements.length) {
            for (let i = 0; i < this.collectedEnterElements.length; i++) {
                /** @type {?} */
                const elm = this.collectedEnterElements[i];
                addClass(elm, STAR_CLASSNAME);
            }
        }
        if (this._namespaceList.length &&
            (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
            /** @type {?} */
            const cleanupFns = [];
            try {
                players = this._flushAnimations(cleanupFns, microtaskId);
            }
            finally {
                for (let i = 0; i < cleanupFns.length; i++) {
                    cleanupFns[i]();
                }
            }
        }
        else {
            for (let i = 0; i < this.collectedLeaveElements.length; i++) {
                /** @type {?} */
                const element = this.collectedLeaveElements[i];
                this.processLeaveNode(element);
            }
        }
        this.totalQueuedPlayers = 0;
        this.collectedEnterElements.length = 0;
        this.collectedLeaveElements.length = 0;
        this._flushFns.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        fn => fn()));
        this._flushFns = [];
        if (this._whenQuietFns.length) {
            // we move these over to a variable so that
            // if any new callbacks are registered in another
            // flush they do not populate the existing set
            /** @type {?} */
            const quietFns = this._whenQuietFns;
            this._whenQuietFns = [];
            if (players.length) {
                optimizeGroupPlayer(players).onDone((/**
                 * @return {?}
                 */
                () => { quietFns.forEach((/**
                 * @param {?} fn
                 * @return {?}
                 */
                fn => fn())); }));
            }
            else {
                quietFns.forEach((/**
                 * @param {?} fn
                 * @return {?}
                 */
                fn => fn()));
            }
        }
    }
    /**
     * @param {?} errors
     * @return {?}
     */
    reportError(errors) {
        throw new Error(`Unable to process animations due to the following failed trigger transitions\n ${errors.join('\n')}`);
    }
    /**
     * @private
     * @param {?} cleanupFns
     * @param {?} microtaskId
     * @return {?}
     */
    _flushAnimations(cleanupFns, microtaskId) {
        /** @type {?} */
        const subTimelines = new ElementInstructionMap();
        /** @type {?} */
        const skippedPlayers = [];
        /** @type {?} */
        const skippedPlayersMap = new Map();
        /** @type {?} */
        const queuedInstructions = [];
        /** @type {?} */
        const queriedElements = new Map();
        /** @type {?} */
        const allPreStyleElements = new Map();
        /** @type {?} */
        const allPostStyleElements = new Map();
        /** @type {?} */
        const disabledElementsSet = new Set();
        this.disabledNodes.forEach((/**
         * @param {?} node
         * @return {?}
         */
        node => {
            disabledElementsSet.add(node);
            /** @type {?} */
            const nodesThatAreDisabled = this.driver.query(node, QUEUED_SELECTOR, true);
            for (let i = 0; i < nodesThatAreDisabled.length; i++) {
                disabledElementsSet.add(nodesThatAreDisabled[i]);
            }
        }));
        /** @type {?} */
        const bodyNode = this.bodyNode;
        /** @type {?} */
        const allTriggerElements = Array.from(this.statesByElement.keys());
        /** @type {?} */
        const enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements);
        // this must occur before the instructions are built below such that
        // the :enter queries match the elements (since the timeline queries
        // are fired during instruction building).
        /** @type {?} */
        const enterNodeMapIds = new Map();
        /** @type {?} */
        let i = 0;
        enterNodeMap.forEach((/**
         * @param {?} nodes
         * @param {?} root
         * @return {?}
         */
        (nodes, root) => {
            /** @type {?} */
            const className = ENTER_CLASSNAME + i++;
            enterNodeMapIds.set(root, className);
            nodes.forEach((/**
             * @param {?} node
             * @return {?}
             */
            node => addClass(node, className)));
        }));
        /** @type {?} */
        const allLeaveNodes = [];
        /** @type {?} */
        const mergedLeaveNodes = new Set();
        /** @type {?} */
        const leaveNodesWithoutAnimations = new Set();
        for (let i = 0; i < this.collectedLeaveElements.length; i++) {
            /** @type {?} */
            const element = this.collectedLeaveElements[i];
            /** @type {?} */
            const details = (/** @type {?} */ (element[REMOVAL_FLAG]));
            if (details && details.setForRemoval) {
                allLeaveNodes.push(element);
                mergedLeaveNodes.add(element);
                if (details.hasAnimation) {
                    this.driver.query(element, STAR_SELECTOR, true).forEach((/**
                     * @param {?} elm
                     * @return {?}
                     */
                    elm => mergedLeaveNodes.add(elm)));
                }
                else {
                    leaveNodesWithoutAnimations.add(element);
                }
            }
        }
        /** @type {?} */
        const leaveNodeMapIds = new Map();
        /** @type {?} */
        const leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
        leaveNodeMap.forEach((/**
         * @param {?} nodes
         * @param {?} root
         * @return {?}
         */
        (nodes, root) => {
            /** @type {?} */
            const className = LEAVE_CLASSNAME + i++;
            leaveNodeMapIds.set(root, className);
            nodes.forEach((/**
             * @param {?} node
             * @return {?}
             */
            node => addClass(node, className)));
        }));
        cleanupFns.push((/**
         * @return {?}
         */
        () => {
            enterNodeMap.forEach((/**
             * @param {?} nodes
             * @param {?} root
             * @return {?}
             */
            (nodes, root) => {
                /** @type {?} */
                const className = (/** @type {?} */ (enterNodeMapIds.get(root)));
                nodes.forEach((/**
                 * @param {?} node
                 * @return {?}
                 */
                node => removeClass(node, className)));
            }));
            leaveNodeMap.forEach((/**
             * @param {?} nodes
             * @param {?} root
             * @return {?}
             */
            (nodes, root) => {
                /** @type {?} */
                const className = (/** @type {?} */ (leaveNodeMapIds.get(root)));
                nodes.forEach((/**
                 * @param {?} node
                 * @return {?}
                 */
                node => removeClass(node, className)));
            }));
            allLeaveNodes.forEach((/**
             * @param {?} element
             * @return {?}
             */
            element => { this.processLeaveNode(element); }));
        }));
        /** @type {?} */
        const allPlayers = [];
        /** @type {?} */
        const erroneousTransitions = [];
        for (let i = this._namespaceList.length - 1; i >= 0; i--) {
            /** @type {?} */
            const ns = this._namespaceList[i];
            ns.drainQueuedTransitions(microtaskId).forEach((/**
             * @param {?} entry
             * @return {?}
             */
            entry => {
                /** @type {?} */
                const player = entry.player;
                /** @type {?} */
                const element = entry.element;
                allPlayers.push(player);
                if (this.collectedEnterElements.length) {
                    /** @type {?} */
                    const details = (/** @type {?} */ (element[REMOVAL_FLAG]));
                    // move animations are currently not supported...
                    if (details && details.setForMove) {
                        player.destroy();
                        return;
                    }
                }
                /** @type {?} */
                const nodeIsOrphaned = !bodyNode || !this.driver.containsElement(bodyNode, element);
                /** @type {?} */
                const leaveClassName = (/** @type {?} */ (leaveNodeMapIds.get(element)));
                /** @type {?} */
                const enterClassName = (/** @type {?} */ (enterNodeMapIds.get(element)));
                /** @type {?} */
                const instruction = (/** @type {?} */ (this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned)));
                if (instruction.errors && instruction.errors.length) {
                    erroneousTransitions.push(instruction);
                    return;
                }
                // even though the element may not be apart of the DOM, it may
                // still be added at a later point (due to the mechanics of content
                // projection and/or dynamic component insertion) therefore it's
                // important we still style the element.
                if (nodeIsOrphaned) {
                    player.onStart((/**
                     * @return {?}
                     */
                    () => eraseStyles(element, instruction.fromStyles)));
                    player.onDestroy((/**
                     * @return {?}
                     */
                    () => setStyles(element, instruction.toStyles)));
                    skippedPlayers.push(player);
                    return;
                }
                // if a unmatched transition is queued to go then it SHOULD NOT render
                // an animation and cancel the previously running animations.
                if (entry.isFallbackTransition) {
                    player.onStart((/**
                     * @return {?}
                     */
                    () => eraseStyles(element, instruction.fromStyles)));
                    player.onDestroy((/**
                     * @return {?}
                     */
                    () => setStyles(element, instruction.toStyles)));
                    skippedPlayers.push(player);
                    return;
                }
                // this means that if a parent animation uses this animation as a sub trigger
                // then it will instruct the timeline builder to not add a player delay, but
                // instead stretch the first keyframe gap up until the animation starts. The
                // reason this is important is to prevent extra initialization styles from being
                // required by the user in the animation.
                instruction.timelines.forEach((/**
                 * @param {?} tl
                 * @return {?}
                 */
                tl => tl.stretchStartingKeyframe = true));
                subTimelines.append(element, instruction.timelines);
                /** @type {?} */
                const tuple = { instruction, player, element };
                queuedInstructions.push(tuple);
                instruction.queriedElements.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                element => getOrSetAsInMap(queriedElements, element, []).push(player)));
                instruction.preStyleProps.forEach((/**
                 * @param {?} stringMap
                 * @param {?} element
                 * @return {?}
                 */
                (stringMap, element) => {
                    /** @type {?} */
                    const props = Object.keys(stringMap);
                    if (props.length) {
                        /** @type {?} */
                        let setVal = (/** @type {?} */ (allPreStyleElements.get(element)));
                        if (!setVal) {
                            allPreStyleElements.set(element, setVal = new Set());
                        }
                        props.forEach((/**
                         * @param {?} prop
                         * @return {?}
                         */
                        prop => setVal.add(prop)));
                    }
                }));
                instruction.postStyleProps.forEach((/**
                 * @param {?} stringMap
                 * @param {?} element
                 * @return {?}
                 */
                (stringMap, element) => {
                    /** @type {?} */
                    const props = Object.keys(stringMap);
                    /** @type {?} */
                    let setVal = (/** @type {?} */ (allPostStyleElements.get(element)));
                    if (!setVal) {
                        allPostStyleElements.set(element, setVal = new Set());
                    }
                    props.forEach((/**
                     * @param {?} prop
                     * @return {?}
                     */
                    prop => setVal.add(prop)));
                }));
            }));
        }
        if (erroneousTransitions.length) {
            /** @type {?} */
            const errors = [];
            erroneousTransitions.forEach((/**
             * @param {?} instruction
             * @return {?}
             */
            instruction => {
                errors.push(`@${instruction.triggerName} has failed due to:\n`);
                (/** @type {?} */ (instruction.errors)).forEach((/**
                 * @param {?} error
                 * @return {?}
                 */
                error => errors.push(`- ${error}\n`)));
            }));
            allPlayers.forEach((/**
             * @param {?} player
             * @return {?}
             */
            player => player.destroy()));
            this.reportError(errors);
        }
        /** @type {?} */
        const allPreviousPlayersMap = new Map();
        // this map works to tell which element in the DOM tree is contained by
        // which animation. Further down below this map will get populated once
        // the players are built and in doing so it can efficiently figure out
        // if a sub player is skipped due to a parent player having priority.
        /** @type {?} */
        const animationElementMap = new Map();
        queuedInstructions.forEach((/**
         * @param {?} entry
         * @return {?}
         */
        entry => {
            /** @type {?} */
            const element = entry.element;
            if (subTimelines.has(element)) {
                animationElementMap.set(element, element);
                this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
            }
        }));
        skippedPlayers.forEach((/**
         * @param {?} player
         * @return {?}
         */
        player => {
            /** @type {?} */
            const element = player.element;
            /** @type {?} */
            const previousPlayers = this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
            previousPlayers.forEach((/**
             * @param {?} prevPlayer
             * @return {?}
             */
            prevPlayer => {
                getOrSetAsInMap(allPreviousPlayersMap, element, []).push(prevPlayer);
                prevPlayer.destroy();
            }));
        }));
        // this is a special case for nodes that will be removed (either by)
        // having their own leave animations or by being queried in a container
        // that will be removed once a parent animation is complete. The idea
        // here is that * styles must be identical to ! styles because of
        // backwards compatibility (* is also filled in by default in many places).
        // Otherwise * styles will return an empty value or auto since the element
        // that is being getComputedStyle'd will not be visible (since * = destination)
        /** @type {?} */
        const replaceNodes = allLeaveNodes.filter((/**
         * @param {?} node
         * @return {?}
         */
        node => {
            return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
        }));
        // POST STAGE: fill the * styles
        /** @type {?} */
        const postStylesMap = new Map();
        /** @type {?} */
        const allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"]);
        allLeaveQueriedNodes.forEach((/**
         * @param {?} node
         * @return {?}
         */
        node => {
            if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
                replaceNodes.push(node);
            }
        }));
        // PRE STAGE: fill the ! styles
        /** @type {?} */
        const preStylesMap = new Map();
        enterNodeMap.forEach((/**
         * @param {?} nodes
         * @param {?} root
         * @return {?}
         */
        (nodes, root) => {
            cloakAndComputeStyles(preStylesMap, this.driver, new Set(nodes), allPreStyleElements, _angular_animations__WEBPACK_IMPORTED_MODULE_0__["ɵPRE_STYLE"]);
        }));
        replaceNodes.forEach((/**
         * @param {?} node
         * @return {?}
         */
        node => {
            /** @type {?} */
            const post = postStylesMap.get(node);
            /** @type {?} */
            const pre = preStylesMap.get(node);
            postStylesMap.set(node, (/** @type {?} */ (Object.assign(Object.assign({}, post), pre))));
        }));
        /** @type {?} */
        const rootPlayers = [];
        /** @type {?} */
        const subPlayers = [];
        /** @type {?} */
        const NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
        queuedInstructions.forEach((/**
         * @param {?} entry
         * @return {?}
         */
        entry => {
            const { element, player, instruction } = entry;
            // this means that it was never consumed by a parent animation which
            // means that it is independent and therefore should be set for animation
            if (subTimelines.has(element)) {
                if (disabledElementsSet.has(element)) {
                    player.onDestroy((/**
                     * @return {?}
                     */
                    () => setStyles(element, instruction.toStyles)));
                    player.disabled = true;
                    player.overrideTotalTime(instruction.totalTime);
                    skippedPlayers.push(player);
                    return;
                }
                // this will flow up the DOM and query the map to figure out
                // if a parent animation has priority over it. In the situation
                // that a parent is detected then it will cancel the loop. If
                // nothing is detected, or it takes a few hops to find a parent,
                // then it will fill in the missing nodes and signal them as having
                // a detected parent (or a NO_PARENT value via a special constant).
                /** @type {?} */
                let parentWithAnimation = NO_PARENT_ANIMATION_ELEMENT_DETECTED;
                if (animationElementMap.size > 1) {
                    /** @type {?} */
                    let elm = element;
                    /** @type {?} */
                    const parentsToAdd = [];
                    while (elm = elm.parentNode) {
                        /** @type {?} */
                        const detectedParent = animationElementMap.get(elm);
                        if (detectedParent) {
                            parentWithAnimation = detectedParent;
                            break;
                        }
                        parentsToAdd.push(elm);
                    }
                    parentsToAdd.forEach((/**
                     * @param {?} parent
                     * @return {?}
                     */
                    parent => animationElementMap.set(parent, parentWithAnimation)));
                }
                /** @type {?} */
                const innerPlayer = this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
                player.setRealPlayer(innerPlayer);
                if (parentWithAnimation === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
                    rootPlayers.push(player);
                }
                else {
                    /** @type {?} */
                    const parentPlayers = this.playersByElement.get(parentWithAnimation);
                    if (parentPlayers && parentPlayers.length) {
                        player.parentPlayer = optimizeGroupPlayer(parentPlayers);
                    }
                    skippedPlayers.push(player);
                }
            }
            else {
                eraseStyles(element, instruction.fromStyles);
                player.onDestroy((/**
                 * @return {?}
                 */
                () => setStyles(element, instruction.toStyles)));
                // there still might be a ancestor player animating this
                // element therefore we will still add it as a sub player
                // even if its animation may be disabled
                subPlayers.push(player);
                if (disabledElementsSet.has(element)) {
                    skippedPlayers.push(player);
                }
            }
        }));
        // find all of the sub players' corresponding inner animation player
        subPlayers.forEach((/**
         * @param {?} player
         * @return {?}
         */
        player => {
            // even if any players are not found for a sub animation then it
            // will still complete itself after the next tick since it's Noop
            /** @type {?} */
            const playersForElement = skippedPlayersMap.get(player.element);
            if (playersForElement && playersForElement.length) {
                /** @type {?} */
                const innerPlayer = optimizeGroupPlayer(playersForElement);
                player.setRealPlayer(innerPlayer);
            }
        }));
        // the reason why we don't actually play the animation is
        // because all that a skipped player is designed to do is to
        // fire the start/done transition callback events
        skippedPlayers.forEach((/**
         * @param {?} player
         * @return {?}
         */
        player => {
            if (player.parentPlayer) {
                player.syncPlayerEvents(player.parentPlayer);
            }
            else {
                player.destroy();
            }
        }));
        // run through all of the queued removals and see if they
        // were picked up by a query. If not then perform the removal
        // operation right away unless a parent animation is ongoing.
        for (let i = 0; i < allLeaveNodes.length; i++) {
            /** @type {?} */
            const element = allLeaveNodes[i];
            /** @type {?} */
            const details = (/** @type {?} */ (element[REMOVAL_FLAG]));
            removeClass(element, LEAVE_CLASSNAME);
            // this means the element has a removal animation that is being
            // taken care of and therefore the inner elements will hang around
            // until that animation is over (or the parent queried animation)
            if (details && details.hasAnimation)
                continue;
            /** @type {?} */
            let players = [];
            // if this element is queried or if it contains queried children
            // then we want for the element not to be removed from the page
            // until the queried animations have finished
            if (queriedElements.size) {
                /** @type {?} */
                let queriedPlayerResults = queriedElements.get(element);
                if (queriedPlayerResults && queriedPlayerResults.length) {
                    players.push(...queriedPlayerResults);
                }
                /** @type {?} */
                let queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
                for (let j = 0; j < queriedInnerElements.length; j++) {
                    /** @type {?} */
                    let queriedPlayers = queriedElements.get(queriedInnerElements[j]);
                    if (queriedPlayers && queriedPlayers.length) {
                        players.push(...queriedPlayers);
                    }
                }
            }
            /** @type {?} */
            const activePlayers = players.filter((/**
             * @param {?} p
             * @return {?}
             */
            p => !p.destroyed));
            if (activePlayers.length) {
                removeNodesAfterAnimationDone(this, element, activePlayers);
            }
            else {
                this.processLeaveNode(element);
            }
        }
        // this is required so the cleanup method doesn't remove them
        allLeaveNodes.length = 0;
        rootPlayers.forEach((/**
         * @param {?} player
         * @return {?}
         */
        player => {
            this.players.push(player);
            player.onDone((/**
             * @return {?}
             */
            () => {
                player.destroy();
                /** @type {?} */
                const index = this.players.indexOf(player);
                this.players.splice(index, 1);
            }));
            player.play();
        }));
        return rootPlayers;
    }
    /**
     * @param {?} namespaceId
     * @param {?} element
     * @return {?}
     */
    elementContainsData(namespaceId, element) {
        /** @type {?} */
        let containsData = false;
        /** @type {?} */
        const details = (/** @type {?} */ (element[REMOVAL_FLAG]));
        if (details && details.setForRemoval)
            containsData = true;
        if (this.playersByElement.has(element))
            containsData = true;
        if (this.playersByQueriedElement.has(element))
            containsData = true;
        if (this.statesByElement.has(element))
            containsData = true;
        return this._fetchNamespace(namespaceId).elementContainsData(element) || containsData;
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    afterFlush(callback) { this._flushFns.push(callback); }
    /**
     * @param {?} callback
     * @return {?}
     */
    afterFlushAnimationsDone(callback) { this._whenQuietFns.push(callback); }
    /**
     * @private
     * @param {?} element
     * @param {?} isQueriedElement
     * @param {?=} namespaceId
     * @param {?=} triggerName
     * @param {?=} toStateValue
     * @return {?}
     */
    _getPreviousPlayers(element, isQueriedElement, namespaceId, triggerName, toStateValue) {
        /** @type {?} */
        let players = [];
        if (isQueriedElement) {
            /** @type {?} */
            const queriedElementPlayers = this.playersByQueriedElement.get(element);
            if (queriedElementPlayers) {
                players = queriedElementPlayers;
            }
        }
        else {
            /** @type {?} */
            const elementPlayers = this.playersByElement.get(element);
            if (elementPlayers) {
                /** @type {?} */
                const isRemovalAnimation = !toStateValue || toStateValue == VOID_VALUE;
                elementPlayers.forEach((/**
                 * @param {?} player
                 * @return {?}
                 */
                player => {
                    if (player.queued)
                        return;
                    if (!isRemovalAnimation && player.triggerName != triggerName)
                        return;
                    players.push(player);
                }));
            }
        }
        if (namespaceId || triggerName) {
            players = players.filter((/**
             * @param {?} player
             * @return {?}
             */
            player => {
                if (namespaceId && namespaceId != player.namespaceId)
                    return false;
                if (triggerName && triggerName != player.triggerName)
                    return false;
                return true;
            }));
        }
        return players;
    }
    /**
     * @private
     * @param {?} namespaceId
     * @param {?} instruction
     * @param {?} allPreviousPlayersMap
     * @return {?}
     */
    _beforeAnimationBuild(namespaceId, instruction, allPreviousPlayersMap) {
        /** @type {?} */
        const triggerName = instruction.triggerName;
        /** @type {?} */
        const rootElement = instruction.element;
        // when a removal animation occurs, ALL previous players are collected
        // and destroyed (even if they are outside of the current namespace)
        /** @type {?} */
        const targetNameSpaceId = instruction.isRemovalTransition ? undefined : namespaceId;
        /** @type {?} */
        const targetTriggerName = instruction.isRemovalTransition ? undefined : triggerName;
        for (const timelineInstruction of instruction.timelines) {
            /** @type {?} */
            const element = timelineInstruction.element;
            /** @type {?} */
            const isQueriedElement = element !== rootElement;
            /** @type {?} */
            const players = getOrSetAsInMap(allPreviousPlayersMap, element, []);
            /** @type {?} */
            const previousPlayers = this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
            previousPlayers.forEach((/**
             * @param {?} player
             * @return {?}
             */
            player => {
                /** @type {?} */
                const realPlayer = (/** @type {?} */ (((/** @type {?} */ (player))).getRealPlayer()));
                if (realPlayer.beforeDestroy) {
                    realPlayer.beforeDestroy();
                }
                player.destroy();
                players.push(player);
            }));
        }
        // this needs to be done so that the PRE/POST styles can be
        // computed properly without interfering with the previous animation
        eraseStyles(rootElement, instruction.fromStyles);
    }
    /**
     * @private
     * @param {?} namespaceId
     * @param {?} instruction
     * @param {?} allPreviousPlayersMap
     * @param {?} skippedPlayersMap
     * @param {?} preStylesMap
     * @param {?} postStylesMap
     * @return {?}
     */
    _buildAnimation(namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
        /** @type {?} */
        const triggerName = instruction.triggerName;
        /** @type {?} */
        const rootElement = instruction.element;
        // we first run this so that the previous animation player
        // data can be passed into the successive animation players
        /** @type {?} */
        const allQueriedPlayers = [];
        /** @type {?} */
        const allConsumedElements = new Set();
        /** @type {?} */
        const allSubElements = new Set();
        /** @type {?} */
        const allNewPlayers = instruction.timelines.map((/**
         * @param {?} timelineInstruction
         * @return {?}
         */
        timelineInstruction => {
            /** @type {?} */
            const element = timelineInstruction.element;
            allConsumedElements.add(element);
            // FIXME (matsko): make sure to-be-removed animations are removed properly
            /** @type {?} */
            const details = element[REMOVAL_FLAG];
            if (details && details.removedBeforeQueried)
                return new _angular_animations__WEBPACK_IMPORTED_MODULE_0__["NoopAnimationPlayer"](timelineInstruction.duration, timelineInstruction.delay);
            /** @type {?} */
            const isQueriedElement = element !== rootElement;
            /** @type {?} */
            const previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY)
                .map((/**
             * @param {?} p
             * @return {?}
             */
            p => p.getRealPlayer())))
                .filter((/**
             * @param {?} p
             * @return {?}
             */
            p => {
                // the `element` is not apart of the AnimationPlayer definition, but
                // Mock/WebAnimations
                // use the element within their implementation. This will be added in Angular5 to
                // AnimationPlayer
                /** @type {?} */
                const pp = (/** @type {?} */ (p));
                return pp.element ? pp.element === element : false;
            }));
            /** @type {?} */
            const preStyles = preStylesMap.get(element);
            /** @type {?} */
            const postStyles = postStylesMap.get(element);
            /** @type {?} */
            const keyframes = normalizeKeyframes(this.driver, this._normalizer, element, timelineInstruction.keyframes, preStyles, postStyles);
            /** @type {?} */
            const player = this._buildPlayer(timelineInstruction, keyframes, previousPlayers);
            // this means that this particular player belongs to a sub trigger. It is
            // important that we match this player up with the corresponding (@trigger.listener)
            if (timelineInstruction.subTimeline && skippedPlayersMap) {
                allSubElements.add(element);
            }
            if (isQueriedElement) {
                /** @type {?} */
                const wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
                wrappedPlayer.setRealPlayer(player);
                allQueriedPlayers.push(wrappedPlayer);
            }
            return player;
        }));
        allQueriedPlayers.forEach((/**
         * @param {?} player
         * @return {?}
         */
        player => {
            getOrSetAsInMap(this.playersByQueriedElement, player.element, []).push(player);
            player.onDone((/**
             * @return {?}
             */
            () => deleteOrUnsetInMap(this.playersByQueriedElement, player.element, player)));
        }));
        allConsumedElements.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => addClass(element, NG_ANIMATING_CLASSNAME)));
        /** @type {?} */
        const player = optimizeGroupPlayer(allNewPlayers);
        player.onDestroy((/**
         * @return {?}
         */
        () => {
            allConsumedElements.forEach((/**
             * @param {?} element
             * @return {?}
             */
            element => removeClass(element, NG_ANIMATING_CLASSNAME)));
            setStyles(rootElement, instruction.toStyles);
        }));
        // this basically makes all of the callbacks for sub element animations
        // be dependent on the upper players for when they finish
        allSubElements.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => { getOrSetAsInMap(skippedPlayersMap, element, []).push(player); }));
        return player;
    }
    /**
     * @private
     * @param {?} instruction
     * @param {?} keyframes
     * @param {?} previousPlayers
     * @return {?}
     */
    _buildPlayer(instruction, keyframes, previousPlayers) {
        if (keyframes.length > 0) {
            return this.driver.animate(instruction.element, keyframes, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
        }
        // special case for when an empty transition|definition is provided
        // ... there is no point in rendering an empty animation
        return new _angular_animations__WEBPACK_IMPORTED_MODULE_0__["NoopAnimationPlayer"](instruction.duration, instruction.delay);
    }
}
if (false) {}
class TransitionAnimationPlayer {
    /**
     * @param {?} namespaceId
     * @param {?} triggerName
     * @param {?} element
     */
    constructor(namespaceId, triggerName, element) {
        this.namespaceId = namespaceId;
        this.triggerName = triggerName;
        this.element = element;
        this._player = new _angular_animations__WEBPACK_IMPORTED_MODULE_0__["NoopAnimationPlayer"]();
        this._containsRealPlayer = false;
        this._queuedCallbacks = {};
        this.destroyed = false;
        this.markedForDestroy = false;
        this.disabled = false;
        this.queued = true;
        this.totalTime = 0;
    }
    /**
     * @param {?} player
     * @return {?}
     */
    setRealPlayer(player) {
        if (this._containsRealPlayer)
            return;
        this._player = player;
        Object.keys(this._queuedCallbacks).forEach((/**
         * @param {?} phase
         * @return {?}
         */
        phase => {
            this._queuedCallbacks[phase].forEach((/**
             * @param {?} callback
             * @return {?}
             */
            callback => listenOnPlayer(player, phase, undefined, callback)));
        }));
        this._queuedCallbacks = {};
        this._containsRealPlayer = true;
        this.overrideTotalTime(player.totalTime);
        ((/** @type {?} */ (this))).queued = false;
    }
    /**
     * @return {?}
     */
    getRealPlayer() { return this._player; }
    /**
     * @param {?} totalTime
     * @return {?}
     */
    overrideTotalTime(totalTime) { ((/** @type {?} */ (this))).totalTime = totalTime; }
    /**
     * @param {?} player
     * @return {?}
     */
    syncPlayerEvents(player) {
        /** @type {?} */
        const p = (/** @type {?} */ (this._player));
        if (p.triggerCallback) {
            player.onStart((/**
             * @return {?}
             */
            () => (/** @type {?} */ (p.triggerCallback))('start')));
        }
        player.onDone((/**
         * @return {?}
         */
        () => this.finish()));
        player.onDestroy((/**
         * @return {?}
         */
        () => this.destroy()));
    }
    /**
     * @private
     * @param {?} name
     * @param {?} callback
     * @return {?}
     */
    _queueEvent(name, callback) {
        getOrSetAsInMap(this._queuedCallbacks, name, []).push(callback);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    onDone(fn) {
        if (this.queued) {
            this._queueEvent('done', fn);
        }
        this._player.onDone(fn);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    onStart(fn) {
        if (this.queued) {
            this._queueEvent('start', fn);
        }
        this._player.onStart(fn);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    onDestroy(fn) {
        if (this.queued) {
            this._queueEvent('destroy', fn);
        }
        this._player.onDestroy(fn);
    }
    /**
     * @return {?}
     */
    init() { this._player.init(); }
    /**
     * @return {?}
     */
    hasStarted() { return this.queued ? false : this._player.hasStarted(); }
    /**
     * @return {?}
     */
    play() { !this.queued && this._player.play(); }
    /**
     * @return {?}
     */
    pause() { !this.queued && this._player.pause(); }
    /**
     * @return {?}
     */
    restart() { !this.queued && this._player.restart(); }
    /**
     * @return {?}
     */
    finish() { this._player.finish(); }
    /**
     * @return {?}
     */
    destroy() {
        ((/** @type {?} */ (this))).destroyed = true;
        this._player.destroy();
    }
    /**
     * @return {?}
     */
    reset() { !this.queued && this._player.reset(); }
    /**
     * @param {?} p
     * @return {?}
     */
    setPosition(p) {
        if (!this.queued) {
            this._player.setPosition(p);
        }
    }
    /**
     * @return {?}
     */
    getPosition() { return this.queued ? 0 : this._player.getPosition(); }
    /**
     * \@internal
     * @param {?} phaseName
     * @return {?}
     */
    triggerCallback(phaseName) {
        /** @type {?} */
        const p = (/** @type {?} */ (this._player));
        if (p.triggerCallback) {
            p.triggerCallback(phaseName);
        }
    }
}
if (false) {}
/**
 * @param {?} map
 * @param {?} key
 * @param {?} value
 * @return {?}
 */
function deleteOrUnsetInMap(map, key, value) {
    /** @type {?} */
    let currentValues;
    if (map instanceof Map) {
        currentValues = map.get(key);
        if (currentValues) {
            if (currentValues.length) {
                /** @type {?} */
                const index = currentValues.indexOf(value);
                currentValues.splice(index, 1);
            }
            if (currentValues.length == 0) {
                map.delete(key);
            }
        }
    }
    else {
        currentValues = map[key];
        if (currentValues) {
            if (currentValues.length) {
                /** @type {?} */
                const index = currentValues.indexOf(value);
                currentValues.splice(index, 1);
            }
            if (currentValues.length == 0) {
                delete map[key];
            }
        }
    }
    return currentValues;
}
/**
 * @param {?} value
 * @return {?}
 */
function normalizeTriggerValue(value) {
    // we use `!= null` here because it's the most simple
    // way to test against a "falsy" value without mixing
    // in empty strings or a zero value. DO NOT OPTIMIZE.
    return value != null ? value : null;
}
/**
 * @param {?} node
 * @return {?}
 */
function isElementNode(node) {
    return node && node['nodeType'] === 1;
}
/**
 * @param {?} eventName
 * @return {?}
 */
function isTriggerEventValid(eventName) {
    return eventName == 'start' || eventName == 'done';
}
/**
 * @param {?} element
 * @param {?=} value
 * @return {?}
 */
function cloakElement(element, value) {
    /** @type {?} */
    const oldValue = element.style.display;
    element.style.display = value != null ? value : 'none';
    return oldValue;
}
/**
 * @param {?} valuesMap
 * @param {?} driver
 * @param {?} elements
 * @param {?} elementPropsMap
 * @param {?} defaultStyle
 * @return {?}
 */
function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
    /** @type {?} */
    const cloakVals = [];
    elements.forEach((/**
     * @param {?} element
     * @return {?}
     */
    element => cloakVals.push(cloakElement(element))));
    /** @type {?} */
    const failedElements = [];
    elementPropsMap.forEach((/**
     * @param {?} props
     * @param {?} element
     * @return {?}
     */
    (props, element) => {
        /** @type {?} */
        const styles = {};
        props.forEach((/**
         * @param {?} prop
         * @return {?}
         */
        prop => {
            /** @type {?} */
            const value = styles[prop] = driver.computeStyle(element, prop, defaultStyle);
            // there is no easy way to detect this because a sub element could be removed
            // by a parent animation element being detached.
            if (!value || value.length == 0) {
                element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
                failedElements.push(element);
            }
        }));
        valuesMap.set(element, styles);
    }));
    // we use a index variable here since Set.forEach(a, i) does not return
    // an index value for the closure (but instead just the value)
    /** @type {?} */
    let i = 0;
    elements.forEach((/**
     * @param {?} element
     * @return {?}
     */
    element => cloakElement(element, cloakVals[i++])));
    return failedElements;
}
/*
Since the Angular renderer code will return a collection of inserted
nodes in all areas of a DOM tree, it's up to this algorithm to figure
out which nodes are roots for each animation @trigger.

By placing each inserted node into a Set and traversing upwards, it
is possible to find the @trigger elements and well any direct *star
insertion nodes, if a @trigger root is found then the enter element
is placed into the Map[@trigger] spot.
 */
/**
 * @param {?} roots
 * @param {?} nodes
 * @return {?}
 */
function buildRootMap(roots, nodes) {
    /** @type {?} */
    const rootMap = new Map();
    roots.forEach((/**
     * @param {?} root
     * @return {?}
     */
    root => rootMap.set(root, [])));
    if (nodes.length == 0)
        return rootMap;
    /** @type {?} */
    const NULL_NODE = 1;
    /** @type {?} */
    const nodeSet = new Set(nodes);
    /** @type {?} */
    const localRootMap = new Map();
    /**
     * @param {?} node
     * @return {?}
     */
    function getRoot(node) {
        if (!node)
            return NULL_NODE;
        /** @type {?} */
        let root = localRootMap.get(node);
        if (root)
            return root;
        /** @type {?} */
        const parent = node.parentNode;
        if (rootMap.has(parent)) { // ngIf inside @trigger
            root = parent;
        }
        else if (nodeSet.has(parent)) { // ngIf inside ngIf
            root = NULL_NODE;
        }
        else { // recurse upwards
            root = getRoot(parent);
        }
        localRootMap.set(node, root);
        return root;
    }
    nodes.forEach((/**
     * @param {?} node
     * @return {?}
     */
    node => {
        /** @type {?} */
        const root = getRoot(node);
        if (root !== NULL_NODE) {
            (/** @type {?} */ (rootMap.get(root))).push(node);
        }
    }));
    return rootMap;
}
/** @type {?} */
const CLASSES_CACHE_KEY = '$$classes';
/**
 * @param {?} element
 * @param {?} className
 * @return {?}
 */
function containsClass(element, className) {
    if (element.classList) {
        return element.classList.contains(className);
    }
    else {
        /** @type {?} */
        const classes = element[CLASSES_CACHE_KEY];
        return classes && classes[className];
    }
}
/**
 * @param {?} element
 * @param {?} className
 * @return {?}
 */
function addClass(element, className) {
    if (element.classList) {
        element.classList.add(className);
    }
    else {
        /** @type {?} */
        let classes = element[CLASSES_CACHE_KEY];
        if (!classes) {
            classes = element[CLASSES_CACHE_KEY] = {};
        }
        classes[className] = true;
    }
}
/**
 * @param {?} element
 * @param {?} className
 * @return {?}
 */
function removeClass(element, className) {
    if (element.classList) {
        element.classList.remove(className);
    }
    else {
        /** @type {?} */
        let classes = element[CLASSES_CACHE_KEY];
        if (classes) {
            delete classes[className];
        }
    }
}
/**
 * @param {?} engine
 * @param {?} element
 * @param {?} players
 * @return {?}
 */
function removeNodesAfterAnimationDone(engine, element, players) {
    optimizeGroupPlayer(players).onDone((/**
     * @return {?}
     */
    () => engine.processLeaveNode(element)));
}
/**
 * @param {?} players
 * @return {?}
 */
function flattenGroupPlayers(players) {
    /** @type {?} */
    const finalPlayers = [];
    _flattenGroupPlayersRecur(players, finalPlayers);
    return finalPlayers;
}
/**
 * @param {?} players
 * @param {?} finalPlayers
 * @return {?}
 */
function _flattenGroupPlayersRecur(players, finalPlayers) {
    for (let i = 0; i < players.length; i++) {
        /** @type {?} */
        const player = players[i];
        if (player instanceof _angular_animations__WEBPACK_IMPORTED_MODULE_0__["ɵAnimationGroupPlayer"]) {
            _flattenGroupPlayersRecur(player.players, finalPlayers);
        }
        else {
            finalPlayers.push(player);
        }
    }
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function objEquals(a, b) {
    /** @type {?} */
    const k1 = Object.keys(a);
    /** @type {?} */
    const k2 = Object.keys(b);
    if (k1.length != k2.length)
        return false;
    for (let i = 0; i < k1.length; i++) {
        /** @type {?} */
        const prop = k1[i];
        if (!b.hasOwnProperty(prop) || a[prop] !== b[prop])
            return false;
    }
    return true;
}
/**
 * @param {?} element
 * @param {?} allPreStyleElements
 * @param {?} allPostStyleElements
 * @return {?}
 */
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
    /** @type {?} */
    const postEntry = allPostStyleElements.get(element);
    if (!postEntry)
        return false;
    /** @type {?} */
    let preEntry = allPreStyleElements.get(element);
    if (preEntry) {
        postEntry.forEach((/**
         * @param {?} data
         * @return {?}
         */
        data => (/** @type {?} */ (preEntry)).add(data)));
    }
    else {
        allPreStyleElements.set(element, postEntry);
    }
    allPostStyleElements.delete(element);
    return true;
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/render/animation_engine_next.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AnimationEngine {
    /**
     * @param {?} bodyNode
     * @param {?} _driver
     * @param {?} normalizer
     */
    constructor(bodyNode, _driver, normalizer) {
        this.bodyNode = bodyNode;
        this._driver = _driver;
        this._triggerCache = {};
        // this method is designed to be overridden by the code that uses this engine
        this.onRemovalComplete = (/**
         * @param {?} element
         * @param {?} context
         * @return {?}
         */
        (element, context) => { });
        this._transitionEngine = new TransitionAnimationEngine(bodyNode, _driver, normalizer);
        this._timelineEngine = new TimelineAnimationEngine(bodyNode, _driver, normalizer);
        this._transitionEngine.onRemovalComplete = (/**
         * @param {?} element
         * @param {?} context
         * @return {?}
         */
        (element, context) => this.onRemovalComplete(element, context));
    }
    /**
     * @param {?} componentId
     * @param {?} namespaceId
     * @param {?} hostElement
     * @param {?} name
     * @param {?} metadata
     * @return {?}
     */
    registerTrigger(componentId, namespaceId, hostElement, name, metadata) {
        /** @type {?} */
        const cacheKey = componentId + '-' + name;
        /** @type {?} */
        let trigger = this._triggerCache[cacheKey];
        if (!trigger) {
            /** @type {?} */
            const errors = [];
            /** @type {?} */
            const ast = (/** @type {?} */ (buildAnimationAst(this._driver, (/** @type {?} */ (metadata)), errors)));
            if (errors.length) {
                throw new Error(`The animation trigger "${name}" has failed to build due to the following errors:\n - ${errors.join("\n - ")}`);
            }
            trigger = buildTrigger(name, ast);
            this._triggerCache[cacheKey] = trigger;
        }
        this._transitionEngine.registerTrigger(namespaceId, name, trigger);
    }
    /**
     * @param {?} namespaceId
     * @param {?} hostElement
     * @return {?}
     */
    register(namespaceId, hostElement) {
        this._transitionEngine.register(namespaceId, hostElement);
    }
    /**
     * @param {?} namespaceId
     * @param {?} context
     * @return {?}
     */
    destroy(namespaceId, context) {
        this._transitionEngine.destroy(namespaceId, context);
    }
    /**
     * @param {?} namespaceId
     * @param {?} element
     * @param {?} parent
     * @param {?} insertBefore
     * @return {?}
     */
    onInsert(namespaceId, element, parent, insertBefore) {
        this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
    }
    /**
     * @param {?} namespaceId
     * @param {?} element
     * @param {?} context
     * @param {?=} isHostElement
     * @return {?}
     */
    onRemove(namespaceId, element, context, isHostElement) {
        this._transitionEngine.removeNode(namespaceId, element, isHostElement || false, context);
    }
    /**
     * @param {?} element
     * @param {?} disable
     * @return {?}
     */
    disableAnimations(element, disable) {
        this._transitionEngine.markElementAsDisabled(element, disable);
    }
    /**
     * @param {?} namespaceId
     * @param {?} element
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    process(namespaceId, element, property, value) {
        if (property.charAt(0) == '@') {
            const [id, action] = parseTimelineCommand(property);
            /** @type {?} */
            const args = (/** @type {?} */ (value));
            this._timelineEngine.command(id, element, action, args);
        }
        else {
            this._transitionEngine.trigger(namespaceId, element, property, value);
        }
    }
    /**
     * @param {?} namespaceId
     * @param {?} element
     * @param {?} eventName
     * @param {?} eventPhase
     * @param {?} callback
     * @return {?}
     */
    listen(namespaceId, element, eventName, eventPhase, callback) {
        // @@listen
        if (eventName.charAt(0) == '@') {
            const [id, action] = parseTimelineCommand(eventName);
            return this._timelineEngine.listen(id, element, action, callback);
        }
        return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
    }
    /**
     * @param {?=} microtaskId
     * @return {?}
     */
    flush(microtaskId = -1) { this._transitionEngine.flush(microtaskId); }
    /**
     * @return {?}
     */
    get players() {
        return ((/** @type {?} */ (this._transitionEngine.players)))
            .concat((/** @type {?} */ (this._timelineEngine.players)));
    }
    /**
     * @return {?}
     */
    whenRenderingDone() { return this._transitionEngine.whenRenderingDone(); }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/render/special_cased_styles.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns an instance of `SpecialCasedStyles` if and when any special (non animateable) styles are
 * detected.
 *
 * In CSS there exist properties that cannot be animated within a keyframe animation
 * (whether it be via CSS keyframes or web-animations) and the animation implementation
 * will ignore them. This function is designed to detect those special cased styles and
 * return a container that will be executed at the start and end of the animation.
 *
 * @param {?} element
 * @param {?} styles
 * @return {?} an instance of `SpecialCasedStyles` if any special styles are detected otherwise `null`
 */
function packageNonAnimatableStyles(element, styles) {
    /** @type {?} */
    let startStyles = null;
    /** @type {?} */
    let endStyles = null;
    if (Array.isArray(styles) && styles.length) {
        startStyles = filterNonAnimatableStyles(styles[0]);
        if (styles.length > 1) {
            endStyles = filterNonAnimatableStyles(styles[styles.length - 1]);
        }
    }
    else if (styles) {
        startStyles = filterNonAnimatableStyles(styles);
    }
    return (startStyles || endStyles) ? new SpecialCasedStyles(element, startStyles, endStyles) :
        null;
}
/**
 * Designed to be executed during a keyframe-based animation to apply any special-cased styles.
 *
 * When started (when the `start()` method is run) then the provided `startStyles`
 * will be applied. When finished (when the `finish()` method is called) the
 * `endStyles` will be applied as well any any starting styles. Finally when
 * `destroy()` is called then all styles will be removed.
 */
class SpecialCasedStyles {
    /**
     * @param {?} _element
     * @param {?} _startStyles
     * @param {?} _endStyles
     */
    constructor(_element, _startStyles, _endStyles) {
        this._element = _element;
        this._startStyles = _startStyles;
        this._endStyles = _endStyles;
        this._state = 0 /* Pending */;
        /** @type {?} */
        let initialStyles = SpecialCasedStyles.initialStylesByElement.get(_element);
        if (!initialStyles) {
            SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = {});
        }
        this._initialStyles = initialStyles;
    }
    /**
     * @return {?}
     */
    start() {
        if (this._state < 1 /* Started */) {
            if (this._startStyles) {
                setStyles(this._element, this._startStyles, this._initialStyles);
            }
            this._state = 1 /* Started */;
        }
    }
    /**
     * @return {?}
     */
    finish() {
        this.start();
        if (this._state < 2 /* Finished */) {
            setStyles(this._element, this._initialStyles);
            if (this._endStyles) {
                setStyles(this._element, this._endStyles);
                this._endStyles = null;
            }
            this._state = 1 /* Started */;
        }
    }
    /**
     * @return {?}
     */
    destroy() {
        this.finish();
        if (this._state < 3 /* Destroyed */) {
            SpecialCasedStyles.initialStylesByElement.delete(this._element);
            if (this._startStyles) {
                eraseStyles(this._element, this._startStyles);
                this._endStyles = null;
            }
            if (this._endStyles) {
                eraseStyles(this._element, this._endStyles);
                this._endStyles = null;
            }
            setStyles(this._element, this._initialStyles);
            this._state = 3 /* Destroyed */;
        }
    }
}
SpecialCasedStyles.initialStylesByElement = new WeakMap();
if (false) {}
/** @enum {number} */
const SpecialCasedStylesState = {
    Pending: 0,
    Started: 1,
    Finished: 2,
    Destroyed: 3,
};
/**
 * @param {?} styles
 * @return {?}
 */
function filterNonAnimatableStyles(styles) {
    /** @type {?} */
    let result = null;
    /** @type {?} */
    const props = Object.keys(styles);
    for (let i = 0; i < props.length; i++) {
        /** @type {?} */
        const prop = props[i];
        if (isNonAnimatableStyle(prop)) {
            result = result || {};
            result[prop] = styles[prop];
        }
    }
    return result;
}
/**
 * @param {?} prop
 * @return {?}
 */
function isNonAnimatableStyle(prop) {
    return prop === 'display' || prop === 'position';
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/render/css_keyframes/element_animation_style_handler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * @type {?}
 */
const ELAPSED_TIME_MAX_DECIMAL_PLACES = 3;
/** @type {?} */
const ANIMATION_PROP = 'animation';
/** @type {?} */
const ANIMATIONEND_EVENT = 'animationend';
/** @type {?} */
const ONE_SECOND$1 = 1000;
class ElementAnimationStyleHandler {
    /**
     * @param {?} _element
     * @param {?} _name
     * @param {?} _duration
     * @param {?} _delay
     * @param {?} _easing
     * @param {?} _fillMode
     * @param {?} _onDoneFn
     */
    constructor(_element, _name, _duration, _delay, _easing, _fillMode, _onDoneFn) {
        this._element = _element;
        this._name = _name;
        this._duration = _duration;
        this._delay = _delay;
        this._easing = _easing;
        this._fillMode = _fillMode;
        this._onDoneFn = _onDoneFn;
        this._finished = false;
        this._destroyed = false;
        this._startTime = 0;
        this._position = 0;
        this._eventFn = (/**
         * @param {?} e
         * @return {?}
         */
        (e) => this._handleCallback(e));
    }
    /**
     * @return {?}
     */
    apply() {
        applyKeyframeAnimation(this._element, `${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`);
        addRemoveAnimationEvent(this._element, this._eventFn, false);
        this._startTime = Date.now();
    }
    /**
     * @return {?}
     */
    pause() { playPauseAnimation(this._element, this._name, 'paused'); }
    /**
     * @return {?}
     */
    resume() { playPauseAnimation(this._element, this._name, 'running'); }
    /**
     * @param {?} position
     * @return {?}
     */
    setPosition(position) {
        /** @type {?} */
        const index = findIndexForAnimation(this._element, this._name);
        this._position = position * this._duration;
        setAnimationStyle(this._element, 'Delay', `-${this._position}ms`, index);
    }
    /**
     * @return {?}
     */
    getPosition() { return this._position; }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    _handleCallback(event) {
        /** @type {?} */
        const timestamp = event._ngTestManualTimestamp || Date.now();
        /** @type {?} */
        const elapsedTime = parseFloat(event.elapsedTime.toFixed(ELAPSED_TIME_MAX_DECIMAL_PLACES)) * ONE_SECOND$1;
        if (event.animationName == this._name &&
            Math.max(timestamp - this._startTime, 0) >= this._delay && elapsedTime >= this._duration) {
            this.finish();
        }
    }
    /**
     * @return {?}
     */
    finish() {
        if (this._finished)
            return;
        this._finished = true;
        this._onDoneFn();
        addRemoveAnimationEvent(this._element, this._eventFn, true);
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this._destroyed)
            return;
        this._destroyed = true;
        this.finish();
        removeKeyframeAnimation(this._element, this._name);
    }
}
if (false) {}
/**
 * @param {?} element
 * @param {?} name
 * @param {?} status
 * @return {?}
 */
function playPauseAnimation(element, name, status) {
    /** @type {?} */
    const index = findIndexForAnimation(element, name);
    setAnimationStyle(element, 'PlayState', status, index);
}
/**
 * @param {?} element
 * @param {?} value
 * @return {?}
 */
function applyKeyframeAnimation(element, value) {
    /** @type {?} */
    const anim = getAnimationStyle(element, '').trim();
    /** @type {?} */
    let index = 0;
    if (anim.length) {
        index = countChars(anim, ',') + 1;
        value = `${anim}, ${value}`;
    }
    setAnimationStyle(element, '', value);
    return index;
}
/**
 * @param {?} element
 * @param {?} name
 * @return {?}
 */
function removeKeyframeAnimation(element, name) {
    /** @type {?} */
    const anim = getAnimationStyle(element, '');
    /** @type {?} */
    const tokens = anim.split(',');
    /** @type {?} */
    const index = findMatchingTokenIndex(tokens, name);
    if (index >= 0) {
        tokens.splice(index, 1);
        /** @type {?} */
        const newValue = tokens.join(',');
        setAnimationStyle(element, '', newValue);
    }
}
/**
 * @param {?} element
 * @param {?} value
 * @return {?}
 */
function findIndexForAnimation(element, value) {
    /** @type {?} */
    const anim = getAnimationStyle(element, '');
    if (anim.indexOf(',') > 0) {
        /** @type {?} */
        const tokens = anim.split(',');
        return findMatchingTokenIndex(tokens, value);
    }
    return findMatchingTokenIndex([anim], value);
}
/**
 * @param {?} tokens
 * @param {?} searchToken
 * @return {?}
 */
function findMatchingTokenIndex(tokens, searchToken) {
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i].indexOf(searchToken) >= 0) {
            return i;
        }
    }
    return -1;
}
/**
 * @param {?} element
 * @param {?} fn
 * @param {?} doRemove
 * @return {?}
 */
function addRemoveAnimationEvent(element, fn, doRemove) {
    doRemove ? element.removeEventListener(ANIMATIONEND_EVENT, fn) :
        element.addEventListener(ANIMATIONEND_EVENT, fn);
}
/**
 * @param {?} element
 * @param {?} name
 * @param {?} value
 * @param {?=} index
 * @return {?}
 */
function setAnimationStyle(element, name, value, index) {
    /** @type {?} */
    const prop = ANIMATION_PROP + name;
    if (index != null) {
        /** @type {?} */
        const oldValue = element.style[prop];
        if (oldValue.length) {
            /** @type {?} */
            const tokens = oldValue.split(',');
            tokens[index] = value;
            value = tokens.join(',');
        }
    }
    element.style[prop] = value;
}
/**
 * @param {?} element
 * @param {?} name
 * @return {?}
 */
function getAnimationStyle(element, name) {
    return element.style[ANIMATION_PROP + name];
}
/**
 * @param {?} value
 * @param {?} char
 * @return {?}
 */
function countChars(value, char) {
    /** @type {?} */
    let count = 0;
    for (let i = 0; i < value.length; i++) {
        /** @type {?} */
        const c = value.charAt(i);
        if (c === char)
            count++;
    }
    return count;
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/render/css_keyframes/css_keyframes_player.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_FILL_MODE = 'forwards';
/** @type {?} */
const DEFAULT_EASING = 'linear';
/** @enum {number} */
const AnimatorControlState = {
    INITIALIZED: 1, STARTED: 2, FINISHED: 3, DESTROYED: 4,
};
class CssKeyframesPlayer {
    /**
     * @param {?} element
     * @param {?} keyframes
     * @param {?} animationName
     * @param {?} _duration
     * @param {?} _delay
     * @param {?} easing
     * @param {?} _finalStyles
     * @param {?=} _specialStyles
     */
    constructor(element, keyframes, animationName, _duration, _delay, easing, _finalStyles, _specialStyles) {
        this.element = element;
        this.keyframes = keyframes;
        this.animationName = animationName;
        this._duration = _duration;
        this._delay = _delay;
        this._finalStyles = _finalStyles;
        this._specialStyles = _specialStyles;
        this._onDoneFns = [];
        this._onStartFns = [];
        this._onDestroyFns = [];
        this._started = false;
        this.currentSnapshot = {};
        this._state = 0;
        this.easing = easing || DEFAULT_EASING;
        this.totalTime = _duration + _delay;
        this._buildStyler();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    onStart(fn) { this._onStartFns.push(fn); }
    /**
     * @param {?} fn
     * @return {?}
     */
    onDone(fn) { this._onDoneFns.push(fn); }
    /**
     * @param {?} fn
     * @return {?}
     */
    onDestroy(fn) { this._onDestroyFns.push(fn); }
    /**
     * @return {?}
     */
    destroy() {
        this.init();
        if (this._state >= 4 /* DESTROYED */)
            return;
        this._state = 4 /* DESTROYED */;
        this._styler.destroy();
        this._flushStartFns();
        this._flushDoneFns();
        if (this._specialStyles) {
            this._specialStyles.destroy();
        }
        this._onDestroyFns.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        fn => fn()));
        this._onDestroyFns = [];
    }
    /**
     * @private
     * @return {?}
     */
    _flushDoneFns() {
        this._onDoneFns.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        fn => fn()));
        this._onDoneFns = [];
    }
    /**
     * @private
     * @return {?}
     */
    _flushStartFns() {
        this._onStartFns.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        fn => fn()));
        this._onStartFns = [];
    }
    /**
     * @return {?}
     */
    finish() {
        this.init();
        if (this._state >= 3 /* FINISHED */)
            return;
        this._state = 3 /* FINISHED */;
        this._styler.finish();
        this._flushStartFns();
        if (this._specialStyles) {
            this._specialStyles.finish();
        }
        this._flushDoneFns();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setPosition(value) { this._styler.setPosition(value); }
    /**
     * @return {?}
     */
    getPosition() { return this._styler.getPosition(); }
    /**
     * @return {?}
     */
    hasStarted() { return this._state >= 2 /* STARTED */; }
    /**
     * @return {?}
     */
    init() {
        if (this._state >= 1 /* INITIALIZED */)
            return;
        this._state = 1 /* INITIALIZED */;
        /** @type {?} */
        const elm = this.element;
        this._styler.apply();
        if (this._delay) {
            this._styler.pause();
        }
    }
    /**
     * @return {?}
     */
    play() {
        this.init();
        if (!this.hasStarted()) {
            this._flushStartFns();
            this._state = 2 /* STARTED */;
            if (this._specialStyles) {
                this._specialStyles.start();
            }
        }
        this._styler.resume();
    }
    /**
     * @return {?}
     */
    pause() {
        this.init();
        this._styler.pause();
    }
    /**
     * @return {?}
     */
    restart() {
        this.reset();
        this.play();
    }
    /**
     * @return {?}
     */
    reset() {
        this._styler.destroy();
        this._buildStyler();
        this._styler.apply();
    }
    /**
     * @private
     * @return {?}
     */
    _buildStyler() {
        this._styler = new ElementAnimationStyleHandler(this.element, this.animationName, this._duration, this._delay, this.easing, DEFAULT_FILL_MODE, (/**
         * @return {?}
         */
        () => this.finish()));
    }
    /**
     * \@internal
     * @param {?} phaseName
     * @return {?}
     */
    triggerCallback(phaseName) {
        /** @type {?} */
        const methods = phaseName == 'start' ? this._onStartFns : this._onDoneFns;
        methods.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        fn => fn()));
        methods.length = 0;
    }
    /**
     * @return {?}
     */
    beforeDestroy() {
        this.init();
        /** @type {?} */
        const styles = {};
        if (this.hasStarted()) {
            /** @type {?} */
            const finished = this._state >= 3 /* FINISHED */;
            Object.keys(this._finalStyles).forEach((/**
             * @param {?} prop
             * @return {?}
             */
            prop => {
                if (prop != 'offset') {
                    styles[prop] = finished ? this._finalStyles[prop] : computeStyle(this.element, prop);
                }
            }));
        }
        this.currentSnapshot = styles;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/render/css_keyframes/direct_style_player.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DirectStylePlayer extends _angular_animations__WEBPACK_IMPORTED_MODULE_0__["NoopAnimationPlayer"] {
    /**
     * @param {?} element
     * @param {?} styles
     */
    constructor(element, styles) {
        super();
        this.element = element;
        this._startingStyles = {};
        this.__initialized = false;
        this._styles = hypenatePropsObject(styles);
    }
    /**
     * @return {?}
     */
    init() {
        if (this.__initialized || !this._startingStyles)
            return;
        this.__initialized = true;
        Object.keys(this._styles).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        prop => {
            (/** @type {?} */ (this._startingStyles))[prop] = this.element.style[prop];
        }));
        super.init();
    }
    /**
     * @return {?}
     */
    play() {
        if (!this._startingStyles)
            return;
        this.init();
        Object.keys(this._styles)
            .forEach((/**
         * @param {?} prop
         * @return {?}
         */
        prop => this.element.style.setProperty(prop, this._styles[prop])));
        super.play();
    }
    /**
     * @return {?}
     */
    destroy() {
        if (!this._startingStyles)
            return;
        Object.keys(this._startingStyles).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        prop => {
            /** @type {?} */
            const value = (/** @type {?} */ (this._startingStyles))[prop];
            if (value) {
                this.element.style.setProperty(prop, value);
            }
            else {
                this.element.style.removeProperty(prop);
            }
        }));
        this._startingStyles = null;
        super.destroy();
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/render/css_keyframes/css_keyframes_driver.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const KEYFRAMES_NAME_PREFIX = 'gen_css_kf_';
/** @type {?} */
const TAB_SPACE = ' ';
class CssKeyframesDriver {
    constructor() {
        this._count = 0;
        this._head = document.querySelector('head');
        this._warningIssued = false;
    }
    /**
     * @param {?} prop
     * @return {?}
     */
    validateStyleProperty(prop) { return validateStyleProperty(prop); }
    /**
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    matchesElement(element, selector) {
        return matchesElement(element, selector);
    }
    /**
     * @param {?} elm1
     * @param {?} elm2
     * @return {?}
     */
    containsElement(elm1, elm2) { return containsElement(elm1, elm2); }
    /**
     * @param {?} element
     * @param {?} selector
     * @param {?} multi
     * @return {?}
     */
    query(element, selector, multi) {
        return invokeQuery(element, selector, multi);
    }
    /**
     * @param {?} element
     * @param {?} prop
     * @param {?=} defaultValue
     * @return {?}
     */
    computeStyle(element, prop, defaultValue) {
        return (/** @type {?} */ (((/** @type {?} */ (window.getComputedStyle(element))))[prop]));
    }
    /**
     * @param {?} element
     * @param {?} name
     * @param {?} keyframes
     * @return {?}
     */
    buildKeyframeElement(element, name, keyframes) {
        keyframes = keyframes.map((/**
         * @param {?} kf
         * @return {?}
         */
        kf => hypenatePropsObject(kf)));
        /** @type {?} */
        let keyframeStr = `@keyframes ${name} {\n`;
        /** @type {?} */
        let tab = '';
        keyframes.forEach((/**
         * @param {?} kf
         * @return {?}
         */
        kf => {
            tab = TAB_SPACE;
            /** @type {?} */
            const offset = parseFloat(kf['offset']);
            keyframeStr += `${tab}${offset * 100}% {\n`;
            tab += TAB_SPACE;
            Object.keys(kf).forEach((/**
             * @param {?} prop
             * @return {?}
             */
            prop => {
                /** @type {?} */
                const value = kf[prop];
                switch (prop) {
                    case 'offset':
                        return;
                    case 'easing':
                        if (value) {
                            keyframeStr += `${tab}animation-timing-function: ${value};\n`;
                        }
                        return;
                    default:
                        keyframeStr += `${tab}${prop}: ${value};\n`;
                        return;
                }
            }));
            keyframeStr += `${tab}}\n`;
        }));
        keyframeStr += `}\n`;
        /** @type {?} */
        const kfElm = document.createElement('style');
        kfElm.innerHTML = keyframeStr;
        return kfElm;
    }
    /**
     * @param {?} element
     * @param {?} keyframes
     * @param {?} duration
     * @param {?} delay
     * @param {?} easing
     * @param {?=} previousPlayers
     * @param {?=} scrubberAccessRequested
     * @return {?}
     */
    animate(element, keyframes, duration, delay, easing, previousPlayers = [], scrubberAccessRequested) {
        if (scrubberAccessRequested) {
            this._notifyFaultyScrubber();
        }
        /** @type {?} */
        const previousCssKeyframePlayers = (/** @type {?} */ (previousPlayers.filter((/**
         * @param {?} player
         * @return {?}
         */
        player => player instanceof CssKeyframesPlayer))));
        /** @type {?} */
        const previousStyles = {};
        if (allowPreviousPlayerStylesMerge(duration, delay)) {
            previousCssKeyframePlayers.forEach((/**
             * @param {?} player
             * @return {?}
             */
            player => {
                /** @type {?} */
                let styles = player.currentSnapshot;
                Object.keys(styles).forEach((/**
                 * @param {?} prop
                 * @return {?}
                 */
                prop => previousStyles[prop] = styles[prop]));
            }));
        }
        keyframes = balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles);
        /** @type {?} */
        const finalStyles = flattenKeyframesIntoStyles(keyframes);
        // if there is no animation then there is no point in applying
        // styles and waiting for an event to get fired. This causes lag.
        // It's better to just directly apply the styles to the element
        // via the direct styling animation player.
        if (duration == 0) {
            return new DirectStylePlayer(element, finalStyles);
        }
        /** @type {?} */
        const animationName = `${KEYFRAMES_NAME_PREFIX}${this._count++}`;
        /** @type {?} */
        const kfElm = this.buildKeyframeElement(element, animationName, keyframes);
        (/** @type {?} */ (document.querySelector('head'))).appendChild(kfElm);
        /** @type {?} */
        const specialStyles = packageNonAnimatableStyles(element, keyframes);
        /** @type {?} */
        const player = new CssKeyframesPlayer(element, keyframes, animationName, duration, delay, easing, finalStyles, specialStyles);
        player.onDestroy((/**
         * @return {?}
         */
        () => removeElement(kfElm)));
        return player;
    }
    /**
     * @private
     * @return {?}
     */
    _notifyFaultyScrubber() {
        if (!this._warningIssued) {
            console.warn('@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n', '  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill.');
            this._warningIssued = true;
        }
    }
}
if (false) {}
/**
 * @param {?} keyframes
 * @return {?}
 */
function flattenKeyframesIntoStyles(keyframes) {
    /** @type {?} */
    let flatKeyframes = {};
    if (keyframes) {
        /** @type {?} */
        const kfs = Array.isArray(keyframes) ? keyframes : [keyframes];
        kfs.forEach((/**
         * @param {?} kf
         * @return {?}
         */
        kf => {
            Object.keys(kf).forEach((/**
             * @param {?} prop
             * @return {?}
             */
            prop => {
                if (prop == 'offset' || prop == 'easing')
                    return;
                flatKeyframes[prop] = kf[prop];
            }));
        }));
    }
    return flatKeyframes;
}
/**
 * @param {?} node
 * @return {?}
 */
function removeElement(node) {
    node.parentNode.removeChild(node);
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/render/web_animations/web_animations_player.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WebAnimationsPlayer {
    /**
     * @param {?} element
     * @param {?} keyframes
     * @param {?} options
     * @param {?=} _specialStyles
     */
    constructor(element, keyframes, options, _specialStyles) {
        this.element = element;
        this.keyframes = keyframes;
        this.options = options;
        this._specialStyles = _specialStyles;
        this._onDoneFns = [];
        this._onStartFns = [];
        this._onDestroyFns = [];
        this._initialized = false;
        this._finished = false;
        this._started = false;
        this._destroyed = false;
        this.time = 0;
        this.parentPlayer = null;
        this.currentSnapshot = {};
        this._duration = (/** @type {?} */ (options['duration']));
        this._delay = (/** @type {?} */ (options['delay'])) || 0;
        this.time = this._duration + this._delay;
    }
    /**
     * @private
     * @return {?}
     */
    _onFinish() {
        if (!this._finished) {
            this._finished = true;
            this._onDoneFns.forEach((/**
             * @param {?} fn
             * @return {?}
             */
            fn => fn()));
            this._onDoneFns = [];
        }
    }
    /**
     * @return {?}
     */
    init() {
        this._buildPlayer();
        this._preparePlayerBeforeStart();
    }
    /**
     * @private
     * @return {?}
     */
    _buildPlayer() {
        if (this._initialized)
            return;
        this._initialized = true;
        /** @type {?} */
        const keyframes = this.keyframes;
        ((/** @type {?} */ (this))).domPlayer =
            this._triggerWebAnimation(this.element, keyframes, this.options);
        this._finalKeyframe = keyframes.length ? keyframes[keyframes.length - 1] : {};
        this.domPlayer.addEventListener('finish', (/**
         * @return {?}
         */
        () => this._onFinish()));
    }
    /**
     * @private
     * @return {?}
     */
    _preparePlayerBeforeStart() {
        // this is required so that the player doesn't start to animate right away
        if (this._delay) {
            this._resetDomPlayerState();
        }
        else {
            this.domPlayer.pause();
        }
    }
    /**
     * \@internal
     * @param {?} element
     * @param {?} keyframes
     * @param {?} options
     * @return {?}
     */
    _triggerWebAnimation(element, keyframes, options) {
        // jscompiler doesn't seem to know animate is a native property because it's not fully
        // supported yet across common browsers (we polyfill it for Edge/Safari) [CL #143630929]
        return (/** @type {?} */ (element['animate'](keyframes, options)));
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    onStart(fn) { this._onStartFns.push(fn); }
    /**
     * @param {?} fn
     * @return {?}
     */
    onDone(fn) { this._onDoneFns.push(fn); }
    /**
     * @param {?} fn
     * @return {?}
     */
    onDestroy(fn) { this._onDestroyFns.push(fn); }
    /**
     * @return {?}
     */
    play() {
        this._buildPlayer();
        if (!this.hasStarted()) {
            this._onStartFns.forEach((/**
             * @param {?} fn
             * @return {?}
             */
            fn => fn()));
            this._onStartFns = [];
            this._started = true;
            if (this._specialStyles) {
                this._specialStyles.start();
            }
        }
        this.domPlayer.play();
    }
    /**
     * @return {?}
     */
    pause() {
        this.init();
        this.domPlayer.pause();
    }
    /**
     * @return {?}
     */
    finish() {
        this.init();
        if (this._specialStyles) {
            this._specialStyles.finish();
        }
        this._onFinish();
        this.domPlayer.finish();
    }
    /**
     * @return {?}
     */
    reset() {
        this._resetDomPlayerState();
        this._destroyed = false;
        this._finished = false;
        this._started = false;
    }
    /**
     * @private
     * @return {?}
     */
    _resetDomPlayerState() {
        if (this.domPlayer) {
            this.domPlayer.cancel();
        }
    }
    /**
     * @return {?}
     */
    restart() {
        this.reset();
        this.play();
    }
    /**
     * @return {?}
     */
    hasStarted() { return this._started; }
    /**
     * @return {?}
     */
    destroy() {
        if (!this._destroyed) {
            this._destroyed = true;
            this._resetDomPlayerState();
            this._onFinish();
            if (this._specialStyles) {
                this._specialStyles.destroy();
            }
            this._onDestroyFns.forEach((/**
             * @param {?} fn
             * @return {?}
             */
            fn => fn()));
            this._onDestroyFns = [];
        }
    }
    /**
     * @param {?} p
     * @return {?}
     */
    setPosition(p) { this.domPlayer.currentTime = p * this.time; }
    /**
     * @return {?}
     */
    getPosition() { return this.domPlayer.currentTime / this.time; }
    /**
     * @return {?}
     */
    get totalTime() { return this._delay + this._duration; }
    /**
     * @return {?}
     */
    beforeDestroy() {
        /** @type {?} */
        const styles = {};
        if (this.hasStarted()) {
            Object.keys(this._finalKeyframe).forEach((/**
             * @param {?} prop
             * @return {?}
             */
            prop => {
                if (prop != 'offset') {
                    styles[prop] =
                        this._finished ? this._finalKeyframe[prop] : computeStyle(this.element, prop);
                }
            }));
        }
        this.currentSnapshot = styles;
    }
    /**
     * \@internal
     * @param {?} phaseName
     * @return {?}
     */
    triggerCallback(phaseName) {
        /** @type {?} */
        const methods = phaseName == 'start' ? this._onStartFns : this._onDoneFns;
        methods.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        fn => fn()));
        methods.length = 0;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/render/web_animations/web_animations_driver.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WebAnimationsDriver {
    constructor() {
        this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(getElementAnimateFn().toString());
        this._cssKeyframesDriver = new CssKeyframesDriver();
    }
    /**
     * @param {?} prop
     * @return {?}
     */
    validateStyleProperty(prop) { return validateStyleProperty(prop); }
    /**
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    matchesElement(element, selector) {
        return matchesElement(element, selector);
    }
    /**
     * @param {?} elm1
     * @param {?} elm2
     * @return {?}
     */
    containsElement(elm1, elm2) { return containsElement(elm1, elm2); }
    /**
     * @param {?} element
     * @param {?} selector
     * @param {?} multi
     * @return {?}
     */
    query(element, selector, multi) {
        return invokeQuery(element, selector, multi);
    }
    /**
     * @param {?} element
     * @param {?} prop
     * @param {?=} defaultValue
     * @return {?}
     */
    computeStyle(element, prop, defaultValue) {
        return (/** @type {?} */ (((/** @type {?} */ (window.getComputedStyle(element))))[prop]));
    }
    /**
     * @param {?} supported
     * @return {?}
     */
    overrideWebAnimationsSupport(supported) { this._isNativeImpl = supported; }
    /**
     * @param {?} element
     * @param {?} keyframes
     * @param {?} duration
     * @param {?} delay
     * @param {?} easing
     * @param {?=} previousPlayers
     * @param {?=} scrubberAccessRequested
     * @return {?}
     */
    animate(element, keyframes, duration, delay, easing, previousPlayers = [], scrubberAccessRequested) {
        /** @type {?} */
        const useKeyframes = !scrubberAccessRequested && !this._isNativeImpl;
        if (useKeyframes) {
            return this._cssKeyframesDriver.animate(element, keyframes, duration, delay, easing, previousPlayers);
        }
        /** @type {?} */
        const fill = delay == 0 ? 'both' : 'forwards';
        /** @type {?} */
        const playerOptions = { duration, delay, fill };
        // we check for this to avoid having a null|undefined value be present
        // for the easing (which results in an error for certain browsers #9752)
        if (easing) {
            playerOptions['easing'] = easing;
        }
        /** @type {?} */
        const previousStyles = {};
        /** @type {?} */
        const previousWebAnimationPlayers = (/** @type {?} */ (previousPlayers.filter((/**
         * @param {?} player
         * @return {?}
         */
        player => player instanceof WebAnimationsPlayer))));
        if (allowPreviousPlayerStylesMerge(duration, delay)) {
            previousWebAnimationPlayers.forEach((/**
             * @param {?} player
             * @return {?}
             */
            player => {
                /** @type {?} */
                let styles = player.currentSnapshot;
                Object.keys(styles).forEach((/**
                 * @param {?} prop
                 * @return {?}
                 */
                prop => previousStyles[prop] = styles[prop]));
            }));
        }
        keyframes = keyframes.map((/**
         * @param {?} styles
         * @return {?}
         */
        styles => copyStyles(styles, false)));
        keyframes = balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles);
        /** @type {?} */
        const specialStyles = packageNonAnimatableStyles(element, keyframes);
        return new WebAnimationsPlayer(element, keyframes, playerOptions, specialStyles);
    }
}
if (false) {}
/**
 * @return {?}
 */
function supportsWebAnimations() {
    return typeof getElementAnimateFn() === 'function';
}
/**
 * @return {?}
 */
function getElementAnimateFn() {
    return (isBrowser() && ((/** @type {?} */ (Element))).prototype['animate']) || {};
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/private_export.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/browser.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=browser.js.map

/***/ }),

/***/ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js":
/*!******************************************************************************************************************************************************!*\
  !*** C:/Users/n_sol/dev/monorepo-wallet/omnichannel2-commercial-plataform-wallet-management/node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: A11yModule, ActiveDescendantKeyManager, AriaDescriber, CDK_DESCRIBEDBY_HOST_ATTRIBUTE, CDK_DESCRIBEDBY_ID_PREFIX, CdkAriaLive, CdkMonitorFocus, CdkTrapFocus, ConfigurableFocusTrap, ConfigurableFocusTrapFactory, EventListenerFocusTrapInertStrategy, FOCUS_MONITOR_DEFAULT_OPTIONS, FOCUS_TRAP_INERT_STRATEGY, FocusKeyManager, FocusMonitor, FocusTrap, FocusTrapFactory, HighContrastModeDetector, InteractivityChecker, LIVE_ANNOUNCER_DEFAULT_OPTIONS, LIVE_ANNOUNCER_ELEMENT_TOKEN, LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY, ListKeyManager, LiveAnnouncer, MESSAGES_CONTAINER_ID, TOUCH_BUFFER_MS, isFakeMousedownFromScreenReader, ɵangular_material_src_cdk_a11y_a11y_a, ɵangular_material_src_cdk_a11y_a11y_b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A11yModule", function() { return A11yModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveDescendantKeyManager", function() { return ActiveDescendantKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AriaDescriber", function() { return AriaDescriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_HOST_ATTRIBUTE", function() { return CDK_DESCRIBEDBY_HOST_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_ID_PREFIX", function() { return CDK_DESCRIBEDBY_ID_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAriaLive", function() { return CdkAriaLive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkMonitorFocus", function() { return CdkMonitorFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTrapFocus", function() { return CdkTrapFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurableFocusTrap", function() { return ConfigurableFocusTrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurableFocusTrapFactory", function() { return ConfigurableFocusTrapFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListenerFocusTrapInertStrategy", function() { return EventListenerFocusTrapInertStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_DEFAULT_OPTIONS", function() { return FOCUS_MONITOR_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_TRAP_INERT_STRATEGY", function() { return FOCUS_TRAP_INERT_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusKeyManager", function() { return FocusKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusMonitor", function() { return FocusMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrap", function() { return FocusTrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrapFactory", function() { return FocusTrapFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighContrastModeDetector", function() { return HighContrastModeDetector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractivityChecker", function() { return InteractivityChecker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_DEFAULT_OPTIONS", function() { return LIVE_ANNOUNCER_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN", function() { return LIVE_ANNOUNCER_ELEMENT_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY", function() { return LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListKeyManager", function() { return ListKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveAnnouncer", function() { return LiveAnnouncer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGES_CONTAINER_ID", function() { return MESSAGES_CONTAINER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUCH_BUFFER_MS", function() { return TOUCH_BUFFER_MS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFakeMousedownFromScreenReader", function() { return isFakeMousedownFromScreenReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_a11y_a11y_a", function() { return FocusTrapManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_a11y_a11y_b", function() { return ConfigurableFocusTrapConfig; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/observers */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");









/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/aria-describer/aria-reference.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * IDs are delimited by an empty space, as per the spec.
 * @type {?}
 */



const ID_DELIMITER = ' ';
/**
 * Adds the given ID to the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @param {?} id
 * @return {?}
 */
function addAriaReferencedId(el, attr, id) {
    /** @type {?} */
    const ids = getAriaReferenceIds(el, attr);
    if (ids.some((/**
     * @param {?} existingId
     * @return {?}
     */
    existingId => existingId.trim() == id.trim()))) {
        return;
    }
    ids.push(id.trim());
    el.setAttribute(attr, ids.join(ID_DELIMITER));
}
/**
 * Removes the given ID from the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @param {?} id
 * @return {?}
 */
function removeAriaReferencedId(el, attr, id) {
    /** @type {?} */
    const ids = getAriaReferenceIds(el, attr);
    /** @type {?} */
    const filteredIds = ids.filter((/**
     * @param {?} val
     * @return {?}
     */
    val => val != id.trim()));
    if (filteredIds.length) {
        el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
    }
    else {
        el.removeAttribute(attr);
    }
}
/**
 * Gets the list of IDs referenced by the given ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @return {?}
 */
function getAriaReferenceIds(el, attr) {
    // Get string array of all individual ids (whitespace delimited) in the attribute value
    return (el.getAttribute(attr) || '').match(/\S+/g) || [];
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/aria-describer/aria-describer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Interface used to register message elements and keep a count of how many registrations have
 * the same message and the reference to the message element used for the `aria-describedby`.
 * @record
 */
function RegisteredMessage() { }
if (false) {}
/**
 * ID used for the body container where all messages are appended.
 * @type {?}
 */
const MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
/**
 * ID prefix used for each created message element.
 * @type {?}
 */
const CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
/**
 * Attribute given to each host element that is described by a message element.
 * @type {?}
 */
const CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
/**
 * Global incremental identifier for each registered message element.
 * @type {?}
 */
let nextId = 0;
/**
 * Global map of all registered message elements that have been placed into the document.
 * @type {?}
 */
const messageRegistry = new Map();
/**
 * Container for all registered messages.
 * @type {?}
 */
let messagesContainer = null;
/**
 * Utility that creates visually hidden elements with a message content. Useful for elements that
 * want to use aria-describedby to further describe themselves without adding additional visual
 * content.
 */
class AriaDescriber {
    /**
     * @param {?} _document
     */
    constructor(_document) {
        this._document = _document;
    }
    /**
     * Adds to the host element an aria-describedby reference to a hidden element that contains
     * the message. If the same message has already been registered, then it will reuse the created
     * message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */
    describe(hostElement, message) {
        if (!this._canBeDescribed(hostElement, message)) {
            return;
        }
        if (typeof message !== 'string') {
            // We need to ensure that the element has an ID.
            this._setMessageId(message);
            messageRegistry.set(message, { messageElement: message, referenceCount: 0 });
        }
        else if (!messageRegistry.has(message)) {
            this._createMessageElement(message);
        }
        if (!this._isElementDescribedByMessage(hostElement, message)) {
            this._addMessageReference(hostElement, message);
        }
    }
    /**
     * Removes the host element's aria-describedby reference to the message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */
    removeDescription(hostElement, message) {
        if (!this._isElementNode(hostElement)) {
            return;
        }
        if (this._isElementDescribedByMessage(hostElement, message)) {
            this._removeMessageReference(hostElement, message);
        }
        // If the message is a string, it means that it's one that we created for the
        // consumer so we can remove it safely, otherwise we should leave it in place.
        if (typeof message === 'string') {
            /** @type {?} */
            const registeredMessage = messageRegistry.get(message);
            if (registeredMessage && registeredMessage.referenceCount === 0) {
                this._deleteMessageElement(message);
            }
        }
        if (messagesContainer && messagesContainer.childNodes.length === 0) {
            this._deleteMessagesContainer();
        }
    }
    /**
     * Unregisters all created message elements and removes the message container.
     * @return {?}
     */
    ngOnDestroy() {
        /** @type {?} */
        const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}]`);
        for (let i = 0; i < describedElements.length; i++) {
            this._removeCdkDescribedByReferenceIds(describedElements[i]);
            describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
        }
        if (messagesContainer) {
            this._deleteMessagesContainer();
        }
        messageRegistry.clear();
    }
    /**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     * @private
     * @param {?} message
     * @return {?}
     */
    _createMessageElement(message) {
        /** @type {?} */
        const messageElement = this._document.createElement('div');
        this._setMessageId(messageElement);
        messageElement.textContent = message;
        this._createMessagesContainer();
        (/** @type {?} */ (messagesContainer)).appendChild(messageElement);
        messageRegistry.set(message, { messageElement, referenceCount: 0 });
    }
    /**
     * Assigns a unique ID to an element, if it doesn't have one already.
     * @private
     * @param {?} element
     * @return {?}
     */
    _setMessageId(element) {
        if (!element.id) {
            element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${nextId++}`;
        }
    }
    /**
     * Deletes the message element from the global messages container.
     * @private
     * @param {?} message
     * @return {?}
     */
    _deleteMessageElement(message) {
        /** @type {?} */
        const registeredMessage = messageRegistry.get(message);
        /** @type {?} */
        const messageElement = registeredMessage && registeredMessage.messageElement;
        if (messagesContainer && messageElement) {
            messagesContainer.removeChild(messageElement);
        }
        messageRegistry.delete(message);
    }
    /**
     * Creates the global container for all aria-describedby messages.
     * @private
     * @return {?}
     */
    _createMessagesContainer() {
        if (!messagesContainer) {
            /** @type {?} */
            const preExistingContainer = this._document.getElementById(MESSAGES_CONTAINER_ID);
            // When going from the server to the client, we may end up in a situation where there's
            // already a container on the page, but we don't have a reference to it. Clear the
            // old container so we don't get duplicates. Doing this, instead of emptying the previous
            // container, should be slightly faster.
            if (preExistingContainer) {
                (/** @type {?} */ (preExistingContainer.parentNode)).removeChild(preExistingContainer);
            }
            messagesContainer = this._document.createElement('div');
            messagesContainer.id = MESSAGES_CONTAINER_ID;
            messagesContainer.setAttribute('aria-hidden', 'true');
            messagesContainer.style.display = 'none';
            this._document.body.appendChild(messagesContainer);
        }
    }
    /**
     * Deletes the global messages container.
     * @private
     * @return {?}
     */
    _deleteMessagesContainer() {
        if (messagesContainer && messagesContainer.parentNode) {
            messagesContainer.parentNode.removeChild(messagesContainer);
            messagesContainer = null;
        }
    }
    /**
     * Removes all cdk-describedby messages that are hosted through the element.
     * @private
     * @param {?} element
     * @return {?}
     */
    _removeCdkDescribedByReferenceIds(element) {
        // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
        /** @type {?} */
        const originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby')
            .filter((/**
         * @param {?} id
         * @return {?}
         */
        id => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0));
        element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
    }
    /**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    _addMessageReference(element, message) {
        /** @type {?} */
        const registeredMessage = (/** @type {?} */ (messageRegistry.get(message)));
        // Add the aria-describedby reference and set the
        // describedby_host attribute to mark the element.
        addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
        element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, '');
        registeredMessage.referenceCount++;
    }
    /**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    _removeMessageReference(element, message) {
        /** @type {?} */
        const registeredMessage = (/** @type {?} */ (messageRegistry.get(message)));
        registeredMessage.referenceCount--;
        removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
        element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }
    /**
     * Returns true if the element has been described by the provided message ID.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    _isElementDescribedByMessage(element, message) {
        /** @type {?} */
        const referenceIds = getAriaReferenceIds(element, 'aria-describedby');
        /** @type {?} */
        const registeredMessage = messageRegistry.get(message);
        /** @type {?} */
        const messageId = registeredMessage && registeredMessage.messageElement.id;
        return !!messageId && referenceIds.indexOf(messageId) != -1;
    }
    /**
     * Determines whether a message can be described on a particular element.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    _canBeDescribed(element, message) {
        if (!this._isElementNode(element)) {
            return false;
        }
        if (message && typeof message === 'object') {
            // We'd have to make some assumptions about the description element's text, if the consumer
            // passed in an element. Assume that if an element is passed in, the consumer has verified
            // that it can be used as a description.
            return true;
        }
        /** @type {?} */
        const trimmedMessage = message == null ? '' : `${message}`.trim();
        /** @type {?} */
        const ariaLabel = element.getAttribute('aria-label');
        // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
        // element, because screen readers will end up reading out the same text twice in a row.
        return trimmedMessage ? (!ariaLabel || ariaLabel.trim() !== trimmedMessage) : false;
    }
    /**
     * Checks whether a node is an Element node.
     * @private
     * @param {?} element
     * @return {?}
     */
    _isElementNode(element) {
        return element.nodeType === this._document.ELEMENT_NODE;
    }
}
AriaDescriber.ɵfac = function AriaDescriber_Factory(t) { return new (t || AriaDescriber)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
/** @nocollapse */
AriaDescriber.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
];
/** @nocollapse */ AriaDescriber.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function AriaDescriber_Factory() { return new AriaDescriber(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: AriaDescriber, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AriaDescriber, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/key-manager/list-key-manager.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This interface is for items that can be passed to a ListKeyManager.
 * @record
 */
function ListKeyManagerOption() { }
if (false) {}
/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 * @template T
 */
class ListKeyManager {
    /**
     * @param {?} _items
     */
    constructor(_items) {
        this._items = _items;
        this._activeItemIndex = -1;
        this._activeItem = null;
        this._wrap = false;
        this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        this._vertical = true;
        this._allowedModifierKeys = [];
        /**
         * Predicate function that can be used to check whether an item should be skipped
         * by the key manager. By default, disabled items are skipped.
         */
        this._skipPredicateFn = (/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.disabled);
        // Buffer for the letters that the user has pressed when the typeahead option is turned on.
        this._pressedLetters = [];
        /**
         * Stream that emits any time the TAB key is pressed, so components can react
         * when focus is shifted off of the list.
         */
        this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Stream that emits whenever the active item of the list manager changes.
         */
        this.change = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // We allow for the items to be an array because, in some cases, the consumer may
        // not have access to a QueryList of the items they want to manage (e.g. when the
        // items aren't being collected via `ViewChildren` or `ContentChildren`).
        if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]) {
            _items.changes.subscribe((/**
             * @param {?} newItems
             * @return {?}
             */
            (newItems) => {
                if (this._activeItem) {
                    /** @type {?} */
                    const itemArray = newItems.toArray();
                    /** @type {?} */
                    const newIndex = itemArray.indexOf(this._activeItem);
                    if (newIndex > -1 && newIndex !== this._activeItemIndex) {
                        this._activeItemIndex = newIndex;
                    }
                }
            }));
        }
    }
    /**
     * Sets the predicate function that determines which items should be skipped by the
     * list key manager.
     * @template THIS
     * @this {THIS}
     * @param {?} predicate Function that determines whether the given item should be skipped.
     * @return {THIS}
     */
    skipPredicate(predicate) {
        (/** @type {?} */ (this))._skipPredicateFn = predicate;
        return (/** @type {?} */ (this));
    }
    /**
     * Configures wrapping mode, which determines whether the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     * @template THIS
     * @this {THIS}
     * @param {?=} shouldWrap Whether the list should wrap when reaching the end.
     * @return {THIS}
     */
    withWrap(shouldWrap = true) {
        (/** @type {?} */ (this))._wrap = shouldWrap;
        return (/** @type {?} */ (this));
    }
    /**
     * Configures whether the key manager should be able to move the selection vertically.
     * @template THIS
     * @this {THIS}
     * @param {?=} enabled Whether vertical selection should be enabled.
     * @return {THIS}
     */
    withVerticalOrientation(enabled = true) {
        (/** @type {?} */ (this))._vertical = enabled;
        return (/** @type {?} */ (this));
    }
    /**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @template THIS
     * @this {THIS}
     * @param {?} direction Direction in which the selection can be moved.
     * @return {THIS}
     */
    withHorizontalOrientation(direction) {
        (/** @type {?} */ (this))._horizontal = direction;
        return (/** @type {?} */ (this));
    }
    /**
     * Modifier keys which are allowed to be held down and whose default actions will be prevented
     * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
     * @template THIS
     * @this {THIS}
     * @param {?} keys
     * @return {THIS}
     */
    withAllowedModifierKeys(keys) {
        (/** @type {?} */ (this))._allowedModifierKeys = keys;
        return (/** @type {?} */ (this));
    }
    /**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @template THIS
     * @this {THIS}
     * @param {?=} debounceInterval Time to wait after the last keystroke before setting the active item.
     * @return {THIS}
     */
    withTypeAhead(debounceInterval = 200) {
        if ((/** @type {?} */ (this))._items.length && (/** @type {?} */ (this))._items.some((/**
         * @param {?} item
         * @return {?}
         */
        item => typeof item.getLabel !== 'function'))) {
            throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
        }
        (/** @type {?} */ (this))._typeaheadSubscription.unsubscribe();
        // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
        // and convert those letters back into a string. Afterwards find the first item that starts
        // with that string and select it.
        (/** @type {?} */ (this))._typeaheadSubscription = (/** @type {?} */ (this))._letterKeyStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((/**
         * @param {?} letter
         * @return {?}
         */
        letter => (/** @type {?} */ (this))._pressedLetters.push(letter))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(debounceInterval), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((/**
         * @return {?}
         */
        () => (/** @type {?} */ (this))._pressedLetters.length > 0)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((/**
         * @return {?}
         */
        () => (/** @type {?} */ (this))._pressedLetters.join('')))).subscribe((/**
         * @param {?} inputString
         * @return {?}
         */
        inputString => {
            /** @type {?} */
            const items = (/** @type {?} */ (this))._getItemsArray();
            // Start at 1 because we want to start searching at the item immediately
            // following the current active item.
            for (let i = 1; i < items.length + 1; i++) {
                /** @type {?} */
                const index = ((/** @type {?} */ (this))._activeItemIndex + i) % items.length;
                /** @type {?} */
                const item = items[index];
                if (!(/** @type {?} */ (this))._skipPredicateFn(item) &&
                    (/** @type {?} */ (item.getLabel))().toUpperCase().trim().indexOf(inputString) === 0) {
                    (/** @type {?} */ (this)).setActiveItem(index);
                    break;
                }
            }
            (/** @type {?} */ (this))._pressedLetters = [];
        }));
        return (/** @type {?} */ (this));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    setActiveItem(item) {
        /** @type {?} */
        const previousIndex = this._activeItemIndex;
        this.updateActiveItem(item);
        if (this._activeItemIndex !== previousIndex) {
            this.change.next(this._activeItemIndex);
        }
    }
    /**
     * Sets the active item depending on the key event passed in.
     * @param {?} event Keyboard event to be used for determining which element should be active.
     * @return {?}
     */
    onKeydown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        /** @type {?} */
        const modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
        /** @type {?} */
        const isModifierAllowed = modifiers.every((/**
         * @param {?} modifier
         * @return {?}
         */
        modifier => {
            return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
        }));
        switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["TAB"]:
                this.tabOut.next();
                return;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
                if (this._vertical && isModifierAllowed) {
                    this.setNextItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
                if (this._vertical && isModifierAllowed) {
                    this.setPreviousItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
                if (this._horizontal && isModifierAllowed) {
                    this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
                if (this._horizontal && isModifierAllowed) {
                    this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
                    break;
                }
                else {
                    return;
                }
            default:
                if (isModifierAllowed || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["hasModifierKey"])(event, 'shiftKey')) {
                    // Attempt to use the `event.key` which also maps it to the user's keyboard language,
                    // otherwise fall back to resolving alphanumeric characters via the keyCode.
                    if (event.key && event.key.length === 1) {
                        this._letterKeyStream.next(event.key.toLocaleUpperCase());
                    }
                    else if ((keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["A"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["Z"]) || (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ZERO"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["NINE"])) {
                        this._letterKeyStream.next(String.fromCharCode(keyCode));
                    }
                }
                // Note that we return here, in order to avoid preventing
                // the default action of non-navigational keys.
                return;
        }
        this._pressedLetters = [];
        event.preventDefault();
    }
    /**
     * Index of the currently active item.
     * @return {?}
     */
    get activeItemIndex() {
        return this._activeItemIndex;
    }
    /**
     * The active item.
     * @return {?}
     */
    get activeItem() {
        return this._activeItem;
    }
    /**
     * Gets whether the user is currently typing into the manager using the typeahead feature.
     * @return {?}
     */
    isTyping() {
        return this._pressedLetters.length > 0;
    }
    /**
     * Sets the active item to the first enabled item in the list.
     * @return {?}
     */
    setFirstItemActive() {
        this._setActiveItemByIndex(0, 1);
    }
    /**
     * Sets the active item to the last enabled item in the list.
     * @return {?}
     */
    setLastItemActive() {
        this._setActiveItemByIndex(this._items.length - 1, -1);
    }
    /**
     * Sets the active item to the next enabled item in the list.
     * @return {?}
     */
    setNextItemActive() {
        this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
    }
    /**
     * Sets the active item to a previous enabled item in the list.
     * @return {?}
     */
    setPreviousItemActive() {
        this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive()
            : this._setActiveItemByDelta(-1);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    updateActiveItem(item) {
        /** @type {?} */
        const itemArray = this._getItemsArray();
        /** @type {?} */
        const index = typeof item === 'number' ? item : itemArray.indexOf(item);
        /** @type {?} */
        const activeItem = itemArray[index];
        // Explicitly check for `null` and `undefined` because other falsy values are valid.
        this._activeItem = activeItem == null ? null : activeItem;
        this._activeItemIndex = index;
    }
    /**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     * @private
     * @param {?} delta
     * @return {?}
     */
    _setActiveItemByDelta(delta) {
        this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
    }
    /**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     * @private
     * @param {?} delta
     * @return {?}
     */
    _setActiveInWrapMode(delta) {
        /** @type {?} */
        const items = this._getItemsArray();
        for (let i = 1; i <= items.length; i++) {
            /** @type {?} */
            const index = (this._activeItemIndex + (delta * i) + items.length) % items.length;
            /** @type {?} */
            const item = items[index];
            if (!this._skipPredicateFn(item)) {
                this.setActiveItem(index);
                return;
            }
        }
    }
    /**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     * @private
     * @param {?} delta
     * @return {?}
     */
    _setActiveInDefaultMode(delta) {
        this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
    }
    /**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     * @private
     * @param {?} index
     * @param {?} fallbackDelta
     * @return {?}
     */
    _setActiveItemByIndex(index, fallbackDelta) {
        /** @type {?} */
        const items = this._getItemsArray();
        if (!items[index]) {
            return;
        }
        while (this._skipPredicateFn(items[index])) {
            index += fallbackDelta;
            if (!items[index]) {
                return;
            }
        }
        this.setActiveItem(index);
    }
    /**
     * Returns the items as an array.
     * @private
     * @return {?}
     */
    _getItemsArray() {
        return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"] ? this._items.toArray() : this._items;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/key-manager/activedescendant-key-manager.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This is the interface for highlightable items (used by the ActiveDescendantKeyManager).
 * Each item must know how to style itself as active or inactive and whether or not it is
 * currently disabled.
 * @record
 */
function Highlightable() { }
if (false) {}
/**
 * @template T
 */
class ActiveDescendantKeyManager extends ListKeyManager {
    /**
     * @param {?} index
     * @return {?}
     */
    setActiveItem(index) {
        if (this.activeItem) {
            this.activeItem.setInactiveStyles();
        }
        super.setActiveItem(index);
        if (this.activeItem) {
            this.activeItem.setActiveStyles();
        }
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/key-manager/focus-key-manager.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This is the interface for focusable items (used by the FocusKeyManager).
 * Each item must know how to focus itself, whether or not it is currently disabled
 * and be able to supply its label.
 * @record
 */
function FocusableOption() { }
if (false) {}
/**
 * @template T
 */
class FocusKeyManager extends ListKeyManager {
    constructor() {
        super(...arguments);
        this._origin = 'program';
    }
    /**
     * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
     * @template THIS
     * @this {THIS}
     * @param {?} origin Focus origin to be used when focusing items.
     * @return {THIS}
     */
    setFocusOrigin(origin) {
        (/** @type {?} */ (this))._origin = origin;
        return (/** @type {?} */ (this));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    setActiveItem(item) {
        super.setActiveItem(item);
        if (this.activeItem) {
            this.activeItem.focus(this._origin);
        }
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/interactivity-checker/interactivity-checker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// The InteractivityChecker leans heavily on the ally.js accessibility utilities.
// Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
// supported.
/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 */
class InteractivityChecker {
    /**
     * @param {?} _platform
     */
    constructor(_platform) {
        this._platform = _platform;
    }
    /**
     * Gets whether an element is disabled.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is disabled.
     */
    isDisabled(element) {
        // This does not capture some cases, such as a non-form control with a disabled attribute or
        // a form control inside of a disabled form, but should capture the most common cases.
        return element.hasAttribute('disabled');
    }
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @param {?} element
     * @return {?} Whether the element is visible.
     */
    isVisible(element) {
        return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
    }
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is tabbable.
     */
    isTabbable(element) {
        // Nothing is tabbable on the server 😎
        if (!this._platform.isBrowser) {
            return false;
        }
        /** @type {?} */
        const frameElement = getFrameElement(getWindow(element));
        if (frameElement) {
            /** @type {?} */
            const frameType = frameElement && frameElement.nodeName.toLowerCase();
            // Frame elements inherit their tabindex onto all child elements.
            if (getTabIndexValue(frameElement) === -1) {
                return false;
            }
            // Webkit and Blink consider anything inside of an <object> element as non-tabbable.
            if ((this._platform.BLINK || this._platform.WEBKIT) && frameType === 'object') {
                return false;
            }
            // Webkit and Blink disable tabbing to an element inside of an invisible frame.
            if ((this._platform.BLINK || this._platform.WEBKIT) && !this.isVisible(frameElement)) {
                return false;
            }
        }
        /** @type {?} */
        let nodeName = element.nodeName.toLowerCase();
        /** @type {?} */
        let tabIndexValue = getTabIndexValue(element);
        if (element.hasAttribute('contenteditable')) {
            return tabIndexValue !== -1;
        }
        if (nodeName === 'iframe') {
            // The frames may be tabbable depending on content, but it's not possibly to reliably
            // investigate the content of the frames.
            return false;
        }
        if (nodeName === 'audio') {
            if (!element.hasAttribute('controls')) {
                // By default an <audio> element without the controls enabled is not tabbable.
                return false;
            }
            else if (this._platform.BLINK) {
                // In Blink <audio controls> elements are always tabbable.
                return true;
            }
        }
        if (nodeName === 'video') {
            if (!element.hasAttribute('controls') && this._platform.TRIDENT) {
                // In Trident a <video> element without the controls enabled is not tabbable.
                return false;
            }
            else if (this._platform.BLINK || this._platform.FIREFOX) {
                // In Chrome and Firefox <video controls> elements are always tabbable.
                return true;
            }
        }
        if (nodeName === 'object' && (this._platform.BLINK || this._platform.WEBKIT)) {
            // In all Blink and WebKit based browsers <object> elements are never tabbable.
            return false;
        }
        // In iOS the browser only considers some specific elements as tabbable.
        if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
            return false;
        }
        return element.tabIndex >= 0;
    }
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is focusable.
     */
    isFocusable(element) {
        // Perform checks in order of left to most expensive.
        // Again, naive approach that does not capture many edge cases and browser quirks.
        return isPotentiallyFocusable(element) && !this.isDisabled(element) && this.isVisible(element);
    }
}
InteractivityChecker.ɵfac = function InteractivityChecker_Factory(t) { return new (t || InteractivityChecker)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"])); };
/** @nocollapse */
InteractivityChecker.ctorParameters = () => [
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
];
/** @nocollapse */ InteractivityChecker.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function InteractivityChecker_Factory() { return new InteractivityChecker(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"])); }, token: InteractivityChecker, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InteractivityChecker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"] }]; }, null); })();
if (false) {}
/**
 * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
 * the frameElement property is being accessed from a different host address, this property
 * should be accessed carefully.
 * @param {?} window
 * @return {?}
 */
function getFrameElement(window) {
    try {
        return (/** @type {?} */ (window.frameElement));
    }
    catch (_a) {
        return null;
    }
}
/**
 * Checks whether the specified element has any geometry / rectangles.
 * @param {?} element
 * @return {?}
 */
function hasGeometry(element) {
    // Use logic from jQuery to check for an invisible element.
    // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
    return !!(element.offsetWidth || element.offsetHeight ||
        (typeof element.getClientRects === 'function' && element.getClientRects().length));
}
/**
 * Gets whether an element's
 * @param {?} element
 * @return {?}
 */
function isNativeFormElement(element) {
    /** @type {?} */
    let nodeName = element.nodeName.toLowerCase();
    return nodeName === 'input' ||
        nodeName === 'select' ||
        nodeName === 'button' ||
        nodeName === 'textarea';
}
/**
 * Gets whether an element is an `<input type="hidden">`.
 * @param {?} element
 * @return {?}
 */
function isHiddenInput(element) {
    return isInputElement(element) && element.type == 'hidden';
}
/**
 * Gets whether an element is an anchor that has an href attribute.
 * @param {?} element
 * @return {?}
 */
function isAnchorWithHref(element) {
    return isAnchorElement(element) && element.hasAttribute('href');
}
/**
 * Gets whether an element is an input element.
 * @param {?} element
 * @return {?}
 */
function isInputElement(element) {
    return element.nodeName.toLowerCase() == 'input';
}
/**
 * Gets whether an element is an anchor element.
 * @param {?} element
 * @return {?}
 */
function isAnchorElement(element) {
    return element.nodeName.toLowerCase() == 'a';
}
/**
 * Gets whether an element has a valid tabindex.
 * @param {?} element
 * @return {?}
 */
function hasValidTabIndex(element) {
    if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
        return false;
    }
    /** @type {?} */
    let tabIndex = element.getAttribute('tabindex');
    // IE11 parses tabindex="" as the value "-32768"
    if (tabIndex == '-32768') {
        return false;
    }
    return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 * @param {?} element
 * @return {?}
 */
function getTabIndexValue(element) {
    if (!hasValidTabIndex(element)) {
        return null;
    }
    // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    /** @type {?} */
    const tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
    return isNaN(tabIndex) ? -1 : tabIndex;
}
/**
 * Checks whether the specified element is potentially tabbable on iOS
 * @param {?} element
 * @return {?}
 */
function isPotentiallyTabbableIOS(element) {
    /** @type {?} */
    let nodeName = element.nodeName.toLowerCase();
    /** @type {?} */
    let inputType = nodeName === 'input' && ((/** @type {?} */ (element))).type;
    return inputType === 'text'
        || inputType === 'password'
        || nodeName === 'select'
        || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 * @param {?} element
 * @return {?}
 */
function isPotentiallyFocusable(element) {
    // Inputs are potentially focusable *unless* they're type="hidden".
    if (isHiddenInput(element)) {
        return false;
    }
    return isNativeFormElement(element) ||
        isAnchorWithHref(element) ||
        element.hasAttribute('contenteditable') ||
        hasValidTabIndex(element);
}
/**
 * Gets the parent window of a DOM node with regards of being inside of an iframe.
 * @param {?} node
 * @return {?}
 */
function getWindow(node) {
    // ownerDocument is null if `node` itself *is* a document.
    return node.ownerDocument && node.ownerDocument.defaultView || window;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/focus-trap/focus-trap.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause to two to misalign.
 *
 * @deprecated Use `ConfigurableFocusTrap` instead.
 * \@breaking-change for 11.0.0 Remove this class.
 */
class FocusTrap {
    /**
     * @param {?} _element
     * @param {?} _checker
     * @param {?} _ngZone
     * @param {?} _document
     * @param {?=} deferAnchors
     */
    constructor(_element, _checker, _ngZone, _document, deferAnchors = false) {
        this._element = _element;
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
        this._hasAttached = false;
        // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.
        this.startAnchorListener = (/**
         * @return {?}
         */
        () => this.focusLastTabbableElement());
        this.endAnchorListener = (/**
         * @return {?}
         */
        () => this.focusFirstTabbableElement());
        this._enabled = true;
        if (!deferAnchors) {
            this.attachAnchors();
        }
    }
    /**
     * Whether the focus trap is active.
     * @return {?}
     */
    get enabled() { return this._enabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set enabled(value) {
        this._enabled = value;
        if (this._startAnchor && this._endAnchor) {
            this._toggleAnchorTabIndex(value, this._startAnchor);
            this._toggleAnchorTabIndex(value, this._endAnchor);
        }
    }
    /**
     * Destroys the focus trap by cleaning up the anchors.
     * @return {?}
     */
    destroy() {
        /** @type {?} */
        const startAnchor = this._startAnchor;
        /** @type {?} */
        const endAnchor = this._endAnchor;
        if (startAnchor) {
            startAnchor.removeEventListener('focus', this.startAnchorListener);
            if (startAnchor.parentNode) {
                startAnchor.parentNode.removeChild(startAnchor);
            }
        }
        if (endAnchor) {
            endAnchor.removeEventListener('focus', this.endAnchorListener);
            if (endAnchor.parentNode) {
                endAnchor.parentNode.removeChild(endAnchor);
            }
        }
        this._startAnchor = this._endAnchor = null;
    }
    /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @return {?} Whether the focus trap managed to attach successfuly. This may not be the case
     * if the target element isn't currently in the DOM.
     */
    attachAnchors() {
        // If we're not on the browser, there can be no focus to trap.
        if (this._hasAttached) {
            return true;
        }
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            if (!this._startAnchor) {
                this._startAnchor = this._createAnchor();
                (/** @type {?} */ (this._startAnchor)).addEventListener('focus', this.startAnchorListener);
            }
            if (!this._endAnchor) {
                this._endAnchor = this._createAnchor();
                (/** @type {?} */ (this._endAnchor)).addEventListener('focus', this.endAnchorListener);
            }
        }));
        if (this._element.parentNode) {
            this._element.parentNode.insertBefore((/** @type {?} */ (this._startAnchor)), this._element);
            this._element.parentNode.insertBefore((/** @type {?} */ (this._endAnchor)), this._element.nextSibling);
            this._hasAttached = true;
        }
        return this._hasAttached;
    }
    /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    focusInitialElementWhenReady() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            this._executeOnStable((/**
             * @return {?}
             */
            () => resolve(this.focusInitialElement())));
        }));
    }
    /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    focusFirstTabbableElementWhenReady() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            this._executeOnStable((/**
             * @return {?}
             */
            () => resolve(this.focusFirstTabbableElement())));
        }));
    }
    /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    focusLastTabbableElementWhenReady() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            this._executeOnStable((/**
             * @return {?}
             */
            () => resolve(this.focusLastTabbableElement())));
        }));
    }
    /**
     * Get the specified boundary element of the trapped region.
     * @private
     * @param {?} bound The boundary to get (start or end of trapped region).
     * @return {?} The boundary element.
     */
    _getRegionBoundary(bound) {
        // Contains the deprecated version of selector, for temporary backwards comparability.
        /** @type {?} */
        let markers = (/** @type {?} */ (this._element.querySelectorAll(`[cdk-focus-region-${bound}], ` +
            `[cdkFocusRegion${bound}], ` +
            `[cdk-focus-${bound}]`)));
        for (let i = 0; i < markers.length; i++) {
            // @breaking-change 8.0.0
            if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
                console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', ` +
                    `use 'cdkFocusRegion${bound}' instead. The deprecated ` +
                    `attribute will be removed in 8.0.0.`, markers[i]);
            }
            else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
                console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', ` +
                    `use 'cdkFocusRegion${bound}' instead. The deprecated attribute ` +
                    `will be removed in 8.0.0.`, markers[i]);
            }
        }
        if (bound == 'start') {
            return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
        }
        return markers.length ?
            markers[markers.length - 1] : this._getLastTabbableElement(this._element);
    }
    /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @return {?} Whether focus was moved successfuly.
     */
    focusInitialElement() {
        // Contains the deprecated version of selector, for temporary backwards comparability.
        /** @type {?} */
        const redirectToElement = (/** @type {?} */ (this._element.querySelector(`[cdk-focus-initial], ` +
            `[cdkFocusInitial]`)));
        if (redirectToElement) {
            // @breaking-change 8.0.0
            if (redirectToElement.hasAttribute(`cdk-focus-initial`)) {
                console.warn(`Found use of deprecated attribute 'cdk-focus-initial', ` +
                    `use 'cdkFocusInitial' instead. The deprecated attribute ` +
                    `will be removed in 8.0.0`, redirectToElement);
            }
            // Warn the consumer if the element they've pointed to
            // isn't focusable, when not in production mode.
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && !this._checker.isFocusable(redirectToElement)) {
                console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
            }
            redirectToElement.focus();
            return true;
        }
        return this.focusFirstTabbableElement();
    }
    /**
     * Focuses the first tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */
    focusFirstTabbableElement() {
        /** @type {?} */
        const redirectToElement = this._getRegionBoundary('start');
        if (redirectToElement) {
            redirectToElement.focus();
        }
        return !!redirectToElement;
    }
    /**
     * Focuses the last tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */
    focusLastTabbableElement() {
        /** @type {?} */
        const redirectToElement = this._getRegionBoundary('end');
        if (redirectToElement) {
            redirectToElement.focus();
        }
        return !!redirectToElement;
    }
    /**
     * Checks whether the focus trap has successfuly been attached.
     * @return {?}
     */
    hasAttached() {
        return this._hasAttached;
    }
    /**
     * Get the first tabbable element from a DOM subtree (inclusive).
     * @private
     * @param {?} root
     * @return {?}
     */
    _getFirstTabbableElement(root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
        // back to `childNodes` which includes text nodes, comments etc.
        /** @type {?} */
        let children = root.children || root.childNodes;
        for (let i = 0; i < children.length; i++) {
            /** @type {?} */
            let tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ?
                this._getFirstTabbableElement((/** @type {?} */ (children[i]))) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    }
    /**
     * Get the last tabbable element from a DOM subtree (inclusive).
     * @private
     * @param {?} root
     * @return {?}
     */
    _getLastTabbableElement(root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in reverse DOM order.
        /** @type {?} */
        let children = root.children || root.childNodes;
        for (let i = children.length - 1; i >= 0; i--) {
            /** @type {?} */
            let tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ?
                this._getLastTabbableElement((/** @type {?} */ (children[i]))) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    }
    /**
     * Creates an anchor element.
     * @private
     * @return {?}
     */
    _createAnchor() {
        /** @type {?} */
        const anchor = this._document.createElement('div');
        this._toggleAnchorTabIndex(this._enabled, anchor);
        anchor.classList.add('cdk-visually-hidden');
        anchor.classList.add('cdk-focus-trap-anchor');
        anchor.setAttribute('aria-hidden', 'true');
        return anchor;
    }
    /**
     * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
     * @private
     * @param {?} isEnabled Whether the focus trap is enabled.
     * @param {?} anchor Anchor on which to toggle the tabindex.
     * @return {?}
     */
    _toggleAnchorTabIndex(isEnabled, anchor) {
        // Remove the tabindex completely, rather than setting it to -1, because if the
        // element has a tabindex, the user might still hit it when navigating with the arrow keys.
        isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
    }
    /**
     * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
     * @protected
     * @param {?} enabled
     * @return {?}
     */
    toggleAnchors(enabled) {
        if (this._startAnchor && this._endAnchor) {
            this._toggleAnchorTabIndex(enabled, this._startAnchor);
            this._toggleAnchorTabIndex(enabled, this._endAnchor);
        }
    }
    /**
     * Executes a function when the zone is stable.
     * @private
     * @param {?} fn
     * @return {?}
     */
    _executeOnStable(fn) {
        if (this._ngZone.isStable) {
            fn();
        }
        else {
            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(fn);
        }
    }
}
if (false) {}
/**
 * Factory that allows easy instantiation of focus traps.
 * @deprecated Use `ConfigurableFocusTrapFactory` instead.
 * \@breaking-change for 11.0.0 Remove this class.
 */
class FocusTrapFactory {
    /**
     * @param {?} _checker
     * @param {?} _ngZone
     * @param {?} _document
     */
    constructor(_checker, _ngZone, _document) {
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
    }
    /**
     * Creates a focus-trapped region around the given element.
     * @param {?} element The element around which focus will be trapped.
     * @param {?=} deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @return {?} The created focus trap instance.
     */
    create(element, deferCaptureElements = false) {
        return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
    }
}
FocusTrapFactory.ɵfac = function FocusTrapFactory_Factory(t) { return new (t || FocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
/** @nocollapse */
FocusTrapFactory.ctorParameters = () => [
    { type: InteractivityChecker },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
];
/** @nocollapse */ FocusTrapFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function FocusTrapFactory_Factory() { return new FocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: FocusTrapFactory, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusTrapFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: InteractivityChecker }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, null); })();
if (false) {}
/**
 * Directive for trapping focus within a region.
 */
class CdkTrapFocus {
    /**
     * @param {?} _elementRef
     * @param {?} _focusTrapFactory
     * @param {?} _document
     */
    constructor(_elementRef, _focusTrapFactory, _document) {
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        /**
         * Previously focused element to restore focus to upon destroy when using autoCapture.
         */
        this._previouslyFocusedElement = null;
        this._document = _document;
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
    /**
     * Whether the focus trap is active.
     * @return {?}
     */
    get enabled() { return this.focusTrap.enabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set enabled(value) { this.focusTrap.enabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value); }
    /**
     * Whether the directive should automatially move focus into the trapped region upon
     * initialization and return focus to the previous activeElement upon destruction.
     * @return {?}
     */
    get autoCapture() { return this._autoCapture; }
    /**
     * @param {?} value
     * @return {?}
     */
    set autoCapture(value) { this._autoCapture = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value); }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.focusTrap.destroy();
        // If we stored a previously focused element when using autoCapture, return focus to that
        // element now that the trapped region is being destroyed.
        if (this._previouslyFocusedElement) {
            this._previouslyFocusedElement.focus();
            this._previouslyFocusedElement = null;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.focusTrap.attachAnchors();
        if (this.autoCapture) {
            this._previouslyFocusedElement = (/** @type {?} */ (this._document.activeElement));
            this.focusTrap.focusInitialElementWhenReady();
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (!this.focusTrap.hasAttached()) {
            this.focusTrap.attachAnchors();
        }
    }
}
CdkTrapFocus.ɵfac = function CdkTrapFocus_Factory(t) { return new (t || CdkTrapFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
CdkTrapFocus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkTrapFocus, selectors: [["", "cdkTrapFocus", ""]], inputs: { enabled: ["cdkTrapFocus", "enabled"], autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture"] }, exportAs: ["cdkTrapFocus"] });
/** @nocollapse */
CdkTrapFocus.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: FocusTrapFactory },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
];
CdkTrapFocus.propDecorators = {
    enabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkTrapFocus',] }],
    autoCapture: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkTrapFocusAutoCapture',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkTrapFocus, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[cdkTrapFocus]',
                exportAs: 'cdkTrapFocus'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: FocusTrapFactory }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, { enabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkTrapFocus']
        }], autoCapture: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkTrapFocusAutoCapture']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/focus-trap/configurable-focus-trap.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class uses a strategy pattern that determines how it traps focus.
 * See FocusTrapInertStrategy.
 */
class ConfigurableFocusTrap extends FocusTrap {
    /**
     * @param {?} _element
     * @param {?} _checker
     * @param {?} _ngZone
     * @param {?} _document
     * @param {?} _focusTrapManager
     * @param {?} _inertStrategy
     * @param {?} config
     */
    constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config) {
        super(_element, _checker, _ngZone, _document, config.defer);
        this._focusTrapManager = _focusTrapManager;
        this._inertStrategy = _inertStrategy;
        this._focusTrapManager.register(this);
    }
    /**
     * Whether the FocusTrap is enabled.
     * @return {?}
     */
    get enabled() { return this._enabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set enabled(value) {
        this._enabled = value;
        if (this._enabled) {
            this._focusTrapManager.register(this);
        }
        else {
            this._focusTrapManager.deregister(this);
        }
    }
    /**
     * Notifies the FocusTrapManager that this FocusTrap will be destroyed.
     * @return {?}
     */
    destroy() {
        this._focusTrapManager.deregister(this);
        super.destroy();
    }
    /**
     * \@docs-private Implemented as part of ManagedFocusTrap.
     * @return {?}
     */
    _enable() {
        this._inertStrategy.preventFocus(this);
        this.toggleAnchors(true);
    }
    /**
     * \@docs-private Implemented as part of ManagedFocusTrap.
     * @return {?}
     */
    _disable() {
        this._inertStrategy.allowFocus(this);
        this.toggleAnchors(false);
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/focus-trap/polyfill.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * IE 11 compatible closest implementation that is able to start from non-Element Nodes.
 * @param {?} element
 * @param {?} selector
 * @return {?}
 */
function closest(element, selector) {
    if (!(element instanceof Node)) {
        return null;
    }
    /** @type {?} */
    let curr = element;
    while (curr != null && !(curr instanceof Element)) {
        curr = curr.parentNode;
    }
    return curr && (/** @type {?} */ ((hasNativeClosest ?
        curr.closest(selector) : polyfillClosest(curr, selector))));
}
/**
 * Polyfill for browsers without Element.closest.
 * @param {?} element
 * @param {?} selector
 * @return {?}
 */
function polyfillClosest(element, selector) {
    /** @type {?} */
    let curr = element;
    while (curr != null && !(curr instanceof Element && matches(curr, selector))) {
        curr = curr.parentNode;
    }
    return (/** @type {?} */ ((curr || null)));
}
/** @type {?} */
const hasNativeClosest = typeof Element != 'undefined' && !!Element.prototype.closest;
/**
 * IE 11 compatible matches implementation.
 * @param {?} element
 * @param {?} selector
 * @return {?}
 */
function matches(element, selector) {
    return element.matches ?
        element.matches(selector) :
        ((/** @type {?} */ (element)))['msMatchesSelector'](selector);
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/focus-trap/event-listener-inert-strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Lightweight FocusTrapInertStrategy that adds a document focus event
 * listener to redirect focus back inside the FocusTrap.
 */
class EventListenerFocusTrapInertStrategy {
    constructor() {
        /**
         * Focus event handler.
         */
        this._listener = null;
    }
    /**
     * Adds a document event listener that keeps focus inside the FocusTrap.
     * @param {?} focusTrap
     * @return {?}
     */
    preventFocus(focusTrap) {
        // Ensure there's only one listener per document
        if (this._listener) {
            focusTrap._document.removeEventListener('focus', (/** @type {?} */ (this._listener)), true);
        }
        this._listener = (/**
         * @param {?} e
         * @return {?}
         */
        (e) => this._trapFocus(focusTrap, e));
        focusTrap._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            focusTrap._document.addEventListener('focus', (/** @type {?} */ (this._listener)), true);
        }));
    }
    /**
     * Removes the event listener added in preventFocus.
     * @param {?} focusTrap
     * @return {?}
     */
    allowFocus(focusTrap) {
        if (!this._listener) {
            return;
        }
        focusTrap._document.removeEventListener('focus', (/** @type {?} */ (this._listener)), true);
        this._listener = null;
    }
    /**
     * Refocuses the first element in the FocusTrap if the focus event target was outside
     * the FocusTrap.
     *
     * This is an event listener callback. The event listener is added in runOutsideAngular,
     * so all this code runs outside Angular as well.
     * @private
     * @param {?} focusTrap
     * @param {?} event
     * @return {?}
     */
    _trapFocus(focusTrap, event) {
        /** @type {?} */
        const target = (/** @type {?} */ (event.target));
        /** @type {?} */
        const focusTrapRoot = focusTrap._element;
        // Don't refocus if target was in an overlay, because the overlay might be associated
        // with an element inside the FocusTrap, ex. mat-select.
        if (!focusTrapRoot.contains(target) && closest(target, 'div.cdk-overlay-pane') === null) {
            // Some legacy FocusTrap usages have logic that focuses some element on the page
            // just before FocusTrap is destroyed. For backwards compatibility, wait
            // to be sure FocusTrap is still enabled before refocusing.
            setTimeout((/**
             * @return {?}
             */
            () => {
                // Check whether focus wasn't put back into the focus trap while the timeout was pending.
                if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
                    focusTrap.focusFirstTabbableElement();
                }
            }));
        }
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/focus-trap/configurable-focus-trap-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Configuration for creating a ConfigurableFocusTrap.
 */
class ConfigurableFocusTrapConfig {
    constructor() {
        /**
         * Whether to defer the creation of FocusTrap elements to be
         * done manually by the user. Default is to create them
         * automatically.
         */
        this.defer = false;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/focus-trap/focus-trap-inert-strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The injection token used to specify the inert strategy.
 * @type {?}
 */
const FOCUS_TRAP_INERT_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('FOCUS_TRAP_INERT_STRATEGY');
/**
 * A strategy that dictates how FocusTrap should prevent elements
 * outside of the FocusTrap from being focused.
 * @record
 */
function FocusTrapInertStrategy() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/focus-trap/focus-trap-manager.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A FocusTrap managed by FocusTrapManager.
 * Implemented by ConfigurableFocusTrap to avoid circular dependency.
 * @record
 */
function ManagedFocusTrap() { }
if (false) {}
/**
 * Injectable that ensures only the most recently enabled FocusTrap is active.
 */
class FocusTrapManager {
    constructor() {
        // A stack of the FocusTraps on the page. Only the FocusTrap at the
        // top of the stack is active.
        this._focusTrapStack = [];
    }
    /**
     * Disables the FocusTrap at the top of the stack, and then pushes
     * the new FocusTrap onto the stack.
     * @param {?} focusTrap
     * @return {?}
     */
    register(focusTrap) {
        // Dedupe focusTraps that register multiple times.
        this._focusTrapStack = this._focusTrapStack.filter((/**
         * @param {?} ft
         * @return {?}
         */
        (ft) => ft !== focusTrap));
        /** @type {?} */
        let stack = this._focusTrapStack;
        if (stack.length) {
            stack[stack.length - 1]._disable();
        }
        stack.push(focusTrap);
        focusTrap._enable();
    }
    /**
     * Removes the FocusTrap from the stack, and activates the
     * FocusTrap that is the new top of the stack.
     * @param {?} focusTrap
     * @return {?}
     */
    deregister(focusTrap) {
        focusTrap._disable();
        /** @type {?} */
        const stack = this._focusTrapStack;
        /** @type {?} */
        const i = stack.indexOf(focusTrap);
        if (i !== -1) {
            stack.splice(i, 1);
            if (stack.length) {
                stack[stack.length - 1]._enable();
            }
        }
    }
}
FocusTrapManager.ɵfac = function FocusTrapManager_Factory(t) { return new (t || FocusTrapManager)(); };
/** @nocollapse */ FocusTrapManager.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function FocusTrapManager_Factory() { return new FocusTrapManager(); }, token: FocusTrapManager, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusTrapManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/focus-trap/configurable-focus-trap-factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Factory that allows easy instantiation of configurable focus traps.
 */
class ConfigurableFocusTrapFactory {
    /**
     * @param {?} _checker
     * @param {?} _ngZone
     * @param {?} _focusTrapManager
     * @param {?} _document
     * @param {?=} _inertStrategy
     */
    constructor(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._focusTrapManager = _focusTrapManager;
        this._document = _document;
        // TODO split up the strategies into different modules, similar to DateAdapter.
        this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
    }
    /**
     * @param {?} element
     * @param {?=} config
     * @return {?}
     */
    create(element, config = new ConfigurableFocusTrapConfig()) {
        /** @type {?} */
        let configObject;
        if (typeof config === 'boolean') {
            configObject = new ConfigurableFocusTrapConfig();
            configObject.defer = config;
        }
        else {
            configObject = config;
        }
        return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject);
    }
}
ConfigurableFocusTrapFactory.ɵfac = function ConfigurableFocusTrapFactory_Factory(t) { return new (t || ConfigurableFocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](FocusTrapManager), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](FOCUS_TRAP_INERT_STRATEGY, 8)); };
/** @nocollapse */
ConfigurableFocusTrapFactory.ctorParameters = () => [
    { type: InteractivityChecker },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: FocusTrapManager },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [FOCUS_TRAP_INERT_STRATEGY,] }] }
];
/** @nocollapse */ ConfigurableFocusTrapFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ConfigurableFocusTrapFactory_Factory() { return new ConfigurableFocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(FocusTrapManager), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(FOCUS_TRAP_INERT_STRATEGY, 8)); }, token: ConfigurableFocusTrapFactory, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfigurableFocusTrapFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: InteractivityChecker }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: FocusTrapManager }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [FOCUS_TRAP_INERT_STRATEGY]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/live-announcer/live-announcer-tokens.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('liveAnnouncerElement', {
    providedIn: 'root',
    factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
    return null;
}
/**
 * Object that can be used to configure the default options for the LiveAnnouncer.
 * @record
 */
function LiveAnnouncerDefaultOptions() { }
if (false) {}
/**
 * Injection token that can be used to configure the default options for the LiveAnnouncer.
 * @type {?}
 */
const LIVE_ANNOUNCER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('LIVE_ANNOUNCER_DEFAULT_OPTIONS');

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/live-announcer/live-announcer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LiveAnnouncer {
    /**
     * @param {?} elementToken
     * @param {?} _ngZone
     * @param {?} _document
     * @param {?=} _defaultOptions
     */
    constructor(elementToken, _ngZone, _document, _defaultOptions) {
        this._ngZone = _ngZone;
        this._defaultOptions = _defaultOptions;
        // We inject the live element and document as `any` because the constructor signature cannot
        // reference browser globals (HTMLElement, Document) on non-browser environments, since having
        // a class decorator causes TypeScript to preserve the constructor signature types.
        this._document = _document;
        this._liveElement = elementToken || this._createLiveElement();
    }
    /**
     * @param {?} message
     * @param {...?} args
     * @return {?}
     */
    announce(message, ...args) {
        /** @type {?} */
        const defaultOptions = this._defaultOptions;
        /** @type {?} */
        let politeness;
        /** @type {?} */
        let duration;
        if (args.length === 1 && typeof args[0] === 'number') {
            duration = args[0];
        }
        else {
            [politeness, duration] = args;
        }
        this.clear();
        clearTimeout(this._previousTimeout);
        if (!politeness) {
            politeness =
                (defaultOptions && defaultOptions.politeness) ? defaultOptions.politeness : 'polite';
        }
        if (duration == null && defaultOptions) {
            duration = defaultOptions.duration;
        }
        // TODO: ensure changing the politeness works on all environments we support.
        this._liveElement.setAttribute('aria-live', politeness);
        // This 100ms timeout is necessary for some browser + screen-reader combinations:
        // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
        // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
        //   second time without clearing and then using a non-zero delay.
        // (using JAWS 17 at time of this writing).
        return this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            return new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            resolve => {
                clearTimeout(this._previousTimeout);
                this._previousTimeout = setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this._liveElement.textContent = message;
                    resolve();
                    if (typeof duration === 'number') {
                        this._previousTimeout = setTimeout((/**
                         * @return {?}
                         */
                        () => this.clear()), duration);
                    }
                }), 100);
            }));
        }));
    }
    /**
     * Clears the current text from the announcer element. Can be used to prevent
     * screen readers from reading the text out again while the user is going
     * through the page landmarks.
     * @return {?}
     */
    clear() {
        if (this._liveElement) {
            this._liveElement.textContent = '';
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        clearTimeout(this._previousTimeout);
        if (this._liveElement && this._liveElement.parentNode) {
            this._liveElement.parentNode.removeChild(this._liveElement);
            this._liveElement = (/** @type {?} */ (null));
        }
    }
    /**
     * @private
     * @return {?}
     */
    _createLiveElement() {
        /** @type {?} */
        const elementClass = 'cdk-live-announcer-element';
        /** @type {?} */
        const previousElements = this._document.getElementsByClassName(elementClass);
        /** @type {?} */
        const liveEl = this._document.createElement('div');
        // Remove any old containers. This can happen when coming in from a server-side-rendered page.
        for (let i = 0; i < previousElements.length; i++) {
            (/** @type {?} */ (previousElements[i].parentNode)).removeChild(previousElements[i]);
        }
        liveEl.classList.add(elementClass);
        liveEl.classList.add('cdk-visually-hidden');
        liveEl.setAttribute('aria-atomic', 'true');
        liveEl.setAttribute('aria-live', 'polite');
        this._document.body.appendChild(liveEl);
        return liveEl;
    }
}
LiveAnnouncer.ɵfac = function LiveAnnouncer_Factory(t) { return new (t || LiveAnnouncer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8)); };
/** @nocollapse */
LiveAnnouncer.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [LIVE_ANNOUNCER_ELEMENT_TOKEN,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS,] }] }
];
/** @nocollapse */ LiveAnnouncer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function LiveAnnouncer_Factory() { return new LiveAnnouncer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8)); }, token: LiveAnnouncer, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LiveAnnouncer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
            }] }]; }, null); })();
if (false) {}
/**
 * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
 * with a wider range of browsers and screen readers.
 */
class CdkAriaLive {
    /**
     * @param {?} _elementRef
     * @param {?} _liveAnnouncer
     * @param {?} _contentObserver
     * @param {?} _ngZone
     */
    constructor(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
        this._elementRef = _elementRef;
        this._liveAnnouncer = _liveAnnouncer;
        this._contentObserver = _contentObserver;
        this._ngZone = _ngZone;
        this._politeness = 'off';
    }
    /**
     * The aria-live politeness level to use when announcing messages.
     * @return {?}
     */
    get politeness() { return this._politeness; }
    /**
     * @param {?} value
     * @return {?}
     */
    set politeness(value) {
        this._politeness = value === 'polite' || value === 'assertive' ? value : 'off';
        if (this._politeness === 'off') {
            if (this._subscription) {
                this._subscription.unsubscribe();
                this._subscription = null;
            }
        }
        else if (!this._subscription) {
            this._subscription = this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                return this._contentObserver
                    .observe(this._elementRef)
                    .subscribe((/**
                 * @return {?}
                 */
                () => {
                    // Note that we use textContent here, rather than innerText, in order to avoid a reflow.
                    /** @type {?} */
                    const elementText = this._elementRef.nativeElement.textContent;
                    // The `MutationObserver` fires also for attribute
                    // changes which we don't want to announce.
                    if (elementText !== this._previousAnnouncedText) {
                        this._liveAnnouncer.announce(elementText, this._politeness);
                        this._previousAnnouncedText = elementText;
                    }
                }));
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
}
CdkAriaLive.ɵfac = function CdkAriaLive_Factory(t) { return new (t || CdkAriaLive)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
CdkAriaLive.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkAriaLive, selectors: [["", "cdkAriaLive", ""]], inputs: { politeness: ["cdkAriaLive", "politeness"] }, exportAs: ["cdkAriaLive"] });
/** @nocollapse */
CdkAriaLive.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: LiveAnnouncer },
    { type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
CdkAriaLive.propDecorators = {
    politeness: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkAriaLive',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkAriaLive, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[cdkAriaLive]',
                exportAs: 'cdkAriaLive'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: LiveAnnouncer }, { type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, { politeness: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkAriaLive']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/fake-mousedown.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Screenreaders will often fire fake mousedown events when a focusable element
 * is activated using the keyboard. We can typically distinguish between these faked
 * mousedown events and real mousedown events using the "buttons" property. While
 * real mousedowns will indicate the mouse button that was pressed (e.g. "1" for
 * the left mouse button), faked mousedowns will usually set the property value to 0.
 * @param {?} event
 * @return {?}
 */
function isFakeMousedownFromScreenReader(event) {
    return event.buttons === 0;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/focus-monitor/focus-monitor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
// that a value of around 650ms seems appropriate.
/** @type {?} */
const TOUCH_BUFFER_MS = 650;
/**
 * Corresponds to the options that can be passed to the native `focus` event.
 * via https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
 * @record
 */
function FocusOptions() { }
if (false) {}
/** @enum {number} */
const FocusMonitorDetectionMode = {
    /**
     * Any mousedown, keydown, or touchstart event that happened in the previous
     * tick or the current tick will be used to assign a focus event's origin (to
     * either mouse, keyboard, or touch). This is the default option.
     */
    IMMEDIATE: 0,
    /**
     * A focus event's origin is always attributed to the last corresponding
     * mousedown, keydown, or touchstart event, no matter how long ago it occured.
     */
    EVENTUAL: 1,
};
/**
 * Injectable service-level options for FocusMonitor.
 * @record
 */
function FocusMonitorOptions() { }
if (false) {}
/**
 * InjectionToken for FocusMonitorOptions.
 * @type {?}
 */
const FOCUS_MONITOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-focus-monitor-default-options');
/**
 * Event listener options that enable capturing and also
 * mark the listener as passive if the browser supports it.
 * @type {?}
 */
const captureEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["normalizePassiveListenerOptions"])({
    passive: true,
    capture: true
});
/**
 * Monitors mouse and keyboard events to determine the cause of focus events.
 */
class FocusMonitor {
    /**
     * @param {?} _ngZone
     * @param {?} _platform
     * @param {?} document
     * @param {?} options
     */
    constructor(_ngZone, _platform, 
    /** @breaking-change 11.0.0 make document required */
    document, options) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * The focus origin that the next focus event is a result of.
         */
        this._origin = null;
        /**
         * Whether the window has just been focused.
         */
        this._windowFocused = false;
        /**
         * Map of elements being monitored to their info.
         */
        this._elementInfo = new Map();
        /**
         * The number of elements currently being monitored.
         */
        this._monitoredElementCount = 0;
        /**
         * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
         * as well as the number of monitored elements that they contain. We have to treat focus/blur
         * handlers differently from the rest of the events, because the browser won't emit events
         * to the document when focus moves inside of a shadow root.
         */
        this._rootNodeFocusListenerCount = new Map();
        /**
         * Event listener for `keydown` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */
        this._documentKeydownListener = (/**
         * @return {?}
         */
        () => {
            // On keydown record the origin and clear any touch event that may be in progress.
            this._lastTouchTarget = null;
            this._setOriginForCurrentEventQueue('keyboard');
        });
        /**
         * Event listener for `mousedown` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */
        this._documentMousedownListener = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            // On mousedown record the origin only if there is not touch
            // target, since a mousedown can happen as a result of a touch event.
            if (!this._lastTouchTarget) {
                // In some cases screen readers fire fake `mousedown` events instead of `keydown`.
                // Resolve the focus source to `keyboard` if we detect one of them.
                /** @type {?} */
                const source = isFakeMousedownFromScreenReader(event) ? 'keyboard' : 'mouse';
                this._setOriginForCurrentEventQueue(source);
            }
        });
        /**
         * Event listener for `touchstart` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */
        this._documentTouchstartListener = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            // When the touchstart event fires the focus event is not yet in the event queue. This means
            // we can't rely on the trick used above (setting timeout of 1ms). Instead we wait 650ms to
            // see if a focus happens.
            if (this._touchTimeoutId != null) {
                clearTimeout(this._touchTimeoutId);
            }
            this._lastTouchTarget = getTarget(event);
            this._touchTimeoutId = setTimeout((/**
             * @return {?}
             */
            () => this._lastTouchTarget = null), TOUCH_BUFFER_MS);
        });
        /**
         * Event listener for `focus` events on the window.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */
        this._windowFocusListener = (/**
         * @return {?}
         */
        () => {
            // Make a note of when the window regains focus, so we can
            // restore the origin info for the focused element.
            this._windowFocused = true;
            this._windowFocusTimeoutId = setTimeout((/**
             * @return {?}
             */
            () => this._windowFocused = false));
        });
        /**
         * Event listener for `focus` and 'blur' events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */
        this._rootNodeFocusAndBlurListener = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const target = getTarget(event);
            /** @type {?} */
            const handler = event.type === 'focus' ? this._onFocus : this._onBlur;
            // We need to walk up the ancestor chain in order to support `checkChildren`.
            for (let element = target; element; element = element.parentElement) {
                handler.call(this, (/** @type {?} */ (event)), element);
            }
        });
        this._document = document;
        this._detectionMode = (options === null || options === void 0 ? void 0 : options.detectionMode) || 0 /* IMMEDIATE */;
    }
    /**
     * @param {?} element
     * @param {?=} checkChildren
     * @return {?}
     */
    monitor(element, checkChildren = false) {
        // Do nothing if we're not on the browser platform.
        if (!this._platform.isBrowser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
        /** @type {?} */
        const nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(element);
        // If the element is inside the shadow DOM, we need to bind our focus/blur listeners to
        // the shadow root, rather than the `document`, because the browser won't emit focus events
        // to the `document`, if focus is moving within the same shadow root.
        /** @type {?} */
        const rootNode = ((/** @type {?} */ (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["_getShadowRoot"])(nativeElement)))) || this._getDocument();
        /** @type {?} */
        const cachedInfo = this._elementInfo.get(nativeElement);
        // Check if we're already monitoring this element.
        if (cachedInfo) {
            if (checkChildren) {
                // TODO(COMP-318): this can be problematic, because it'll turn all non-checkChildren
                // observers into ones that behave as if `checkChildren` was turned on. We need a more
                // robust solution.
                cachedInfo.checkChildren = true;
            }
            return cachedInfo.subject.asObservable();
        }
        // Create monitored element info.
        /** @type {?} */
        const info = {
            checkChildren: checkChildren,
            subject: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](),
            rootNode
        };
        this._elementInfo.set(nativeElement, info);
        this._registerGlobalListeners(info);
        return info.subject.asObservable();
    }
    /**
     * @param {?} element
     * @return {?}
     */
    stopMonitoring(element) {
        /** @type {?} */
        const nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(element);
        /** @type {?} */
        const elementInfo = this._elementInfo.get(nativeElement);
        if (elementInfo) {
            elementInfo.subject.complete();
            this._setClasses(nativeElement);
            this._elementInfo.delete(nativeElement);
            this._removeGlobalListeners(elementInfo);
        }
    }
    /**
     * @param {?} element
     * @param {?} origin
     * @param {?=} options
     * @return {?}
     */
    focusVia(element, origin, options) {
        /** @type {?} */
        const nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(element);
        this._setOriginForCurrentEventQueue(origin);
        // `focus` isn't available on the server
        if (typeof nativeElement.focus === 'function') {
            // Cast the element to `any`, because the TS typings don't have the `options` parameter yet.
            ((/** @type {?} */ (nativeElement))).focus(options);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._elementInfo.forEach((/**
         * @param {?} _info
         * @param {?} element
         * @return {?}
         */
        (_info, element) => this.stopMonitoring(element)));
    }
    /**
     * Access injected document if available or fallback to global document reference
     * @private
     * @return {?}
     */
    _getDocument() {
        return this._document || document;
    }
    /**
     * Use defaultView of injected document if available or fallback to global window reference
     * @private
     * @return {?}
     */
    _getWindow() {
        /** @type {?} */
        const doc = this._getDocument();
        return doc.defaultView || window;
    }
    /**
     * @private
     * @param {?} element
     * @param {?} className
     * @param {?} shouldSet
     * @return {?}
     */
    _toggleClass(element, className, shouldSet) {
        if (shouldSet) {
            element.classList.add(className);
        }
        else {
            element.classList.remove(className);
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    _getFocusOrigin(event) {
        // If we couldn't detect a cause for the focus event, it's due to one of three reasons:
        // 1) The window has just regained focus, in which case we want to restore the focused state of
        //    the element from before the window blurred.
        // 2) It was caused by a touch event, in which case we mark the origin as 'touch'.
        // 3) The element was programmatically focused, in which case we should mark the origin as
        //    'program'.
        if (this._origin) {
            return this._origin;
        }
        if (this._windowFocused && this._lastFocusOrigin) {
            return this._lastFocusOrigin;
        }
        else if (this._wasCausedByTouch(event)) {
            return 'touch';
        }
        else {
            return 'program';
        }
    }
    /**
     * Sets the focus classes on the element based on the given focus origin.
     * @private
     * @param {?} element The element to update the classes on.
     * @param {?=} origin The focus origin.
     * @return {?}
     */
    _setClasses(element, origin) {
        this._toggleClass(element, 'cdk-focused', !!origin);
        this._toggleClass(element, 'cdk-touch-focused', origin === 'touch');
        this._toggleClass(element, 'cdk-keyboard-focused', origin === 'keyboard');
        this._toggleClass(element, 'cdk-mouse-focused', origin === 'mouse');
        this._toggleClass(element, 'cdk-program-focused', origin === 'program');
    }
    /**
     * Sets the origin and schedules an async function to clear it at the end of the event queue.
     * If the detection mode is 'eventual', the origin is never cleared.
     * @private
     * @param {?} origin The origin to set.
     * @return {?}
     */
    _setOriginForCurrentEventQueue(origin) {
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this._origin = origin;
            if (this._detectionMode === 0 /* IMMEDIATE */) {
                // Sometimes the focus origin won't be valid in Firefox because Firefox seems to focus *one*
                // tick after the interaction event fired. To ensure the focus origin is always correct,
                // the focus origin will be determined at the beginning of the next tick.
                this._originTimeoutId = setTimeout((/**
                 * @return {?}
                 */
                () => this._origin = null), 1);
            }
        }));
    }
    /**
     * Checks whether the given focus event was caused by a touchstart event.
     * @private
     * @param {?} event The focus event to check.
     * @return {?} Whether the event was caused by a touch.
     */
    _wasCausedByTouch(event) {
        // Note(mmalerba): This implementation is not quite perfect, there is a small edge case.
        // Consider the following dom structure:
        //
        // <div #parent tabindex="0" cdkFocusClasses>
        //   <div #child (click)="#parent.focus()"></div>
        // </div>
        //
        // If the user touches the #child element and the #parent is programmatically focused as a
        // result, this code will still consider it to have been caused by the touch event and will
        // apply the cdk-touch-focused class rather than the cdk-program-focused class. This is a
        // relatively small edge-case that can be worked around by using
        // focusVia(parentEl, 'program') to focus the parent element.
        //
        // If we decide that we absolutely must handle this case correctly, we can do so by listening
        // for the first focus event after the touchstart, and then the first blur event after that
        // focus event. When that blur event fires we know that whatever follows is not a result of the
        // touchstart.
        /** @type {?} */
        const focusTarget = getTarget(event);
        return this._lastTouchTarget instanceof Node && focusTarget instanceof Node &&
            (focusTarget === this._lastTouchTarget || focusTarget.contains(this._lastTouchTarget));
    }
    /**
     * Handles focus events on a registered element.
     * @private
     * @param {?} event The focus event.
     * @param {?} element The monitored element.
     * @return {?}
     */
    _onFocus(event, element) {
        // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
        // focus event affecting the monitored element. If we want to use the origin of the first event
        // instead we should check for the cdk-focused class here and return if the element already has
        // it. (This only matters for elements that have includesChildren = true).
        // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
        // focus event affecting the monitored element. If we want to use the origin of the first event
        // instead we should check for the cdk-focused class here and return if the element already has
        // it. (This only matters for elements that have includesChildren = true).
        // If we are not counting child-element-focus as focused, make sure that the event target is the
        // monitored element itself.
        /** @type {?} */
        const elementInfo = this._elementInfo.get(element);
        if (!elementInfo || (!elementInfo.checkChildren && element !== getTarget(event))) {
            return;
        }
        /** @type {?} */
        const origin = this._getFocusOrigin(event);
        this._setClasses(element, origin);
        this._emitOrigin(elementInfo.subject, origin);
        this._lastFocusOrigin = origin;
    }
    /**
     * Handles blur events on a registered element.
     * @param {?} event The blur event.
     * @param {?} element The monitored element.
     * @return {?}
     */
    _onBlur(event, element) {
        // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
        // order to focus another child of the monitored element.
        /** @type {?} */
        const elementInfo = this._elementInfo.get(element);
        if (!elementInfo || (elementInfo.checkChildren && event.relatedTarget instanceof Node &&
            element.contains(event.relatedTarget))) {
            return;
        }
        this._setClasses(element);
        this._emitOrigin(elementInfo.subject, null);
    }
    /**
     * @private
     * @param {?} subject
     * @param {?} origin
     * @return {?}
     */
    _emitOrigin(subject, origin) {
        this._ngZone.run((/**
         * @return {?}
         */
        () => subject.next(origin)));
    }
    /**
     * @private
     * @param {?} elementInfo
     * @return {?}
     */
    _registerGlobalListeners(elementInfo) {
        if (!this._platform.isBrowser) {
            return;
        }
        /** @type {?} */
        const rootNode = elementInfo.rootNode;
        /** @type {?} */
        const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
        if (!rootNodeFocusListeners) {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                rootNode.addEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
                rootNode.addEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
            }));
        }
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
        // Register global listeners when first element is monitored.
        if (++this._monitoredElementCount === 1) {
            // Note: we listen to events in the capture phase so we
            // can detect them even if the user stops propagation.
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const document = this._getDocument();
                /** @type {?} */
                const window = this._getWindow();
                document.addEventListener('keydown', this._documentKeydownListener, captureEventListenerOptions);
                document.addEventListener('mousedown', this._documentMousedownListener, captureEventListenerOptions);
                document.addEventListener('touchstart', this._documentTouchstartListener, captureEventListenerOptions);
                window.addEventListener('focus', this._windowFocusListener);
            }));
        }
    }
    /**
     * @private
     * @param {?} elementInfo
     * @return {?}
     */
    _removeGlobalListeners(elementInfo) {
        /** @type {?} */
        const rootNode = elementInfo.rootNode;
        if (this._rootNodeFocusListenerCount.has(rootNode)) {
            /** @type {?} */
            const rootNodeFocusListeners = (/** @type {?} */ (this._rootNodeFocusListenerCount.get(rootNode)));
            if (rootNodeFocusListeners > 1) {
                this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
            }
            else {
                rootNode.removeEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
                rootNode.removeEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
                this._rootNodeFocusListenerCount.delete(rootNode);
            }
        }
        // Unregister global listeners when last element is unmonitored.
        if (!--this._monitoredElementCount) {
            /** @type {?} */
            const document = this._getDocument();
            /** @type {?} */
            const window = this._getWindow();
            document.removeEventListener('keydown', this._documentKeydownListener, captureEventListenerOptions);
            document.removeEventListener('mousedown', this._documentMousedownListener, captureEventListenerOptions);
            document.removeEventListener('touchstart', this._documentTouchstartListener, captureEventListenerOptions);
            window.removeEventListener('focus', this._windowFocusListener);
            // Clear timeouts for all potentially pending timeouts to prevent the leaks.
            clearTimeout(this._windowFocusTimeoutId);
            clearTimeout(this._touchTimeoutId);
            clearTimeout(this._originTimeoutId);
        }
    }
}
FocusMonitor.ɵfac = function FocusMonitor_Factory(t) { return new (t || FocusMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](FOCUS_MONITOR_DEFAULT_OPTIONS, 8)); };
/** @nocollapse */
FocusMonitor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [FOCUS_MONITOR_DEFAULT_OPTIONS,] }] }
];
/** @nocollapse */ FocusMonitor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function FocusMonitor_Factory() { return new FocusMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(FOCUS_MONITOR_DEFAULT_OPTIONS, 8)); }, token: FocusMonitor, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FocusMonitor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
            }] }]; }, null); })();
if (false) {}
/**
 * Gets the target of an event, accounting for Shadow DOM.
 * @param {?} event
 * @return {?}
 */
function getTarget(event) {
    // If an event is bound outside the Shadow DOM, the `event.target` will
    // point to the shadow root so we have to use `composedPath` instead.
    return (/** @type {?} */ ((event.composedPath ? event.composedPath()[0] : event.target)));
}
/**
 * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
 * programmatically) and adds corresponding classes to the element.
 *
 * There are two variants of this directive:
 * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
 *    focused.
 * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
 */
class CdkMonitorFocus {
    /**
     * @param {?} _elementRef
     * @param {?} _focusMonitor
     */
    constructor(_elementRef, _focusMonitor) {
        this._elementRef = _elementRef;
        this._focusMonitor = _focusMonitor;
        this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._monitorSubscription = this._focusMonitor.monitor(this._elementRef, this._elementRef.nativeElement.hasAttribute('cdkMonitorSubtreeFocus'))
            .subscribe((/**
         * @param {?} origin
         * @return {?}
         */
        origin => this.cdkFocusChange.emit(origin)));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
        this._monitorSubscription.unsubscribe();
    }
}
CdkMonitorFocus.ɵfac = function CdkMonitorFocus_Factory(t) { return new (t || CdkMonitorFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FocusMonitor)); };
CdkMonitorFocus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkMonitorFocus, selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]], outputs: { cdkFocusChange: "cdkFocusChange" } });
/** @nocollapse */
CdkMonitorFocus.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: FocusMonitor }
];
CdkMonitorFocus.propDecorators = {
    cdkFocusChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkMonitorFocus, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: FocusMonitor }]; }, { cdkFocusChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/high-contrast-mode/high-contrast-mode-detector.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const HighContrastMode = {
    NONE: 0,
    BLACK_ON_WHITE: 1,
    WHITE_ON_BLACK: 2,
};
/**
 * CSS class applied to the document body when in black-on-white high-contrast mode.
 * @type {?}
 */
const BLACK_ON_WHITE_CSS_CLASS = 'cdk-high-contrast-black-on-white';
/**
 * CSS class applied to the document body when in white-on-black high-contrast mode.
 * @type {?}
 */
const WHITE_ON_BLACK_CSS_CLASS = 'cdk-high-contrast-white-on-black';
/**
 * CSS class applied to the document body when in high-contrast mode.
 * @type {?}
 */
const HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = 'cdk-high-contrast-active';
/**
 * Service to determine whether the browser is currently in a high-contrast-mode environment.
 *
 * Microsoft Windows supports an accessibility feature called "High Contrast Mode". This mode
 * changes the appearance of all applications, including web applications, to dramatically increase
 * contrast.
 *
 * IE, Edge, and Firefox currently support this mode. Chrome does not support Windows High Contrast
 * Mode. This service does not detect high-contrast mode as added by the Chrome "High Contrast"
 * browser extension.
 */
class HighContrastModeDetector {
    /**
     * @param {?} _platform
     * @param {?} document
     */
    constructor(_platform, document) {
        this._platform = _platform;
        this._document = document;
    }
    /**
     * Gets the current high-contrast-mode for the page.
     * @return {?}
     */
    getHighContrastMode() {
        if (!this._platform.isBrowser) {
            return 0 /* NONE */;
        }
        // Create a test element with an arbitrary background-color that is neither black nor
        // white; high-contrast mode will coerce the color to either black or white. Also ensure that
        // appending the test element to the DOM does not affect layout by absolutely positioning it
        /** @type {?} */
        const testElement = this._document.createElement('div');
        testElement.style.backgroundColor = 'rgb(1,2,3)';
        testElement.style.position = 'absolute';
        this._document.body.appendChild(testElement);
        // Get the computed style for the background color, collapsing spaces to normalize between
        // browsers. Once we get this color, we no longer need the test element. Access the `window`
        // via the document so we can fake it in tests. Note that we have extra null checks, because
        // this logic will likely run during app bootstrap and throwing can break the entire app.
        /** @type {?} */
        const documentWindow = this._document.defaultView || window;
        /** @type {?} */
        const computedStyle = (documentWindow && documentWindow.getComputedStyle) ?
            documentWindow.getComputedStyle(testElement) : null;
        /** @type {?} */
        const computedColor = (computedStyle && computedStyle.backgroundColor || '').replace(/ /g, '');
        this._document.body.removeChild(testElement);
        switch (computedColor) {
            case 'rgb(0,0,0)': return 2 /* WHITE_ON_BLACK */;
            case 'rgb(255,255,255)': return 1 /* BLACK_ON_WHITE */;
        }
        return 0 /* NONE */;
    }
    /**
     * Applies CSS classes indicating high-contrast mode to document body (browser-only).
     * @return {?}
     */
    _applyBodyHighContrastModeCssClasses() {
        if (this._platform.isBrowser && this._document.body) {
            /** @type {?} */
            const bodyClasses = this._document.body.classList;
            // IE11 doesn't support `classList` operations with multiple arguments
            bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
            bodyClasses.remove(BLACK_ON_WHITE_CSS_CLASS);
            bodyClasses.remove(WHITE_ON_BLACK_CSS_CLASS);
            /** @type {?} */
            const mode = this.getHighContrastMode();
            if (mode === 1 /* BLACK_ON_WHITE */) {
                bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                bodyClasses.add(BLACK_ON_WHITE_CSS_CLASS);
            }
            else if (mode === 2 /* WHITE_ON_BLACK */) {
                bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                bodyClasses.add(WHITE_ON_BLACK_CSS_CLASS);
            }
        }
    }
}
HighContrastModeDetector.ɵfac = function HighContrastModeDetector_Factory(t) { return new (t || HighContrastModeDetector)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
/** @nocollapse */
HighContrastModeDetector.ctorParameters = () => [
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
];
/** @nocollapse */ HighContrastModeDetector.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function HighContrastModeDetector_Factory() { return new HighContrastModeDetector(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: HighContrastModeDetector, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HighContrastModeDetector, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/a11y-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class A11yModule {
    /**
     * @param {?} highContrastModeDetector
     */
    constructor(highContrastModeDetector) {
        highContrastModeDetector._applyBodyHighContrastModeCssClasses();
    }
}
A11yModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: A11yModule });
A11yModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function A11yModule_Factory(t) { return new (t || A11yModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HighContrastModeDetector)); }, imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]]] });
/** @nocollapse */
A11yModule.ctorParameters = () => [
    { type: HighContrastModeDetector }
];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](A11yModule, { declarations: function () { return [CdkAriaLive,
        CdkTrapFocus,
        CdkMonitorFocus]; }, imports: function () { return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]]; }, exports: function () { return [CdkAriaLive,
        CdkTrapFocus,
        CdkMonitorFocus]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](A11yModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]],
                declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
                exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
            }]
    }], function () { return [{ type: HighContrastModeDetector }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=a11y.js.map

/***/ }),

/***/ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js":
/*!******************************************************************************************************************************************************!*\
  !*** C:/Users/n_sol/dev/monorepo-wallet/omnichannel2-commercial-plataform-wallet-management/node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: BidiModule, DIR_DOCUMENT, Dir, Directionality, ɵangular_material_src_cdk_bidi_bidi_a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidiModule", function() { return BidiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function() { return DIR_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dir", function() { return Dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directionality", function() { return Directionality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_bidi_bidi_a", function() { return DIR_DOCUMENT_FACTORY; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/bidi/dir-document-token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * \@docs-private
 * @type {?}
 */

const DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('cdk-dir-doc', {
    providedIn: 'root',
    factory: DIR_DOCUMENT_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function DIR_DOCUMENT_FACTORY() {
    return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]);
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/bidi/directionality.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
class Directionality {
    /**
     * @param {?=} _document
     */
    constructor(_document) {
        /**
         * The current 'ltr' or 'rtl' value.
         */
        this.value = 'ltr';
        /**
         * Stream that emits whenever the 'ltr' / 'rtl' state changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            /** @type {?} */
            const bodyDir = _document.body ? _document.body.dir : null;
            /** @type {?} */
            const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            /** @type {?} */
            const value = bodyDir || htmlDir;
            this.value = (value === 'ltr' || value === 'rtl') ? value : 'ltr';
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.change.complete();
    }
}
Directionality.ɵfac = function Directionality_Factory(t) { return new (t || Directionality)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DIR_DOCUMENT, 8)); };
/** @nocollapse */
Directionality.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [DIR_DOCUMENT,] }] }
];
/** @nocollapse */ Directionality.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function Directionality_Factory() { return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DIR_DOCUMENT, 8)); }, token: Directionality, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Directionality, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [DIR_DOCUMENT]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/bidi/dir.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
class Dir {
    constructor() {
        /**
         * Normalized direction that accounts for invalid/unsupported values.
         */
        this._dir = 'ltr';
        /**
         * Whether the `value` has been set to its initial value.
         */
        this._isInitialized = false;
        /**
         * Event emitted when the direction changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get dir() { return this._dir; }
    /**
     * @param {?} value
     * @return {?}
     */
    set dir(value) {
        /** @type {?} */
        const old = this._dir;
        /** @type {?} */
        const normalizedValue = value ? value.toLowerCase() : value;
        this._rawDir = value;
        this._dir = (normalizedValue === 'ltr' || normalizedValue === 'rtl') ? normalizedValue : 'ltr';
        if (old !== this._dir && this._isInitialized) {
            this.change.emit(this._dir);
        }
    }
    /**
     * Current layout direction of the element.
     * @return {?}
     */
    get value() { return this.dir; }
    /**
     * Initialize once default value has been set.
     * @return {?}
     */
    ngAfterContentInit() {
        this._isInitialized = true;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.change.complete();
    }
}
Dir.ɵfac = function Dir_Factory(t) { return new (t || Dir)(); };
Dir.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: Dir, selectors: [["", "dir", ""]], hostVars: 1, hostBindings: function Dir_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dir", ctx._rawDir);
    } }, inputs: { dir: "dir" }, outputs: { change: "dirChange" }, exportAs: ["dir"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: Directionality, useExisting: Dir }])] });
Dir.propDecorators = {
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['dirChange',] }],
    dir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dir, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[dir]',
                providers: [{ provide: Directionality, useExisting: Dir }],
                host: { '[attr.dir]': '_rawDir' },
                exportAs: 'dir'
            }]
    }], function () { return []; }, { change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['dirChange']
        }], dir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/bidi/bidi-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BidiModule {
}
BidiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BidiModule });
BidiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BidiModule_Factory(t) { return new (t || BidiModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BidiModule, { declarations: [Dir], exports: [Dir] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BidiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [Dir],
                declarations: [Dir]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/bidi/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=bidi.js.map

/***/ }),

/***/ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js":
/*!*************************************************************************************************************************************************************!*\
  !*** C:/Users/n_sol/dev/monorepo-wallet/omnichannel2-commercial-plataform-wallet-management/node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: ArrayDataSource, DataSource, SelectionModel, UniqueSelectionDispatcher, getMultipleValuesInSingleSelectionError, isDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function() { return ArrayDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionModel", function() { return SelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function() { return UniqueSelectionDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function() { return getMultipleValuesInSingleSelectionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDataSource", function() { return isDataSource; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/collections/data-source.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @abstract
 * @template T
 */

class DataSource {
}
if (false) {}
/**
 * Checks whether an object is a data source.
 * @param {?} value
 * @return {?}
 */
function isDataSource(value) {
    // Check if the value is a DataSource by observing if it has a connect function. Cannot
    // be checked as an `instanceof DataSource` since people could create their own sources
    // that match the interface, but don't extend DataSource.
    return value && typeof value.connect === 'function';
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/collections/array-data-source.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * DataSource wrapper for a native array.
 * @template T
 */
class ArrayDataSource extends DataSource {
    /**
     * @param {?} _data
     */
    constructor(_data) {
        super();
        this._data = _data;
    }
    /**
     * @return {?}
     */
    connect() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["isObservable"])(this._data) ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this._data);
    }
    /**
     * @return {?}
     */
    disconnect() { }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/collections/collection-viewer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Interface for any component that provides a view of some data collection and wants to provide
 * information regarding the view and any changes made.
 * @record
 */
function CollectionViewer() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/collections/selection-model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class to be used to power selecting one or more options from a list.
 * @template T
 */
class SelectionModel {
    /**
     * @param {?=} _multiple
     * @param {?=} initiallySelectedValues
     * @param {?=} _emitChanges
     */
    constructor(_multiple = false, initiallySelectedValues, _emitChanges = true) {
        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        /**
         * Currently-selected values.
         */
        this._selection = new Set();
        /**
         * Keeps track of the deselected options that haven't been emitted by the change event.
         */
        this._deselectedToEmit = [];
        /**
         * Keeps track of the selected options that haven't been emitted by the change event.
         */
        this._selectedToEmit = [];
        /**
         * Event emitted when the value has changed.
         */
        this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        if (initiallySelectedValues && initiallySelectedValues.length) {
            if (_multiple) {
                initiallySelectedValues.forEach((/**
                 * @param {?} value
                 * @return {?}
                 */
                value => this._markSelected(value)));
            }
            else {
                this._markSelected(initiallySelectedValues[0]);
            }
            // Clear the array in order to avoid firing the change event for preselected values.
            this._selectedToEmit.length = 0;
        }
    }
    /**
     * Selected values.
     * @return {?}
     */
    get selected() {
        if (!this._selected) {
            this._selected = Array.from(this._selection.values());
        }
        return this._selected;
    }
    /**
     * Selects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    select(...values) {
        this._verifyValueAssignment(values);
        values.forEach((/**
         * @param {?} value
         * @return {?}
         */
        value => this._markSelected(value)));
        this._emitChangeEvent();
    }
    /**
     * Deselects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    deselect(...values) {
        this._verifyValueAssignment(values);
        values.forEach((/**
         * @param {?} value
         * @return {?}
         */
        value => this._unmarkSelected(value)));
        this._emitChangeEvent();
    }
    /**
     * Toggles a value between selected and deselected.
     * @param {?} value
     * @return {?}
     */
    toggle(value) {
        this.isSelected(value) ? this.deselect(value) : this.select(value);
    }
    /**
     * Clears all of the selected values.
     * @return {?}
     */
    clear() {
        this._unmarkAll();
        this._emitChangeEvent();
    }
    /**
     * Determines whether a value is selected.
     * @param {?} value
     * @return {?}
     */
    isSelected(value) {
        return this._selection.has(value);
    }
    /**
     * Determines whether the model does not have a value.
     * @return {?}
     */
    isEmpty() {
        return this._selection.size === 0;
    }
    /**
     * Determines whether the model has a value.
     * @return {?}
     */
    hasValue() {
        return !this.isEmpty();
    }
    /**
     * Sorts the selected values based on a predicate function.
     * @param {?=} predicate
     * @return {?}
     */
    sort(predicate) {
        if (this._multiple && this.selected) {
            (/** @type {?} */ (this._selected)).sort(predicate);
        }
    }
    /**
     * Gets whether multiple values can be selected.
     * @return {?}
     */
    isMultipleSelection() {
        return this._multiple;
    }
    /**
     * Emits a change event and clears the records of selected and deselected values.
     * @private
     * @return {?}
     */
    _emitChangeEvent() {
        // Clear the selected values so they can be re-cached.
        this._selected = null;
        if (this._selectedToEmit.length || this._deselectedToEmit.length) {
            this.changed.next({
                source: this,
                added: this._selectedToEmit,
                removed: this._deselectedToEmit
            });
            this._deselectedToEmit = [];
            this._selectedToEmit = [];
        }
    }
    /**
     * Selects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    _markSelected(value) {
        if (!this.isSelected(value)) {
            if (!this._multiple) {
                this._unmarkAll();
            }
            this._selection.add(value);
            if (this._emitChanges) {
                this._selectedToEmit.push(value);
            }
        }
    }
    /**
     * Deselects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    _unmarkSelected(value) {
        if (this.isSelected(value)) {
            this._selection.delete(value);
            if (this._emitChanges) {
                this._deselectedToEmit.push(value);
            }
        }
    }
    /**
     * Clears out the selected values.
     * @private
     * @return {?}
     */
    _unmarkAll() {
        if (!this.isEmpty()) {
            this._selection.forEach((/**
             * @param {?} value
             * @return {?}
             */
            value => this._unmarkSelected(value)));
        }
    }
    /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     * @private
     * @param {?} values
     * @return {?}
     */
    _verifyValueAssignment(values) {
        if (values.length > 1 && !this._multiple) {
            throw getMultipleValuesInSingleSelectionError();
        }
    }
}
if (false) {}
/**
 * Event emitted when the value of a MatSelectionModel has changed.
 * \@docs-private
 * @record
 * @template T
 */
function SelectionChange() { }
if (false) {}
/**
 * Returns an error that reports that multiple values are passed into a selection model
 * with a single value.
 * \@docs-private
 * @return {?}
 */
function getMultipleValuesInSingleSelectionError() {
    return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/collections/unique-selection-dispatcher.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class to coordinate unique selection based on name.
 * Intended to be consumed as an Angular service.
 * This service is needed because native radio change events are only fired on the item currently
 * being selected, and we still need to uncheck the previous selection.
 *
 * This service does not *store* any IDs and names because they may change at any time, so it is
 * less error-prone if they are simply passed through when the events occur.
 */
class UniqueSelectionDispatcher {
    constructor() {
        this._listeners = [];
    }
    /**
     * Notify other items that selection for the given name has been set.
     * @param {?} id ID of the item.
     * @param {?} name Name of the item.
     * @return {?}
     */
    notify(id, name) {
        for (let listener of this._listeners) {
            listener(id, name);
        }
    }
    /**
     * Listen for future changes to item selection.
     * @param {?} listener
     * @return {?} Function used to deregister listener
     */
    listen(listener) {
        this._listeners.push(listener);
        return (/**
         * @return {?}
         */
        () => {
            this._listeners = this._listeners.filter((/**
             * @param {?} registered
             * @return {?}
             */
            (registered) => {
                return listener !== registered;
            }));
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._listeners = [];
    }
}
UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) { return new (t || UniqueSelectionDispatcher)(); };
/** @nocollapse */ UniqueSelectionDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function UniqueSelectionDispatcher_Factory() { return new UniqueSelectionDispatcher(); }, token: UniqueSelectionDispatcher, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UniqueSelectionDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/collections/tree-adapter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Interface for a class that can flatten hierarchical structured data and re-expand the flattened
 * data back into its original structure. Should be used in conjunction with the cdk-tree.
 * @record
 * @template T
 */
function TreeDataNodeFlattener() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/collections/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=collections.js.map

/***/ }),

/***/ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js":
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/n_sol/dev/monorepo-wallet/omnichannel2-commercial-plataform-wallet-management/node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: A, ALT, APOSTROPHE, AT_SIGN, B, BACKSLASH, BACKSPACE, C, CAPS_LOCK, CLOSE_SQUARE_BRACKET, COMMA, CONTEXT_MENU, CONTROL, D, DASH, DELETE, DOWN_ARROW, E, EIGHT, END, ENTER, EQUALS, ESCAPE, F, F1, F10, F11, F12, F2, F3, F4, F5, F6, F7, F8, F9, FF_EQUALS, FF_MINUS, FF_MUTE, FF_SEMICOLON, FF_VOLUME_DOWN, FF_VOLUME_UP, FIRST_MEDIA, FIVE, FOUR, G, H, HOME, I, INSERT, J, K, L, LAST_MEDIA, LEFT_ARROW, M, MAC_ENTER, MAC_META, MAC_WK_CMD_LEFT, MAC_WK_CMD_RIGHT, META, MUTE, N, NINE, NUMPAD_DIVIDE, NUMPAD_EIGHT, NUMPAD_FIVE, NUMPAD_FOUR, NUMPAD_MINUS, NUMPAD_MULTIPLY, NUMPAD_NINE, NUMPAD_ONE, NUMPAD_PERIOD, NUMPAD_PLUS, NUMPAD_SEVEN, NUMPAD_SIX, NUMPAD_THREE, NUMPAD_TWO, NUMPAD_ZERO, NUM_CENTER, NUM_LOCK, O, ONE, OPEN_SQUARE_BRACKET, P, PAGE_DOWN, PAGE_UP, PAUSE, PLUS_SIGN, PRINT_SCREEN, Q, QUESTION_MARK, R, RIGHT_ARROW, S, SCROLL_LOCK, SEMICOLON, SEVEN, SHIFT, SINGLE_QUOTE, SIX, SLASH, SPACE, T, TAB, THREE, TILDE, TWO, U, UP_ARROW, V, VOLUME_DOWN, VOLUME_UP, W, X, Y, Z, ZERO, hasModifierKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALT", function() { return ALT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APOSTROPHE", function() { return APOSTROPHE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AT_SIGN", function() { return AT_SIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKSLASH", function() { return BACKSLASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKSPACE", function() { return BACKSPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPS_LOCK", function() { return CAPS_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_SQUARE_BRACKET", function() { return CLOSE_SQUARE_BRACKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMA", function() { return COMMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU", function() { return CONTEXT_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL", function() { return CONTROL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DASH", function() { return DASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWN_ARROW", function() { return DOWN_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EIGHT", function() { return EIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END", function() { return END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTER", function() { return ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EQUALS", function() { return EQUALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESCAPE", function() { return ESCAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F1", function() { return F1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F10", function() { return F10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F11", function() { return F11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F12", function() { return F12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F2", function() { return F2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F3", function() { return F3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F4", function() { return F4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F5", function() { return F5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F6", function() { return F6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F7", function() { return F7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F8", function() { return F8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F9", function() { return F9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_EQUALS", function() { return FF_EQUALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_MINUS", function() { return FF_MINUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_MUTE", function() { return FF_MUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_SEMICOLON", function() { return FF_SEMICOLON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_VOLUME_DOWN", function() { return FF_VOLUME_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_VOLUME_UP", function() { return FF_VOLUME_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRST_MEDIA", function() { return FIRST_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIVE", function() { return FIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOUR", function() { return FOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME", function() { return HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSERT", function() { return INSERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_MEDIA", function() { return LAST_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT_ARROW", function() { return LEFT_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_ENTER", function() { return MAC_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_META", function() { return MAC_META; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_LEFT", function() { return MAC_WK_CMD_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_RIGHT", function() { return MAC_WK_CMD_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "META", function() { return META; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUTE", function() { return MUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NINE", function() { return NINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_DIVIDE", function() { return NUMPAD_DIVIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_EIGHT", function() { return NUMPAD_EIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_FIVE", function() { return NUMPAD_FIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_FOUR", function() { return NUMPAD_FOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_MINUS", function() { return NUMPAD_MINUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_MULTIPLY", function() { return NUMPAD_MULTIPLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_NINE", function() { return NUMPAD_NINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_ONE", function() { return NUMPAD_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_PERIOD", function() { return NUMPAD_PERIOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_PLUS", function() { return NUMPAD_PLUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_SEVEN", function() { return NUMPAD_SEVEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_SIX", function() { return NUMPAD_SIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_THREE", function() { return NUMPAD_THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_TWO", function() { return NUMPAD_TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_ZERO", function() { return NUMPAD_ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_CENTER", function() { return NUM_CENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_LOCK", function() { return NUM_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE", function() { return ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_SQUARE_BRACKET", function() { return OPEN_SQUARE_BRACKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_DOWN", function() { return PAGE_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_UP", function() { return PAGE_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAUSE", function() { return PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUS_SIGN", function() { return PLUS_SIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRINT_SCREEN", function() { return PRINT_SCREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_MARK", function() { return QUESTION_MARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT_ARROW", function() { return RIGHT_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_LOCK", function() { return SCROLL_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEMICOLON", function() { return SEMICOLON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEVEN", function() { return SEVEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHIFT", function() { return SHIFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_QUOTE", function() { return SINGLE_QUOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIX", function() { return SIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLASH", function() { return SLASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE", function() { return SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB", function() { return TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THREE", function() { return THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILDE", function() { return TILDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWO", function() { return TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UP_ARROW", function() { return UP_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOLUME_DOWN", function() { return VOLUME_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOLUME_UP", function() { return VOLUME_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZERO", function() { return ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasModifierKey", function() { return hasModifierKey; });
/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/keycodes/keycodes.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @type {?} */
const MAC_ENTER = 3;
/** @type {?} */
const BACKSPACE = 8;
/** @type {?} */
const TAB = 9;
/** @type {?} */
const NUM_CENTER = 12;
/** @type {?} */
const ENTER = 13;
/** @type {?} */
const SHIFT = 16;
/** @type {?} */
const CONTROL = 17;
/** @type {?} */
const ALT = 18;
/** @type {?} */
const PAUSE = 19;
/** @type {?} */
const CAPS_LOCK = 20;
/** @type {?} */
const ESCAPE = 27;
/** @type {?} */
const SPACE = 32;
/** @type {?} */
const PAGE_UP = 33;
/** @type {?} */
const PAGE_DOWN = 34;
/** @type {?} */
const END = 35;
/** @type {?} */
const HOME = 36;
/** @type {?} */
const LEFT_ARROW = 37;
/** @type {?} */
const UP_ARROW = 38;
/** @type {?} */
const RIGHT_ARROW = 39;
/** @type {?} */
const DOWN_ARROW = 40;
/** @type {?} */
const PLUS_SIGN = 43;
/** @type {?} */
const PRINT_SCREEN = 44;
/** @type {?} */
const INSERT = 45;
/** @type {?} */
const DELETE = 46;
/** @type {?} */
const ZERO = 48;
/** @type {?} */
const ONE = 49;
/** @type {?} */
const TWO = 50;
/** @type {?} */
const THREE = 51;
/** @type {?} */
const FOUR = 52;
/** @type {?} */
const FIVE = 53;
/** @type {?} */
const SIX = 54;
/** @type {?} */
const SEVEN = 55;
/** @type {?} */
const EIGHT = 56;
/** @type {?} */
const NINE = 57;
/** @type {?} */
const FF_SEMICOLON = 59;
// Firefox (Gecko) fires this for semicolon instead of 186
/** @type {?} */
const FF_EQUALS = 61;
// Firefox (Gecko) fires this for equals instead of 187
/** @type {?} */
const QUESTION_MARK = 63;
/** @type {?} */
const AT_SIGN = 64;
/** @type {?} */
const A = 65;
/** @type {?} */
const B = 66;
/** @type {?} */
const C = 67;
/** @type {?} */
const D = 68;
/** @type {?} */
const E = 69;
/** @type {?} */
const F = 70;
/** @type {?} */
const G = 71;
/** @type {?} */
const H = 72;
/** @type {?} */
const I = 73;
/** @type {?} */
const J = 74;
/** @type {?} */
const K = 75;
/** @type {?} */
const L = 76;
/** @type {?} */
const M = 77;
/** @type {?} */
const N = 78;
/** @type {?} */
const O = 79;
/** @type {?} */
const P = 80;
/** @type {?} */
const Q = 81;
/** @type {?} */
const R = 82;
/** @type {?} */
const S = 83;
/** @type {?} */
const T = 84;
/** @type {?} */
const U = 85;
/** @type {?} */
const V = 86;
/** @type {?} */
const W = 87;
/** @type {?} */
const X = 88;
/** @type {?} */
const Y = 89;
/** @type {?} */
const Z = 90;
/** @type {?} */
const META = 91;
// WIN_KEY_LEFT
/** @type {?} */
const MAC_WK_CMD_LEFT = 91;
/** @type {?} */
const MAC_WK_CMD_RIGHT = 93;
/** @type {?} */
const CONTEXT_MENU = 93;
/** @type {?} */
const NUMPAD_ZERO = 96;
/** @type {?} */
const NUMPAD_ONE = 97;
/** @type {?} */
const NUMPAD_TWO = 98;
/** @type {?} */
const NUMPAD_THREE = 99;
/** @type {?} */
const NUMPAD_FOUR = 100;
/** @type {?} */
const NUMPAD_FIVE = 101;
/** @type {?} */
const NUMPAD_SIX = 102;
/** @type {?} */
const NUMPAD_SEVEN = 103;
/** @type {?} */
const NUMPAD_EIGHT = 104;
/** @type {?} */
const NUMPAD_NINE = 105;
/** @type {?} */
const NUMPAD_MULTIPLY = 106;
/** @type {?} */
const NUMPAD_PLUS = 107;
/** @type {?} */
const NUMPAD_MINUS = 109;
/** @type {?} */
const NUMPAD_PERIOD = 110;
/** @type {?} */
const NUMPAD_DIVIDE = 111;
/** @type {?} */
const F1 = 112;
/** @type {?} */
const F2 = 113;
/** @type {?} */
const F3 = 114;
/** @type {?} */
const F4 = 115;
/** @type {?} */
const F5 = 116;
/** @type {?} */
const F6 = 117;
/** @type {?} */
const F7 = 118;
/** @type {?} */
const F8 = 119;
/** @type {?} */
const F9 = 120;
/** @type {?} */
const F10 = 121;
/** @type {?} */
const F11 = 122;
/** @type {?} */
const F12 = 123;
/** @type {?} */
const NUM_LOCK = 144;
/** @type {?} */
const SCROLL_LOCK = 145;
/** @type {?} */
const FIRST_MEDIA = 166;
/** @type {?} */
const FF_MINUS = 173;
/** @type {?} */
const MUTE = 173;
// Firefox (Gecko) fires 181 for MUTE
/** @type {?} */
const VOLUME_DOWN = 174;
// Firefox (Gecko) fires 182 for VOLUME_DOWN
/** @type {?} */
const VOLUME_UP = 175;
// Firefox (Gecko) fires 183 for VOLUME_UP
/** @type {?} */
const FF_MUTE = 181;
/** @type {?} */
const FF_VOLUME_DOWN = 182;
/** @type {?} */
const LAST_MEDIA = 183;
/** @type {?} */
const FF_VOLUME_UP = 183;
/** @type {?} */
const SEMICOLON = 186;
// Firefox (Gecko) fires 59 for SEMICOLON
/** @type {?} */
const EQUALS = 187;
// Firefox (Gecko) fires 61 for EQUALS
/** @type {?} */
const COMMA = 188;
/** @type {?} */
const DASH = 189;
// Firefox (Gecko) fires 173 for DASH/MINUS
/** @type {?} */
const SLASH = 191;
/** @type {?} */
const APOSTROPHE = 192;
/** @type {?} */
const TILDE = 192;
/** @type {?} */
const OPEN_SQUARE_BRACKET = 219;
/** @type {?} */
const BACKSLASH = 220;
/** @type {?} */
const CLOSE_SQUARE_BRACKET = 221;
/** @type {?} */
const SINGLE_QUOTE = 222;
/** @type {?} */
const MAC_META = 224;

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/keycodes/modifiers.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Checks whether a modifier key is pressed.
 * @param {?} event Event to be checked.
 * @param {...?} modifiers
 * @return {?}
 */
function hasModifierKey(event, ...modifiers) {
    if (modifiers.length) {
        return modifiers.some((/**
         * @param {?} modifier
         * @return {?}
         */
        modifier => event[modifier]));
    }
    return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/keycodes/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=keycodes.js.map

/***/ }),

/***/ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js":
/*!***********************************************************************************************************************************************************!*\
  !*** C:/Users/n_sol/dev/monorepo-wallet/omnichannel2-commercial-plataform-wallet-management/node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: CdkObserveContent, ContentObserver, MutationObserverFactory, ObserversModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkObserveContent", function() { return CdkObserveContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentObserver", function() { return ContentObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutationObserverFactory", function() { return MutationObserverFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserversModule", function() { return ObserversModule; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");





/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/observers/observe-content.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * \@docs-private
 */

class MutationObserverFactory {
    /**
     * @param {?} callback
     * @return {?}
     */
    create(callback) {
        return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
    }
}
MutationObserverFactory.ɵfac = function MutationObserverFactory_Factory(t) { return new (t || MutationObserverFactory)(); };
/** @nocollapse */ MutationObserverFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function MutationObserverFactory_Factory() { return new MutationObserverFactory(); }, token: MutationObserverFactory, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MutationObserverFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
/**
 * An injectable service that allows watching elements for changes to their content.
 */
class ContentObserver {
    /**
     * @param {?} _mutationObserverFactory
     */
    constructor(_mutationObserverFactory) {
        this._mutationObserverFactory = _mutationObserverFactory;
        /**
         * Keeps track of the existing MutationObservers so they can be reused.
         */
        this._observedElements = new Map();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._observedElements.forEach((/**
         * @param {?} _
         * @param {?} element
         * @return {?}
         */
        (_, element) => this._cleanupObserver(element)));
    }
    /**
     * @param {?} elementOrRef
     * @return {?}
     */
    observe(elementOrRef) {
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceElement"])(elementOrRef);
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            const stream = this._observeElement(element);
            /** @type {?} */
            const subscription = stream.subscribe(observer);
            return (/**
             * @return {?}
             */
            () => {
                subscription.unsubscribe();
                this._unobserveElement(element);
            });
        }));
    }
    /**
     * Observes the given element by using the existing MutationObserver if available, or creating a
     * new one if not.
     * @private
     * @param {?} element
     * @return {?}
     */
    _observeElement(element) {
        if (!this._observedElements.has(element)) {
            /** @type {?} */
            const stream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            /** @type {?} */
            const observer = this._mutationObserverFactory.create((/**
             * @param {?} mutations
             * @return {?}
             */
            mutations => stream.next(mutations)));
            if (observer) {
                observer.observe(element, {
                    characterData: true,
                    childList: true,
                    subtree: true
                });
            }
            this._observedElements.set(element, { observer, stream, count: 1 });
        }
        else {
            (/** @type {?} */ (this._observedElements.get(element))).count++;
        }
        return (/** @type {?} */ (this._observedElements.get(element))).stream;
    }
    /**
     * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
     * observing this element.
     * @private
     * @param {?} element
     * @return {?}
     */
    _unobserveElement(element) {
        if (this._observedElements.has(element)) {
            (/** @type {?} */ (this._observedElements.get(element))).count--;
            if (!(/** @type {?} */ (this._observedElements.get(element))).count) {
                this._cleanupObserver(element);
            }
        }
    }
    /**
     * Clean up the underlying MutationObserver for the specified element.
     * @private
     * @param {?} element
     * @return {?}
     */
    _cleanupObserver(element) {
        if (this._observedElements.has(element)) {
            const { observer, stream } = (/** @type {?} */ (this._observedElements.get(element)));
            if (observer) {
                observer.disconnect();
            }
            stream.complete();
            this._observedElements.delete(element);
        }
    }
}
ContentObserver.ɵfac = function ContentObserver_Factory(t) { return new (t || ContentObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MutationObserverFactory)); };
/** @nocollapse */
ContentObserver.ctorParameters = () => [
    { type: MutationObserverFactory }
];
/** @nocollapse */ ContentObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ContentObserver_Factory() { return new ContentObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MutationObserverFactory)); }, token: ContentObserver, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContentObserver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: MutationObserverFactory }]; }, null); })();
if (false) {}
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */
class CdkObserveContent {
    /**
     * @param {?} _contentObserver
     * @param {?} _elementRef
     * @param {?} _ngZone
     */
    constructor(_contentObserver, _elementRef, _ngZone) {
        this._contentObserver = _contentObserver;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /**
         * Event emitted for each change in the element's content.
         */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._disabled = false;
        this._currentSubscription = null;
    }
    /**
     * Whether observing content is disabled. This option can be used
     * to disconnect the underlying MutationObserver until it is needed.
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
        this._disabled ? this._unsubscribe() : this._subscribe();
    }
    /**
     * Debounce interval for emitting the changes.
     * @return {?}
     */
    get debounce() { return this._debounce; }
    /**
     * @param {?} value
     * @return {?}
     */
    set debounce(value) {
        this._debounce = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
        this._subscribe();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this._currentSubscription && !this.disabled) {
            this._subscribe();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._unsubscribe();
    }
    /**
     * @private
     * @return {?}
     */
    _subscribe() {
        this._unsubscribe();
        /** @type {?} */
        const stream = this._contentObserver.observe(this._elementRef);
        // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
        // Consider brining it back inside the zone next time we're making breaking changes.
        // Bringing it back inside can cause things like infinite change detection loops and changed
        // after checked errors if people's code isn't handling it properly.
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this._currentSubscription =
                (this.debounce ? stream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.debounce)) : stream).subscribe(this.event);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _unsubscribe() {
        if (this._currentSubscription) {
            this._currentSubscription.unsubscribe();
        }
    }
}
CdkObserveContent.ɵfac = function CdkObserveContent_Factory(t) { return new (t || CdkObserveContent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
CdkObserveContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CdkObserveContent, selectors: [["", "cdkObserveContent", ""]], inputs: { disabled: ["cdkObserveContentDisabled", "disabled"], debounce: "debounce" }, outputs: { event: "cdkObserveContent" }, exportAs: ["cdkObserveContent"] });
/** @nocollapse */
CdkObserveContent.ctorParameters = () => [
    { type: ContentObserver },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
CdkObserveContent.propDecorators = {
    event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['cdkObserveContent',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkObserveContentDisabled',] }],
    debounce: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkObserveContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[cdkObserveContent]',
                exportAs: 'cdkObserveContent'
            }]
    }], function () { return [{ type: ContentObserver }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['cdkObserveContent']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkObserveContentDisabled']
        }], debounce: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}
class ObserversModule {
}
ObserversModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ObserversModule });
ObserversModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ObserversModule_Factory(t) { return new (t || ObserversModule)(); }, providers: [MutationObserverFactory] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ObserversModule, { declarations: [CdkObserveContent], exports: [CdkObserveContent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ObserversModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                exports: [CdkObserveContent],
                declarations: [CdkObserveContent],
                providers: [MutationObserverFactory]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/observers/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=observers.js.map

/***/ }),

/***/ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js":
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/n_sol/dev/monorepo-wallet/omnichannel2-commercial-plataform-wallet-management/node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: Platform, PlatformModule, _getShadowRoot, _supportsShadowDom, getRtlScrollAxisType, getSupportedInputTypes, normalizePassiveListenerOptions, supportsPassiveEventListeners, supportsScrollBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformModule", function() { return PlatformModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getShadowRoot", function() { return _getShadowRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_supportsShadowDom", function() { return _supportsShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function() { return getRtlScrollAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function() { return getSupportedInputTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function() { return normalizePassiveListenerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function() { return supportsPassiveEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function() { return supportsScrollBehavior; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/platform/platform.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
/** @type {?} */

let hasV8BreakIterator;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
    hasV8BreakIterator = (typeof Intl !== 'undefined' && ((/** @type {?} */ (Intl))).v8BreakIterator);
}
catch (_a) {
    hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
class Platform {
    /**
     * \@breaking-change 8.0.0 remove optional decorator
     * @param {?=} _platformId
     */
    constructor(_platformId) {
        this._platformId = _platformId;
        // We want to use the Angular platform check because if the Document is shimmed
        // without the navigator, the following checks will fail. This is preferred because
        // sometimes the Document may be shimmed without the user's knowledge or intention
        /**
         * Whether the Angular application is being rendered in the browser.
         */
        this.isBrowser = this._platformId ?
            Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
        /**
         * Whether the current browser is Microsoft Edge.
         */
        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Microsoft Trident.
         */
        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
        /**
         * Whether the current rendering engine is Blink.
         */
        this.BLINK = this.isBrowser && (!!(((/** @type {?} */ (window))).chrome || hasV8BreakIterator) &&
            typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT);
        // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.
        /**
         * Whether the current rendering engine is WebKit.
         */
        this.WEBKIT = this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /**
         * Whether the current platform is Apple iOS.
         */
        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !('MSStream' in window);
        // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.
        /**
         * Whether the current browser is Firefox.
         */
        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /**
         * Whether the current platform is Android.
         */
        // Trident on mobile adds the android platform to the userAgent to trick detections.
        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.
        /**
         * Whether the current browser is Safari.
         */
        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
}
Platform.ɵfac = function Platform_Factory(t) { return new (t || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8)); };
/** @nocollapse */
Platform.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
];
/** @nocollapse */ Platform.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function Platform_Factory() { return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8)); }, token: Platform, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Platform, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/platform/platform-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PlatformModule {
}
PlatformModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PlatformModule });
PlatformModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PlatformModule_Factory(t) { return new (t || PlatformModule)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/platform/features/input-types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Cached result Set of input types support by the current browser.
 * @type {?}
 */
let supportedInputTypes;
/**
 * Types of `<input>` that *might* be supported.
 * @type {?}
 */
const candidateInputTypes = [
    // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
/**
 * @return {?} The input types supported by this browser.
 */
function getSupportedInputTypes() {
    // Result is cached.
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    // We can't check if an input type is not supported until we're on the browser, so say that
    // everything is supported when not on the browser. We don't use `Platform` here since it's
    // just a helper function and can't inject it.
    if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    /** @type {?} */
    let featureTestInput = document.createElement('input');
    supportedInputTypes = new Set(candidateInputTypes.filter((/**
     * @param {?} value
     * @return {?}
     */
    value => {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
    })));
    return supportedInputTypes;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/platform/features/passive-listeners.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Cached result of whether the user's browser supports passive event listeners.
 * @type {?}
 */
let supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 * @return {?}
 */
function supportsPassiveEventListeners() {
    if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
            window.addEventListener('test', (/** @type {?} */ (null)), Object.defineProperty({}, 'passive', {
                get: (/**
                 * @return {?}
                 */
                () => supportsPassiveEvents = true)
            }));
        }
        finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
        }
    }
    return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param {?} options Object to be normalized.
 * @return {?}
 */
function normalizePassiveListenerOptions(options) {
    return supportsPassiveEventListeners() ? options : !!options.capture;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/platform/features/scrolling.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @enum {number} */
const RtlScrollAxisType = {
    /**
     * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
     * all the way right.
     */
    NORMAL: 0,
    /**
     * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    NEGATED: 1,
    /**
     * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    INVERTED: 2,
};
/**
 * Cached result of the way the browser handles the horizontal scroll axis in RTL mode.
 * @type {?}
 */
let rtlScrollAxisType;
/**
 * Check whether the browser supports scroll behaviors.
 * @return {?}
 */
function supportsScrollBehavior() {
    return !!(typeof document == 'object' && 'scrollBehavior' in (/** @type {?} */ (document.documentElement)).style);
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 * @return {?}
 */
function getRtlScrollAxisType() {
    // We can't check unless we're on the browser. Just assume 'normal' if we're not.
    if (typeof document !== 'object' || !document) {
        return 0 /* NORMAL */;
    }
    if (rtlScrollAxisType == null) {
        // Create a 1px wide scrolling container and a 2px wide content element.
        /** @type {?} */
        const scrollContainer = document.createElement('div');
        /** @type {?} */
        const containerStyle = scrollContainer.style;
        scrollContainer.dir = 'rtl';
        containerStyle.height = '1px';
        containerStyle.width = '1px';
        containerStyle.overflow = 'auto';
        containerStyle.visibility = 'hidden';
        containerStyle.pointerEvents = 'none';
        containerStyle.position = 'absolute';
        /** @type {?} */
        const content = document.createElement('div');
        /** @type {?} */
        const contentStyle = content.style;
        contentStyle.width = '2px';
        contentStyle.height = '1px';
        scrollContainer.appendChild(content);
        document.body.appendChild(scrollContainer);
        rtlScrollAxisType = 0 /* NORMAL */;
        // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
        // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
        // dealing with one of the other two types of browsers.
        if (scrollContainer.scrollLeft === 0) {
            // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
            // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
            // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
            // return 0 when we read it again.
            scrollContainer.scrollLeft = 1;
            rtlScrollAxisType =
                scrollContainer.scrollLeft === 0 ? 1 /* NEGATED */ : 2 /* INVERTED */;
        }
        (/** @type {?} */ (scrollContainer.parentNode)).removeChild(scrollContainer);
    }
    return rtlScrollAxisType;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/platform/features/shadow-dom.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @type {?} */
let shadowDomIsSupported;
/**
 * Checks whether the user's browser support Shadow DOM.
 * @return {?}
 */
function _supportsShadowDom() {
    if (shadowDomIsSupported == null) {
        /** @type {?} */
        const head = typeof document !== 'undefined' ? document.head : null;
        shadowDomIsSupported = !!(head && (((/** @type {?} */ (head))).createShadowRoot || head.attachShadow));
    }
    return shadowDomIsSupported;
}
/**
 * Gets the shadow root of an element, if supported and the element is inside the Shadow DOM.
 * @param {?} element
 * @return {?}
 */
function _getShadowRoot(element) {
    if (_supportsShadowDom()) {
        /** @type {?} */
        const rootNode = element.getRootNode ? element.getRootNode() : null;
        // Note that this should be caught by `_supportsShadowDom`, but some
        // teams have been able to hit this code path on unsupported browsers.
        if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
            return rootNode;
        }
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/platform/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=platform.js.map

/***/ }),

/***/ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js":
/*!*******************************************************************************************************************************************************!*\
  !*** C:/Users/n_sol/dev/monorepo-wallet/omnichannel2-commercial-plataform-wallet-management/node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: DataSource, BaseCdkCell, BaseRowDef, CDK_ROW_TEMPLATE, CDK_TABLE, CDK_TABLE_TEMPLATE, CdkCell, CdkCellDef, CdkCellOutlet, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkFooterRow, CdkFooterRowDef, CdkHeaderCell, CdkHeaderCellDef, CdkHeaderRow, CdkHeaderRowDef, CdkRow, CdkRowDef, CdkTable, CdkTableModule, CdkTextColumn, DataRowOutlet, FooterRowOutlet, HeaderRowOutlet, STICKY_DIRECTIONS, StickyStyler, TEXT_COLUMN_OPTIONS, mixinHasStickyInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCdkCell", function() { return BaseCdkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRowDef", function() { return BaseRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_ROW_TEMPLATE", function() { return CDK_ROW_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_TABLE", function() { return CDK_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_TABLE_TEMPLATE", function() { return CDK_TABLE_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCell", function() { return CdkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCellDef", function() { return CdkCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCellOutlet", function() { return CdkCellOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkColumnDef", function() { return CdkColumnDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterCell", function() { return CdkFooterCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterCellDef", function() { return CdkFooterCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRow", function() { return CdkFooterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRowDef", function() { return CdkFooterRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderCell", function() { return CdkHeaderCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderCellDef", function() { return CdkHeaderCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRow", function() { return CdkHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRowDef", function() { return CdkHeaderRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRow", function() { return CdkRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRowDef", function() { return CdkRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTable", function() { return CdkTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTableModule", function() { return CdkTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTextColumn", function() { return CdkTextColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataRowOutlet", function() { return DataRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterRowOutlet", function() { return FooterRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderRowOutlet", function() { return HeaderRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STICKY_DIRECTIONS", function() { return STICKY_DIRECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyStyler", function() { return StickyStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_COLUMN_OPTIONS", function() { return TEXT_COLUMN_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinHasStickyInput", function() { return mixinHasStickyInput; });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");







const _c0 = [[["caption"]]];
const _c1 = ["caption"];
function CdkTextColumn_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
} }
function CdkTextColumn_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("text-align", ctx_r1.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
} }







/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/can-stick.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Interface for a mixin to provide a directive with a function that checks if the sticky input has
 * been changed since the last time the function was called. Essentially adds a dirty-check to the
 * sticky value.
 * \@docs-private
 * @record
 */
function CanStick() { }
if (false) {}
/**
 * Mixin to provide a directive with a function that checks if the sticky input has been
 * changed since the last time the function was called. Essentially adds a dirty-check to the
 * sticky value.
 * \@docs-private
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinHasStickyInput(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._sticky = false;
            /**
             * Whether the sticky input has changed since it was last checked.
             */
            this._hasStickyChanged = false;
        }
        /**
         * Whether sticky positioning should be applied.
         * @return {?}
         */
        get sticky() { return this._sticky; }
        /**
         * @param {?} v
         * @return {?}
         */
        set sticky(v) {
            /** @type {?} */
            const prevValue = this._sticky;
            this._sticky = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
            this._hasStickyChanged = prevValue !== this._sticky;
        }
        /**
         * Whether the sticky value has changed since this was last called.
         * @return {?}
         */
        hasStickyChanged() {
            /** @type {?} */
            const hasStickyChanged = this._hasStickyChanged;
            this._hasStickyChanged = false;
            return hasStickyChanged;
        }
        /**
         * Resets the dirty check for cases where the sticky state has been used without checking.
         * @return {?}
         */
        resetStickyChanged() {
            this._hasStickyChanged = false;
        }
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/tokens.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used to provide a table to some of the sub-components without causing a circular dependency.
 * \@docs-private
 * @type {?}
 */
const CDK_TABLE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_TABLE');
/**
 * Configurable options for `CdkTextColumn`.
 * @record
 * @template T
 */
function TextColumnOptions() { }
if (false) {}
/**
 * Injection token that can be used to specify the text column options.
 * @type {?}
 */
const TEXT_COLUMN_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('text-column-options');

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/cell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Base interface for a cell definition. Captures a column's cell template definition.
 * @record
 */
function CellDef() { }
if (false) {}
/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
class CdkCellDef {
    /**
     * @param {?} template
     */
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkCellDef.ɵfac = function CdkCellDef_Factory(t) { return new (t || CdkCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
CdkCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkCellDef, selectors: [["", "cdkCellDef", ""]] });
/** @nocollapse */
CdkCellDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[cdkCellDef]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();
if (false) {}
/**
 * Header cell definition for a CDK table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
class CdkHeaderCellDef {
    /**
     * @param {?} template
     */
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkHeaderCellDef.ɵfac = function CdkHeaderCellDef_Factory(t) { return new (t || CdkHeaderCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
CdkHeaderCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkHeaderCellDef, selectors: [["", "cdkHeaderCellDef", ""]] });
/** @nocollapse */
CdkHeaderCellDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[cdkHeaderCellDef]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();
if (false) {}
/**
 * Footer cell definition for a CDK table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
class CdkFooterCellDef {
    /**
     * @param {?} template
     */
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkFooterCellDef.ɵfac = function CdkFooterCellDef_Factory(t) { return new (t || CdkFooterCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
CdkFooterCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkFooterCellDef, selectors: [["", "cdkFooterCellDef", ""]] });
/** @nocollapse */
CdkFooterCellDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[cdkFooterCellDef]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();
if (false) {}
// Boilerplate for applying mixins to CdkColumnDef.
/**
 * \@docs-private
 */
class CdkColumnDefBase {
}
/** @type {?} */
const _CdkColumnDefBase = mixinHasStickyInput(CdkColumnDefBase);
/**
 * Column definition for the CDK table.
 * Defines a set of cells available for a table column.
 */
class CdkColumnDef extends _CdkColumnDefBase {
    /**
     * @param {?=} _table
     */
    constructor(_table) {
        super();
        this._table = _table;
        this._stickyEnd = false;
    }
    /**
     * Unique name for this column.
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    set name(name) {
        // If the directive is set without a name (updated programatically), then this setter will
        // trigger with an empty string and should not overwrite the programatically set value.
        if (name) {
            this._name = name;
            this.cssClassFriendlyName = name.replace(/[^a-z0-9_-]/ig, '-');
        }
    }
    /**
     * Whether this column should be sticky positioned on the end of the row. Should make sure
     * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
     * has been changed.
     * @return {?}
     */
    get stickyEnd() {
        return this._stickyEnd;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set stickyEnd(v) {
        /** @type {?} */
        const prevValue = this._stickyEnd;
        this._stickyEnd = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
        this._hasStickyChanged = prevValue !== this._stickyEnd;
    }
}
CdkColumnDef.ɵfac = function CdkColumnDef_Factory(t) { return new (t || CdkColumnDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8)); };
CdkColumnDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkColumnDef, selectors: [["", "cdkColumnDef", ""]], contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkCellDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkHeaderCellDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkFooterCellDef, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.footerCell = _t.first);
    } }, inputs: { sticky: "sticky", name: ["cdkColumnDef", "name"], stickyEnd: "stickyEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{ provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: CdkColumnDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
CdkColumnDef.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_TABLE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
CdkColumnDef.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkColumnDef',] }],
    stickyEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['stickyEnd',] }],
    cell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkCellDef,] }],
    headerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkHeaderCellDef,] }],
    footerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkFooterCellDef,] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkColumnDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[cdkColumnDef]',
                inputs: ['sticky'],
                providers: [{ provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: CdkColumnDef }]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [CDK_TABLE]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['cdkColumnDef']
        }], stickyEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['stickyEnd']
        }], cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkCellDef]
        }], headerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkHeaderCellDef]
        }], footerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkFooterCellDef]
        }] }); })();
if (false) {}
/**
 * Base class for the cells. Adds a CSS classname that identifies the column it renders in.
 */
class BaseCdkCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        /** @type {?} */
        const columnClassName = `cdk-column-${columnDef.cssClassFriendlyName}`;
        elementRef.nativeElement.classList.add(columnClassName);
    }
}
/**
 * Header cell template container that adds the right classes and role.
 */
class CdkHeaderCell extends BaseCdkCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
    }
}
CdkHeaderCell.ɵfac = function CdkHeaderCell_Factory(t) { return new (t || CdkHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
CdkHeaderCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkHeaderCell, selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
CdkHeaderCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'cdk-header-cell, th[cdk-header-cell]',
                host: {
                    'class': 'cdk-header-cell',
                    'role': 'columnheader'
                }
            }]
    }], function () { return [{ type: CdkColumnDef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
/**
 * Footer cell template container that adds the right classes and role.
 */
class CdkFooterCell extends BaseCdkCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
    }
}
CdkFooterCell.ɵfac = function CdkFooterCell_Factory(t) { return new (t || CdkFooterCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
CdkFooterCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkFooterCell, selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]], hostAttrs: ["role", "gridcell", 1, "cdk-footer-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
CdkFooterCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'cdk-footer-cell, td[cdk-footer-cell]',
                host: {
                    'class': 'cdk-footer-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: CdkColumnDef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
/**
 * Cell template container that adds the right classes and role.
 */
class CdkCell extends BaseCdkCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
    }
}
CdkCell.ɵfac = function CdkCell_Factory(t) { return new (t || CdkCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
CdkCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkCell, selectors: [["cdk-cell"], ["td", "cdk-cell", ""]], hostAttrs: ["role", "gridcell", 1, "cdk-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
CdkCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'cdk-cell, td[cdk-cell]',
                host: {
                    'class': 'cdk-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: CdkColumnDef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/row.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The row template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * @type {?}
 */
const CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
/**
 * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
 * for changes and notifying the table.
 * @abstract
 */
class BaseRowDef {
    /**
     * @param {?} template
     * @param {?} _differs
     */
    constructor(template, _differs) {
        this.template = template;
        this._differs = _differs;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // Create a new columns differ if one does not yet exist. Initialize it based on initial value
        // of the columns property or an empty array if none is provided.
        if (!this._columnsDiffer) {
            /** @type {?} */
            const columns = (changes['columns'] && changes['columns'].currentValue) || [];
            this._columnsDiffer = this._differs.find(columns).create();
            this._columnsDiffer.diff(columns);
        }
    }
    /**
     * Returns the difference between the current columns and the columns from the last diff, or null
     * if there is no difference.
     * @return {?}
     */
    getColumnsDiff() {
        return this._columnsDiffer.diff(this.columns);
    }
    /**
     * Gets this row def's relevant cell template from the provided column def.
     * @param {?} column
     * @return {?}
     */
    extractCellTemplate(column) {
        if (this instanceof CdkHeaderRowDef) {
            return column.headerCell.template;
        }
        if (this instanceof CdkFooterRowDef) {
            return column.footerCell.template;
        }
        else {
            return column.cell.template;
        }
    }
}
BaseRowDef.ɵfac = function BaseRowDef_Factory(t) { return new (t || BaseRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"])); };
BaseRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: BaseRowDef, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
BaseRowDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BaseRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }]; }, null); })();
if (false) {}
// Boilerplate for applying mixins to CdkHeaderRowDef.
/**
 * \@docs-private
 */
class CdkHeaderRowDefBase extends BaseRowDef {
}
/** @type {?} */
const _CdkHeaderRowDefBase = mixinHasStickyInput(CdkHeaderRowDefBase);
/**
 * Header row definition for the CDK table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
class CdkHeaderRowDef extends _CdkHeaderRowDefBase {
    /**
     * @param {?} template
     * @param {?} _differs
     * @param {?=} _table
     */
    constructor(template, _differs, _table) {
        super(template, _differs);
        this._table = _table;
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
CdkHeaderRowDef.ɵfac = function CdkHeaderRowDef_Factory(t) { return new (t || CdkHeaderRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8)); };
CdkHeaderRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkHeaderRowDef, selectors: [["", "cdkHeaderRowDef", ""]], inputs: { columns: ["cdkHeaderRowDef", "columns"], sticky: ["cdkHeaderRowDefSticky", "sticky"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
CdkHeaderRowDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_TABLE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[cdkHeaderRowDef]',
                inputs: ['columns: cdkHeaderRowDef', 'sticky: cdkHeaderRowDefSticky']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [CDK_TABLE]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, null); })();
if (false) {}
// Boilerplate for applying mixins to CdkFooterRowDef.
/**
 * \@docs-private
 */
class CdkFooterRowDefBase extends BaseRowDef {
}
/** @type {?} */
const _CdkFooterRowDefBase = mixinHasStickyInput(CdkFooterRowDefBase);
/**
 * Footer row definition for the CDK table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
class CdkFooterRowDef extends _CdkFooterRowDefBase {
    /**
     * @param {?} template
     * @param {?} _differs
     * @param {?=} _table
     */
    constructor(template, _differs, _table) {
        super(template, _differs);
        this._table = _table;
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
CdkFooterRowDef.ɵfac = function CdkFooterRowDef_Factory(t) { return new (t || CdkFooterRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8)); };
CdkFooterRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkFooterRowDef, selectors: [["", "cdkFooterRowDef", ""]], inputs: { columns: ["cdkFooterRowDef", "columns"], sticky: ["cdkFooterRowDefSticky", "sticky"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
CdkFooterRowDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_TABLE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[cdkFooterRowDef]',
                inputs: ['columns: cdkFooterRowDef', 'sticky: cdkFooterRowDefSticky']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [CDK_TABLE]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, null); })();
if (false) {}
/**
 * Data row definition for the CDK table.
 * Captures the header row's template and other row properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 * @template T
 */
class CdkRowDef extends BaseRowDef {
    // TODO(andrewseguin): Add an input for providing a switch function to determine
    //   if this template should be used.
    /**
     * @param {?} template
     * @param {?} _differs
     * @param {?=} _table
     */
    constructor(template, _differs, _table) {
        super(template, _differs);
        this._table = _table;
    }
}
CdkRowDef.ɵfac = function CdkRowDef_Factory(t) { return new (t || CdkRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8)); };
CdkRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkRowDef, selectors: [["", "cdkRowDef", ""]], inputs: { columns: ["cdkRowDefColumns", "columns"], when: ["cdkRowDefWhen", "when"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
CdkRowDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_TABLE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[cdkRowDef]',
                inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [CDK_TABLE]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, null); })();
if (false) {}
/**
 * Context provided to the row cells when `multiTemplateDataRows` is false
 * @record
 * @template T
 */
function CdkCellOutletRowContext() { }
if (false) {}
/**
 * Context provided to the row cells when `multiTemplateDataRows` is true. This context is the same
 * as CdkCellOutletRowContext except that the single `index` value is replaced by `dataIndex` and
 * `renderIndex`.
 * @record
 * @template T
 */
function CdkCellOutletMultiRowContext() { }
if (false) {}
/**
 * Outlet for rendering cells inside of a row or header row.
 * \@docs-private
 */
class CdkCellOutlet {
    /**
     * @param {?} _viewContainer
     */
    constructor(_viewContainer) {
        this._viewContainer = _viewContainer;
        CdkCellOutlet.mostRecentCellOutlet = this;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // If this was the last outlet being rendered in the view, remove the reference
        // from the static property after it has been destroyed to avoid leaking memory.
        if (CdkCellOutlet.mostRecentCellOutlet === this) {
            CdkCellOutlet.mostRecentCellOutlet = null;
        }
    }
}
CdkCellOutlet.ɵfac = function CdkCellOutlet_Factory(t) { return new (t || CdkCellOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"])); };
CdkCellOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkCellOutlet, selectors: [["", "cdkCellOutlet", ""]] });
/**
 * Static property containing the latest constructed instance of this class.
 * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
 * createEmbeddedView. After one of these components are created, this property will provide
 * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
 * construct the cells with the provided context.
 */
CdkCellOutlet.mostRecentCellOutlet = null;
/** @nocollapse */
CdkCellOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCellOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[cdkCellOutlet]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }]; }, null); })();
if (false) {}
/**
 * Header template container that contains the cell outlet. Adds the right class and role.
 */
class CdkHeaderRow {
}
CdkHeaderRow.ɵfac = function CdkHeaderRow_Factory(t) { return new (t || CdkHeaderRow)(); };
CdkHeaderRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkHeaderRow, selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]], hostAttrs: ["role", "row", 1, "cdk-header-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkHeaderRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
    } }, directives: [CdkCellOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-header-row, tr[cdk-header-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-header-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
            }]
    }], null, null); })();
/**
 * Footer template container that contains the cell outlet. Adds the right class and role.
 */
class CdkFooterRow {
}
CdkFooterRow.ɵfac = function CdkFooterRow_Factory(t) { return new (t || CdkFooterRow)(); };
CdkFooterRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkFooterRow, selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]], hostAttrs: ["role", "row", 1, "cdk-footer-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkFooterRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
    } }, directives: [CdkCellOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-footer-row, tr[cdk-footer-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-footer-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
            }]
    }], null, null); })();
/**
 * Data row template container that contains the cell outlet. Adds the right class and role.
 */
class CdkRow {
}
CdkRow.ɵfac = function CdkRow_Factory(t) { return new (t || CdkRow)(); };
CdkRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkRow, selectors: [["cdk-row"], ["tr", "cdk-row", ""]], hostAttrs: ["role", "row", 1, "cdk-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
    } }, directives: [CdkCellOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-row, tr[cdk-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/sticky-styler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * List of all possible directions that can be used for sticky positioning.
 * \@docs-private
 * @type {?}
 */
const STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
/**
 * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
 * \@docs-private
 */
class StickyStyler {
    /**
     * @param {?} _isNativeHtmlTable Whether the sticky logic should be based on a table
     *     that uses the native `<table>` element.
     * @param {?} _stickCellCss The CSS class that will be applied to every row/cell that has
     *     sticky positioning applied.
     * @param {?} direction The directionality context of the table (ltr/rtl); affects column positioning
     *     by reversing left/right positions.
     * @param {?=} _isBrowser Whether the table is currently being rendered on the server or the client.
     */
    constructor(_isNativeHtmlTable, _stickCellCss, direction, _isBrowser = true) {
        this._isNativeHtmlTable = _isNativeHtmlTable;
        this._stickCellCss = _stickCellCss;
        this.direction = direction;
        this._isBrowser = _isBrowser;
    }
    /**
     * Clears the sticky positioning styles from the row and its cells by resetting the `position`
     * style, setting the zIndex to 0, and unsetting each provided sticky direction.
     * @param {?} rows The list of rows that should be cleared from sticking in the provided directions
     * @param {?} stickyDirections The directions that should no longer be set as sticky on the rows.
     * @return {?}
     */
    clearStickyPositioning(rows, stickyDirections) {
        for (const row of rows) {
            // If the row isn't an element (e.g. if it's an `ng-container`),
            // it won't have inline styles or `children` so we skip it.
            if (row.nodeType !== row.ELEMENT_NODE) {
                continue;
            }
            this._removeStickyStyle(row, stickyDirections);
            for (let i = 0; i < row.children.length; i++) {
                /** @type {?} */
                const cell = (/** @type {?} */ (row.children[i]));
                this._removeStickyStyle(cell, stickyDirections);
            }
        }
    }
    /**
     * Applies sticky left and right positions to the cells of each row according to the sticky
     * states of the rendered column definitions.
     * @param {?} rows The rows that should have its set of cells stuck according to the sticky states.
     * @param {?} stickyStartStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the start of the row.
     * @param {?} stickyEndStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the end of the row.
     * @return {?}
     */
    updateStickyColumns(rows, stickyStartStates, stickyEndStates) {
        /** @type {?} */
        const hasStickyColumns = stickyStartStates.some((/**
         * @param {?} state
         * @return {?}
         */
        state => state)) || stickyEndStates.some((/**
         * @param {?} state
         * @return {?}
         */
        state => state));
        if (!rows.length || !hasStickyColumns || !this._isBrowser) {
            return;
        }
        /** @type {?} */
        const firstRow = rows[0];
        /** @type {?} */
        const numCells = firstRow.children.length;
        /** @type {?} */
        const cellWidths = this._getCellWidths(firstRow);
        /** @type {?} */
        const startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
        /** @type {?} */
        const endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
        /** @type {?} */
        const isRtl = this.direction === 'rtl';
        for (const row of rows) {
            for (let i = 0; i < numCells; i++) {
                /** @type {?} */
                const cell = (/** @type {?} */ (row.children[i]));
                if (stickyStartStates[i]) {
                    this._addStickyStyle(cell, isRtl ? 'right' : 'left', startPositions[i]);
                }
                if (stickyEndStates[i]) {
                    this._addStickyStyle(cell, isRtl ? 'left' : 'right', endPositions[i]);
                }
            }
        }
    }
    /**
     * Applies sticky positioning to the row's cells if using the native table layout, and to the
     * row itself otherwise.
     * @param {?} rowsToStick The list of rows that should be stuck according to their corresponding
     *     sticky state and to the provided top or bottom position.
     * @param {?} stickyStates A list of boolean states where each state represents whether the row
     *     should be stuck in the particular top or bottom position.
     * @param {?} position The position direction in which the row should be stuck if that row should be
     *     sticky.
     *
     * @return {?}
     */
    stickRows(rowsToStick, stickyStates, position) {
        // Since we can't measure the rows on the server, we can't stick the rows properly.
        if (!this._isBrowser) {
            return;
        }
        // If positioning the rows to the bottom, reverse their order when evaluating the sticky
        // position such that the last row stuck will be "bottom: 0px" and so on.
        /** @type {?} */
        const rows = position === 'bottom' ? rowsToStick.reverse() : rowsToStick;
        /** @type {?} */
        let stickyHeight = 0;
        for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
            if (!stickyStates[rowIndex]) {
                continue;
            }
            /** @type {?} */
            const row = rows[rowIndex];
            if (this._isNativeHtmlTable) {
                for (let j = 0; j < row.children.length; j++) {
                    /** @type {?} */
                    const cell = (/** @type {?} */ (row.children[j]));
                    this._addStickyStyle(cell, position, stickyHeight);
                }
            }
            else {
                // Flex does not respect the stick positioning on the cells, needs to be applied to the row.
                // If this is applied on a native table, Safari causes the header to fly in wrong direction.
                this._addStickyStyle(row, position, stickyHeight);
            }
            if (rowIndex === rows.length - 1) {
                // prevent unnecessary reflow from getBoundingClientRect()
                return;
            }
            stickyHeight += row.getBoundingClientRect().height;
        }
    }
    /**
     * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
     * footer rows is to apply sticky styling to the tfoot container. This should only be done if
     * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
     * the tfoot element.
     * @param {?} tableElement
     * @param {?} stickyStates
     * @return {?}
     */
    updateStickyFooterContainer(tableElement, stickyStates) {
        if (!this._isNativeHtmlTable) {
            return;
        }
        /** @type {?} */
        const tfoot = (/** @type {?} */ (tableElement.querySelector('tfoot')));
        if (stickyStates.some((/**
         * @param {?} state
         * @return {?}
         */
        state => !state))) {
            this._removeStickyStyle(tfoot, ['bottom']);
        }
        else {
            this._addStickyStyle(tfoot, 'bottom', 0);
        }
    }
    /**
     * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
     * the zIndex, removing each of the provided sticky directions, and removing the
     * sticky position if there are no more directions.
     * @param {?} element
     * @param {?} stickyDirections
     * @return {?}
     */
    _removeStickyStyle(element, stickyDirections) {
        for (const dir of stickyDirections) {
            element.style[dir] = '';
        }
        element.style.zIndex = this._getCalculatedZIndex(element);
        // If the element no longer has any more sticky directions, remove sticky positioning and
        // the sticky CSS class.
        /** @type {?} */
        const hasDirection = STICKY_DIRECTIONS.some((/**
         * @param {?} dir
         * @return {?}
         */
        dir => !!element.style[dir]));
        if (!hasDirection) {
            element.style.position = '';
            element.classList.remove(this._stickCellCss);
        }
    }
    /**
     * Adds the sticky styling to the element by adding the sticky style class, changing position
     * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
     * direction and value.
     * @param {?} element
     * @param {?} dir
     * @param {?} dirValue
     * @return {?}
     */
    _addStickyStyle(element, dir, dirValue) {
        element.classList.add(this._stickCellCss);
        element.style[dir] = `${dirValue}px`;
        element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
        element.style.zIndex = this._getCalculatedZIndex(element);
    }
    /**
     * Calculate what the z-index should be for the element, depending on what directions (top,
     * bottom, left, right) have been set. It should be true that elements with a top direction
     * should have the highest index since these are elements like a table header. If any of those
     * elements are also sticky in another direction, then they should appear above other elements
     * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
     * (e.g. footer rows) should then be next in the ordering such that they are below the header
     * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
     * should minimally increment so that they are above non-sticky elements but below top and bottom
     * elements.
     * @param {?} element
     * @return {?}
     */
    _getCalculatedZIndex(element) {
        /** @type {?} */
        const zIndexIncrements = {
            top: 100,
            bottom: 10,
            left: 1,
            right: 1,
        };
        /** @type {?} */
        let zIndex = 0;
        // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
        // loses the array generic type in the `for of`. But we *also* have to use `Array` because
        // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`
        for (const dir of (/** @type {?} */ (STICKY_DIRECTIONS))) {
            if (element.style[dir]) {
                zIndex += zIndexIncrements[dir];
            }
        }
        return zIndex ? `${zIndex}` : '';
    }
    /**
     * Gets the widths for each cell in the provided row.
     * @param {?} row
     * @return {?}
     */
    _getCellWidths(row) {
        /** @type {?} */
        const cellWidths = [];
        /** @type {?} */
        const firstRowCells = row.children;
        for (let i = 0; i < firstRowCells.length; i++) {
            /** @type {?} */
            let cell = (/** @type {?} */ (firstRowCells[i]));
            cellWidths.push(cell.getBoundingClientRect().width);
        }
        return cellWidths;
    }
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     * @param {?} widths
     * @param {?} stickyStates
     * @return {?}
     */
    _getStickyStartColumnPositions(widths, stickyStates) {
        /** @type {?} */
        const positions = [];
        /** @type {?} */
        let nextPosition = 0;
        for (let i = 0; i < widths.length; i++) {
            if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
            }
        }
        return positions;
    }
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     * @param {?} widths
     * @param {?} stickyStates
     * @return {?}
     */
    _getStickyEndColumnPositions(widths, stickyStates) {
        /** @type {?} */
        const positions = [];
        /** @type {?} */
        let nextPosition = 0;
        for (let i = widths.length; i > 0; i--) {
            if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
            }
        }
        return positions;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/table-errors.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Returns an error to be thrown when attempting to find an unexisting column.
 * \@docs-private
 * @param {?} id Id whose lookup failed.
 * @return {?}
 */
function getTableUnknownColumnError(id) {
    return Error(`Could not find column with id "${id}".`);
}
/**
 * Returns an error to be thrown when two column definitions have the same name.
 * \@docs-private
 * @param {?} name
 * @return {?}
 */
function getTableDuplicateColumnNameError(name) {
    return Error(`Duplicate column definition name provided: "${name}".`);
}
/**
 * Returns an error to be thrown when there are multiple rows that are missing a when function.
 * \@docs-private
 * @return {?}
 */
function getTableMultipleDefaultRowDefsError() {
    return Error(`There can only be one default row without a when predicate function.`);
}
/**
 * Returns an error to be thrown when there are no matching row defs for a particular set of data.
 * \@docs-private
 * @param {?} data
 * @return {?}
 */
function getTableMissingMatchingRowDefError(data) {
    return Error(`Could not find a matching row definition for the` +
        `provided row data: ${JSON.stringify(data)}`);
}
/**
 * Returns an error to be thrown when there is no row definitions present in the content.
 * \@docs-private
 * @return {?}
 */
function getTableMissingRowDefsError() {
    return Error('Missing definitions for header, footer, and row; ' +
        'cannot determine which columns should be rendered.');
}
/**
 * Returns an error to be thrown when the data source does not match the compatible types.
 * \@docs-private
 * @return {?}
 */
function getTableUnknownDataSourceError() {
    return Error(`Provided data source did not match an array, Observable, or DataSource`);
}
/**
 * Returns an error to be thrown when the text column cannot find a parent table to inject.
 * \@docs-private
 * @return {?}
 */
function getTableTextColumnMissingParentTableError() {
    return Error(`Text column could not find a parent table for registration.`);
}
/**
 * Returns an error to be thrown when a table text column doesn't have a name.
 * \@docs-private
 * @return {?}
 */
function getTableTextColumnMissingNameError() {
    return Error(`Table text column must have a name.`);
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/table.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Interface used to provide an outlet for rows to be inserted into.
 * @record
 */
function RowOutlet() { }
if (false) {}
/**
 * Provides a handle for the table to grab the view container's ng-container to insert data rows.
 * \@docs-private
 */
class DataRowOutlet {
    /**
     * @param {?} viewContainer
     * @param {?} elementRef
     */
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
DataRowOutlet.ɵfac = function DataRowOutlet_Factory(t) { return new (t || DataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
DataRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: DataRowOutlet, selectors: [["", "rowOutlet", ""]] });
/** @nocollapse */
DataRowOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DataRowOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[rowOutlet]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
if (false) {}
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the header.
 * \@docs-private
 */
class HeaderRowOutlet {
    /**
     * @param {?} viewContainer
     * @param {?} elementRef
     */
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
HeaderRowOutlet.ɵfac = function HeaderRowOutlet_Factory(t) { return new (t || HeaderRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
HeaderRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: HeaderRowOutlet, selectors: [["", "headerRowOutlet", ""]] });
/** @nocollapse */
HeaderRowOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](HeaderRowOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[headerRowOutlet]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
if (false) {}
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the footer.
 * \@docs-private
 */
class FooterRowOutlet {
    /**
     * @param {?} viewContainer
     * @param {?} elementRef
     */
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
FooterRowOutlet.ɵfac = function FooterRowOutlet_Factory(t) { return new (t || FooterRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
FooterRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: FooterRowOutlet, selectors: [["", "footerRowOutlet", ""]] });
/** @nocollapse */
FooterRowOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](FooterRowOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[footerRowOutlet]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
if (false) {}
/**
 * The table template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * \@docs-private
 * @type {?}
 */
const CDK_TABLE_TEMPLATE = 
// Note that according to MDN, the `caption` element has to be projected as the **first**
// element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
`
  <ng-content select="caption"></ng-content>
  <ng-container headerRowOutlet></ng-container>
  <ng-container rowOutlet></ng-container>
  <ng-container footerRowOutlet></ng-container>
`;
/**
 * Interface used to conveniently type the possible context interfaces for the render row.
 * \@docs-private
 * @record
 * @template T
 */
function RowContext() { }
/**
 * Class used to conveniently type the embedded view ref for rows with a context.
 * \@docs-private
 * @abstract
 * @template T
 */
class RowViewRef extends _angular_core__WEBPACK_IMPORTED_MODULE_3__["EmbeddedViewRef"] {
}
/**
 * Set of properties that represents the identity of a single rendered row.
 *
 * When the table needs to determine the list of rows to render, it will do so by iterating through
 * each data object and evaluating its list of row templates to display (when multiTemplateDataRows
 * is false, there is only one template per data object). For each pair of data object and row
 * template, a `RenderRow` is added to the list of rows to render. If the data object and row
 * template pair has already been rendered, the previously used `RenderRow` is added; else a new
 * `RenderRow` is * created. Once the list is complete and all data objects have been itereated
 * through, a diff is performed to determine the changes that need to be made to the rendered rows.
 *
 * \@docs-private
 * @record
 * @template T
 */
function RenderRow() { }
if (false) {}
/**
 * A data table that can render a header row, data rows, and a footer row.
 * Uses the dataSource input to determine the data to be rendered. The data can be provided either
 * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
 * connect function that will return an Observable stream that emits the data array to render.
 * @template T
 */
class CdkTable {
    /**
     * @param {?} _differs
     * @param {?} _changeDetectorRef
     * @param {?} _elementRef
     * @param {?} role
     * @param {?} _dir
     * @param {?} _document
     * @param {?} _platform
     */
    constructor(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform) {
        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._dir = _dir;
        this._platform = _platform;
        /**
         * Subject that emits when the component has been destroyed.
         */
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Map of all the user's defined columns (header, data, and footer cell template) identified by
         * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
         * any custom column definitions added to `_customColumnDefs`.
         */
        this._columnDefsByName = new Map();
        /**
         * Column definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * column definitions as *its* content child.
         */
        this._customColumnDefs = new Set();
        /**
         * Data row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in data rows as *its* content child.
         */
        this._customRowDefs = new Set();
        /**
         * Header row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in header rows as *its* content child.
         */
        this._customHeaderRowDefs = new Set();
        /**
         * Footer row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
         * built-in footer row as *its* content child.
         */
        this._customFooterRowDefs = new Set();
        /**
         * Whether the header row definition has been changed. Triggers an update to the header row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */
        this._headerRowDefChanged = true;
        /**
         * Whether the footer row definition has been changed. Triggers an update to the footer row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */
        this._footerRowDefChanged = true;
        /**
         * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
         * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
         * the cached `RenderRow` objects when possible, the row identity is preserved when the data
         * and row template matches, which allows the `IterableDiffer` to check rows by reference
         * and understand which rows are added/moved/removed.
         *
         * Implemented as a map of maps where the first key is the `data: T` object and the second is the
         * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
         * contains an array of created pairs. The array is necessary to handle cases where the data
         * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
         * stored.
         */
        this._cachedRenderRowsMap = new Map();
        /**
         * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
         * table subclasses.
         */
        this.stickyCssClass = 'cdk-table-sticky';
        this._multiTemplateDataRows = false;
        // TODO(andrewseguin): Remove max value as the end index
        //   and instead calculate the view on init and scroll.
        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         *
         * \@docs-private
         */
        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]({ start: 0, end: Number.MAX_VALUE });
        if (!role) {
            this._elementRef.nativeElement.setAttribute('role', 'grid');
        }
        this._document = _document;
        this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
    }
    /**
     * Tracking function that will be used to check the differences in data changes. Used similarly
     * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
     * relative to the function to know if a row should be added/removed/moved.
     * Accepts a function that takes two parameters, `index` and `item`.
     * @return {?}
     */
    get trackBy() {
        return this._trackByFn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    set trackBy(fn) {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])() && fn != null && typeof fn !== 'function' && (/** @type {?} */ (console)) &&
            (/** @type {?} */ (console.warn))) {
            console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
        }
        this._trackByFn = fn;
    }
    /**
     * The table's source of data, which can be provided in three ways (in order of complexity):
     *   - Simple data array (each object represents one table row)
     *   - Stream that emits a data array each time the array changes
     *   - `DataSource` object that implements the connect/disconnect interface.
     *
     * If a data array is provided, the table must be notified when the array's objects are
     * added, removed, or moved. This can be done by calling the `renderRows()` function which will
     * render the diff since the last table render. If the data array reference is changed, the table
     * will automatically trigger an update to the rows.
     *
     * When providing an Observable stream, the table will trigger an update automatically when the
     * stream emits a new array of data.
     *
     * Finally, when providing a `DataSource` object, the table will use the Observable stream
     * provided by the connect function and trigger updates when that stream emits new data array
     * values. During the table's ngOnDestroy or when the data source is removed from the table, the
     * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
     * subscriptions registered during the connect process).
     * @return {?}
     */
    get dataSource() {
        return this._dataSource;
    }
    /**
     * @param {?} dataSource
     * @return {?}
     */
    set dataSource(dataSource) {
        if (this._dataSource !== dataSource) {
            this._switchDataSource(dataSource);
        }
    }
    /**
     * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
     * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
     * dataobject will render the first row that evaluates its when predicate to true, in the order
     * defined in the table, or otherwise the default row which does not have a when predicate.
     * @return {?}
     */
    get multiTemplateDataRows() {
        return this._multiTemplateDataRows;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set multiTemplateDataRows(v) {
        this._multiTemplateDataRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
        // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
        // this setter will be invoked before the row outlet has been defined hence the null check.
        if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
            this._forceRenderDataRows();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._setupStickyStyler();
        if (this._isNativeHtmlTable) {
            this._applyNativeTableSections();
        }
        // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
        // the user has provided a custom trackBy, return the result of that function as evaluated
        // with the values of the `RenderRow`'s data and index.
        this._dataDiffer = this._differs.find([]).create((/**
         * @param {?} _i
         * @param {?} dataRow
         * @return {?}
         */
        (_i, dataRow) => {
            return this.trackBy ? this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
        this._cacheRowDefs();
        this._cacheColumnDefs();
        // Make sure that the user has at least added header, footer, or data row def.
        if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length) {
            throw getTableMissingRowDefsError();
        }
        // Render updates if the list of columns have been changed for the header, row, or footer defs.
        this._renderUpdatedColumns();
        // If the header row definition has been changed, trigger a render to the header row.
        if (this._headerRowDefChanged) {
            this._forceRenderHeaderRows();
            this._headerRowDefChanged = false;
        }
        // If the footer row definition has been changed, trigger a render to the footer row.
        if (this._footerRowDefChanged) {
            this._forceRenderFooterRows();
            this._footerRowDefChanged = false;
        }
        // If there is a data source and row definitions, connect to the data source unless a
        // connection has already been made.
        if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
            this._observeRenderChanges();
        }
        this._checkStickyStates();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._rowOutlet.viewContainer.clear();
        this._headerRowOutlet.viewContainer.clear();
        this._footerRowOutlet.viewContainer.clear();
        this._cachedRenderRowsMap.clear();
        this._onDestroy.next();
        this._onDestroy.complete();
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            this.dataSource.disconnect(this);
        }
    }
    /**
     * Renders rows based on the table's latest set of data, which was either provided directly as an
     * input or retrieved through an Observable stream (directly or from a DataSource).
     * Checks for differences in the data since the last diff to perform only the necessary
     * changes (add/remove/move rows).
     *
     * If the table's data source is a DataSource or Observable, this will be invoked automatically
     * each time the provided Observable stream emits a new data array. Otherwise if your data is
     * an array, this function will need to be called to render any changes.
     * @return {?}
     */
    renderRows() {
        this._renderRows = this._getAllRenderRows();
        /** @type {?} */
        const changes = this._dataDiffer.diff(this._renderRows);
        if (!changes) {
            return;
        }
        /** @type {?} */
        const viewContainer = this._rowOutlet.viewContainer;
        changes.forEachOperation((/**
         * @param {?} record
         * @param {?} prevIndex
         * @param {?} currentIndex
         * @return {?}
         */
        (record, prevIndex, currentIndex) => {
            if (record.previousIndex == null) {
                this._insertRow(record.item, (/** @type {?} */ (currentIndex)));
            }
            else if (currentIndex == null) {
                viewContainer.remove((/** @type {?} */ (prevIndex)));
            }
            else {
                /** @type {?} */
                const view = (/** @type {?} */ (viewContainer.get((/** @type {?} */ (prevIndex)))));
                viewContainer.move((/** @type {?} */ (view)), currentIndex);
            }
        }));
        // Update the meta context of a row's context data (index, count, first, last, ...)
        this._updateRowIndexContext();
        // Update rows that did not get added/removed/moved but may have had their identity changed,
        // e.g. if trackBy matched data on some property but the actual data reference changed.
        changes.forEachIdentityChange((/**
         * @param {?} record
         * @return {?}
         */
        (record) => {
            /** @type {?} */
            const rowView = (/** @type {?} */ (viewContainer.get((/** @type {?} */ (record.currentIndex)))));
            rowView.context.$implicit = record.item.data;
        }));
        this.updateStickyColumnStyles();
    }
    /**
     * Sets the header row definition to be used. Overrides the header row definition gathered by
     * using `ContentChild`, if one exists. Sets a flag that will re-render the header row after the
     * table's content is checked.
     * \@docs-private
     * @deprecated Use `addHeaderRowDef` and `removeHeaderRowDef` instead
     * \@breaking-change 8.0.0
     * @param {?} headerRowDef
     * @return {?}
     */
    setHeaderRowDef(headerRowDef) {
        this._customHeaderRowDefs = new Set([headerRowDef]);
        this._headerRowDefChanged = true;
    }
    /**
     * Sets the footer row definition to be used. Overrides the footer row definition gathered by
     * using `ContentChild`, if one exists. Sets a flag that will re-render the footer row after the
     * table's content is checked.
     * \@docs-private
     * @deprecated Use `addFooterRowDef` and `removeFooterRowDef` instead
     * \@breaking-change 8.0.0
     * @param {?} footerRowDef
     * @return {?}
     */
    setFooterRowDef(footerRowDef) {
        this._customFooterRowDefs = new Set([footerRowDef]);
        this._footerRowDefChanged = true;
    }
    /**
     * Adds a column definition that was not included as part of the content children.
     * @param {?} columnDef
     * @return {?}
     */
    addColumnDef(columnDef) {
        this._customColumnDefs.add(columnDef);
    }
    /**
     * Removes a column definition that was not included as part of the content children.
     * @param {?} columnDef
     * @return {?}
     */
    removeColumnDef(columnDef) {
        this._customColumnDefs.delete(columnDef);
    }
    /**
     * Adds a row definition that was not included as part of the content children.
     * @param {?} rowDef
     * @return {?}
     */
    addRowDef(rowDef) {
        this._customRowDefs.add(rowDef);
    }
    /**
     * Removes a row definition that was not included as part of the content children.
     * @param {?} rowDef
     * @return {?}
     */
    removeRowDef(rowDef) {
        this._customRowDefs.delete(rowDef);
    }
    /**
     * Adds a header row definition that was not included as part of the content children.
     * @param {?} headerRowDef
     * @return {?}
     */
    addHeaderRowDef(headerRowDef) {
        this._customHeaderRowDefs.add(headerRowDef);
        this._headerRowDefChanged = true;
    }
    /**
     * Removes a header row definition that was not included as part of the content children.
     * @param {?} headerRowDef
     * @return {?}
     */
    removeHeaderRowDef(headerRowDef) {
        this._customHeaderRowDefs.delete(headerRowDef);
        this._headerRowDefChanged = true;
    }
    /**
     * Adds a footer row definition that was not included as part of the content children.
     * @param {?} footerRowDef
     * @return {?}
     */
    addFooterRowDef(footerRowDef) {
        this._customFooterRowDefs.add(footerRowDef);
        this._footerRowDefChanged = true;
    }
    /**
     * Removes a footer row definition that was not included as part of the content children.
     * @param {?} footerRowDef
     * @return {?}
     */
    removeFooterRowDef(footerRowDef) {
        this._customFooterRowDefs.delete(footerRowDef);
        this._footerRowDefChanged = true;
    }
    /**
     * Updates the header sticky styles. First resets all applied styles with respect to the cells
     * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
     * automatically called when the header row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     * @return {?}
     */
    updateStickyHeaderRowStyles() {
        /** @type {?} */
        const headerRows = this._getRenderedRows(this._headerRowOutlet);
        /** @type {?} */
        const tableElement = (/** @type {?} */ (this._elementRef.nativeElement));
        // Hide the thead element if there are no header rows. This is necessary to satisfy
        // overzealous a11y checkers that fail because the `rowgroup` element does not contain
        // required child `row`.
        /** @type {?} */
        const thead = tableElement.querySelector('thead');
        if (thead) {
            thead.style.display = headerRows.length ? '' : 'none';
        }
        /** @type {?} */
        const stickyStates = this._headerRowDefs.map((/**
         * @param {?} def
         * @return {?}
         */
        def => def.sticky));
        this._stickyStyler.clearStickyPositioning(headerRows, ['top']);
        this._stickyStyler.stickRows(headerRows, stickyStates, 'top');
        // Reset the dirty state of the sticky input change since it has been used.
        this._headerRowDefs.forEach((/**
         * @param {?} def
         * @return {?}
         */
        def => def.resetStickyChanged()));
    }
    /**
     * Updates the footer sticky styles. First resets all applied styles with respect to the cells
     * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
     * automatically called when the footer row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     * @return {?}
     */
    updateStickyFooterRowStyles() {
        /** @type {?} */
        const footerRows = this._getRenderedRows(this._footerRowOutlet);
        /** @type {?} */
        const tableElement = (/** @type {?} */ (this._elementRef.nativeElement));
        // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
        // overzealous a11y checkers that fail because the `rowgroup` element does not contain
        // required child `row`.
        /** @type {?} */
        const tfoot = tableElement.querySelector('tfoot');
        if (tfoot) {
            tfoot.style.display = footerRows.length ? '' : 'none';
        }
        /** @type {?} */
        const stickyStates = this._footerRowDefs.map((/**
         * @param {?} def
         * @return {?}
         */
        def => def.sticky));
        this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);
        this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');
        this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
        // Reset the dirty state of the sticky input change since it has been used.
        this._footerRowDefs.forEach((/**
         * @param {?} def
         * @return {?}
         */
        def => def.resetStickyChanged()));
    }
    /**
     * Updates the column sticky styles. First resets all applied styles with respect to the cells
     * sticking to the left and right. Then sticky styles are added for the left and right according
     * to the column definitions for each cell in each row. This is automatically called when
     * the data source provides a new set of data or when a column definition changes its sticky
     * input. May be called manually for cases where the cell content changes outside of these events.
     * @return {?}
     */
    updateStickyColumnStyles() {
        /** @type {?} */
        const headerRows = this._getRenderedRows(this._headerRowOutlet);
        /** @type {?} */
        const dataRows = this._getRenderedRows(this._rowOutlet);
        /** @type {?} */
        const footerRows = this._getRenderedRows(this._footerRowOutlet);
        // Clear the left and right positioning from all columns in the table across all rows since
        // sticky columns span across all table sections (header, data, footer)
        this._stickyStyler.clearStickyPositioning([...headerRows, ...dataRows, ...footerRows], ['left', 'right']);
        // Update the sticky styles for each header row depending on the def's sticky state
        headerRows.forEach((/**
         * @param {?} headerRow
         * @param {?} i
         * @return {?}
         */
        (headerRow, i) => {
            this._addStickyColumnStyles([headerRow], this._headerRowDefs[i]);
        }));
        // Update the sticky styles for each data row depending on its def's sticky state
        this._rowDefs.forEach((/**
         * @param {?} rowDef
         * @return {?}
         */
        rowDef => {
            // Collect all the rows rendered with this row definition.
            /** @type {?} */
            const rows = [];
            for (let i = 0; i < dataRows.length; i++) {
                if (this._renderRows[i].rowDef === rowDef) {
                    rows.push(dataRows[i]);
                }
            }
            this._addStickyColumnStyles(rows, rowDef);
        }));
        // Update the sticky styles for each footer row depending on the def's sticky state
        footerRows.forEach((/**
         * @param {?} footerRow
         * @param {?} i
         * @return {?}
         */
        (footerRow, i) => {
            this._addStickyColumnStyles([footerRow], this._footerRowDefs[i]);
        }));
        // Reset the dirty state of the sticky input change since it has been used.
        Array.from(this._columnDefsByName.values()).forEach((/**
         * @param {?} def
         * @return {?}
         */
        def => def.resetStickyChanged()));
    }
    /**
     * Get the list of RenderRow objects to render according to the current list of data and defined
     * row definitions. If the previous list already contained a particular pair, it should be reused
     * so that the differ equates their references.
     * @private
     * @return {?}
     */
    _getAllRenderRows() {
        /** @type {?} */
        const renderRows = [];
        // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
        // new cache while unused ones can be picked up by garbage collection.
        /** @type {?} */
        const prevCachedRenderRows = this._cachedRenderRowsMap;
        this._cachedRenderRowsMap = new Map();
        // For each data object, get the list of rows that should be rendered, represented by the
        // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.
        for (let i = 0; i < this._data.length; i++) {
            /** @type {?} */
            let data = this._data[i];
            /** @type {?} */
            const renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
            if (!this._cachedRenderRowsMap.has(data)) {
                this._cachedRenderRowsMap.set(data, new WeakMap());
            }
            for (let j = 0; j < renderRowsForData.length; j++) {
                /** @type {?} */
                let renderRow = renderRowsForData[j];
                /** @type {?} */
                const cache = (/** @type {?} */ (this._cachedRenderRowsMap.get(renderRow.data)));
                if (cache.has(renderRow.rowDef)) {
                    (/** @type {?} */ (cache.get(renderRow.rowDef))).push(renderRow);
                }
                else {
                    cache.set(renderRow.rowDef, [renderRow]);
                }
                renderRows.push(renderRow);
            }
        }
        return renderRows;
    }
    /**
     * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
     * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
     * `(T, CdkRowDef)` pair.
     * @private
     * @param {?} data
     * @param {?} dataIndex
     * @param {?=} cache
     * @return {?}
     */
    _getRenderRowsForData(data, dataIndex, cache) {
        /** @type {?} */
        const rowDefs = this._getRowDefs(data, dataIndex);
        return rowDefs.map((/**
         * @param {?} rowDef
         * @return {?}
         */
        rowDef => {
            /** @type {?} */
            const cachedRenderRows = (cache && cache.has(rowDef)) ? (/** @type {?} */ (cache.get(rowDef))) : [];
            if (cachedRenderRows.length) {
                /** @type {?} */
                const dataRow = (/** @type {?} */ (cachedRenderRows.shift()));
                dataRow.dataIndex = dataIndex;
                return dataRow;
            }
            else {
                return { data, rowDef, dataIndex };
            }
        }));
    }
    /**
     * Update the map containing the content's column definitions.
     * @private
     * @return {?}
     */
    _cacheColumnDefs() {
        this._columnDefsByName.clear();
        /** @type {?} */
        const columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
        columnDefs.forEach((/**
         * @param {?} columnDef
         * @return {?}
         */
        columnDef => {
            if (this._columnDefsByName.has(columnDef.name)) {
                throw getTableDuplicateColumnNameError(columnDef.name);
            }
            this._columnDefsByName.set(columnDef.name, columnDef);
        }));
    }
    /**
     * Update the list of all available row definitions that can be used.
     * @private
     * @return {?}
     */
    _cacheRowDefs() {
        this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
        this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
        this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs);
        // After all row definitions are determined, find the row definition to be considered default.
        /** @type {?} */
        const defaultRowDefs = this._rowDefs.filter((/**
         * @param {?} def
         * @return {?}
         */
        def => !def.when));
        if (!this.multiTemplateDataRows && defaultRowDefs.length > 1) {
            throw getTableMultipleDefaultRowDefsError();
        }
        this._defaultRowDef = defaultRowDefs[0];
    }
    /**
     * Check if the header, data, or footer rows have changed what columns they want to display or
     * whether the sticky states have changed for the header or footer. If there is a diff, then
     * re-render that section.
     * @private
     * @return {?}
     */
    _renderUpdatedColumns() {
        /** @type {?} */
        const columnsDiffReducer = (/**
         * @param {?} acc
         * @param {?} def
         * @return {?}
         */
        (acc, def) => acc || !!def.getColumnsDiff());
        // Force re-render data rows if the list of column definitions have changed.
        if (this._rowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderDataRows();
        }
        // Force re-render header/footer rows if the list of column definitions have changed..
        if (this._headerRowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderHeaderRows();
        }
        if (this._footerRowDefs.reduce(columnsDiffReducer, false)) {
            this._forceRenderFooterRows();
        }
    }
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the row outlet. Otherwise start listening for new data.
     * @private
     * @param {?} dataSource
     * @return {?}
     */
    _switchDataSource(dataSource) {
        this._data = [];
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            this.dataSource.disconnect(this);
        }
        // Stop listening for data from the previous data source.
        if (this._renderChangeSubscription) {
            this._renderChangeSubscription.unsubscribe();
            this._renderChangeSubscription = null;
        }
        if (!dataSource) {
            if (this._dataDiffer) {
                this._dataDiffer.diff([]);
            }
            this._rowOutlet.viewContainer.clear();
        }
        this._dataSource = dataSource;
    }
    /**
     * Set up a subscription for the data provided by the data source.
     * @private
     * @return {?}
     */
    _observeRenderChanges() {
        // If no data source has been set, there is nothing to observe for changes.
        if (!this.dataSource) {
            return;
        }
        /** @type {?} */
        let dataStream;
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            dataStream = this.dataSource.connect(this);
        }
        else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["isObservable"])(this.dataSource)) {
            dataStream = this.dataSource;
        }
        else if (Array.isArray(this.dataSource)) {
            dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.dataSource);
        }
        if (dataStream === undefined) {
            throw getTableUnknownDataSourceError();
        }
        this._renderChangeSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this._data = data || [];
            this.renderRows();
        }));
    }
    /**
     * Clears any existing content in the header row outlet and creates a new embedded view
     * in the outlet using the header row definition.
     * @private
     * @return {?}
     */
    _forceRenderHeaderRows() {
        // Clear the header row outlet if any content exists.
        if (this._headerRowOutlet.viewContainer.length > 0) {
            this._headerRowOutlet.viewContainer.clear();
        }
        this._headerRowDefs.forEach((/**
         * @param {?} def
         * @param {?} i
         * @return {?}
         */
        (def, i) => this._renderRow(this._headerRowOutlet, def, i)));
        this.updateStickyHeaderRowStyles();
        this.updateStickyColumnStyles();
    }
    /**
     * Clears any existing content in the footer row outlet and creates a new embedded view
     * in the outlet using the footer row definition.
     * @private
     * @return {?}
     */
    _forceRenderFooterRows() {
        // Clear the footer row outlet if any content exists.
        if (this._footerRowOutlet.viewContainer.length > 0) {
            this._footerRowOutlet.viewContainer.clear();
        }
        this._footerRowDefs.forEach((/**
         * @param {?} def
         * @param {?} i
         * @return {?}
         */
        (def, i) => this._renderRow(this._footerRowOutlet, def, i)));
        this.updateStickyFooterRowStyles();
        this.updateStickyColumnStyles();
    }
    /**
     * Adds the sticky column styles for the rows according to the columns' stick states.
     * @private
     * @param {?} rows
     * @param {?} rowDef
     * @return {?}
     */
    _addStickyColumnStyles(rows, rowDef) {
        /** @type {?} */
        const columnDefs = Array.from(rowDef.columns || []).map((/**
         * @param {?} columnName
         * @return {?}
         */
        columnName => {
            /** @type {?} */
            const columnDef = this._columnDefsByName.get(columnName);
            if (!columnDef) {
                throw getTableUnknownColumnError(columnName);
            }
            return (/** @type {?} */ (columnDef));
        }));
        /** @type {?} */
        const stickyStartStates = columnDefs.map((/**
         * @param {?} columnDef
         * @return {?}
         */
        columnDef => columnDef.sticky));
        /** @type {?} */
        const stickyEndStates = columnDefs.map((/**
         * @param {?} columnDef
         * @return {?}
         */
        columnDef => columnDef.stickyEnd));
        this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates);
    }
    /**
     * Gets the list of rows that have been rendered in the row outlet.
     * @param {?} rowOutlet
     * @return {?}
     */
    _getRenderedRows(rowOutlet) {
        /** @type {?} */
        const renderedRows = [];
        for (let i = 0; i < rowOutlet.viewContainer.length; i++) {
            /** @type {?} */
            const viewRef = ((/** @type {?} */ ((/** @type {?} */ (rowOutlet.viewContainer.get(i))))));
            renderedRows.push(viewRef.rootNodes[0]);
        }
        return renderedRows;
    }
    /**
     * Get the matching row definitions that should be used for this row data. If there is only
     * one row definition, it is returned. Otherwise, find the row definitions that has a when
     * predicate that returns true with the data. If none return true, return the default row
     * definition.
     * @param {?} data
     * @param {?} dataIndex
     * @return {?}
     */
    _getRowDefs(data, dataIndex) {
        if (this._rowDefs.length == 1) {
            return [this._rowDefs[0]];
        }
        /** @type {?} */
        let rowDefs = [];
        if (this.multiTemplateDataRows) {
            rowDefs = this._rowDefs.filter((/**
             * @param {?} def
             * @return {?}
             */
            def => !def.when || def.when(dataIndex, data)));
        }
        else {
            /** @type {?} */
            let rowDef = this._rowDefs.find((/**
             * @param {?} def
             * @return {?}
             */
            def => def.when && def.when(dataIndex, data))) || this._defaultRowDef;
            if (rowDef) {
                rowDefs.push(rowDef);
            }
        }
        if (!rowDefs.length) {
            throw getTableMissingMatchingRowDefError(data);
        }
        return rowDefs;
    }
    /**
     * Create the embedded view for the data row template and place it in the correct index location
     * within the data row view container.
     * @private
     * @param {?} renderRow
     * @param {?} renderIndex
     * @return {?}
     */
    _insertRow(renderRow, renderIndex) {
        /** @type {?} */
        const rowDef = renderRow.rowDef;
        /** @type {?} */
        const context = { $implicit: renderRow.data };
        this._renderRow(this._rowOutlet, rowDef, renderIndex, context);
    }
    /**
     * Creates a new row template in the outlet and fills it with the set of cell templates.
     * Optionally takes a context to provide to the row and cells, as well as an optional index
     * of where to place the new row template in the outlet.
     * @private
     * @param {?} outlet
     * @param {?} rowDef
     * @param {?} index
     * @param {?=} context
     * @return {?}
     */
    _renderRow(outlet, rowDef, index, context = {}) {
        // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
        outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
        for (let cellTemplate of this._getCellTemplates(rowDef)) {
            if (CdkCellOutlet.mostRecentCellOutlet) {
                CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
            }
        }
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     * @private
     * @return {?}
     */
    _updateRowIndexContext() {
        /** @type {?} */
        const viewContainer = this._rowOutlet.viewContainer;
        for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            /** @type {?} */
            const viewRef = (/** @type {?} */ (viewContainer.get(renderIndex)));
            /** @type {?} */
            const context = (/** @type {?} */ (viewRef.context));
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            if (this.multiTemplateDataRows) {
                context.dataIndex = this._renderRows[renderIndex].dataIndex;
                context.renderIndex = renderIndex;
            }
            else {
                context.index = this._renderRows[renderIndex].dataIndex;
            }
        }
    }
    /**
     * Gets the column definitions for the provided row def.
     * @private
     * @param {?} rowDef
     * @return {?}
     */
    _getCellTemplates(rowDef) {
        if (!rowDef || !rowDef.columns) {
            return [];
        }
        return Array.from(rowDef.columns, (/**
         * @param {?} columnId
         * @return {?}
         */
        columnId => {
            /** @type {?} */
            const column = this._columnDefsByName.get(columnId);
            if (!column) {
                throw getTableUnknownColumnError(columnId);
            }
            return rowDef.extractCellTemplate(column);
        }));
    }
    /**
     * Adds native table sections (e.g. tbody) and moves the row outlets into them.
     * @private
     * @return {?}
     */
    _applyNativeTableSections() {
        /** @type {?} */
        const documentFragment = this._document.createDocumentFragment();
        /** @type {?} */
        const sections = [
            { tag: 'thead', outlet: this._headerRowOutlet },
            { tag: 'tbody', outlet: this._rowOutlet },
            { tag: 'tfoot', outlet: this._footerRowOutlet },
        ];
        for (const section of sections) {
            /** @type {?} */
            const element = this._document.createElement(section.tag);
            element.setAttribute('role', 'rowgroup');
            element.appendChild(section.outlet.elementRef.nativeElement);
            documentFragment.appendChild(element);
        }
        // Use a DocumentFragment so we don't hit the DOM on each iteration.
        this._elementRef.nativeElement.appendChild(documentFragment);
    }
    /**
     * Forces a re-render of the data rows. Should be called in cases where there has been an input
     * change that affects the evaluation of which rows should be rendered, e.g. toggling
     * `multiTemplateDataRows` or adding/removing row definitions.
     * @private
     * @return {?}
     */
    _forceRenderDataRows() {
        this._dataDiffer.diff([]);
        this._rowOutlet.viewContainer.clear();
        this.renderRows();
        this.updateStickyColumnStyles();
    }
    /**
     * Checks if there has been a change in sticky states since last check and applies the correct
     * sticky styles. Since checking resets the "dirty" state, this should only be performed once
     * during a change detection and after the inputs are settled (after content check).
     * @private
     * @return {?}
     */
    _checkStickyStates() {
        /** @type {?} */
        const stickyCheckReducer = (/**
         * @param {?} acc
         * @param {?} d
         * @return {?}
         */
        (acc, d) => {
            return acc || d.hasStickyChanged();
        });
        // Note that the check needs to occur for every definition since it notifies the definition
        // that it can reset its dirty state. Using another operator like `some` may short-circuit
        // remaining definitions and leave them in an unchecked state.
        if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyHeaderRowStyles();
        }
        if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyFooterRowStyles();
        }
        if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
            this.updateStickyColumnStyles();
        }
    }
    /**
     * Creates the sticky styler that will be used for sticky rows and columns. Listens
     * for directionality changes and provides the latest direction to the styler. Re-applies column
     * stickiness when directionality changes.
     * @private
     * @return {?}
     */
    _setupStickyStyler() {
        /** @type {?} */
        const direction = this._dir ? this._dir.value : 'ltr';
        this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._platform.isBrowser);
        (this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this._stickyStyler.direction = value;
            this.updateStickyColumnStyles();
        }));
    }
    /**
     * Filters definitions that belong to this table from a QueryList.
     * @private
     * @template I
     * @param {?} items
     * @return {?}
     */
    _getOwnDefs(items) {
        return items.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !item._table || item._table === this));
    }
}
CdkTable.ɵfac = function CdkTable_Factory(t) { return new (t || CdkTable)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"])); };
CdkTable.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkTable, selectors: [["cdk-table"], ["table", "cdk-table", ""]], contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkColumnDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkRowDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkHeaderRowDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkFooterRowDef, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentColumnDefs = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentRowDefs = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentHeaderRowDefs = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentFooterRowDefs = _t);
    } }, viewQuery: function CdkTable_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](DataRowOutlet, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](HeaderRowOutlet, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](FooterRowOutlet, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._rowOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._headerRowOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._footerRowOutlet = _t.first);
    } }, hostAttrs: [1, "cdk-table"], inputs: { trackBy: "trackBy", dataSource: "dataSource", multiTemplateDataRows: "multiTemplateDataRows" }, exportAs: ["cdkTable"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{ provide: CDK_TABLE, useExisting: CdkTable }])], ngContentSelectors: _c1, decls: 4, vars: 0, consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["footerRowOutlet", ""]], template: function CdkTable_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](3, 2);
    } }, directives: [HeaderRowOutlet,
        DataRowOutlet,
        FooterRowOutlet], encapsulation: 2 });
/** @nocollapse */
CdkTable.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"], args: ['role',] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
CdkTable.propDecorators = {
    trackBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    multiTemplateDataRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    _rowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [DataRowOutlet, { static: true },] }],
    _headerRowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [HeaderRowOutlet, { static: true },] }],
    _footerRowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [FooterRowOutlet, { static: true },] }],
    _contentColumnDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkColumnDef, { descendants: true },] }],
    _contentRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkRowDef, { descendants: true },] }],
    _contentHeaderRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkHeaderRowDef, {
                    descendants: true
                },] }],
    _contentFooterRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkFooterRowDef, {
                    descendants: true
                },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-table, table[cdk-table]',
                exportAs: 'cdkTable',
                template: CDK_TABLE_TEMPLATE,
                host: {
                    'class': 'cdk-table'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                // The "OnPush" status for the `MatTable` component is effectively a noop, so we are removing it.
                // The view for `MatTable` consists entirely of templates declared in other views. As they are
                // declared elsewhere, they are checked when their declaration points are checked.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                providers: [{ provide: CDK_TABLE, useExisting: CdkTable }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
                args: ['role']
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }]; }, { trackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], dataSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], multiTemplateDataRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], _rowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [DataRowOutlet, { static: true }]
        }], _headerRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [HeaderRowOutlet, { static: true }]
        }], _footerRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [FooterRowOutlet, { static: true }]
        }], _contentColumnDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkColumnDef, { descendants: true }]
        }], _contentRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkRowDef, { descendants: true }]
        }], _contentHeaderRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkHeaderRowDef, {
                    descendants: true
                }]
        }], _contentFooterRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkFooterRowDef, {
                    descendants: true
                }]
        }] }); })();
if (false) {}
/**
 * Utility function that gets a merged list of the entries in an array and values of a Set.
 * @template T
 * @param {?} array
 * @param {?} set
 * @return {?}
 */
function mergeArrayAndSet(array, set) {
    return array.concat(Array.from(set));
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/text-column.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 * @template T
 */
class CdkTextColumn {
    /**
     * @param {?} _table
     * @param {?} _options
     */
    constructor(_table, _options) {
        this._table = _table;
        this._options = _options;
        /**
         * Alignment of the cell values.
         */
        this.justify = 'start';
        this._options = _options || {};
    }
    /**
     * Column name that should be used to reference this column.
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    set name(name) {
        this._name = name;
        // With Ivy, inputs can be initialized before static query results are
        // available. In that case, we defer the synchronization until "ngOnInit" fires.
        this._syncColumnDefName();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._syncColumnDefName();
        if (this.headerText === undefined) {
            this.headerText = this._createDefaultHeaderText();
        }
        if (!this.dataAccessor) {
            this.dataAccessor =
                this._options.defaultDataAccessor || ((/**
                 * @param {?} data
                 * @param {?} name
                 * @return {?}
                 */
                (data, name) => ((/** @type {?} */ (data)))[name]));
        }
        if (this._table) {
            // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
            // since the columnDef will not pick up its content by the time the table finishes checking
            // its content and initializing the rows.
            this.columnDef.cell = this.cell;
            this.columnDef.headerCell = this.headerCell;
            this._table.addColumnDef(this.columnDef);
        }
        else {
            throw getTableTextColumnMissingParentTableError();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._table) {
            this._table.removeColumnDef(this.columnDef);
        }
    }
    /**
     * Creates a default header text. Use the options' header text transformation function if one
     * has been provided. Otherwise simply capitalize the column name.
     * @return {?}
     */
    _createDefaultHeaderText() {
        /** @type {?} */
        const name = this.name;
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])() && !name) {
            throw getTableTextColumnMissingNameError();
        }
        if (this._options && this._options.defaultHeaderTextTransform) {
            return this._options.defaultHeaderTextTransform(name);
        }
        return name[0].toUpperCase() + name.slice(1);
    }
    /**
     * Synchronizes the column definition name with the text column name.
     * @private
     * @return {?}
     */
    _syncColumnDefName() {
        if (this.columnDef) {
            this.columnDef.name = this.name;
        }
    }
}
CdkTextColumn.ɵfac = function CdkTextColumn_Factory(t) { return new (t || CdkTextColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTable, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](TEXT_COLUMN_OPTIONS, 8)); };
CdkTextColumn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkTextColumn, selectors: [["cdk-text-column"]], viewQuery: function CdkTextColumn_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkColumnDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkCellDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkHeaderCellDef, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.columnDef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
    } }, inputs: { justify: "justify", name: "name", headerText: "headerText", dataAccessor: "dataAccessor" }, decls: 3, vars: 0, consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]], template: function CdkTextColumn_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CdkTextColumn_th_1_Template, 2, 3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    } }, directives: [CdkColumnDef,
        CdkHeaderCellDef,
        CdkCellDef,
        CdkHeaderCell,
        CdkCell], encapsulation: 2 });
/** @nocollapse */
CdkTextColumn.ctorParameters = () => [
    { type: CdkTable, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [TEXT_COLUMN_OPTIONS,] }] }
];
CdkTextColumn.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    headerText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    dataAccessor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    justify: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    columnDef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [CdkColumnDef, { static: true },] }],
    cell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [CdkCellDef, { static: true },] }],
    headerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [CdkHeaderCellDef, { static: true },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTextColumn, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-text-column',
                template: `
    <ng-container cdkColumnDef>
      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td cdk-cell *cdkCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                // Change detection is intentionally not set to OnPush. This component's template will be provided
                // to the table to be inserted into its view. This is problematic when change detection runs since
                // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
                // mean's the template in the table's view will not have the updated value (and in fact will cause
                // an ExpressionChangedAfterItHasBeenCheckedError).
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default
            }]
    }], function () { return [{ type: CdkTable, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [TEXT_COLUMN_OPTIONS]
            }] }]; }, { justify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], headerText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], dataAccessor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], columnDef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [CdkColumnDef, { static: true }]
        }], cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [CdkCellDef, { static: true }]
        }], headerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [CdkHeaderCellDef, { static: true }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/table-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXPORTED_DECLARATIONS = [
    CdkTable,
    CdkRowDef,
    CdkCellDef,
    CdkCellOutlet,
    CdkHeaderCellDef,
    CdkFooterCellDef,
    CdkColumnDef,
    CdkCell,
    CdkRow,
    CdkHeaderCell,
    CdkFooterCell,
    CdkHeaderRow,
    CdkHeaderRowDef,
    CdkFooterRow,
    CdkFooterRowDef,
    DataRowOutlet,
    HeaderRowOutlet,
    FooterRowOutlet,
    CdkTextColumn,
];
class CdkTableModule {
}
CdkTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CdkTableModule });
CdkTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function CdkTableModule_Factory(t) { return new (t || CdkTableModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CdkTableModule, { declarations: [CdkTable,
        CdkRowDef,
        CdkCellDef,
        CdkCellOutlet,
        CdkHeaderCellDef,
        CdkFooterCellDef,
        CdkColumnDef,
        CdkCell,
        CdkRow,
        CdkHeaderCell,
        CdkFooterCell,
        CdkHeaderRow,
        CdkHeaderRowDef,
        CdkFooterRow,
        CdkFooterRowDef,
        DataRowOutlet,
        HeaderRowOutlet,
        FooterRowOutlet,
        CdkTextColumn], exports: [CdkTable,
        CdkRowDef,
        CdkCellDef,
        CdkCellOutlet,
        CdkHeaderCellDef,
        CdkFooterCellDef,
        CdkColumnDef,
        CdkCell,
        CdkRow,
        CdkHeaderCell,
        CdkFooterCell,
        CdkHeaderRow,
        CdkHeaderRowDef,
        CdkFooterRow,
        CdkFooterRowDef,
        DataRowOutlet,
        HeaderRowOutlet,
        FooterRowOutlet,
        CdkTextColumn] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                exports: EXPORTED_DECLARATIONS,
                declarations: EXPORTED_DECLARATIONS
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=table.js.map

/***/ }),

/***/ "../../node_modules/@angular/cdk/fesm2015/cdk.js":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/n_sol/dev/monorepo-wallet/omnichannel2-commercial-plataform-wallet-management/node_modules/@angular/cdk/fesm2015/cdk.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Current version of the Angular Component Development Kit. */
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('9.2.4');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


//# sourceMappingURL=cdk.js.map


/***/ }),

/***/ "../../node_modules/@angular/cdk/fesm2015/coercion.js":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/n_sol/dev/monorepo-wallet/omnichannel2-commercial-plataform-wallet-management/node_modules/@angular/cdk/fesm2015/coercion.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: _isNumberValue, coerceArray, coerceBooleanProperty, coerceCssPixelValue, coerceElement, coerceNumberProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isNumberValue", function() { return _isNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceArray", function() { return coerceArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return coerceBooleanProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function() { return coerceCssPixelValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceElement", function() { return coerceElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function() { return coerceNumberProperty; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Coerces a data-bound value (typically a string) to a boolean. */
function coerceBooleanProperty(value) {
    return value != null && `${value}` !== 'false';
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function coerceNumberProperty(value, fallbackValue = 0) {
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * @docs-private
 */
function _isNumberValue(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function coerceArray(value) {
    return Array.isArray(value) ? value : [value];
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Coerces a value to a CSS pixel value. */
function coerceCssPixelValue(value) {
    if (value == null) {
        return '';
    }
    return typeof value === 'string' ? value : `${value}px`;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 */
function coerceElement(elementOrRef) {
    return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


//# sourceMappingURL=coercion.js.map


/***/ }),

/***/ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js":
/*!***********************************************************************************************************************************************************!*\
  !*** C:/Users/n_sol/dev/monorepo-wallet/omnichannel2-commercial-plataform-wallet-management/node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: APR, AUG, AnimationCurves, AnimationDurations, DEC, DateAdapter, ErrorStateMatcher, FEB, GestureConfig, JAN, JUL, JUN, MAR, MATERIAL_SANITY_CHECKS, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_DATE_LOCALE_FACTORY, MAT_DATE_LOCALE_PROVIDER, MAT_HAMMER_OPTIONS, MAT_LABEL_GLOBAL_OPTIONS, MAT_NATIVE_DATE_FORMATS, MAT_OPTION_PARENT_COMPONENT, MAT_RIPPLE_GLOBAL_OPTIONS, MAY, MatCommonModule, MatLine, MatLineModule, MatLineSetter, MatNativeDateModule, MatOptgroup, MatOption, MatOptionModule, MatOptionSelectionChange, MatPseudoCheckbox, MatPseudoCheckboxModule, MatRipple, MatRippleModule, NOV, NativeDateAdapter, NativeDateModule, OCT, RippleRef, RippleRenderer, SEP, ShowOnDirtyErrorStateMatcher, VERSION, _countGroupLabelsBeforeOption, _getOptionScrollPosition, defaultRippleAnimationConfig, mixinColor, mixinDisableRipple, mixinDisabled, mixinErrorState, mixinInitialized, mixinTabIndex, setLines, ɵangular_material_src_material_core_core_a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APR", function() { return APR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUG", function() { return AUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationCurves", function() { return AnimationCurves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationDurations", function() { return AnimationDurations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEC", function() { return DEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateAdapter", function() { return DateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorStateMatcher", function() { return ErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEB", function() { return FEB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestureConfig", function() { return GestureConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JAN", function() { return JAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JUL", function() { return JUL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JUN", function() { return JUN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAR", function() { return MAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATERIAL_SANITY_CHECKS", function() { return MATERIAL_SANITY_CHECKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_FORMATS", function() { return MAT_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE", function() { return MAT_DATE_LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_FACTORY", function() { return MAT_DATE_LOCALE_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_PROVIDER", function() { return MAT_DATE_LOCALE_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_HAMMER_OPTIONS", function() { return MAT_HAMMER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_LABEL_GLOBAL_OPTIONS", function() { return MAT_LABEL_GLOBAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_NATIVE_DATE_FORMATS", function() { return MAT_NATIVE_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_OPTION_PARENT_COMPONENT", function() { return MAT_OPTION_PARENT_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RIPPLE_GLOBAL_OPTIONS", function() { return MAT_RIPPLE_GLOBAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAY", function() { return MAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCommonModule", function() { return MatCommonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLine", function() { return MatLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLineModule", function() { return MatLineModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLineSetter", function() { return MatLineSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatNativeDateModule", function() { return MatNativeDateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOptgroup", function() { return MatOptgroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOption", function() { return MatOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOptionModule", function() { return MatOptionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOptionSelectionChange", function() { return MatOptionSelectionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPseudoCheckbox", function() { return MatPseudoCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModule", function() { return MatPseudoCheckboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRipple", function() { return MatRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRippleModule", function() { return MatRippleModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOV", function() { return NOV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeDateAdapter", function() { return NativeDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeDateModule", function() { return NativeDateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OCT", function() { return OCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleRef", function() { return RippleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleRenderer", function() { return RippleRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEP", function() { return SEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowOnDirtyErrorStateMatcher", function() { return ShowOnDirtyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_countGroupLabelsBeforeOption", function() { return _countGroupLabelsBeforeOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getOptionScrollPosition", function() { return _getOptionScrollPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRippleAnimationConfig", function() { return defaultRippleAnimationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinColor", function() { return mixinColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinDisableRipple", function() { return mixinDisableRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinDisabled", function() { return mixinDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinErrorState", function() { return mixinErrorState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinInitialized", function() { return mixinInitialized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinTabIndex", function() { return mixinTabIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLines", function() { return setLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_core_core_a", function() { return MATERIAL_SANITY_CHECKS_FACTORY; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk */ "../../node_modules/@angular/cdk/fesm2015/cdk.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/keycodes */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");













/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/version.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Current version of Angular Material.
 * @type {?}
 */





const _c0 = ["*", [["mat-option"], ["ng-container"]]];
const _c1 = ["*", "mat-option, ng-container"];
function MatOption_mat_pseudo_checkbox_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-pseudo-checkbox", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r0.selected ? "checked" : "unchecked")("disabled", ctx_r0.disabled);
} }
const _c2 = ["*"];
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('9.2.4');

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/animation/animation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@docs-private
 */
class AnimationCurves {
}
AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
if (false) {}
/**
 * \@docs-private
 */
class AnimationDurations {
}
AnimationDurations.COMPLEX = '375ms';
AnimationDurations.ENTERING = '225ms';
AnimationDurations.EXITING = '195ms';
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/common-behaviors/common-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Private version constant to circumvent test/build issues,
// i.e. avoid core to depend on the @angular/material primary entry-point
// Can be removed once the Material primary entry-point no longer
// re-exports all secondary entry-points
/** @type {?} */
const VERSION$1 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('9.2.4');
/**
 * \@docs-private
 * @return {?}
 */
function MATERIAL_SANITY_CHECKS_FACTORY() {
    return true;
}
/**
 * Injection token that configures whether the Material sanity checks are enabled.
 * @type {?}
 */
const MATERIAL_SANITY_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-sanity-checks', {
    providedIn: 'root',
    factory: MATERIAL_SANITY_CHECKS_FACTORY,
});
/**
 * Object that can be used to configure the sanity checks granularly.
 * @record
 */
function GranularSanityChecks() { }
if (false) {}
/**
 * Module that captures anything that should be loaded and/or run for *all* Angular Material
 * components. This includes Bidi, etc.
 *
 * This module should be imported to each top-level component module (e.g., MatTabsModule).
 */
class MatCommonModule {
    /**
     * @param {?} highContrastModeDetector
     * @param {?} sanityChecks
     * @param {?=} document
     */
    constructor(highContrastModeDetector, sanityChecks, 
    /** @breaking-change 11.0.0 make document required */
    document) {
        /**
         * Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype).
         */
        this._hasDoneGlobalChecks = false;
        this._document = document;
        // While A11yModule also does this, we repeat it here to avoid importing A11yModule
        // in MatCommonModule.
        highContrastModeDetector._applyBodyHighContrastModeCssClasses();
        // Note that `_sanityChecks` is typed to `any`, because AoT
        // throws an error if we use the `SanityChecks` type directly.
        this._sanityChecks = sanityChecks;
        if (!this._hasDoneGlobalChecks) {
            this._checkDoctypeIsDefined();
            this._checkThemeIsPresent();
            this._checkCdkVersionMatch();
            this._hasDoneGlobalChecks = true;
        }
    }
    /**
     * Access injected document if available or fallback to global document reference
     * @private
     * @return {?}
     */
    _getDocument() {
        /** @type {?} */
        const doc = this._document || document;
        return typeof doc === 'object' && doc ? doc : null;
    }
    /**
     * Use defaultView of injected document if available or fallback to global window reference
     * @private
     * @return {?}
     */
    _getWindow() {
        /** @type {?} */
        const doc = this._getDocument();
        /** @type {?} */
        const win = (doc === null || doc === void 0 ? void 0 : doc.defaultView) || window;
        return typeof win === 'object' && win ? win : null;
    }
    /**
     * Whether any sanity checks are enabled.
     * @private
     * @return {?}
     */
    _checksAreEnabled() {
        return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && !this._isTestEnv();
    }
    /**
     * Whether the code is running in tests.
     * @private
     * @return {?}
     */
    _isTestEnv() {
        /** @type {?} */
        const window = (/** @type {?} */ (this._getWindow()));
        return window && (window.__karma__ || window.jasmine);
    }
    /**
     * @private
     * @return {?}
     */
    _checkDoctypeIsDefined() {
        /** @type {?} */
        const isEnabled = this._checksAreEnabled() &&
            (this._sanityChecks === true || ((/** @type {?} */ (this._sanityChecks))).doctype);
        /** @type {?} */
        const document = this._getDocument();
        if (isEnabled && document && !document.doctype) {
            console.warn('Current document does not have a doctype. This may cause ' +
                'some Angular Material components not to behave as expected.');
        }
    }
    /**
     * @private
     * @return {?}
     */
    _checkThemeIsPresent() {
        // We need to assert that the `body` is defined, because these checks run very early
        // and the `body` won't be defined if the consumer put their scripts in the `head`.
        /** @type {?} */
        const isDisabled = !this._checksAreEnabled() ||
            (this._sanityChecks === false || !((/** @type {?} */ (this._sanityChecks))).theme);
        /** @type {?} */
        const document = this._getDocument();
        if (isDisabled || !document || !document.body ||
            typeof getComputedStyle !== 'function') {
            return;
        }
        /** @type {?} */
        const testElement = document.createElement('div');
        testElement.classList.add('mat-theme-loaded-marker');
        document.body.appendChild(testElement);
        /** @type {?} */
        const computedStyle = getComputedStyle(testElement);
        // In some situations the computed style of the test element can be null. For example in
        // Firefox, the computed style is null if an application is running inside of a hidden iframe.
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        if (computedStyle && computedStyle.display !== 'none') {
            console.warn('Could not find Angular Material core theme. Most Material ' +
                'components may not work as expected. For more info refer ' +
                'to the theming guide: https://material.angular.io/guide/theming');
        }
        document.body.removeChild(testElement);
    }
    /**
     * Checks whether the material version matches the cdk version
     * @private
     * @return {?}
     */
    _checkCdkVersionMatch() {
        /** @type {?} */
        const isEnabled = this._checksAreEnabled() &&
            (this._sanityChecks === true || ((/** @type {?} */ (this._sanityChecks))).version);
        if (isEnabled && VERSION$1.full !== _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full) {
            console.warn('The Angular Material version (' + VERSION$1.full + ') does not match ' +
                'the Angular CDK version (' + _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full + ').\n' +
                'Please ensure the versions of these two packages exactly match.');
        }
    }
}
MatCommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatCommonModule });
MatCommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatCommonModule_Factory(t) { return new (t || MatCommonModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["HighContrastModeDetector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MATERIAL_SANITY_CHECKS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], 8)); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]],
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]] });
/** @nocollapse */
MatCommonModule.ctorParameters = () => [
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["HighContrastModeDetector"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MATERIAL_SANITY_CHECKS,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatCommonModule, { imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]; }, exports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCommonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]],
                exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]
            }]
    }], function () { return [{ type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["HighContrastModeDetector"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MATERIAL_SANITY_CHECKS]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/common-behaviors/disabled.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@docs-private
 * @record
 */
function CanDisable() { }
if (false) {}
/**
 * Mixin to augment a directive with a `disabled` property.
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinDisabled(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._disabled = false;
        }
        /**
         * @return {?}
         */
        get disabled() { return this._disabled; }
        /**
         * @param {?} value
         * @return {?}
         */
        set disabled(value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value); }
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/common-behaviors/color.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@docs-private
 * @record
 */
function CanColor() { }
if (false) {}
/**
 * \@docs-private
 * @record
 */
function HasElementRef() { }
if (false) {}
/**
 * Mixin to augment a directive with a `color` property.
 * @template T
 * @param {?} base
 * @param {?=} defaultColor
 * @return {?}
 */
function mixinColor(base, defaultColor) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            // Set the default color that can be specified from the mixin.
            this.color = defaultColor;
        }
        /**
         * @return {?}
         */
        get color() { return this._color; }
        /**
         * @param {?} value
         * @return {?}
         */
        set color(value) {
            /** @type {?} */
            const colorPalette = value || defaultColor;
            if (colorPalette !== this._color) {
                if (this._color) {
                    this._elementRef.nativeElement.classList.remove(`mat-${this._color}`);
                }
                if (colorPalette) {
                    this._elementRef.nativeElement.classList.add(`mat-${colorPalette}`);
                }
                this._color = colorPalette;
            }
        }
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/common-behaviors/disable-ripple.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@docs-private
 * @record
 */
function CanDisableRipple() { }
if (false) {}
/**
 * Mixin to augment a directive with a `disableRipple` property.
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinDisableRipple(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._disableRipple = false;
        }
        /**
         * Whether the ripple effect is disabled or not.
         * @return {?}
         */
        get disableRipple() { return this._disableRipple; }
        /**
         * @param {?} value
         * @return {?}
         */
        set disableRipple(value) { this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value); }
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/common-behaviors/tabindex.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@docs-private
 * @record
 */
function HasTabIndex() { }
if (false) {}
/**
 * Mixin to augment a directive with a `tabIndex` property.
 * @template T
 * @param {?} base
 * @param {?=} defaultTabIndex
 * @return {?}
 */
function mixinTabIndex(base, defaultTabIndex = 0) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._tabIndex = defaultTabIndex;
        }
        /**
         * @return {?}
         */
        get tabIndex() { return this.disabled ? -1 : this._tabIndex; }
        /**
         * @param {?} value
         * @return {?}
         */
        set tabIndex(value) {
            // If the specified tabIndex value is null or undefined, fall back to the default value.
            this._tabIndex = value != null ? value : defaultTabIndex;
        }
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/common-behaviors/error-state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@docs-private
 * @record
 */
function CanUpdateErrorState() { }
if (false) {}
/**
 * \@docs-private
 * @record
 */
function HasErrorState() { }
if (false) {}
/**
 * Mixin to augment a directive with updateErrorState method.
 * For component with `errorState` and need to update `errorState`.
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinErrorState(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            /**
             * Whether the component is in an error state.
             */
            this.errorState = false;
            /**
             * Stream that emits whenever the state of the input changes such that the wrapping
             * `MatFormField` needs to run change detection.
             */
            this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        }
        /**
         * @return {?}
         */
        updateErrorState() {
            /** @type {?} */
            const oldState = this.errorState;
            /** @type {?} */
            const parent = this._parentFormGroup || this._parentForm;
            /** @type {?} */
            const matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
            /** @type {?} */
            const control = this.ngControl ? (/** @type {?} */ (this.ngControl.control)) : null;
            /** @type {?} */
            const newState = matcher.isErrorState(control, parent);
            if (newState !== oldState) {
                this.errorState = newState;
                this.stateChanges.next();
            }
        }
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/common-behaviors/initialized.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Mixin that adds an initialized property to a directive which, when subscribed to, will emit a
 * value once markInitialized has been called, which should be done during the ngOnInit function.
 * If the subscription is made after it has already been marked as initialized, then it will trigger
 * an emit immediately.
 * \@docs-private
 * @record
 */
function HasInitialized() { }
if (false) {}
/**
 * Mixin to augment a directive with an initialized property that will emits when ngOnInit ends.
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinInitialized(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            /**
             * Whether this directive has been marked as initialized.
             */
            this._isInitialized = false;
            /**
             * List of subscribers that subscribed before the directive was initialized. Should be notified
             * during _markInitialized. Set to null after pending subscribers are notified, and should
             * not expect to be populated after.
             */
            this._pendingSubscribers = [];
            /**
             * Observable stream that emits when the directive initializes. If already initialized, the
             * subscriber is stored to be notified once _markInitialized is called.
             */
            this.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"]((/**
             * @param {?} subscriber
             * @return {?}
             */
            subscriber => {
                // If initialized, immediately notify the subscriber. Otherwise store the subscriber to notify
                // when _markInitialized is called.
                if (this._isInitialized) {
                    this._notifySubscriber(subscriber);
                }
                else {
                    (/** @type {?} */ (this._pendingSubscribers)).push(subscriber);
                }
            }));
        }
        /**
         * Marks the state as initialized and notifies pending subscribers. Should be called at the end
         * of ngOnInit.
         * \@docs-private
         * @return {?}
         */
        _markInitialized() {
            if (this._isInitialized) {
                throw Error('This directive has already been marked as initialized and ' +
                    'should not be called twice.');
            }
            this._isInitialized = true;
            (/** @type {?} */ (this._pendingSubscribers)).forEach(this._notifySubscriber);
            this._pendingSubscribers = null;
        }
        /**
         * Emits and completes the subscriber stream (should only emit once).
         * @param {?} subscriber
         * @return {?}
         */
        _notifySubscriber(subscriber) {
            subscriber.next();
            subscriber.complete();
        }
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/common-behaviors/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/datetime/date-adapter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * InjectionToken for datepicker that can be used to override default locale code.
 * @type {?}
 */
const MAT_DATE_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_DATE_LOCALE', {
    providedIn: 'root',
    factory: MAT_DATE_LOCALE_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_DATE_LOCALE_FACTORY() {
    return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]);
}
/**
 * No longer needed since MAT_DATE_LOCALE has been changed to a scoped injectable.
 * If you are importing and providing this in your code you can simply remove it.
 * @deprecated
 * \@breaking-change 8.0.0
 * @type {?}
 */
const MAT_DATE_LOCALE_PROVIDER = { provide: MAT_DATE_LOCALE, useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"] };
/**
 * Adapts type `D` to be usable as a date by cdk-based components that work with dates.
 * @abstract
 * @template D
 */
class DateAdapter {
    constructor() {
        this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    /**
     * A stream that emits when the locale changes.
     * @return {?}
     */
    get localeChanges() { return this._localeChanges; }
    /**
     * Attempts to deserialize a value to a valid date object. This is different from parsing in that
     * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
     * string). The default implementation does not allow any deserialization, it simply checks that
     * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
     * method on all of its `\@Input()` properties that accept dates. It is therefore possible to
     * support passing values from your backend directly to these properties by overriding this method
     * to also deserialize the format used by your backend.
     * @param {?} value The value to be deserialized into a date object.
     * @return {?} The deserialized date object, either a valid date, null if the value can be
     *     deserialized into a null date (e.g. the empty string), or an invalid date.
     */
    deserialize(value) {
        if (value == null || this.isDateInstance(value) && this.isValid(value)) {
            return value;
        }
        return this.invalid();
    }
    /**
     * Sets the locale used for all dates.
     * @param {?} locale The new locale.
     * @return {?}
     */
    setLocale(locale) {
        this.locale = locale;
        this._localeChanges.next();
    }
    /**
     * Compares two dates.
     * @param {?} first The first date to compare.
     * @param {?} second The second date to compare.
     * @return {?} 0 if the dates are equal, a number less than 0 if the first date is earlier,
     *     a number greater than 0 if the first date is later.
     */
    compareDate(first, second) {
        return this.getYear(first) - this.getYear(second) ||
            this.getMonth(first) - this.getMonth(second) ||
            this.getDate(first) - this.getDate(second);
    }
    /**
     * Checks if two dates are equal.
     * @param {?} first The first date to check.
     * @param {?} second The second date to check.
     * @return {?} Whether the two dates are equal.
     *     Null dates are considered equal to other null dates.
     */
    sameDate(first, second) {
        if (first && second) {
            /** @type {?} */
            let firstValid = this.isValid(first);
            /** @type {?} */
            let secondValid = this.isValid(second);
            if (firstValid && secondValid) {
                return !this.compareDate(first, second);
            }
            return firstValid == secondValid;
        }
        return first == second;
    }
    /**
     * Clamp the given date between min and max dates.
     * @param {?} date The date to clamp.
     * @param {?=} min The minimum value to allow. If null or omitted no min is enforced.
     * @param {?=} max The maximum value to allow. If null or omitted no max is enforced.
     * @return {?} `min` if `date` is less than `min`, `max` if date is greater than `max`,
     *     otherwise `date`.
     */
    clampDate(date, min, max) {
        if (min && this.compareDate(date, min) < 0) {
            return min;
        }
        if (max && this.compareDate(date, max) > 0) {
            return max;
        }
        return date;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/datetime/date-formats.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MAT_DATE_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-date-formats');

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/datetime/native-date-adapter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO(mmalerba): Remove when we no longer support safari 9.
/**
 * Whether the browser supports the Intl API.
 * @type {?}
 */
let SUPPORTS_INTL_API;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
    SUPPORTS_INTL_API = typeof Intl != 'undefined';
}
catch (_a) {
    SUPPORTS_INTL_API = false;
}
/**
 * The default month names to use if Intl API is not available.
 * @type {?}
 */
const DEFAULT_MONTH_NAMES = {
    'long': [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ],
    'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
};
const ɵ0 = /**
 * @param {?} i
 * @return {?}
 */
i => String(i + 1);
/**
 * The default date names to use if Intl API is not available.
 * @type {?}
 */
const DEFAULT_DATE_NAMES = range(31, (ɵ0));
/**
 * The default day of the week names to use if Intl API is not available.
 * @type {?}
 */
const DEFAULT_DAY_OF_WEEK_NAMES = {
    'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};
/**
 * Matches strings that have the form of a valid RFC 3339 string
 * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
 * because the regex will match strings an with out of bounds month, date, etc.
 * @type {?}
 */
const ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
/**
 * Creates an array and fills it with values.
 * @template T
 * @param {?} length
 * @param {?} valueFunction
 * @return {?}
 */
function range(length, valueFunction) {
    /** @type {?} */
    const valuesArray = Array(length);
    for (let i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
/**
 * Adapts the native JS Date for use with cdk-based components that work with dates.
 */
class NativeDateAdapter extends DateAdapter {
    /**
     * @param {?} matDateLocale
     * @param {?} platform
     */
    constructor(matDateLocale, platform) {
        super();
        /**
         * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
         * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
         * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
         * will produce `'8/13/1800'`.
         *
         * TODO(mmalerba): drop this variable. It's not being used in the code right now. We're now
         * getting the string representation of a Date object from its utc representation. We're keeping
         * it here for sometime, just for precaution, in case we decide to revert some of these changes
         * though.
         */
        this.useUtcForDisplay = true;
        super.setLocale(matDateLocale);
        // IE does its own time zone correction, so we disable this on IE.
        this.useUtcForDisplay = !platform.TRIDENT;
        this._clampDate = platform.TRIDENT || platform.EDGE;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getYear(date) {
        return date.getFullYear();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getMonth(date) {
        return date.getMonth();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDate(date) {
        return date.getDate();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDayOfWeek(date) {
        return date.getDay();
    }
    /**
     * @param {?} style
     * @return {?}
     */
    getMonthNames(style) {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, { month: style, timeZone: 'utc' });
            return range(12, (/**
             * @param {?} i
             * @return {?}
             */
            i => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, i, 1)))));
        }
        return DEFAULT_MONTH_NAMES[style];
    }
    /**
     * @return {?}
     */
    getDateNames() {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, { day: 'numeric', timeZone: 'utc' });
            return range(31, (/**
             * @param {?} i
             * @return {?}
             */
            i => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1)))));
        }
        return DEFAULT_DATE_NAMES;
    }
    /**
     * @param {?} style
     * @return {?}
     */
    getDayOfWeekNames(style) {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, { weekday: style, timeZone: 'utc' });
            return range(7, (/**
             * @param {?} i
             * @return {?}
             */
            i => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1)))));
        }
        return DEFAULT_DAY_OF_WEEK_NAMES[style];
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getYearName(date) {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, { year: 'numeric', timeZone: 'utc' });
            return this._stripDirectionalityCharacters(this._format(dtf, date));
        }
        return String(this.getYear(date));
    }
    /**
     * @return {?}
     */
    getFirstDayOfWeek() {
        // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
        return 0;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getNumDaysInMonth(date) {
        return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
    }
    /**
     * @param {?} date
     * @return {?}
     */
    clone(date) {
        return new Date(date.getTime());
    }
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    createDate(year, month, date) {
        // Check for invalid month and date (except upper bound on date which we have to check after
        // creating the Date).
        if (month < 0 || month > 11) {
            throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
        }
        if (date < 1) {
            throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
        }
        /** @type {?} */
        let result = this._createDateWithOverflow(year, month, date);
        // Check that the date wasn't above the upper bound for the month, causing the month to overflow
        if (result.getMonth() != month) {
            throw Error(`Invalid date "${date}" for month with index "${month}".`);
        }
        return result;
    }
    /**
     * @return {?}
     */
    today() {
        return new Date();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    parse(value) {
        // We have no way using the native JS Date to set the parse format or locale, so we ignore these
        // parameters.
        if (typeof value == 'number') {
            return new Date(value);
        }
        return value ? new Date(Date.parse(value)) : null;
    }
    /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    format(date, displayFormat) {
        if (!this.isValid(date)) {
            throw Error('NativeDateAdapter: Cannot format invalid date.');
        }
        if (SUPPORTS_INTL_API) {
            // On IE and Edge the i18n API will throw a hard error that can crash the entire app
            // if we attempt to format a date whose year is less than 1 or greater than 9999.
            if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
                date = this.clone(date);
                date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
            }
            displayFormat = Object.assign(Object.assign({}, displayFormat), { timeZone: 'utc' });
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
            return this._stripDirectionalityCharacters(this._format(dtf, date));
        }
        return this._stripDirectionalityCharacters(date.toDateString());
    }
    /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    addCalendarYears(date, years) {
        return this.addCalendarMonths(date, years * 12);
    }
    /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    addCalendarMonths(date, months) {
        /** @type {?} */
        let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
        // It's possible to wind up in the wrong month if the original month has more days than the new
        // month. In this case we want to go to the last day of the desired month.
        // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
        // guarantee this.
        if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
            newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
        }
        return newDate;
    }
    /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    addCalendarDays(date, days) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    toIso8601(date) {
        return [
            date.getUTCFullYear(),
            this._2digit(date.getUTCMonth() + 1),
            this._2digit(date.getUTCDate())
        ].join('-');
    }
    /**
     * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
     * invalid date for all other values.
     * @param {?} value
     * @return {?}
     */
    deserialize(value) {
        if (typeof value === 'string') {
            if (!value) {
                return null;
            }
            // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
            // string is the right format first.
            if (ISO_8601_REGEX.test(value)) {
                /** @type {?} */
                let date = new Date(value);
                if (this.isValid(date)) {
                    return date;
                }
            }
        }
        return super.deserialize(value);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    isDateInstance(obj) {
        return obj instanceof Date;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isValid(date) {
        return !isNaN(date.getTime());
    }
    /**
     * @return {?}
     */
    invalid() {
        return new Date(NaN);
    }
    /**
     * Creates a date but allows the month and date to overflow.
     * @private
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    _createDateWithOverflow(year, month, date) {
        /** @type {?} */
        const result = new Date(year, month, date);
        // We need to correct for the fact that JS native Date treats years in range [0, 99] as
        // abbreviations for 19xx.
        if (year >= 0 && year < 100) {
            result.setFullYear(this.getYear(result) - 1900);
        }
        return result;
    }
    /**
     * Pads a number to make it two digits.
     * @private
     * @param {?} n The number to pad.
     * @return {?} The padded number.
     */
    _2digit(n) {
        return ('00' + n).slice(-2);
    }
    /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     * @private
     * @param {?} str The string to strip direction characters from.
     * @return {?} The stripped string.
     */
    _stripDirectionalityCharacters(str) {
        return str.replace(/[\u200e\u200f]/g, '');
    }
    /**
     * When converting Date object to string, javascript built-in functions may return wrong
     * results because it applies its internal DST rules. The DST rules around the world change
     * very frequently, and the current valid rule is not always valid in previous years though.
     * We work around this problem building a new Date object which has its internal UTC
     * representation with the local date and time.
     * @private
     * @param {?} dtf Intl.DateTimeFormat object, containg the desired string format. It must have
     *    timeZone set to 'utc' to work fine.
     * @param {?} date Date from which we want to get the string representation according to dtf
     * @return {?} A Date object with its UTC representation based on the passed in date info
     */
    _format(dtf, date) {
        /** @type {?} */
        const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
        return dtf.format(d);
    }
}
NativeDateAdapter.ɵfac = function NativeDateAdapter_Factory(t) { return new (t || NativeDateAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MAT_DATE_LOCALE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"])); };
NativeDateAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NativeDateAdapter, factory: NativeDateAdapter.ɵfac });
/** @nocollapse */
NativeDateAdapter.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_DATE_LOCALE,] }] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NativeDateAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MAT_DATE_LOCALE]
            }] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/datetime/native-date-formats.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @type {?} */
const MAT_NATIVE_DATE_FORMATS = {
    parse: {
        dateInput: null,
    },
    display: {
        dateInput: { year: 'numeric', month: 'numeric', day: 'numeric' },
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/datetime/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NativeDateModule {
}
NativeDateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NativeDateModule });
NativeDateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NativeDateModule_Factory(t) { return new (t || NativeDateModule)(); }, providers: [
        { provide: DateAdapter, useClass: NativeDateAdapter },
    ], imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NativeDateModule, { imports: function () { return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NativeDateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]],
                providers: [
                    { provide: DateAdapter, useClass: NativeDateAdapter },
                ]
            }]
    }], null, null); })();
const ɵ0$1 = MAT_NATIVE_DATE_FORMATS;
class MatNativeDateModule {
}
MatNativeDateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatNativeDateModule });
MatNativeDateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatNativeDateModule_Factory(t) { return new (t || MatNativeDateModule)(); }, providers: [{ provide: MAT_DATE_FORMATS, useValue: ɵ0$1 }], imports: [[NativeDateModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatNativeDateModule, { imports: [NativeDateModule] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatNativeDateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [NativeDateModule],
                providers: [{ provide: MAT_DATE_FORMATS, useValue: ɵ0$1 }]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/error/error-options.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Error state matcher that matches when a control is invalid and dirty.
 */
class ShowOnDirtyErrorStateMatcher {
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    isErrorState(control, form) {
        return !!(control && control.invalid && (control.dirty || (form && form.submitted)));
    }
}
ShowOnDirtyErrorStateMatcher.ɵfac = function ShowOnDirtyErrorStateMatcher_Factory(t) { return new (t || ShowOnDirtyErrorStateMatcher)(); };
ShowOnDirtyErrorStateMatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShowOnDirtyErrorStateMatcher, factory: ShowOnDirtyErrorStateMatcher.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowOnDirtyErrorStateMatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
/**
 * Provider that defines how form controls behave with regards to displaying error messages.
 */
class ErrorStateMatcher {
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    isErrorState(control, form) {
        return !!(control && control.invalid && (control.touched || (form && form.submitted)));
    }
}
ErrorStateMatcher.ɵfac = function ErrorStateMatcher_Factory(t) { return new (t || ErrorStateMatcher)(); };
/** @nocollapse */ ErrorStateMatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ErrorStateMatcher_Factory() { return new ErrorStateMatcher(); }, token: ErrorStateMatcher, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorStateMatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/gestures/gesture-annotations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Stripped-down HammerJS annotations to be used within Material, which are necessary,
 * because HammerJS is an optional dependency. For the full annotations see:
 * https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/hammerjs/index.d.ts
 */
/**
 * @deprecated No longer being used. To be removed.
 * \@breaking-change 10.0.0
 * \@docs-private
 * @record
 */
function HammerInput() { }
if (false) {}
/**
 * @deprecated No longer being used. To be removed.
 * \@breaking-change 10.0.0
 * \@docs-private
 * @record
 */
function HammerStatic() { }
if (false) {}
/**
 * @deprecated No longer being used. To be removed.
 * \@breaking-change 10.0.0
 * \@docs-private
 * @record
 */
function Recognizer() { }
if (false) {}
/**
 * @deprecated No longer being used. To be removed.
 * \@breaking-change 10.0.0
 * \@docs-private
 * @record
 */
function RecognizerStatic() { }
/**
 * @deprecated No longer being used. To be removed.
 * \@breaking-change 10.0.0
 * \@docs-private
 * @record
 */
function HammerInstance() { }
if (false) {}
/**
 * @deprecated No longer being used. To be removed.
 * \@breaking-change 10.0.0
 * \@docs-private
 * @record
 */
function HammerManager() { }
if (false) {}
/**
 * @deprecated No longer being used. To be removed.
 * \@breaking-change 10.0.0
 * \@docs-private
 * @record
 */
function HammerOptions() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/gestures/gesture-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to provide options to the Hammerjs instance.
 * More info at http://hammerjs.github.io/api/.
 * @deprecated No longer being used. To be removed.
 * \@breaking-change 10.0.0
 * @type {?}
 */
const MAT_HAMMER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_HAMMER_OPTIONS');
/** @type {?} */
const ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES = [
    'longpress',
    'slide',
    'slidestart',
    'slideend',
    'slideright',
    'slideleft'
];
const ɵ0$2 = /**
 * @return {?}
 */
() => { }, ɵ1 = /**
 * @return {?}
 */
() => { };
/**
 * Fake HammerInstance that is used when a Hammer instance is requested when HammerJS has not
 * been loaded on the page.
 * @type {?}
 */
const noopHammerInstance = {
    on: (ɵ0$2),
    off: (ɵ1),
};
/**
 * Adjusts configuration of our gesture library, Hammer.
 * @deprecated No longer being used. To be removed.
 * \@breaking-change 10.0.0
 */
class GestureConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HammerGestureConfig"] {
    /**
     * @param {?=} _hammerOptions
     * @param {?=} _commonModule
     */
    constructor(_hammerOptions, _commonModule) {
        super();
        this._hammerOptions = _hammerOptions;
        /**
         * List of new event names to add to the gesture support list
         */
        this.events = ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES;
    }
    /**
     * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
     *
     * Our gesture names come from the Material Design gestures spec:
     * https://material.io/design/#gestures-touch-mechanics
     *
     * More information on default recognizers can be found in Hammer docs:
     * http://hammerjs.github.io/recognizer-pan/
     * http://hammerjs.github.io/recognizer-press/
     *
     * @param {?} element Element to which to assign the new HammerJS gestures.
     * @return {?} Newly-created HammerJS instance.
     */
    buildHammer(element) {
        /** @type {?} */
        const hammer = typeof window !== 'undefined' ? ((/** @type {?} */ (window))).Hammer : null;
        if (!hammer) {
            // If HammerJS is not loaded here, return the noop HammerInstance. This is necessary to
            // ensure that omitting HammerJS completely will not cause any errors while *also* supporting
            // the lazy-loading of HammerJS via the HAMMER_LOADER token introduced in Angular 6.1.
            // Because we can't depend on HAMMER_LOADER's existance until 7.0, we have to always set
            // `this.events` to the set we support, instead of conditionally setting it to `[]` if
            // `HAMMER_LOADER` is present (and then throwing an Error here if `window.Hammer` is
            // undefined).
            // @breaking-change 8.0.0
            return noopHammerInstance;
        }
        /** @type {?} */
        const mc = new hammer(element, this._hammerOptions || undefined);
        // Default Hammer Recognizers.
        /** @type {?} */
        const pan = new hammer.Pan();
        /** @type {?} */
        const swipe = new hammer.Swipe();
        /** @type {?} */
        const press = new hammer.Press();
        // Notice that a HammerJS recognizer can only depend on one other recognizer once.
        // Otherwise the previous `recognizeWith` will be dropped.
        // TODO: Confirm threshold numbers with Material Design UX Team
        /** @type {?} */
        const slide = this._createRecognizer(pan, { event: 'slide', threshold: 0 }, swipe);
        /** @type {?} */
        const longpress = this._createRecognizer(press, { event: 'longpress', time: 500 });
        // Overwrite the default `pan` event to use the swipe event.
        pan.recognizeWith(swipe);
        // Since the slide event threshold is set to zero, the slide recognizer can fire and
        // accidentally reset the longpress recognizer. In order to make sure that the two
        // recognizers can run simultaneously but don't affect each other, we allow the slide
        // recognizer to recognize while a longpress is being processed.
        // See: https://github.com/hammerjs/hammer.js/blob/master/src/manager.js#L123-L124
        longpress.recognizeWith(slide);
        // Add customized gestures to Hammer manager
        mc.add([swipe, press, pan, slide, longpress]);
        return (/** @type {?} */ (mc));
    }
    /**
     * Creates a new recognizer, without affecting the default recognizers of HammerJS
     * @private
     * @param {?} base
     * @param {?} options
     * @param {...?} inheritances
     * @return {?}
     */
    _createRecognizer(base, options, ...inheritances) {
        /** @type {?} */
        let recognizer = new ((/** @type {?} */ (base.constructor)))(options);
        inheritances.push(base);
        inheritances.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => recognizer.recognizeWith(item)));
        return recognizer;
    }
}
GestureConfig.ɵfac = function GestureConfig_Factory(t) { return new (t || GestureConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MAT_HAMMER_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MatCommonModule, 8)); };
GestureConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GestureConfig, factory: GestureConfig.ɵfac });
/** @nocollapse */
GestureConfig.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_HAMMER_OPTIONS,] }] },
    { type: MatCommonModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GestureConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MAT_HAMMER_OPTIONS]
            }] }, { type: MatCommonModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/line/line.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Shared directive to count lines inside a text area, such as a list item.
 * Line elements can be extracted with a \@ContentChildren(MatLine) query, then
 * counted by checking the query list's length.
 */
class MatLine {
}
MatLine.ɵfac = function MatLine_Factory(t) { return new (t || MatLine)(); };
MatLine.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatLine, selectors: [["", "mat-line", ""], ["", "matLine", ""]], hostAttrs: [1, "mat-line"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLine, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[mat-line], [matLine]',
                host: { 'class': 'mat-line' }
            }]
    }], null, null); })();
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * \@docs-private
 * @param {?} lines
 * @param {?} element
 * @param {?=} prefix
 * @return {?}
 */
function setLines(lines, element, prefix = 'mat') {
    // Note: doesn't need to unsubscribe, because `changes`
    // gets completed by Angular when the view is destroyed.
    lines.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(lines)).subscribe((/**
     * @param {?} __0
     * @return {?}
     */
    ({ length }) => {
        setClass(element, `${prefix}-2-line`, false);
        setClass(element, `${prefix}-3-line`, false);
        setClass(element, `${prefix}-multi-line`, false);
        if (length === 2 || length === 3) {
            setClass(element, `${prefix}-${length}-line`, true);
        }
        else if (length > 3) {
            setClass(element, `${prefix}-multi-line`, true);
        }
    }));
}
/**
 * Adds or removes a class from an element.
 * @param {?} element
 * @param {?} className
 * @param {?} isAdd
 * @return {?}
 */
function setClass(element, className, isAdd) {
    /** @type {?} */
    const classList = element.nativeElement.classList;
    isAdd ? classList.add(className) : classList.remove(className);
}
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * \@docs-private
 * @deprecated Use `setLines` instead.
 * \@breaking-change 8.0.0
 */
class MatLineSetter {
    /**
     * @param {?} lines
     * @param {?} element
     */
    constructor(lines, element) {
        setLines(lines, element);
    }
}
class MatLineModule {
}
MatLineModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatLineModule });
MatLineModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatLineModule_Factory(t) { return new (t || MatLineModule)(); }, imports: [[MatCommonModule],
        MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatLineModule, { declarations: [MatLine], imports: [MatCommonModule], exports: [MatLine,
        MatCommonModule] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLineModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [MatCommonModule],
                exports: [MatLine, MatCommonModule],
                declarations: [MatLine]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/ripple/ripple-ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @enum {number} */
const RippleState = {
    FADING_IN: 0, VISIBLE: 1, FADING_OUT: 2, HIDDEN: 3,
};
/**
 * Reference to a previously launched ripple element.
 */
class RippleRef {
    /**
     * @param {?} _renderer
     * @param {?} element
     * @param {?} config
     */
    constructor(_renderer, element, config) {
        this._renderer = _renderer;
        this.element = element;
        this.config = config;
        /**
         * Current state of the ripple.
         */
        this.state = 3 /* HIDDEN */;
    }
    /**
     * Fades out the ripple element.
     * @return {?}
     */
    fadeOut() {
        this._renderer.fadeOutRipple(this);
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/ripple/ripple-renderer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Interface that describes the configuration for the animation of a ripple.
 * There are two animation phases with different durations for the ripples.
 * @record
 */
function RippleAnimationConfig() { }
if (false) {}
/**
 * Interface that describes the target for launching ripples.
 * It defines the ripple configuration and disabled state for interaction ripples.
 * \@docs-private
 * @record
 */
function RippleTarget() { }
if (false) {}
/**
 * Default ripple animation configuration for ripples without an explicit
 * animation config specified.
 * @type {?}
 */
const defaultRippleAnimationConfig = {
    enterDuration: 450,
    exitDuration: 400
};
/**
 * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
 * events to avoid synthetic mouse events.
 * @type {?}
 */
const ignoreMouseEventsTimeout = 800;
/**
 * Options that apply to all the event listeners that are bound by the ripple renderer.
 * @type {?}
 */
const passiveEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * Events that signal that the pointer is down.
 * @type {?}
 */
const pointerDownEvents = ['mousedown', 'touchstart'];
/**
 * Events that signal that the pointer is up.
 * @type {?}
 */
const pointerUpEvents = ['mouseup', 'mouseleave', 'touchend', 'touchcancel'];
/**
 * Helper service that performs DOM manipulations. Not intended to be used outside this module.
 * The constructor takes a reference to the ripple directive's host element and a map of DOM
 * event handlers to be installed on the element that triggers ripple animations.
 * This will eventually become a custom renderer once Angular support exists.
 * \@docs-private
 */
class RippleRenderer {
    /**
     * @param {?} _target
     * @param {?} _ngZone
     * @param {?} elementOrElementRef
     * @param {?} platform
     */
    constructor(_target, _ngZone, elementOrElementRef, platform) {
        this._target = _target;
        this._ngZone = _ngZone;
        /**
         * Whether the pointer is currently down or not.
         */
        this._isPointerDown = false;
        /**
         * Set of currently active ripple references.
         */
        this._activeRipples = new Set();
        /**
         * Whether pointer-up event listeners have been registered.
         */
        this._pointerUpEventsRegistered = false;
        // Only do anything if we're on the browser.
        if (platform.isBrowser) {
            this._containerElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(elementOrElementRef);
        }
    }
    /**
     * Fades in a ripple at the given coordinates.
     * @param {?} x Coordinate within the element, along the X axis at which to start the ripple.
     * @param {?} y Coordinate within the element, along the Y axis at which to start the ripple.
     * @param {?=} config Extra ripple options.
     * @return {?}
     */
    fadeInRipple(x, y, config = {}) {
        /** @type {?} */
        const containerRect = this._containerRect =
            this._containerRect || this._containerElement.getBoundingClientRect();
        /** @type {?} */
        const animationConfig = Object.assign(Object.assign({}, defaultRippleAnimationConfig), config.animation);
        if (config.centered) {
            x = containerRect.left + containerRect.width / 2;
            y = containerRect.top + containerRect.height / 2;
        }
        /** @type {?} */
        const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
        /** @type {?} */
        const offsetX = x - containerRect.left;
        /** @type {?} */
        const offsetY = y - containerRect.top;
        /** @type {?} */
        const duration = animationConfig.enterDuration;
        /** @type {?} */
        const ripple = document.createElement('div');
        ripple.classList.add('mat-ripple-element');
        ripple.style.left = `${offsetX - radius}px`;
        ripple.style.top = `${offsetY - radius}px`;
        ripple.style.height = `${radius * 2}px`;
        ripple.style.width = `${radius * 2}px`;
        // If a custom color has been specified, set it as inline style. If no color is
        // set, the default color will be applied through the ripple theme styles.
        if (config.color != null) {
            ripple.style.backgroundColor = config.color;
        }
        ripple.style.transitionDuration = `${duration}ms`;
        this._containerElement.appendChild(ripple);
        // By default the browser does not recalculate the styles of dynamically created
        // ripple elements. This is critical because then the `scale` would not animate properly.
        enforceStyleRecalculation(ripple);
        ripple.style.transform = 'scale(1)';
        // Exposed reference to the ripple that will be returned.
        /** @type {?} */
        const rippleRef = new RippleRef(this, ripple, config);
        rippleRef.state = 0 /* FADING_IN */;
        // Add the ripple reference to the list of all active ripples.
        this._activeRipples.add(rippleRef);
        if (!config.persistent) {
            this._mostRecentTransientRipple = rippleRef;
        }
        // Wait for the ripple element to be completely faded in.
        // Once it's faded in, the ripple can be hidden immediately if the mouse is released.
        this._runTimeoutOutsideZone((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
            rippleRef.state = 1 /* VISIBLE */;
            // When the timer runs out while the user has kept their pointer down, we want to
            // keep only the persistent ripples and the latest transient ripple. We do this,
            // because we don't want stacked transient ripples to appear after their enter
            // animation has finished.
            if (!config.persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
                rippleRef.fadeOut();
            }
        }), duration);
        return rippleRef;
    }
    /**
     * Fades out a ripple reference.
     * @param {?} rippleRef
     * @return {?}
     */
    fadeOutRipple(rippleRef) {
        /** @type {?} */
        const wasActive = this._activeRipples.delete(rippleRef);
        if (rippleRef === this._mostRecentTransientRipple) {
            this._mostRecentTransientRipple = null;
        }
        // Clear out the cached bounding rect if we have no more ripples.
        if (!this._activeRipples.size) {
            this._containerRect = null;
        }
        // For ripples that are not active anymore, don't re-run the fade-out animation.
        if (!wasActive) {
            return;
        }
        /** @type {?} */
        const rippleEl = rippleRef.element;
        /** @type {?} */
        const animationConfig = Object.assign(Object.assign({}, defaultRippleAnimationConfig), rippleRef.config.animation);
        rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
        rippleEl.style.opacity = '0';
        rippleRef.state = 2 /* FADING_OUT */;
        // Once the ripple faded out, the ripple can be safely removed from the DOM.
        this._runTimeoutOutsideZone((/**
         * @return {?}
         */
        () => {
            rippleRef.state = 3 /* HIDDEN */;
            (/** @type {?} */ (rippleEl.parentNode)).removeChild(rippleEl);
        }), animationConfig.exitDuration);
    }
    /**
     * Fades out all currently active ripples.
     * @return {?}
     */
    fadeOutAll() {
        this._activeRipples.forEach((/**
         * @param {?} ripple
         * @return {?}
         */
        ripple => ripple.fadeOut()));
    }
    /**
     * Sets up the trigger event listeners
     * @param {?} elementOrElementRef
     * @return {?}
     */
    setupTriggerEvents(elementOrElementRef) {
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceElement"])(elementOrElementRef);
        if (!element || element === this._triggerElement) {
            return;
        }
        // Remove all previously registered event listeners from the trigger element.
        this._removeTriggerEvents();
        this._triggerElement = element;
        this._registerEvents(pointerDownEvents);
    }
    /**
     * Handles all registered events.
     * \@docs-private
     * @param {?} event
     * @return {?}
     */
    handleEvent(event) {
        if (event.type === 'mousedown') {
            this._onMousedown((/** @type {?} */ (event)));
        }
        else if (event.type === 'touchstart') {
            this._onTouchStart((/** @type {?} */ (event)));
        }
        else {
            this._onPointerUp();
        }
        // If pointer-up events haven't been registered yet, do so now.
        // We do this on-demand in order to reduce the total number of event listeners
        // registered by the ripples, which speeds up the rendering time for large UIs.
        if (!this._pointerUpEventsRegistered) {
            this._registerEvents(pointerUpEvents);
            this._pointerUpEventsRegistered = true;
        }
    }
    /**
     * Function being called whenever the trigger is being pressed using mouse.
     * @private
     * @param {?} event
     * @return {?}
     */
    _onMousedown(event) {
        // Screen readers will fire fake mouse events for space/enter. Skip launching a
        // ripple in this case for consistency with the non-screen-reader experience.
        /** @type {?} */
        const isFakeMousedown = Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["isFakeMousedownFromScreenReader"])(event);
        /** @type {?} */
        const isSyntheticEvent = this._lastTouchStartEvent &&
            Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
        if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
            this._isPointerDown = true;
            this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
        }
    }
    /**
     * Function being called whenever the trigger is being pressed using touch.
     * @private
     * @param {?} event
     * @return {?}
     */
    _onTouchStart(event) {
        if (!this._target.rippleDisabled) {
            // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
            // events will launch a second ripple if we don't ignore mouse events for a specific
            // time after a touchstart event.
            this._lastTouchStartEvent = Date.now();
            this._isPointerDown = true;
            // Use `changedTouches` so we skip any touches where the user put
            // their finger down, but used another finger to tap the element again.
            /** @type {?} */
            const touches = event.changedTouches;
            for (let i = 0; i < touches.length; i++) {
                this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
            }
        }
    }
    /**
     * Function being called whenever the trigger is being released.
     * @private
     * @return {?}
     */
    _onPointerUp() {
        if (!this._isPointerDown) {
            return;
        }
        this._isPointerDown = false;
        // Fade-out all ripples that are visible and not persistent.
        this._activeRipples.forEach((/**
         * @param {?} ripple
         * @return {?}
         */
        ripple => {
            // By default, only ripples that are completely visible will fade out on pointer release.
            // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.
            /** @type {?} */
            const isVisible = ripple.state === 1 /* VISIBLE */ ||
                ripple.config.terminateOnPointerUp && ripple.state === 0 /* FADING_IN */;
            if (!ripple.config.persistent && isVisible) {
                ripple.fadeOut();
            }
        }));
    }
    /**
     * Runs a timeout outside of the Angular zone to avoid triggering the change detection.
     * @private
     * @param {?} fn
     * @param {?=} delay
     * @return {?}
     */
    _runTimeoutOutsideZone(fn, delay = 0) {
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => setTimeout(fn, delay)));
    }
    /**
     * Registers event listeners for a given list of events.
     * @private
     * @param {?} eventTypes
     * @return {?}
     */
    _registerEvents(eventTypes) {
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            eventTypes.forEach((/**
             * @param {?} type
             * @return {?}
             */
            (type) => {
                (/** @type {?} */ (this._triggerElement)).addEventListener(type, this, passiveEventOptions);
            }));
        }));
    }
    /**
     * Removes previously registered event listeners from the trigger element.
     * @return {?}
     */
    _removeTriggerEvents() {
        if (this._triggerElement) {
            pointerDownEvents.forEach((/**
             * @param {?} type
             * @return {?}
             */
            (type) => {
                (/** @type {?} */ (this._triggerElement)).removeEventListener(type, this, passiveEventOptions);
            }));
            if (this._pointerUpEventsRegistered) {
                pointerUpEvents.forEach((/**
                 * @param {?} type
                 * @return {?}
                 */
                (type) => {
                    (/** @type {?} */ (this._triggerElement)).removeEventListener(type, this, passiveEventOptions);
                }));
            }
        }
    }
}
if (false) {}
/**
 * Enforces a style recalculation of a DOM element by computing its styles.
 * @param {?} element
 * @return {?}
 */
function enforceStyleRecalculation(element) {
    // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
    // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
    // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
    window.getComputedStyle(element).getPropertyValue('opacity');
}
/**
 * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
 * @param {?} x
 * @param {?} y
 * @param {?} rect
 * @return {?}
 */
function distanceToFurthestCorner(x, y, rect) {
    /** @type {?} */
    const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
    /** @type {?} */
    const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
    return Math.sqrt(distX * distX + distY * distY);
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/ripple/ripple.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Configurable options for `matRipple`.
 * @record
 */
function RippleGlobalOptions() { }
if (false) {}
/**
 * Injection token that can be used to specify the global ripple options.
 * @type {?}
 */
const MAT_RIPPLE_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-ripple-global-options');
class MatRipple {
    /**
     * @param {?} _elementRef
     * @param {?} ngZone
     * @param {?} platform
     * @param {?=} globalOptions
     * @param {?=} _animationMode
     */
    constructor(_elementRef, ngZone, platform, globalOptions, _animationMode) {
        this._elementRef = _elementRef;
        this._animationMode = _animationMode;
        /**
         * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
         * will be the distance from the center of the ripple to the furthest corner of the host element's
         * bounding rectangle.
         */
        this.radius = 0;
        this._disabled = false;
        /**
         * Whether ripple directive is initialized and the input bindings are set.
         */
        this._isInitialized = false;
        this._globalOptions = globalOptions || {};
        this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
    }
    /**
     * Whether click events will not trigger the ripple. Ripples can be still launched manually
     * by using the `launch()` method.
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = value;
        this._setupTriggerEventsIfEnabled();
    }
    /**
     * The element that triggers the ripple when click events are received.
     * Defaults to the directive's host element.
     * @return {?}
     */
    get trigger() { return this._trigger || this._elementRef.nativeElement; }
    /**
     * @param {?} trigger
     * @return {?}
     */
    set trigger(trigger) {
        this._trigger = trigger;
        this._setupTriggerEventsIfEnabled();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._isInitialized = true;
        this._setupTriggerEventsIfEnabled();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._rippleRenderer._removeTriggerEvents();
    }
    /**
     * Fades out all currently showing ripple elements.
     * @return {?}
     */
    fadeOutAll() {
        this._rippleRenderer.fadeOutAll();
    }
    /**
     * Ripple configuration from the directive's input values.
     * \@docs-private Implemented as part of RippleTarget
     * @return {?}
     */
    get rippleConfig() {
        return {
            centered: this.centered,
            radius: this.radius,
            color: this.color,
            animation: Object.assign(Object.assign(Object.assign({}, this._globalOptions.animation), (this._animationMode === 'NoopAnimations' ? { enterDuration: 0, exitDuration: 0 } : {})), this.animation),
            terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
        };
    }
    /**
     * Whether ripples on pointer-down are disabled or not.
     * \@docs-private Implemented as part of RippleTarget
     * @return {?}
     */
    get rippleDisabled() {
        return this.disabled || !!this._globalOptions.disabled;
    }
    /**
     * Sets up the trigger event listeners if ripples are enabled.
     * @private
     * @return {?}
     */
    _setupTriggerEventsIfEnabled() {
        if (!this.disabled && this._isInitialized) {
            this._rippleRenderer.setupTriggerEvents(this.trigger);
        }
    }
    /**
     * Launches a manual ripple at the specified coordinated or just by the ripple config.
     * @param {?} configOrX
     * @param {?=} y
     * @param {?=} config
     * @return {?}
     */
    launch(configOrX, y = 0, config) {
        if (typeof configOrX === 'number') {
            return this._rippleRenderer.fadeInRipple(configOrX, y, Object.assign(Object.assign({}, this.rippleConfig), config));
        }
        else {
            return this._rippleRenderer.fadeInRipple(0, 0, Object.assign(Object.assign({}, this.rippleConfig), configOrX));
        }
    }
}
MatRipple.ɵfac = function MatRipple_Factory(t) { return new (t || MatRipple)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], 8)); };
MatRipple.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatRipple, selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]], hostAttrs: [1, "mat-ripple"], hostVars: 2, hostBindings: function MatRipple_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-ripple-unbounded", ctx.unbounded);
    } }, inputs: { radius: ["matRippleRadius", "radius"], disabled: ["matRippleDisabled", "disabled"], trigger: ["matRippleTrigger", "trigger"], color: ["matRippleColor", "color"], unbounded: ["matRippleUnbounded", "unbounded"], centered: ["matRippleCentered", "centered"], animation: ["matRippleAnimation", "animation"] }, exportAs: ["matRipple"] });
/** @nocollapse */
MatRipple.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_RIPPLE_GLOBAL_OPTIONS,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"],] }] }
];
MatRipple.propDecorators = {
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleColor',] }],
    unbounded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleUnbounded',] }],
    centered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleCentered',] }],
    radius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleRadius',] }],
    animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleAnimation',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleDisabled',] }],
    trigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleTrigger',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRipple, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[mat-ripple], [matRipple]',
                exportAs: 'matRipple',
                host: {
                    'class': 'mat-ripple',
                    '[class.mat-ripple-unbounded]': 'unbounded'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MAT_RIPPLE_GLOBAL_OPTIONS]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleRadius']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleDisabled']
        }], trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleTrigger']
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleColor']
        }], unbounded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleUnbounded']
        }], centered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleCentered']
        }], animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matRippleAnimation']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/ripple/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatRippleModule {
}
MatRippleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatRippleModule });
MatRippleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatRippleModule_Factory(t) { return new (t || MatRippleModule)(); }, imports: [[MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]],
        MatCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatRippleModule, { declarations: function () { return [MatRipple]; }, imports: function () { return [MatCommonModule,
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]]; }, exports: function () { return [MatRipple,
        MatCommonModule]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRippleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"]],
                exports: [MatRipple, MatCommonModule],
                declarations: [MatRipple]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/selection/pseudo-checkbox/pseudo-checkbox.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component that shows a simplified checkbox without including any kind of "real" checkbox.
 * Meant to be used when the checkbox is purely decorative and a large number of them will be
 * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
 * Note that theming is meant to be handled by the parent element, e.g.
 * `mat-primary .mat-pseudo-checkbox`.
 *
 * Note that this component will be completely invisible to screen-reader users. This is *not*
 * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
 * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
 * of more complex components that appropriately handle selected / checked state.
 * \@docs-private
 */
class MatPseudoCheckbox {
    /**
     * @param {?=} _animationMode
     */
    constructor(_animationMode) {
        this._animationMode = _animationMode;
        /**
         * Display state of the checkbox.
         */
        this.state = 'unchecked';
        /**
         * Whether the checkbox is disabled.
         */
        this.disabled = false;
    }
}
MatPseudoCheckbox.ɵfac = function MatPseudoCheckbox_Factory(t) { return new (t || MatPseudoCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], 8)); };
MatPseudoCheckbox.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatPseudoCheckbox, selectors: [["mat-pseudo-checkbox"]], hostAttrs: [1, "mat-pseudo-checkbox"], hostVars: 8, hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, inputs: { state: "state", disabled: "disabled" }, decls: 0, vars: 0, template: function MatPseudoCheckbox_Template(rf, ctx) { }, styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
MatPseudoCheckbox.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"],] }] }
];
MatPseudoCheckbox.propDecorators = {
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPseudoCheckbox, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'mat-pseudo-checkbox',
                template: '',
                host: {
                    'class': 'mat-pseudo-checkbox',
                    '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
                    '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
                    '[class.mat-pseudo-checkbox-disabled]': 'disabled',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
                },
                styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"]
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/selection/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatPseudoCheckboxModule {
}
MatPseudoCheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatPseudoCheckboxModule });
MatPseudoCheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatPseudoCheckboxModule_Factory(t) { return new (t || MatPseudoCheckboxModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatPseudoCheckboxModule, { declarations: [MatPseudoCheckbox], exports: [MatPseudoCheckbox] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPseudoCheckboxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [MatPseudoCheckbox],
                declarations: [MatPseudoCheckbox]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/option/optgroup.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Boilerplate for applying mixins to MatOptgroup.
/**
 * \@docs-private
 */
class MatOptgroupBase {
}
/** @type {?} */
const _MatOptgroupMixinBase = mixinDisabled(MatOptgroupBase);
// Counter for unique group ids.
/** @type {?} */
let _uniqueOptgroupIdCounter = 0;
/**
 * Component that is used to group instances of `mat-option`.
 */
class MatOptgroup extends _MatOptgroupMixinBase {
    constructor() {
        super(...arguments);
        /**
         * Unique id for the underlying label.
         */
        this._labelId = `mat-optgroup-label-${_uniqueOptgroupIdCounter++}`;
    }
}
MatOptgroup.ɵfac = function MatOptgroup_Factory(t) { return ɵMatOptgroup_BaseFactory(t || MatOptgroup); };
MatOptgroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatOptgroup, selectors: [["mat-optgroup"]], hostAttrs: ["role", "group", 1, "mat-optgroup"], hostVars: 4, hostBindings: function MatOptgroup_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-disabled", ctx.disabled.toString())("aria-labelledby", ctx._labelId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-optgroup-disabled", ctx.disabled);
    } }, inputs: { disabled: "disabled", label: "label" }, exportAs: ["matOptgroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 4, vars: 2, consts: [[1, "mat-optgroup-label", 3, "id"]], template: function MatOptgroup_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._labelId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, " ");
    } }, styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"], encapsulation: 2, changeDetection: 0 });
MatOptgroup.propDecorators = {
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
const ɵMatOptgroup_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatOptgroup);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOptgroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-optgroup',
                exportAs: 'matOptgroup',
                template: "<label class=\"mat-optgroup-label\" [id]=\"_labelId\">{{ label }} <ng-content></ng-content></label>\n<ng-content select=\"mat-option, ng-container\"></ng-content>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                inputs: ['disabled'],
                host: {
                    'class': 'mat-optgroup',
                    'role': 'group',
                    '[class.mat-optgroup-disabled]': 'disabled',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.aria-labelledby]': '_labelId'
                },
                styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"]
            }]
    }], null, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/option/option.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Option IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 * @type {?}
 */
let _uniqueIdCounter = 0;
/**
 * Event object emitted by MatOption when selected or deselected.
 */
class MatOptionSelectionChange {
    /**
     * @param {?} source
     * @param {?=} isUserInput
     */
    constructor(source, isUserInput = false) {
        this.source = source;
        this.isUserInput = isUserInput;
    }
}
if (false) {}
/**
 * Describes a parent component that manages a list of options.
 * Contains properties that the options can inherit.
 * \@docs-private
 * @record
 */
function MatOptionParentComponent() { }
if (false) {}
/**
 * Injection token used to provide the parent component to options.
 * @type {?}
 */
const MAT_OPTION_PARENT_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_OPTION_PARENT_COMPONENT');
/**
 * Single option inside of a `<mat-select>` element.
 */
class MatOption {
    /**
     * @param {?} _element
     * @param {?} _changeDetectorRef
     * @param {?} _parent
     * @param {?} group
     */
    constructor(_element, _changeDetectorRef, _parent, group) {
        this._element = _element;
        this._changeDetectorRef = _changeDetectorRef;
        this._parent = _parent;
        this.group = group;
        this._selected = false;
        this._active = false;
        this._disabled = false;
        this._mostRecentViewValue = '';
        /**
         * The unique ID of the option.
         */
        this.id = `mat-option-${_uniqueIdCounter++}`;
        /**
         * Event emitted when the option is selected or deselected.
         */
        // tslint:disable-next-line:no-output-on-prefix
        this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the state of the option changes and any parents have to be notified.
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    /**
     * Whether the wrapping component is in multiple selection mode.
     * @return {?}
     */
    get multiple() { return this._parent && this._parent.multiple; }
    /**
     * Whether or not the option is currently selected.
     * @return {?}
     */
    get selected() { return this._selected; }
    /**
     * Whether the option is disabled.
     * @return {?}
     */
    get disabled() { return (this.group && this.group.disabled) || this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value); }
    /**
     * Whether ripples for the option are disabled.
     * @return {?}
     */
    get disableRipple() { return this._parent && this._parent.disableRipple; }
    /**
     * Whether or not the option is currently active and ready to be selected.
     * An active option displays styles as if it is focused, but the
     * focus is actually retained somewhere else. This comes in handy
     * for components like autocomplete where focus must remain on the input.
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * The displayed value of the option. It is necessary to show the selected option in the
     * select's trigger.
     * @return {?}
     */
    get viewValue() {
        // TODO(kara): Add input property alternative for node envs.
        return (this._getHostElement().textContent || '').trim();
    }
    /**
     * Selects the option.
     * @return {?}
     */
    select() {
        if (!this._selected) {
            this._selected = true;
            this._changeDetectorRef.markForCheck();
            this._emitSelectionChangeEvent();
        }
    }
    /**
     * Deselects the option.
     * @return {?}
     */
    deselect() {
        if (this._selected) {
            this._selected = false;
            this._changeDetectorRef.markForCheck();
            this._emitSelectionChangeEvent();
        }
    }
    /**
     * Sets focus onto this option.
     * @param {?=} _origin
     * @param {?=} options
     * @return {?}
     */
    focus(_origin, options) {
        // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
        // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.
        /** @type {?} */
        const element = this._getHostElement();
        if (typeof element.focus === 'function') {
            element.focus(options);
        }
    }
    /**
     * This method sets display styles on the option to make it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     * @return {?}
     */
    setActiveStyles() {
        if (!this._active) {
            this._active = true;
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * This method removes display styles on the option that made it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     * @return {?}
     */
    setInactiveStyles() {
        if (this._active) {
            this._active = false;
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Gets the label to be used when determining whether the option should be focused.
     * @return {?}
     */
    getLabel() {
        return this.viewValue;
    }
    /**
     * Ensures the option is selected when activated from the keyboard.
     * @param {?} event
     * @return {?}
     */
    _handleKeydown(event) {
        if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ENTER"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["SPACE"]) && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["hasModifierKey"])(event)) {
            this._selectViaInteraction();
            // Prevent the page from scrolling down and form submits.
            event.preventDefault();
        }
    }
    /**
     * `Selects the option while indicating the selection came from the user. Used to
     * determine if the select's view -> model callback should be invoked.`
     * @return {?}
     */
    _selectViaInteraction() {
        if (!this.disabled) {
            this._selected = this.multiple ? !this._selected : true;
            this._changeDetectorRef.markForCheck();
            this._emitSelectionChangeEvent(true);
        }
    }
    /**
     * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
     * attribute from single-selection, unselected options. Including the `aria-selected="false"`
     * attributes adds a significant amount of noise to screen-reader users without providing useful
     * information.
     * @return {?}
     */
    _getAriaSelected() {
        return this.selected || (this.multiple ? false : null);
    }
    /**
     * Returns the correct tabindex for the option depending on disabled state.
     * @return {?}
     */
    _getTabIndex() {
        return this.disabled ? '-1' : '0';
    }
    /**
     * Gets the host DOM element.
     * @return {?}
     */
    _getHostElement() {
        return this._element.nativeElement;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        // Since parent components could be using the option's label to display the selected values
        // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
        // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
        // relatively cheap, however we still limit them only to selected options in order to avoid
        // hitting the DOM too often.
        if (this._selected) {
            /** @type {?} */
            const viewValue = this.viewValue;
            if (viewValue !== this._mostRecentViewValue) {
                this._mostRecentViewValue = viewValue;
                this._stateChanges.next();
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._stateChanges.complete();
    }
    /**
     * Emits the selection change event.
     * @private
     * @param {?=} isUserInput
     * @return {?}
     */
    _emitSelectionChangeEvent(isUserInput = false) {
        this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
    }
}
MatOption.ɵfac = function MatOption_Factory(t) { return new (t || MatOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTION_PARENT_COMPONENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatOptgroup, 8)); };
MatOption.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatOption, selectors: [["mat-option"]], hostAttrs: ["role", "option", 1, "mat-option", "mat-focus-indicator"], hostVars: 12, hostBindings: function MatOption_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatOption_click_HostBindingHandler() { return ctx._selectViaInteraction(); })("keydown", function MatOption_keydown_HostBindingHandler($event) { return ctx._handleKeydown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx._getTabIndex())("aria-selected", ctx._getAriaSelected())("aria-disabled", ctx.disabled.toString());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-selected", ctx.selected)("mat-option-multiple", ctx.multiple)("mat-active", ctx.active)("mat-option-disabled", ctx.disabled);
    } }, inputs: { id: "id", disabled: "disabled", value: "value" }, outputs: { onSelectionChange: "onSelectionChange" }, exportAs: ["matOption"], ngContentSelectors: _c2, decls: 4, vars: 3, consts: [["class", "mat-option-pseudo-checkbox", 3, "state", "disabled", 4, "ngIf"], [1, "mat-option-text"], ["mat-ripple", "", 1, "mat-option-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-option-pseudo-checkbox", 3, "state", "disabled"]], template: function MatOption_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatOption_mat_pseudo_checkbox_0_Template, 1, 2, "mat-pseudo-checkbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], MatRipple,
        MatPseudoCheckbox], styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.cdk-high-contrast-active .mat-option .mat-option-ripple{opacity:.5}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
MatOption.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_OPTION_PARENT_COMPONENT,] }] },
    { type: MatOptgroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
MatOption.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onSelectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOption, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-option',
                exportAs: 'matOption',
                host: {
                    'role': 'option',
                    '[attr.tabindex]': '_getTabIndex()',
                    '[class.mat-selected]': 'selected',
                    '[class.mat-option-multiple]': 'multiple',
                    '[class.mat-active]': 'active',
                    '[id]': 'id',
                    '[attr.aria-selected]': '_getAriaSelected()',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[class.mat-option-disabled]': 'disabled',
                    '(click)': '_selectViaInteraction()',
                    '(keydown)': '_handleKeydown($event)',
                    'class': 'mat-option mat-focus-indicator'
                },
                template: "<mat-pseudo-checkbox *ngIf=\"multiple\" class=\"mat-option-pseudo-checkbox\"\n    [state]=\"selected ? 'checked' : 'unchecked'\" [disabled]=\"disabled\"></mat-pseudo-checkbox>\n\n<span class=\"mat-option-text\"><ng-content></ng-content></span>\n\n<div class=\"mat-option-ripple\" mat-ripple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disabled || disableRipple\">\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.cdk-high-contrast-active .mat-option .mat-option-ripple{opacity:.5}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MAT_OPTION_PARENT_COMPONENT]
            }] }, { type: MatOptgroup, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onSelectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}
/**
 * Counts the amount of option group labels that precede the specified option.
 * \@docs-private
 * @param {?} optionIndex Index of the option at which to start counting.
 * @param {?} options Flat list of all of the options.
 * @param {?} optionGroups Flat list of all of the option groups.
 * @return {?}
 */
function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
    if (optionGroups.length) {
        /** @type {?} */
        let optionsArray = options.toArray();
        /** @type {?} */
        let groups = optionGroups.toArray();
        /** @type {?} */
        let groupCounter = 0;
        for (let i = 0; i < optionIndex + 1; i++) {
            if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
                groupCounter++;
            }
        }
        return groupCounter;
    }
    return 0;
}
/**
 * Determines the position to which to scroll a panel in order for an option to be into view.
 * \@docs-private
 * @param {?} optionIndex Index of the option to be scrolled into the view.
 * @param {?} optionHeight Height of the options.
 * @param {?} currentScrollPosition Current scroll position of the panel.
 * @param {?} panelHeight Height of the panel.
 * @return {?}
 */
function _getOptionScrollPosition(optionIndex, optionHeight, currentScrollPosition, panelHeight) {
    /** @type {?} */
    const optionOffset = optionIndex * optionHeight;
    if (optionOffset < currentScrollPosition) {
        return optionOffset;
    }
    if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
        return Math.max(0, optionOffset - panelHeight + optionHeight);
    }
    return currentScrollPosition;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/option/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatOptionModule {
}
MatOptionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatOptionModule });
MatOptionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatOptionModule_Factory(t) { return new (t || MatOptionModule)(); }, imports: [[MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], MatPseudoCheckboxModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatOptionModule, { declarations: function () { return [MatOption,
        MatOptgroup]; }, imports: function () { return [MatRippleModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        MatPseudoCheckboxModule]; }, exports: function () { return [MatOption,
        MatOptgroup]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOptionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], MatPseudoCheckboxModule],
                exports: [MatOption, MatOptgroup],
                declarations: [MatOption, MatOptgroup]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/label/label-options.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * InjectionToken that can be used to specify the global label options.
 * @deprecated Use `MAT_FORM_FIELD_DEFAULT_OPTIONS` injection token from
 *     `\@angular/material/form-field` instead.
 * \@breaking-change 11.0.0
 * @type {?}
 */
const MAT_LABEL_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-label-global-options');
/**
 * Configurable options for floating labels.
 * @deprecated Use `MatFormFieldDefaultOptions` from `\@angular/material/form-field` instead.
 * \@breaking-change 11.0.0
 * @record
 */
function LabelOptions() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/month-constants.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * When constructing a Date, the month is zero-based. This can be confusing, since people are
 * used to seeing them one-based. So we create these aliases to make writing the tests easier.
 * \@docs-private
 * \@breaking-change 8.0.0 Remove this with V8 since it was only targeted for testing.
 * @type {?}
 */
const JAN = 0;
/** @type {?} */
const FEB = 1;
/** @type {?} */
const MAR = 2;
/** @type {?} */
const APR = 3;
/** @type {?} */
const MAY = 4;
/** @type {?} */
const JUN = 5;
/** @type {?} */
const JUL = 6;
/** @type {?} */
const AUG = 7;
/** @type {?} */
const SEP = 8;
/** @type {?} */
const OCT = 9;
/** @type {?} */
const NOV = 10;
/** @type {?} */
const DEC = 11;

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/core/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=core.js.map

/***/ }),

/***/ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** C:/Users/n_sol/dev/monorepo-wallet/omnichannel2-commercial-plataform-wallet-management/node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY, MatProgressSpinner, MatProgressSpinnerModule, MatSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS", function() { return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY", function() { return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatProgressSpinner", function() { return MatProgressSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatProgressSpinnerModule", function() { return MatProgressSpinnerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSpinner", function() { return MatSpinner; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");







/**
 * @fileoverview added by tsickle
 * Generated from: src/material/progress-spinner/progress-spinner.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Base reference size of the spinner.
 * \@docs-private
 * @type {?}
 */




function MatProgressSpinner__svg_circle_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-name", "mat-progress-spinner-stroke-rotate-" + ctx_r19.diameter)("stroke-dashoffset", ctx_r19._strokeDashOffset, "px")("stroke-dasharray", ctx_r19._strokeCircumference, "px")("stroke-width", ctx_r19._circleStrokeWidth, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r19._circleRadius);
} }
function MatProgressSpinner__svg_circle_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dashoffset", ctx_r20._strokeDashOffset, "px")("stroke-dasharray", ctx_r20._strokeCircumference, "px")("stroke-width", ctx_r20._circleStrokeWidth, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r20._circleRadius);
} }
function MatSpinner__svg_circle_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-name", "mat-progress-spinner-stroke-rotate-" + ctx_r21.diameter)("stroke-dashoffset", ctx_r21._strokeDashOffset, "px")("stroke-dasharray", ctx_r21._strokeCircumference, "px")("stroke-width", ctx_r21._circleStrokeWidth, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r21._circleRadius);
} }
function MatSpinner__svg_circle_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dashoffset", ctx_r22._strokeDashOffset, "px")("stroke-dasharray", ctx_r22._strokeCircumference, "px")("stroke-width", ctx_r22._circleStrokeWidth, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r22._circleRadius);
} }
const BASE_SIZE = 100;
/**
 * Base reference stroke width of the spinner.
 * \@docs-private
 * @type {?}
 */
const BASE_STROKE_WIDTH = 10;
// Boilerplate for applying mixins to MatProgressSpinner.
/**
 * \@docs-private
 */
class MatProgressSpinnerBase {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
if (false) {}
/** @type {?} */
const _MatProgressSpinnerMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(MatProgressSpinnerBase, 'primary');
/**
 * Default `mat-progress-spinner` options that can be overridden.
 * @record
 */
function MatProgressSpinnerDefaultOptions() { }
if (false) {}
/**
 * Injection token to be used to override the default options for `mat-progress-spinner`.
 * @type {?}
 */
const MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-progress-spinner-default-options', {
    providedIn: 'root',
    factory: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY() {
    return { diameter: BASE_SIZE };
}
// .0001 percentage difference is necessary in order to avoid unwanted animation frames
// for example because the animation duration is 4 seconds, .1% accounts to 4ms
// which are enough to see the flicker described in
// https://github.com/angular/components/issues/8984
/** @type {?} */
const INDETERMINATE_ANIMATION_TEMPLATE = `
 @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {
    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }
    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }
    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }
    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }

    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }
    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }
    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }
    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }

    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }
    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }
    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }
    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }

    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }
    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }
    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }
    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }
  }
`;
/**
 * `<mat-progress-spinner>` component.
 */
class MatProgressSpinner extends _MatProgressSpinnerMixinBase {
    /**
     * @param {?} _elementRef
     * @param {?} platform
     * @param {?} _document
     * @param {?} animationMode
     * @param {?=} defaults
     */
    constructor(_elementRef, platform, _document, animationMode, defaults) {
        super(_elementRef);
        this._elementRef = _elementRef;
        this._document = _document;
        this._diameter = BASE_SIZE;
        this._value = 0;
        this._fallbackAnimation = false;
        /**
         * Mode of the progress circle
         */
        this.mode = 'determinate';
        /** @type {?} */
        const trackedDiameters = MatProgressSpinner._diameters;
        // The base size is already inserted via the component's structural styles. We still
        // need to track it so we don't end up adding the same styles again.
        if (!trackedDiameters.has(_document.head)) {
            trackedDiameters.set(_document.head, new Set([BASE_SIZE]));
        }
        this._fallbackAnimation = platform.EDGE || platform.TRIDENT;
        this._noopAnimations = animationMode === 'NoopAnimations' &&
            (!!defaults && !defaults._forceAnimations);
        if (defaults) {
            if (defaults.diameter) {
                this.diameter = defaults.diameter;
            }
            if (defaults.strokeWidth) {
                this.strokeWidth = defaults.strokeWidth;
            }
        }
    }
    /**
     * The diameter of the progress spinner (will set width and height of svg).
     * @return {?}
     */
    get diameter() { return this._diameter; }
    /**
     * @param {?} size
     * @return {?}
     */
    set diameter(size) {
        this._diameter = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(size);
        // If this is set before `ngOnInit`, the style root may not have been resolved yet.
        if (!this._fallbackAnimation && this._styleRoot) {
            this._attachStyleNode();
        }
    }
    /**
     * Stroke width of the progress spinner.
     * @return {?}
     */
    get strokeWidth() {
        return this._strokeWidth || this.diameter / 10;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set strokeWidth(value) {
        this._strokeWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(value);
    }
    /**
     * Value of the progress circle.
     * @return {?}
     */
    get value() {
        return this.mode === 'determinate' ? this._value : 0;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set value(newValue) {
        this._value = Math.max(0, Math.min(100, Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(newValue)));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const element = this._elementRef.nativeElement;
        // Note that we need to look up the root node in ngOnInit, rather than the constructor, because
        // Angular seems to create the element outside the shadow root and then moves it inside, if the
        // node is inside an `ngIf` and a ShadowDom-encapsulated component.
        this._styleRoot = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["_getShadowRoot"])(element) || this._document.head;
        this._attachStyleNode();
        // On IE and Edge, we can't animate the `stroke-dashoffset`
        // reliably so we fall back to a non-spec animation.
        /** @type {?} */
        const animationClass = `mat-progress-spinner-indeterminate${this._fallbackAnimation ? '-fallback' : ''}-animation`;
        element.classList.add(animationClass);
    }
    /**
     * The radius of the spinner, adjusted for stroke width.
     * @return {?}
     */
    get _circleRadius() {
        return (this.diameter - BASE_STROKE_WIDTH) / 2;
    }
    /**
     * The view box of the spinner's svg element.
     * @return {?}
     */
    get _viewBox() {
        /** @type {?} */
        const viewBox = this._circleRadius * 2 + this.strokeWidth;
        return `0 0 ${viewBox} ${viewBox}`;
    }
    /**
     * The stroke circumference of the svg circle.
     * @return {?}
     */
    get _strokeCircumference() {
        return 2 * Math.PI * this._circleRadius;
    }
    /**
     * The dash offset of the svg circle.
     * @return {?}
     */
    get _strokeDashOffset() {
        if (this.mode === 'determinate') {
            return this._strokeCircumference * (100 - this._value) / 100;
        }
        // In fallback mode set the circle to 80% and rotate it with CSS.
        if (this._fallbackAnimation && this.mode === 'indeterminate') {
            return this._strokeCircumference * 0.2;
        }
        return null;
    }
    /**
     * Stroke width of the circle in percent.
     * @return {?}
     */
    get _circleStrokeWidth() {
        return this.strokeWidth / this.diameter * 100;
    }
    /**
     * Dynamically generates a style tag containing the correct animation for this diameter.
     * @private
     * @return {?}
     */
    _attachStyleNode() {
        /** @type {?} */
        const styleRoot = this._styleRoot;
        /** @type {?} */
        const currentDiameter = this._diameter;
        /** @type {?} */
        const diameters = MatProgressSpinner._diameters;
        /** @type {?} */
        let diametersForElement = diameters.get(styleRoot);
        if (!diametersForElement || !diametersForElement.has(currentDiameter)) {
            /** @type {?} */
            const styleTag = this._document.createElement('style');
            styleTag.setAttribute('mat-spinner-animation', currentDiameter + '');
            styleTag.textContent = this._getAnimationText();
            styleRoot.appendChild(styleTag);
            if (!diametersForElement) {
                diametersForElement = new Set();
                diameters.set(styleRoot, diametersForElement);
            }
            diametersForElement.add(currentDiameter);
        }
    }
    /**
     * Generates animation styles adjusted for the spinner's diameter.
     * @private
     * @return {?}
     */
    _getAnimationText() {
        return INDETERMINATE_ANIMATION_TEMPLATE
            // Animation should begin at 5% and end at 80%
            .replace(/START_VALUE/g, `${0.95 * this._strokeCircumference}`)
            .replace(/END_VALUE/g, `${0.2 * this._strokeCircumference}`)
            .replace(/DIAMETER/g, `${this.diameter}`);
    }
}
MatProgressSpinner.ɵfac = function MatProgressSpinner_Factory(t) { return new (t || MatProgressSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS)); };
MatProgressSpinner.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatProgressSpinner, selectors: [["mat-progress-spinner"]], hostAttrs: ["role", "progressbar", 1, "mat-progress-spinner"], hostVars: 10, hostBindings: function MatProgressSpinner_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuemin", ctx.mode === "determinate" ? 0 : null)("aria-valuemax", ctx.mode === "determinate" ? 100 : null)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._noopAnimations);
    } }, inputs: { color: "color", mode: "mode", diameter: "diameter", strokeWidth: "strokeWidth", value: "value" }, exportAs: ["matProgressSpinner"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 8, consts: [["preserveAspectRatio", "xMidYMid meet", "focusable", "false", 3, "ngSwitch"], ["cx", "50%", "cy", "50%", 3, "animation-name", "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%", 3, "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%"]], template: function MatProgressSpinner_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatProgressSpinner__svg_circle_1_Template, 1, 9, "circle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatProgressSpinner__svg_circle_2_Template, 1, 7, "circle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode === "indeterminate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx._viewBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"]], styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"], encapsulation: 2, changeDetection: 0 });
/**
 * Tracks diameters of existing instances to de-dupe generated styles (default d = 100).
 * We need to keep track of which elements the diameters were attached to, because for
 * elements in the Shadow DOM the style tags are attached to the shadow root, rather
 * than the document head.
 */
MatProgressSpinner._diameters = new WeakMap();
/** @nocollapse */
MatProgressSpinner.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,] }] }
];
MatProgressSpinner.propDecorators = {
    diameter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    strokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressSpinner, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-progress-spinner',
                exportAs: 'matProgressSpinner',
                host: {
                    'role': 'progressbar',
                    'class': 'mat-progress-spinner',
                    '[class._mat-animation-noopable]': `_noopAnimations`,
                    '[style.width.px]': 'diameter',
                    '[style.height.px]': 'diameter',
                    '[attr.aria-valuemin]': 'mode === "determinate" ? 0 : null',
                    '[attr.aria-valuemax]': 'mode === "determinate" ? 100 : null',
                    '[attr.aria-valuenow]': 'mode === "determinate" ? value : null',
                    '[attr.mode]': 'mode'
                },
                inputs: ['color'],
                template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the mat-progress-spinner\n  element containing the SVG. `focusable=\"false\"` prevents IE from allowing the user to\n  tab into the SVG element.\n-->\n\n<svg\n  [style.width.px]=\"diameter\"\n  [style.height.px]=\"diameter\"\n  [attr.viewBox]=\"_viewBox\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\"\n  [ngSwitch]=\"mode === 'indeterminate'\">\n\n  <!--\n    Technically we can reuse the same `circle` element, however Safari has an issue that breaks\n    the SVG rendering in determinate mode, after switching between indeterminate and determinate.\n    Using a different element avoids the issue. An alternative to this is adding `display: none`\n    for a split second and then removing it when switching between modes, but it's hard to know\n    for how long to hide the element and it can cause the UI to blink.\n  -->\n  <circle\n    *ngSwitchCase=\"true\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_circleRadius\"\n    [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\"\n    [style.stroke-dashoffset.px]=\"_strokeDashOffset\"\n    [style.stroke-dasharray.px]=\"_strokeCircumference\"\n    [style.stroke-width.%]=\"_circleStrokeWidth\"></circle>\n\n  <circle\n    *ngSwitchCase=\"false\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_circleRadius\"\n    [style.stroke-dashoffset.px]=\"_strokeDashOffset\"\n    [style.stroke-dasharray.px]=\"_strokeCircumference\"\n    [style.stroke-width.%]=\"_circleStrokeWidth\"></circle>\n</svg>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
            }] }]; }, { mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], diameter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], strokeWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}
/**
 * `<mat-spinner>` component.
 *
 * This is a component definition to be used as a convenience reference to create an
 * indeterminate `<mat-progress-spinner>` instance.
 */
class MatSpinner extends MatProgressSpinner {
    /**
     * @param {?} elementRef
     * @param {?} platform
     * @param {?} document
     * @param {?} animationMode
     * @param {?=} defaults
     */
    constructor(elementRef, platform, document, animationMode, defaults) {
        super(elementRef, platform, document, animationMode, defaults);
        this.mode = 'indeterminate';
    }
}
MatSpinner.ɵfac = function MatSpinner_Factory(t) { return new (t || MatSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS)); };
MatSpinner.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatSpinner, selectors: [["mat-spinner"]], hostAttrs: ["role", "progressbar", "mode", "indeterminate", 1, "mat-spinner", "mat-progress-spinner"], hostVars: 6, hostBindings: function MatSpinner_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._noopAnimations);
    } }, inputs: { color: "color" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 8, consts: [["preserveAspectRatio", "xMidYMid meet", "focusable", "false", 3, "ngSwitch"], ["cx", "50%", "cy", "50%", 3, "animation-name", "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%", 3, "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%"]], template: function MatSpinner_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatSpinner__svg_circle_1_Template, 1, 9, "circle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatSpinner__svg_circle_2_Template, 1, 7, "circle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode === "indeterminate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx._viewBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"]], styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
MatSpinner.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSpinner, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-spinner',
                host: {
                    'role': 'progressbar',
                    'mode': 'indeterminate',
                    'class': 'mat-spinner mat-progress-spinner',
                    '[class._mat-animation-noopable]': `_noopAnimations`,
                    '[style.width.px]': 'diameter',
                    '[style.height.px]': 'diameter'
                },
                inputs: ['color'],
                template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the mat-progress-spinner\n  element containing the SVG. `focusable=\"false\"` prevents IE from allowing the user to\n  tab into the SVG element.\n-->\n\n<svg\n  [style.width.px]=\"diameter\"\n  [style.height.px]=\"diameter\"\n  [attr.viewBox]=\"_viewBox\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\"\n  [ngSwitch]=\"mode === 'indeterminate'\">\n\n  <!--\n    Technically we can reuse the same `circle` element, however Safari has an issue that breaks\n    the SVG rendering in determinate mode, after switching between indeterminate and determinate.\n    Using a different element avoids the issue. An alternative to this is adding `display: none`\n    for a split second and then removing it when switching between modes, but it's hard to know\n    for how long to hide the element and it can cause the UI to blink.\n  -->\n  <circle\n    *ngSwitchCase=\"true\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_circleRadius\"\n    [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + diameter\"\n    [style.stroke-dashoffset.px]=\"_strokeDashOffset\"\n    [style.stroke-dasharray.px]=\"_strokeCircumference\"\n    [style.stroke-width.%]=\"_circleStrokeWidth\"></circle>\n\n  <circle\n    *ngSwitchCase=\"false\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_circleRadius\"\n    [style.stroke-dashoffset.px]=\"_strokeDashOffset\"\n    [style.stroke-dasharray.px]=\"_strokeCircumference\"\n    [style.stroke-width.%]=\"_circleStrokeWidth\"></circle>\n</svg>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
            }] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/progress-spinner/progress-spinner-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatProgressSpinnerModule {
}
MatProgressSpinnerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatProgressSpinnerModule });
MatProgressSpinnerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatProgressSpinnerModule_Factory(t) { return new (t || MatProgressSpinnerModule)(); }, imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatProgressSpinnerModule, { declarations: function () { return [MatProgressSpinner,
        MatSpinner]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [MatProgressSpinner,
        MatSpinner,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressSpinnerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [
                    MatProgressSpinner,
                    MatSpinner,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]
                ],
                declarations: [
                    MatProgressSpinner,
                    MatSpinner
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/progress-spinner/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=progress-spinner.js.map

/***/ }),

/***/ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js":
/*!************************************************************************************************************************************************************!*\
  !*** C:/Users/n_sol/dev/monorepo-wallet/omnichannel2-commercial-plataform-wallet-management/node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js ***!
  \************************************************************************************************************************************************************/
/*! exports provided: MatCell, MatCellDef, MatColumnDef, MatFooterCell, MatFooterCellDef, MatFooterRow, MatFooterRowDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable, MatTableDataSource, MatTableModule, MatTextColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCell", function() { return MatCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCellDef", function() { return MatCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatColumnDef", function() { return MatColumnDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterCell", function() { return MatFooterCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterCellDef", function() { return MatFooterCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterRow", function() { return MatFooterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterRowDef", function() { return MatFooterRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderCell", function() { return MatHeaderCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderCellDef", function() { return MatHeaderCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderRow", function() { return MatHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderRowDef", function() { return MatHeaderRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRow", function() { return MatRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRowDef", function() { return MatRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTable", function() { return MatTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableDataSource", function() { return MatTableDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableModule", function() { return MatTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTextColumn", function() { return MatTextColumn; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");







/**
 * @fileoverview added by tsickle
 * Generated from: src/material/table/table.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Wrapper for the CdkTable with Material design styles.
 * @template T
 */



const _c0 = [[["caption"]]];
const _c1 = ["caption"];
function MatTextColumn_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r6.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.headerText, " ");
} }
function MatTextColumn_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r7.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.dataAccessor(data_r8, ctx_r7.name), " ");
} }
class MatTable extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"] {
    constructor() {
        super(...arguments);
        /**
         * Overrides the sticky CSS class set by the `CdkTable`.
         */
        this.stickyCssClass = 'mat-table-sticky';
    }
}
MatTable.ɵfac = function MatTable_Factory(t) { return ɵMatTable_BaseFactory(t || MatTable); };
MatTable.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatTable, selectors: [["mat-table"], ["table", "mat-table", ""]], hostAttrs: [1, "mat-table"], exportAs: ["matTable"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"], useExisting: MatTable },
            { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE"], useExisting: MatTable }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 4, vars: 0, consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["footerRowOutlet", ""]], template: function MatTable_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](3, 2);
    } }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["HeaderRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["FooterRowOutlet"]], styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type,[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type,[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}\n"], encapsulation: 2 });
const ɵMatTable_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTable);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-table, table[mat-table]',
                exportAs: 'matTable',
                template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE_TEMPLATE"],
                host: {
                    'class': 'mat-table'
                },
                providers: [
                    { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"], useExisting: MatTable },
                    { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE"], useExisting: MatTable }
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
                styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type,[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type,[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}\n"]
            }]
    }], null, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/table/cell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Cell definition for the mat-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
class MatCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"] {
}
MatCellDef.ɵfac = function MatCellDef_Factory(t) { return ɵMatCellDef_BaseFactory(t || MatCellDef); };
MatCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCellDef, selectors: [["", "matCellDef", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"], useExisting: MatCellDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCellDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matCellDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"], useExisting: MatCellDef }]
            }]
    }], null, null); })();
/**
 * Header cell definition for the mat-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
class MatHeaderCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"] {
}
MatHeaderCellDef.ɵfac = function MatHeaderCellDef_Factory(t) { return ɵMatHeaderCellDef_BaseFactory(t || MatHeaderCellDef); };
MatHeaderCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatHeaderCellDef, selectors: [["", "matHeaderCellDef", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"], useExisting: MatHeaderCellDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatHeaderCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderCellDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matHeaderCellDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"], useExisting: MatHeaderCellDef }]
            }]
    }], null, null); })();
/**
 * Footer cell definition for the mat-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
class MatFooterCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"] {
}
MatFooterCellDef.ɵfac = function MatFooterCellDef_Factory(t) { return ɵMatFooterCellDef_BaseFactory(t || MatFooterCellDef); };
MatFooterCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatFooterCellDef, selectors: [["", "matFooterCellDef", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"], useExisting: MatFooterCellDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatFooterCellDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterCellDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matFooterCellDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"], useExisting: MatFooterCellDef }]
            }]
    }], null, null); })();
/**
 * Column definition for the mat-table.
 * Defines a set of cells available for a table column.
 */
class MatColumnDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"] {
}
MatColumnDef.ɵfac = function MatColumnDef_Factory(t) { return ɵMatColumnDef_BaseFactory(t || MatColumnDef); };
MatColumnDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatColumnDef, selectors: [["", "matColumnDef", ""]], inputs: { sticky: "sticky", name: ["matColumnDef", "name"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"], useExisting: MatColumnDef },
            { provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: MatColumnDef }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
MatColumnDef.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matColumnDef',] }]
};
const ɵMatColumnDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatColumnDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatColumnDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matColumnDef]',
                inputs: ['sticky'],
                providers: [
                    { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"], useExisting: MatColumnDef },
                    { provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: MatColumnDef }
                ]
            }]
    }], null, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matColumnDef']
        }] }); })();
if (false) {}
/**
 * Header cell template container that adds the right classes and role.
 */
class MatHeaderCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCell"] {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
        elementRef.nativeElement.classList.add(`mat-column-${columnDef.cssClassFriendlyName}`);
    }
}
MatHeaderCell.ɵfac = function MatHeaderCell_Factory(t) { return new (t || MatHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
MatHeaderCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatHeaderCell, selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "mat-header-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
MatHeaderCell.ctorParameters = () => [
    { type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-header-cell, th[mat-header-cell]',
                host: {
                    'class': 'mat-header-cell',
                    'role': 'columnheader'
                }
            }]
    }], function () { return [{ type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();
/**
 * Footer cell template container that adds the right classes and role.
 */
class MatFooterCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCell"] {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
        elementRef.nativeElement.classList.add(`mat-column-${columnDef.cssClassFriendlyName}`);
    }
}
MatFooterCell.ɵfac = function MatFooterCell_Factory(t) { return new (t || MatFooterCell)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
MatFooterCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatFooterCell, selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]], hostAttrs: ["role", "gridcell", 1, "mat-footer-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
MatFooterCell.ctorParameters = () => [
    { type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-footer-cell, td[mat-footer-cell]',
                host: {
                    'class': 'mat-footer-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();
/**
 * Cell template container that adds the right classes and role.
 */
class MatCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCell"] {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
        elementRef.nativeElement.classList.add(`mat-column-${columnDef.cssClassFriendlyName}`);
    }
}
MatCell.ɵfac = function MatCell_Factory(t) { return new (t || MatCell)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
MatCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCell, selectors: [["mat-cell"], ["td", "mat-cell", ""]], hostAttrs: ["role", "gridcell", 1, "mat-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
MatCell.ctorParameters = () => [
    { type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-cell, td[mat-cell]',
                host: {
                    'class': 'mat-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/table/row.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Header row definition for the mat-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
class MatHeaderRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"] {
}
MatHeaderRowDef.ɵfac = function MatHeaderRowDef_Factory(t) { return ɵMatHeaderRowDef_BaseFactory(t || MatHeaderRowDef); };
MatHeaderRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatHeaderRowDef, selectors: [["", "matHeaderRowDef", ""]], inputs: { columns: ["matHeaderRowDef", "columns"], sticky: ["matHeaderRowDefSticky", "sticky"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"], useExisting: MatHeaderRowDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatHeaderRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRowDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matHeaderRowDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"], useExisting: MatHeaderRowDef }],
                inputs: ['columns: matHeaderRowDef', 'sticky: matHeaderRowDefSticky']
            }]
    }], null, null); })();
if (false) {}
/**
 * Footer row definition for the mat-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
class MatFooterRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"] {
}
MatFooterRowDef.ɵfac = function MatFooterRowDef_Factory(t) { return ɵMatFooterRowDef_BaseFactory(t || MatFooterRowDef); };
MatFooterRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatFooterRowDef, selectors: [["", "matFooterRowDef", ""]], inputs: { columns: ["matFooterRowDef", "columns"], sticky: ["matFooterRowDefSticky", "sticky"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"], useExisting: MatFooterRowDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatFooterRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRowDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matFooterRowDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"], useExisting: MatFooterRowDef }],
                inputs: ['columns: matFooterRowDef', 'sticky: matFooterRowDefSticky']
            }]
    }], null, null); })();
if (false) {}
/**
 * Data row definition for the mat-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 * @template T
 */
class MatRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"] {
}
MatRowDef.ɵfac = function MatRowDef_Factory(t) { return ɵMatRowDef_BaseFactory(t || MatRowDef); };
MatRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatRowDef, selectors: [["", "matRowDef", ""]], inputs: { columns: ["matRowDefColumns", "columns"], when: ["matRowDefWhen", "when"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"], useExisting: MatRowDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatRowDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRowDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matRowDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"], useExisting: MatRowDef }],
                inputs: ['columns: matRowDefColumns', 'when: matRowDefWhen']
            }]
    }], null, null); })();
/**
 * Header template container that contains the cell outlet. Adds the right class and role.
 */
class MatHeaderRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"] {
}
MatHeaderRow.ɵfac = function MatHeaderRow_Factory(t) { return ɵMatHeaderRow_BaseFactory(t || MatHeaderRow); };
MatHeaderRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatHeaderRow, selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]], hostAttrs: ["role", "row", 1, "mat-header-row"], exportAs: ["matHeaderRow"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"], useExisting: MatHeaderRow }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatHeaderRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
    } }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]], encapsulation: 2 });
const ɵMatHeaderRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRow);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-header-row, tr[mat-header-row]',
                template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
                host: {
                    'class': 'mat-header-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                exportAs: 'matHeaderRow',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"], useExisting: MatHeaderRow }]
            }]
    }], null, null); })();
/**
 * Footer template container that contains the cell outlet. Adds the right class and role.
 */
class MatFooterRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"] {
}
MatFooterRow.ɵfac = function MatFooterRow_Factory(t) { return ɵMatFooterRow_BaseFactory(t || MatFooterRow); };
MatFooterRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatFooterRow, selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]], hostAttrs: ["role", "row", 1, "mat-footer-row"], exportAs: ["matFooterRow"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"], useExisting: MatFooterRow }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatFooterRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
    } }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]], encapsulation: 2 });
const ɵMatFooterRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRow);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-footer-row, tr[mat-footer-row]',
                template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
                host: {
                    'class': 'mat-footer-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                exportAs: 'matFooterRow',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"], useExisting: MatFooterRow }]
            }]
    }], null, null); })();
/**
 * Data row template container that contains the cell outlet. Adds the right class and role.
 */
class MatRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"] {
}
MatRow.ɵfac = function MatRow_Factory(t) { return ɵMatRow_BaseFactory(t || MatRow); };
MatRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatRow, selectors: [["mat-row"], ["tr", "mat-row", ""]], hostAttrs: ["role", "row", 1, "mat-row"], exportAs: ["matRow"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"], useExisting: MatRow }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
    } }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]], encapsulation: 2 });
const ɵMatRow_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRow);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-row, tr[mat-row]',
                template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
                host: {
                    'class': 'mat-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                exportAs: 'matRow',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"], useExisting: MatRow }]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/table/text-column.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 * @template T
 */
class MatTextColumn extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTextColumn"] {
}
MatTextColumn.ɵfac = function MatTextColumn_Factory(t) { return ɵMatTextColumn_BaseFactory(t || MatTextColumn); };
MatTextColumn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatTextColumn, selectors: [["mat-text-column"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 0, consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]], template: function MatTextColumn_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatTextColumn_th_1_Template, 2, 3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTextColumn_td_2_Template, 2, 3, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } }, directives: [MatColumnDef,
        MatHeaderCellDef,
        MatCellDef,
        MatHeaderCell,
        MatCell], encapsulation: 2 });
const ɵMatTextColumn_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTextColumn);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTextColumn, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-text-column',
                template: `
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td mat-cell *matCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                // Change detection is intentionally not set to OnPush. This component's template will be provided
                // to the table to be inserted into its view. This is problematic when change detection runs since
                // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
                // mean's the template in the table's view will not have the updated value (and in fact will cause
                // an ExpressionChangedAfterItHasBeenCheckedError).
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/table/table-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXPORTED_DECLARATIONS = [
    // Table
    MatTable,
    // Template defs
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatRowDef,
    MatFooterCellDef,
    MatFooterRowDef,
    // Cell directives
    MatHeaderCell,
    MatCell,
    MatFooterCell,
    // Row directives
    MatHeaderRow,
    MatRow,
    MatFooterRow,
    MatTextColumn,
];
class MatTableModule {
}
MatTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatTableModule });
MatTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatTableModule_Factory(t) { return new (t || MatTableModule)(); }, imports: [[
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
        ],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatTableModule, { declarations: function () { return [MatTable,
        MatHeaderCellDef,
        MatHeaderRowDef,
        MatColumnDef,
        MatCellDef,
        MatRowDef,
        MatFooterCellDef,
        MatFooterRowDef,
        MatHeaderCell,
        MatCell,
        MatFooterCell,
        MatHeaderRow,
        MatRow,
        MatFooterRow,
        MatTextColumn]; }, imports: function () { return [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]; }, exports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
        MatTable,
        MatHeaderCellDef,
        MatHeaderRowDef,
        MatColumnDef,
        MatCellDef,
        MatRowDef,
        MatFooterCellDef,
        MatFooterRowDef,
        MatHeaderCell,
        MatCell,
        MatFooterCell,
        MatHeaderRow,
        MatRow,
        MatFooterRow,
        MatTextColumn]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                ],
                exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], EXPORTED_DECLARATIONS],
                declarations: EXPORTED_DECLARATIONS
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/table/table-data-source.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Corresponds to `Number.MAX_SAFE_INTEGER`. Moved out into a variable here due to
 * flaky browser support and the value not being defined in Closure's typings.
 * @type {?}
 */
const MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Data source that accepts a client-side data array and includes native support of filtering,
 * sorting (using MatSort), and pagination (using MatPaginator).
 *
 * Allows for sort customization by overriding sortingDataAccessor, which defines how data
 * properties are accessed. Also allows for filter customization by overriding filterTermAccessor,
 * which defines how row data is converted to a string for filter matching.
 *
 * **Note:** This class is meant to be a simple data source to help you get started. As such
 * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
 * interactions. If your app needs to support more advanced use cases, consider implementing your
 * own `DataSource`.
 * @template T
 */
class MatTableDataSource extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataSource"] {
    /**
     * @param {?=} initialData
     */
    constructor(initialData = []) {
        super();
        /**
         * Stream emitting render data to the table (depends on ordered data changes).
         */
        this._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        /**
         * Stream that emits when a new filter string is set on the data source.
         */
        this._filter = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
        /**
         * Used to react to internal changes of the paginator that are made by the data source itself.
         */
        this._internalPageChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /**
         * Subscription to the changes that should trigger an update to the table's rendered rows, such
         * as filtering, sorting, pagination, or base data changes.
         */
        this._renderChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Data accessor function that is used for accessing data properties for sorting through
         * the default sortData function.
         * This default function assumes that the sort header IDs (which defaults to the column name)
         * matches the data's properties (e.g. column Xyz represents data['Xyz']).
         * May be set to a custom function for different behavior.
         * @param data Data object that is being accessed.
         * @param sortHeaderId The name of the column that represents the data.
         */
        this.sortingDataAccessor = (/**
         * @param {?} data
         * @param {?} sortHeaderId
         * @return {?}
         */
        (data, sortHeaderId) => {
            /** @type {?} */
            const value = ((/** @type {?} */ (data)))[sortHeaderId];
            if (Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["_isNumberValue"])(value)) {
                /** @type {?} */
                const numberValue = Number(value);
                // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we
                // leave them as strings. For more info: https://goo.gl/y5vbSg
                return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
            }
            return value;
        });
        /**
         * Gets a sorted copy of the data array based on the state of the MatSort. Called
         * after changes are made to the filtered data or when sort changes are emitted from MatSort.
         * By default, the function retrieves the active sort and its direction and compares data
         * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
         * of data ordering.
         * @param data The array of data that should be sorted.
         * @param sort The connected MatSort that holds the current sort state.
         */
        this.sortData = (/**
         * @param {?} data
         * @param {?} sort
         * @return {?}
         */
        (data, sort) => {
            /** @type {?} */
            const active = sort.active;
            /** @type {?} */
            const direction = sort.direction;
            if (!active || direction == '') {
                return data;
            }
            return data.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                /** @type {?} */
                let valueA = this.sortingDataAccessor(a, active);
                /** @type {?} */
                let valueB = this.sortingDataAccessor(b, active);
                // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
                // one value exists while the other doesn't. In this case, existing value should come last.
                // This avoids inconsistent results when comparing values to undefined/null.
                // If neither value exists, return 0 (equal).
                /** @type {?} */
                let comparatorResult = 0;
                if (valueA != null && valueB != null) {
                    // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
                    if (valueA > valueB) {
                        comparatorResult = 1;
                    }
                    else if (valueA < valueB) {
                        comparatorResult = -1;
                    }
                }
                else if (valueA != null) {
                    comparatorResult = 1;
                }
                else if (valueB != null) {
                    comparatorResult = -1;
                }
                return comparatorResult * (direction == 'asc' ? 1 : -1);
            }));
        });
        /**
         * Checks if a data object matches the data source's filter string. By default, each data object
         * is converted to a string of its properties and returns true if the filter has
         * at least one occurrence in that string. By default, the filter string has its whitespace
         * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
         * filter matching.
         * @param data Data object used to check against the filter.
         * @param filter Filter string that has been set on the data source.
         * @return Whether the filter matches against the data
         */
        this.filterPredicate = (/**
         * @param {?} data
         * @param {?} filter
         * @return {?}
         */
        (data, filter) => {
            // Transform the data into a lowercase string of all property values.
            /** @type {?} */
            const dataStr = Object.keys(data).reduce((/**
             * @param {?} currentTerm
             * @param {?} key
             * @return {?}
             */
            (currentTerm, key) => {
                // Use an obscure Unicode character to delimit the words in the concatenated string.
                // This avoids matches where the values of two columns combined will match the user's query
                // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
                // that has a very low chance of being typed in by somebody in a text field. This one in
                // particular is "White up-pointing triangle with dot" from
                // https://en.wikipedia.org/wiki/List_of_Unicode_characters
                return currentTerm + ((/** @type {?} */ (data)))[key] + '◬';
            }), '').toLowerCase();
            // Transform the filter by converting it to lowercase and removing whitespace.
            /** @type {?} */
            const transformedFilter = filter.trim().toLowerCase();
            return dataStr.indexOf(transformedFilter) != -1;
        });
        this._data = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](initialData);
        this._updateChangeSubscription();
    }
    /**
     * Array of data that should be rendered by the table, where each object represents one row.
     * @return {?}
     */
    get data() { return this._data.value; }
    /**
     * @param {?} data
     * @return {?}
     */
    set data(data) { this._data.next(data); }
    /**
     * Filter term that should be used to filter out objects from the data array. To override how
     * data objects match to this filter string, provide a custom function for filterPredicate.
     * @return {?}
     */
    get filter() { return this._filter.value; }
    /**
     * @param {?} filter
     * @return {?}
     */
    set filter(filter) { this._filter.next(filter); }
    /**
     * Instance of the MatSort directive used by the table to control its sorting. Sort changes
     * emitted by the MatSort will trigger an update to the table's rendered data.
     * @return {?}
     */
    get sort() { return this._sort; }
    /**
     * @param {?} sort
     * @return {?}
     */
    set sort(sort) {
        this._sort = sort;
        this._updateChangeSubscription();
    }
    /**
     * Instance of the MatPaginator component used by the table to control what page of the data is
     * displayed. Page changes emitted by the MatPaginator will trigger an update to the
     * table's rendered data.
     *
     * Note that the data source uses the paginator's properties to calculate which page of data
     * should be displayed. If the paginator receives its properties as template inputs,
     * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
     * initialized before assigning it to this data source.
     * @return {?}
     */
    get paginator() { return this._paginator; }
    /**
     * @param {?} paginator
     * @return {?}
     */
    set paginator(paginator) {
        this._paginator = paginator;
        this._updateChangeSubscription();
    }
    /**
     * Subscribe to changes that should trigger an update to the table's rendered rows. When the
     * changes occur, process the current state of the filter, sort, and pagination along with
     * the provided base data and send it to the table for rendering.
     * @return {?}
     */
    _updateChangeSubscription() {
        // Sorting and/or pagination should be watched if MatSort and/or MatPaginator are provided.
        // The events should emit whenever the component emits a change or initializes, or if no
        // component is provided, a stream with just a null event should be provided.
        // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
        // pipeline can progress to the next step. Note that the value from these streams are not used,
        // they purely act as a signal to progress in the pipeline.
        /** @type {?} */
        const sortChange = this._sort ?
            (/** @type {?} */ (Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this._sort.sortChange, this._sort.initialized))) :
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        /** @type {?} */
        const pageChange = this._paginator ?
            (/** @type {?} */ (Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this._paginator.page, this._internalPageChanges, this._paginator.initialized))) :
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        /** @type {?} */
        const dataStream = this._data;
        // Watch for base data or filter changes to provide a filtered set of data.
        /** @type {?} */
        const filteredData = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([dataStream, this._filter])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} __0
         * @return {?}
         */
        ([data]) => this._filterData(data))));
        // Watch for filtered data or sort changes to provide an ordered set of data.
        /** @type {?} */
        const orderedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([filteredData, sortChange])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} __0
         * @return {?}
         */
        ([data]) => this._orderData(data))));
        // Watch for ordered data or page changes to provide a paged set of data.
        /** @type {?} */
        const paginatedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([orderedData, pageChange])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} __0
         * @return {?}
         */
        ([data]) => this._pageData(data))));
        // Watched for paged data changes and send the result to the table to render.
        this._renderChangesSubscription.unsubscribe();
        this._renderChangesSubscription = paginatedData.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => this._renderData.next(data)));
    }
    /**
     * Returns a filtered data array where each filter object contains the filter string within
     * the result of the filterTermAccessor function. If no filter is set, returns the data array
     * as provided.
     * @param {?} data
     * @return {?}
     */
    _filterData(data) {
        // If there is a filter string, filter out data that does not contain it.
        // Each data object is converted to a string using the function defined by filterTermAccessor.
        // May be overridden for customization.
        this.filteredData =
            !this.filter ? data : data.filter((/**
             * @param {?} obj
             * @return {?}
             */
            obj => this.filterPredicate(obj, this.filter)));
        if (this.paginator) {
            this._updatePaginator(this.filteredData.length);
        }
        return this.filteredData;
    }
    /**
     * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
     * data array as provided. Uses the default data accessor for data lookup, unless a
     * sortDataAccessor function is defined.
     * @param {?} data
     * @return {?}
     */
    _orderData(data) {
        // If there is no active sort or direction, return the data without trying to sort.
        if (!this.sort) {
            return data;
        }
        return this.sortData(data.slice(), this.sort);
    }
    /**
     * Returns a paged slice of the provided data array according to the provided MatPaginator's page
     * index and length. If there is no paginator provided, returns the data array as provided.
     * @param {?} data
     * @return {?}
     */
    _pageData(data) {
        if (!this.paginator) {
            return data;
        }
        /** @type {?} */
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.slice(startIndex, startIndex + this.paginator.pageSize);
    }
    /**
     * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
     * index does not exceed the paginator's last page. Values are changed in a resolved promise to
     * guard against making property changes within a round of change detection.
     * @param {?} filteredDataLength
     * @return {?}
     */
    _updatePaginator(filteredDataLength) {
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const paginator = this.paginator;
            if (!paginator) {
                return;
            }
            paginator.length = filteredDataLength;
            // If the page index is set beyond the page, reduce it to the last page.
            if (paginator.pageIndex > 0) {
                /** @type {?} */
                const lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
                /** @type {?} */
                const newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);
                if (newPageIndex !== paginator.pageIndex) {
                    paginator.pageIndex = newPageIndex;
                    // Since the paginator only emits after user-generated changes,
                    // we need our own stream so we know to should re-render the data.
                    this._internalPageChanges.next();
                }
            }
        }));
    }
    /**
     * Used by the MatTable. Called when it connects to the data source.
     * \@docs-private
     * @return {?}
     */
    connect() { return this._renderData; }
    /**
     * Used by the MatTable. Called when it is destroyed. No-op.
     * \@docs-private
     * @return {?}
     */
    disconnect() { }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/material/table/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=table.js.map

/***/ }),

/***/ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js":
/*!*************************************************************************************************************************************************************************!*\
  !*** C:/Users/n_sol/dev/monorepo-wallet/omnichannel2-commercial-plataform-wallet-management/node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: ANIMATION_MODULE_TYPE, BrowserAnimationsModule, NoopAnimationsModule, ɵAnimationRenderer, ɵAnimationRendererFactory, ɵBrowserAnimationBuilder, ɵBrowserAnimationFactory, ɵInjectableAnimationEngine, ɵangular_packages_platform_browser_animations_animations_a, ɵangular_packages_platform_browser_animations_animations_b, ɵangular_packages_platform_browser_animations_animations_c, ɵangular_packages_platform_browser_animations_animations_d, ɵangular_packages_platform_browser_animations_animations_e, ɵangular_packages_platform_browser_animations_animations_f */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_MODULE_TYPE", function() { return ANIMATION_MODULE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserAnimationsModule", function() { return BrowserAnimationsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopAnimationsModule", function() { return NoopAnimationsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵAnimationRenderer", function() { return AnimationRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵAnimationRendererFactory", function() { return AnimationRendererFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵBrowserAnimationBuilder", function() { return BrowserAnimationBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵBrowserAnimationFactory", function() { return BrowserAnimationFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵInjectableAnimationEngine", function() { return InjectableAnimationEngine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_platform_browser_animations_animations_a", function() { return instantiateSupportedAnimationDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_platform_browser_animations_animations_b", function() { return instantiateDefaultStyleNormalizer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_platform_browser_animations_animations_c", function() { return instantiateRendererFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_platform_browser_animations_animations_d", function() { return BROWSER_ANIMATIONS_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_platform_browser_animations_animations_e", function() { return BROWSER_NOOP_ANIMATIONS_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_platform_browser_animations_animations_f", function() { return BaseAnimationRenderer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations/browser */ "../../node_modules/@angular/animations/__ivy_ngcc__/fesm2015/browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/**
 * @license Angular v9.1.0
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */







/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser/animations/src/animation_builder.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


class BrowserAnimationBuilder extends _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationBuilder"] {
    /**
     * @param {?} rootRenderer
     * @param {?} doc
     */
    constructor(rootRenderer, doc) {
        super();
        this._nextAnimationId = 0;
        /** @type {?} */
        const typeData = (/** @type {?} */ ({
            id: '0',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [],
            data: { animation: [] }
        }));
        this._renderer = (/** @type {?} */ (rootRenderer.createRenderer(doc.body, typeData)));
    }
    /**
     * @param {?} animation
     * @return {?}
     */
    build(animation) {
        /** @type {?} */
        const id = this._nextAnimationId.toString();
        this._nextAnimationId++;
        /** @type {?} */
        const entry = Array.isArray(animation) ? Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["sequence"])(animation) : animation;
        issueAnimationCommand(this._renderer, null, id, 'register', [entry]);
        return new BrowserAnimationFactory(id, this._renderer);
    }
}
BrowserAnimationBuilder.ɵfac = function BrowserAnimationBuilder_Factory(t) { return new (t || BrowserAnimationBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])); };
BrowserAnimationBuilder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BrowserAnimationBuilder, factory: BrowserAnimationBuilder.ɵfac });
/** @nocollapse */
BrowserAnimationBuilder.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowserAnimationBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }] }]; }, null); })();
if (false) {}
class BrowserAnimationFactory extends _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationFactory"] {
    /**
     * @param {?} _id
     * @param {?} _renderer
     */
    constructor(_id, _renderer) {
        super();
        this._id = _id;
        this._renderer = _renderer;
    }
    /**
     * @param {?} element
     * @param {?=} options
     * @return {?}
     */
    create(element, options) {
        return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
    }
}
if (false) {}
class RendererAnimationPlayer {
    /**
     * @param {?} id
     * @param {?} element
     * @param {?} options
     * @param {?} _renderer
     */
    constructor(id, element, options, _renderer) {
        this.id = id;
        this.element = element;
        this._renderer = _renderer;
        this.parentPlayer = null;
        this._started = false;
        this.totalTime = 0;
        this._command('create', options);
    }
    /**
     * @private
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    _listen(eventName, callback) {
        return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
    }
    /**
     * @private
     * @param {?} command
     * @param {...?} args
     * @return {?}
     */
    _command(command, ...args) {
        return issueAnimationCommand(this._renderer, this.element, this.id, command, args);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    onDone(fn) { this._listen('done', fn); }
    /**
     * @param {?} fn
     * @return {?}
     */
    onStart(fn) { this._listen('start', fn); }
    /**
     * @param {?} fn
     * @return {?}
     */
    onDestroy(fn) { this._listen('destroy', fn); }
    /**
     * @return {?}
     */
    init() { this._command('init'); }
    /**
     * @return {?}
     */
    hasStarted() { return this._started; }
    /**
     * @return {?}
     */
    play() {
        this._command('play');
        this._started = true;
    }
    /**
     * @return {?}
     */
    pause() { this._command('pause'); }
    /**
     * @return {?}
     */
    restart() { this._command('restart'); }
    /**
     * @return {?}
     */
    finish() { this._command('finish'); }
    /**
     * @return {?}
     */
    destroy() { this._command('destroy'); }
    /**
     * @return {?}
     */
    reset() { this._command('reset'); }
    /**
     * @param {?} p
     * @return {?}
     */
    setPosition(p) { this._command('setPosition', p); }
    /**
     * @return {?}
     */
    getPosition() { return 0; }
}
if (false) {}
/**
 * @param {?} renderer
 * @param {?} element
 * @param {?} id
 * @param {?} command
 * @param {?} args
 * @return {?}
 */
function issueAnimationCommand(renderer, element, id, command, args) {
    return renderer.setProperty(element, `@@${id}:${command}`, args);
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser/animations/src/animation_renderer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ANIMATION_PREFIX = '@';
/** @type {?} */
const DISABLE_ANIMATIONS_FLAG = '@.disabled';
/**
 * @record
 */
function RecursiveAnimationTriggerMetadata() { }
class AnimationRendererFactory {
    /**
     * @param {?} delegate
     * @param {?} engine
     * @param {?} _zone
     */
    constructor(delegate, engine, _zone) {
        this.delegate = delegate;
        this.engine = engine;
        this._zone = _zone;
        this._currentId = 0;
        this._microtaskId = 1;
        this._animationCallbacksBuffer = [];
        this._rendererCache = new Map();
        this._cdRecurDepth = 0;
        this.promise = Promise.resolve(0);
        engine.onRemovalComplete = (/**
         * @param {?} element
         * @param {?} delegate
         * @return {?}
         */
        (element, delegate) => {
            // Note: if an component element has a leave animation, and the component
            // a host leave animation, the view engine will call `removeChild` for the parent
            // component renderer as well as for the child component renderer.
            // Therefore, we need to check if we already removed the element.
            if (delegate && delegate.parentNode(element)) {
                delegate.removeChild(element.parentNode, element);
            }
        });
    }
    /**
     * @param {?} hostElement
     * @param {?} type
     * @return {?}
     */
    createRenderer(hostElement, type) {
        /** @type {?} */
        const EMPTY_NAMESPACE_ID = '';
        // cache the delegates to find out which cached delegate can
        // be used by which cached renderer
        /** @type {?} */
        const delegate = this.delegate.createRenderer(hostElement, type);
        if (!hostElement || !type || !type.data || !type.data['animation']) {
            /** @type {?} */
            let renderer = this._rendererCache.get(delegate);
            if (!renderer) {
                renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine);
                // only cache this result when the base renderer is used
                this._rendererCache.set(delegate, renderer);
            }
            return renderer;
        }
        /** @type {?} */
        const componentId = type.id;
        /** @type {?} */
        const namespaceId = type.id + '-' + this._currentId;
        this._currentId++;
        this.engine.register(namespaceId, hostElement);
        /** @type {?} */
        const registerTrigger = (/**
         * @param {?} trigger
         * @return {?}
         */
        (trigger) => {
            if (Array.isArray(trigger)) {
                trigger.forEach(registerTrigger);
            }
            else {
                this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger.name, trigger);
            }
        });
        /** @type {?} */
        const animationTriggers = (/** @type {?} */ (type.data['animation']));
        animationTriggers.forEach(registerTrigger);
        return new AnimationRenderer(this, namespaceId, delegate, this.engine);
    }
    /**
     * @return {?}
     */
    begin() {
        this._cdRecurDepth++;
        if (this.delegate.begin) {
            this.delegate.begin();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _scheduleCountTask() {
        // always use promise to schedule microtask instead of use Zone
        this.promise.then((/**
         * @return {?}
         */
        () => { this._microtaskId++; }));
    }
    /**
     * \@internal
     * @param {?} count
     * @param {?} fn
     * @param {?} data
     * @return {?}
     */
    scheduleListenerCallback(count, fn, data) {
        if (count >= 0 && count < this._microtaskId) {
            this._zone.run((/**
             * @return {?}
             */
            () => fn(data)));
            return;
        }
        if (this._animationCallbacksBuffer.length == 0) {
            Promise.resolve(null).then((/**
             * @return {?}
             */
            () => {
                this._zone.run((/**
                 * @return {?}
                 */
                () => {
                    this._animationCallbacksBuffer.forEach((/**
                     * @param {?} tuple
                     * @return {?}
                     */
                    tuple => {
                        const [fn, data] = tuple;
                        fn(data);
                    }));
                    this._animationCallbacksBuffer = [];
                }));
            }));
        }
        this._animationCallbacksBuffer.push([fn, data]);
    }
    /**
     * @return {?}
     */
    end() {
        this._cdRecurDepth--;
        // this is to prevent animations from running twice when an inner
        // component does CD when a parent component instead has inserted it
        if (this._cdRecurDepth == 0) {
            this._zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this._scheduleCountTask();
                this.engine.flush(this._microtaskId);
            }));
        }
        if (this.delegate.end) {
            this.delegate.end();
        }
    }
    /**
     * @return {?}
     */
    whenRenderingDone() { return this.engine.whenRenderingDone(); }
}
AnimationRendererFactory.ɵfac = function AnimationRendererFactory_Factory(t) { return new (t || AnimationRendererFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_animations_browser__WEBPACK_IMPORTED_MODULE_3__["ɵAnimationEngine"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
AnimationRendererFactory.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AnimationRendererFactory, factory: AnimationRendererFactory.ɵfac });
/** @nocollapse */
AnimationRendererFactory.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] },
    { type: _angular_animations_browser__WEBPACK_IMPORTED_MODULE_3__["ɵAnimationEngine"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimationRendererFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] }, { type: _angular_animations_browser__WEBPACK_IMPORTED_MODULE_3__["ɵAnimationEngine"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();
if (false) {}
class BaseAnimationRenderer {
    /**
     * @param {?} namespaceId
     * @param {?} delegate
     * @param {?} engine
     */
    constructor(namespaceId, delegate, engine) {
        this.namespaceId = namespaceId;
        this.delegate = delegate;
        this.engine = engine;
        this.destroyNode = this.delegate.destroyNode ? (/**
         * @param {?} n
         * @return {?}
         */
        (n) => (/** @type {?} */ (delegate.destroyNode))(n)) : null;
    }
    /**
     * @return {?}
     */
    get data() { return this.delegate.data; }
    /**
     * @return {?}
     */
    destroy() {
        this.engine.destroy(this.namespaceId, this.delegate);
        this.delegate.destroy();
    }
    /**
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    createElement(name, namespace) {
        return this.delegate.createElement(name, namespace);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    createComment(value) { return this.delegate.createComment(value); }
    /**
     * @param {?} value
     * @return {?}
     */
    createText(value) { return this.delegate.createText(value); }
    /**
     * @param {?} parent
     * @param {?} newChild
     * @return {?}
     */
    appendChild(parent, newChild) {
        this.delegate.appendChild(parent, newChild);
        this.engine.onInsert(this.namespaceId, newChild, parent, false);
    }
    /**
     * @param {?} parent
     * @param {?} newChild
     * @param {?} refChild
     * @return {?}
     */
    insertBefore(parent, newChild, refChild) {
        this.delegate.insertBefore(parent, newChild, refChild);
        this.engine.onInsert(this.namespaceId, newChild, parent, true);
    }
    /**
     * @param {?} parent
     * @param {?} oldChild
     * @param {?} isHostElement
     * @return {?}
     */
    removeChild(parent, oldChild, isHostElement) {
        this.engine.onRemove(this.namespaceId, oldChild, this.delegate, isHostElement);
    }
    /**
     * @param {?} selectorOrNode
     * @param {?=} preserveContent
     * @return {?}
     */
    selectRootElement(selectorOrNode, preserveContent) {
        return this.delegate.selectRootElement(selectorOrNode, preserveContent);
    }
    /**
     * @param {?} node
     * @return {?}
     */
    parentNode(node) { return this.delegate.parentNode(node); }
    /**
     * @param {?} node
     * @return {?}
     */
    nextSibling(node) { return this.delegate.nextSibling(node); }
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @param {?=} namespace
     * @return {?}
     */
    setAttribute(el, name, value, namespace) {
        this.delegate.setAttribute(el, name, value, namespace);
    }
    /**
     * @param {?} el
     * @param {?} name
     * @param {?=} namespace
     * @return {?}
     */
    removeAttribute(el, name, namespace) {
        this.delegate.removeAttribute(el, name, namespace);
    }
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    addClass(el, name) { this.delegate.addClass(el, name); }
    /**
     * @param {?} el
     * @param {?} name
     * @return {?}
     */
    removeClass(el, name) { this.delegate.removeClass(el, name); }
    /**
     * @param {?} el
     * @param {?} style
     * @param {?} value
     * @param {?=} flags
     * @return {?}
     */
    setStyle(el, style, value, flags) {
        this.delegate.setStyle(el, style, value, flags);
    }
    /**
     * @param {?} el
     * @param {?} style
     * @param {?=} flags
     * @return {?}
     */
    removeStyle(el, style, flags) {
        this.delegate.removeStyle(el, style, flags);
    }
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    setProperty(el, name, value) {
        if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
            this.disableAnimations(el, !!value);
        }
        else {
            this.delegate.setProperty(el, name, value);
        }
    }
    /**
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    setValue(node, value) { this.delegate.setValue(node, value); }
    /**
     * @param {?} target
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    listen(target, eventName, callback) {
        return this.delegate.listen(target, eventName, callback);
    }
    /**
     * @protected
     * @param {?} element
     * @param {?} value
     * @return {?}
     */
    disableAnimations(element, value) {
        this.engine.disableAnimations(element, value);
    }
}
if (false) {}
class AnimationRenderer extends BaseAnimationRenderer {
    /**
     * @param {?} factory
     * @param {?} namespaceId
     * @param {?} delegate
     * @param {?} engine
     */
    constructor(factory, namespaceId, delegate, engine) {
        super(namespaceId, delegate, engine);
        this.factory = factory;
        this.namespaceId = namespaceId;
    }
    /**
     * @param {?} el
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    setProperty(el, name, value) {
        if (name.charAt(0) == ANIMATION_PREFIX) {
            if (name.charAt(1) == '.' && name == DISABLE_ANIMATIONS_FLAG) {
                value = value === undefined ? true : !!value;
                this.disableAnimations(el, (/** @type {?} */ (value)));
            }
            else {
                this.engine.process(this.namespaceId, el, name.substr(1), value);
            }
        }
        else {
            this.delegate.setProperty(el, name, value);
        }
    }
    /**
     * @param {?} target
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    listen(target, eventName, callback) {
        if (eventName.charAt(0) == ANIMATION_PREFIX) {
            /** @type {?} */
            const element = resolveElementFromTarget(target);
            /** @type {?} */
            let name = eventName.substr(1);
            /** @type {?} */
            let phase = '';
            // @listener.phase is for trigger animation callbacks
            // @@listener is for animation builder callbacks
            if (name.charAt(0) != ANIMATION_PREFIX) {
                [name, phase] = parseTriggerCallbackName(name);
            }
            return this.engine.listen(this.namespaceId, element, name, phase, (/**
             * @param {?} event
             * @return {?}
             */
            event => {
                /** @type {?} */
                const countId = ((/** @type {?} */ (event)))['_data'] || -1;
                this.factory.scheduleListenerCallback(countId, callback, event);
            }));
        }
        return this.delegate.listen(target, eventName, callback);
    }
}
if (false) {}
/**
 * @param {?} target
 * @return {?}
 */
function resolveElementFromTarget(target) {
    switch (target) {
        case 'body':
            return document.body;
        case 'document':
            return document;
        case 'window':
            return window;
        default:
            return target;
    }
}
/**
 * @param {?} triggerName
 * @return {?}
 */
function parseTriggerCallbackName(triggerName) {
    /** @type {?} */
    const dotIndex = triggerName.indexOf('.');
    /** @type {?} */
    const trigger = triggerName.substring(0, dotIndex);
    /** @type {?} */
    const phase = triggerName.substr(dotIndex + 1);
    return [trigger, phase];
}

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser/animations/src/providers.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InjectableAnimationEngine extends _angular_animations_browser__WEBPACK_IMPORTED_MODULE_3__["ɵAnimationEngine"] {
    /**
     * @param {?} doc
     * @param {?} driver
     * @param {?} normalizer
     */
    constructor(doc, driver, normalizer) {
        super(doc.body, driver, normalizer);
    }
}
InjectableAnimationEngine.ɵfac = function InjectableAnimationEngine_Factory(t) { return new (t || InjectableAnimationEngine)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_animations_browser__WEBPACK_IMPORTED_MODULE_3__["AnimationDriver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_animations_browser__WEBPACK_IMPORTED_MODULE_3__["ɵAnimationStyleNormalizer"])); };
InjectableAnimationEngine.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InjectableAnimationEngine, factory: InjectableAnimationEngine.ɵfac });
/** @nocollapse */
InjectableAnimationEngine.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
    { type: _angular_animations_browser__WEBPACK_IMPORTED_MODULE_3__["AnimationDriver"] },
    { type: _angular_animations_browser__WEBPACK_IMPORTED_MODULE_3__["ɵAnimationStyleNormalizer"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InjectableAnimationEngine, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }] }, { type: _angular_animations_browser__WEBPACK_IMPORTED_MODULE_3__["AnimationDriver"] }, { type: _angular_animations_browser__WEBPACK_IMPORTED_MODULE_3__["ɵAnimationStyleNormalizer"] }]; }, null); })();
/**
 * @return {?}
 */
function instantiateSupportedAnimationDriver() {
    return Object(_angular_animations_browser__WEBPACK_IMPORTED_MODULE_3__["ɵsupportsWebAnimations"])() ? new _angular_animations_browser__WEBPACK_IMPORTED_MODULE_3__["ɵWebAnimationsDriver"]() : new _angular_animations_browser__WEBPACK_IMPORTED_MODULE_3__["ɵCssKeyframesDriver"]();
}
/**
 * @return {?}
 */
function instantiateDefaultStyleNormalizer() {
    return new _angular_animations_browser__WEBPACK_IMPORTED_MODULE_3__["ɵWebAnimationsStyleNormalizer"]();
}
/**
 * @param {?} renderer
 * @param {?} engine
 * @param {?} zone
 * @return {?}
 */
function instantiateRendererFactory(renderer, engine, zone) {
    return new AnimationRendererFactory(renderer, engine, zone);
}
/**
 * \@publicApi
 * @type {?}
 */
const ANIMATION_MODULE_TYPE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('AnimationModuleType');
/** @type {?} */
const SHARED_ANIMATION_PROVIDERS = [
    { provide: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationBuilder"], useClass: BrowserAnimationBuilder },
    { provide: _angular_animations_browser__WEBPACK_IMPORTED_MODULE_3__["ɵAnimationStyleNormalizer"], useFactory: instantiateDefaultStyleNormalizer },
    { provide: _angular_animations_browser__WEBPACK_IMPORTED_MODULE_3__["ɵAnimationEngine"], useClass: InjectableAnimationEngine }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"],
        useFactory: instantiateRendererFactory,
        deps: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_3__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]
    }
];
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserModule.
 * @type {?}
 */
const BROWSER_ANIMATIONS_PROVIDERS = [
    { provide: _angular_animations_browser__WEBPACK_IMPORTED_MODULE_3__["AnimationDriver"], useFactory: instantiateSupportedAnimationDriver },
    { provide: ANIMATION_MODULE_TYPE, useValue: 'BrowserAnimations' }, ...SHARED_ANIMATION_PROVIDERS
];
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserTestingModule.
 * @type {?}
 */
const BROWSER_NOOP_ANIMATIONS_PROVIDERS = [
    { provide: _angular_animations_browser__WEBPACK_IMPORTED_MODULE_3__["AnimationDriver"], useClass: _angular_animations_browser__WEBPACK_IMPORTED_MODULE_3__["ɵNoopAnimationDriver"] },
    { provide: ANIMATION_MODULE_TYPE, useValue: 'NoopAnimations' }, ...SHARED_ANIMATION_PROVIDERS
];

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser/animations/src/module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Exports `BrowserModule` with additional [dependency-injection providers](guide/glossary#provider)
 * for use with animations. See [Animations](guide/animations).
 * \@publicApi
 */
class BrowserAnimationsModule {
}
BrowserAnimationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BrowserAnimationsModule });
BrowserAnimationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BrowserAnimationsModule_Factory(t) { return new (t || BrowserAnimationsModule)(); }, providers: BROWSER_ANIMATIONS_PROVIDERS, imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BrowserAnimationsModule, { exports: function () { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowserAnimationsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
                providers: BROWSER_ANIMATIONS_PROVIDERS
            }]
    }], null, null); })();
/**
 * A null player that must be imported to allow disabling of animations.
 * \@publicApi
 */
class NoopAnimationsModule {
}
NoopAnimationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NoopAnimationsModule });
NoopAnimationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NoopAnimationsModule_Factory(t) { return new (t || NoopAnimationsModule)(); }, providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS, imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NoopAnimationsModule, { exports: function () { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoopAnimationsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
                providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser/animations/src/private_export.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser/animations/src/animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser/animations/public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser/animations/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=animations.js.map

/***/ }),

/***/ "../../node_modules/subsink/dist/index.js":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/n_sol/dev/monorepo-wallet/omnichannel2-commercial-plataform-wallet-management/node_modules/subsink/dist/index.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var subsink_1 = __webpack_require__(/*! ./subsink */ "../../node_modules/subsink/dist/subsink.js");
exports.SubSink = subsink_1.SubSink;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/subsink/dist/subsink.js":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/n_sol/dev/monorepo-wallet/omnichannel2-commercial-plataform-wallet-management/node_modules/subsink/dist/subsink.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isFunction = function (fn) { return typeof fn === 'function'; };
/**
 * Subscription sink that holds Observable subscriptions
 * until you call unsubscribe on it in ngOnDestroy.
 */
var SubSink = /** @class */ (function () {
    /**
     * Subscription sink that holds Observable subscriptions
     * until you call unsubscribe on it in ngOnDestroy.
     *
     * @example
     * In Angular:
     * ```
     *   private subs = new SubSink();
     *   ...
     *   this.subs.sink = observable$.subscribe(
     *   this.subs.add(observable$.subscribe(...));
     *   ...
     *   ngOnDestroy() {
     *     this.subs.unsubscribe();
     *   }
     * ```
     */
    function SubSink() {
        this._subs = [];
    }
    /**
     * Add subscriptions to the tracked subscriptions
     * @example
     *  this.subs.add(observable$.subscribe(...));
     */
    SubSink.prototype.add = function () {
        var subscriptions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            subscriptions[_i] = arguments[_i];
        }
        this._subs = this._subs.concat(subscriptions);
    };
    Object.defineProperty(SubSink.prototype, "sink", {
        /**
         * Assign subscription to this sink to add it to the tracked subscriptions
         * @example
         *  this.subs.sink = observable$.subscribe(...);
         */
        set: function (subscription) {
            this._subs.push(subscription);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Unsubscribe to all subscriptions in ngOnDestroy()
     * @example
     *   ngOnDestroy() {
     *     this.subs.unsubscribe();
     *   }
     */
    SubSink.prototype.unsubscribe = function () {
        this._subs.forEach(function (sub) { return sub && isFunction(sub.unsubscribe) && sub.unsubscribe(); });
        this._subs = [];
    };
    return SubSink;
}());
exports.SubSink = SubSink;
//# sourceMappingURL=subsink.js.map

/***/ })

}]);
//# sourceMappingURL=omnichannel2-commercial-plataform-wallet-management-front-bfcl-es2015.js.map