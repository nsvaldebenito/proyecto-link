import { ActivatedRoute, RouterModule } from '@angular/router';
import { __spread } from 'tslib';
import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, InjectionToken, ɵɵdefineNgModule, ɵɵdefineInjector, Injector, NgModule, ɵɵsetNgModuleScope, ɵɵelement, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate1, ɵɵtemplate, ɵɵproperty, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵpipe, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵpipeBind1, Component } from '@angular/core';
import { HttpResponse, HttpClient, HttpHandler, ɵHttpInterceptingHandler, HTTP_INTERCEPTORS as HTTP_INTERCEPTORS$1 } from '@angular/common/http';
import { WalletManagementConfig } from '@omnichannel2-commercial-plataform-wallet-management/front-common/config';
import { iif, of, throwError, BehaviorSubject, Subject, merge } from 'rxjs';
import { mergeMap, startWith, switchMap, map, catchError } from 'rxjs/operators';
import { NgIf, AsyncPipe, CommonModule } from '@angular/common';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { MatTableModule, MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow } from '@angular/material/table';
import { SubSink } from 'subsink';

var EndpointResolverInterceptor = /** @class */ (function () {
    function EndpointResolverInterceptor(config) {
        this.config = config;
    }
    EndpointResolverInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req.clone({
            url: this.config.apiDomain + "/omnichannel2/wallet-management" + req.url
        }));
    };
    /** @nocollapse */ EndpointResolverInterceptor.ɵfac = function EndpointResolverInterceptor_Factory(t) { return new (t || EndpointResolverInterceptor)(ɵɵinject(WalletManagementConfig)); };
    /** @nocollapse */ EndpointResolverInterceptor.ɵprov = ɵɵdefineInjectable({ token: EndpointResolverInterceptor, factory: EndpointResolverInterceptor.ɵfac });
    return EndpointResolverInterceptor;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(EndpointResolverInterceptor, [{
        type: Injectable
    }], function () { return [{ type: WalletManagementConfig }]; }, null); })();

var ErrorHandlerInterceptor = /** @class */ (function () {
    function ErrorHandlerInterceptor() {
    }
    ErrorHandlerInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(mergeMap(function (event) { return iif(function () { return event instanceof HttpResponse; }, of(event).pipe(mergeMap(function (response) {
            var _a, _b, _c, _d;
            return ((_a = response.body) === null || _a === void 0 ? void 0 : _a.code) === 'ok' && ((_c = (_b = response.body) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.responseCode) === 'OK' ?
                of(response) : throwError((_d = response.body) === null || _d === void 0 ? void 0 : _d.message.respuesta);
        })), of(event)); }));
    };
    /** @nocollapse */ ErrorHandlerInterceptor.ɵfac = function ErrorHandlerInterceptor_Factory(t) { return new (t || ErrorHandlerInterceptor)(); };
    /** @nocollapse */ ErrorHandlerInterceptor.ɵprov = ɵɵdefineInjectable({ token: ErrorHandlerInterceptor, factory: ErrorHandlerInterceptor.ɵfac });
    return ErrorHandlerInterceptor;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ErrorHandlerInterceptor, [{
        type: Injectable
    }], null, null); })();

var BackendHeadersInterceptor = /** @class */ (function () {
    function BackendHeadersInterceptor() {
        this.buildHeaders = function () {
            var headers = {};
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
    BackendHeadersInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req.clone({
            setHeaders: this.buildHeaders()
        }));
    };
    /** @nocollapse */ BackendHeadersInterceptor.ɵfac = function BackendHeadersInterceptor_Factory(t) { return new (t || BackendHeadersInterceptor)(); };
    /** @nocollapse */ BackendHeadersInterceptor.ɵprov = ɵɵdefineInjectable({ token: BackendHeadersInterceptor, factory: BackendHeadersInterceptor.ɵfac });
    return BackendHeadersInterceptor;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(BackendHeadersInterceptor, [{
        type: Injectable
    }], null, null); })();

var HTTP_INTERCEPTORS = new InjectionToken('HTTP_INTERCEPTORS');
var INTERCEPTORS_PROVIDERS = [{
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

var BusinessApiModule = /** @class */ (function () {
    function BusinessApiModule() {
    }
    /** @nocollapse */ BusinessApiModule.ɵmod = ɵɵdefineNgModule({ type: BusinessApiModule });
    /** @nocollapse */ BusinessApiModule.ɵinj = ɵɵdefineInjector({ factory: function BusinessApiModule_Factory(t) { return new (t || BusinessApiModule)(); }, providers: __spread([{
                provide: HttpClient,
                useClass: HttpClient
            }, {
                provide: HttpHandler,
                useClass: ɵHttpInterceptingHandler
            }, {
                provide: HTTP_INTERCEPTORS$1,
                deps: [Injector, HTTP_INTERCEPTORS],
                useFactory: (function (injector, interceptors) { return __spread(interceptors, injector.parent.get(HTTP_INTERCEPTORS$1)); })
            }], INTERCEPTORS_PROVIDERS) });
    return BusinessApiModule;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(BusinessApiModule, [{
        type: NgModule,
        args: [{
                providers: __spread([{
                        provide: HttpClient,
                        useClass: HttpClient
                    }, {
                        provide: HttpHandler,
                        useClass: ɵHttpInterceptingHandler
                    }, {
                        provide: HTTP_INTERCEPTORS$1,
                        deps: [Injector, HTTP_INTERCEPTORS],
                        useFactory: (function (injector, interceptors) { return __spread(interceptors, injector.parent.get(HTTP_INTERCEPTORS$1)); })
                    }], INTERCEPTORS_PROVIDERS)
            }]
    }], null, null); })();

var TokenService = /** @class */ (function () {
    function TokenService(httpClient, config) {
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
    TokenService.prototype.getTokens = function (customerId, cardId) {
        if (customerId === null) {
            return throwError('Customer id is not set');
        }
        if (cardId === null) {
            return throwError('Card id is not set');
        }
        this.itemsTokens$ = of(this.tokens);
        return this.itemsTokens$;
        // return this.httpClient.get<ITokens>('/customers/${customerId}/${cardId}/card-tokens')
    };
    /** @nocollapse */ TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(ɵɵinject(HttpClient), ɵɵinject(WalletManagementConfig)); };
    /** @nocollapse */ TokenService.ɵprov = ɵɵdefineInjectable({ token: TokenService, factory: TokenService.ɵfac, providedIn: BusinessApiModule });
    return TokenService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TokenService, [{
        type: Injectable,
        args: [{
                providedIn: BusinessApiModule
            }]
    }], function () { return [{ type: HttpClient }, { type: WalletManagementConfig }]; }, null); })();

var modules = [
    MatTableModule,
    MatProgressSpinnerModule
];
var TokenMaterialModule = /** @class */ (function () {
    function TokenMaterialModule() {
    }
    /** @nocollapse */ TokenMaterialModule.ɵmod = ɵɵdefineNgModule({ type: TokenMaterialModule });
    /** @nocollapse */ TokenMaterialModule.ɵinj = ɵɵdefineInjector({ factory: function TokenMaterialModule_Factory(t) { return new (t || TokenMaterialModule)(); }, imports: [MatTableModule,
            MatProgressSpinnerModule] });
    return TokenMaterialModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TokenMaterialModule, { exports: [MatTableModule,
        MatProgressSpinnerModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(TokenMaterialModule, [{
        type: NgModule,
        args: [{
                exports: modules,
            }]
    }], null, null); })();

function TokenTableComponent_div_8_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "mat-spinner");
} }
function TokenTableComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r37 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r37.errorText, " ");
} }
function TokenTableComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtemplate(1, TokenTableComponent_div_8_mat_spinner_1_Template, 1, 0, "mat-spinner", 14);
    ɵɵtemplate(2, TokenTableComponent_div_8_div_2_Template, 2, 1, "div", 15);
    ɵɵelementEnd();
} if (rf & 2) {
    var loading_r35 = ctx.ngIf;
    var ctx_r22 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", loading_r35);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r22.hasError);
} }
function TokenTableComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 17);
    ɵɵtext(1, " Wallet Descripcion ");
    ɵɵelementEnd();
} }
function TokenTableComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 18);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var row_r38 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", row_r38.wallet.walleDescripcion, " ");
} }
function TokenTableComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 17);
    ɵɵtext(1, " Device Type ");
    ɵɵelementEnd();
} }
function TokenTableComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 18);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var row_r39 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", row_r39.device.deviceType, " ");
} }
function TokenTableComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 17);
    ɵɵtext(1, " Device Description ");
    ɵɵelementEnd();
} }
function TokenTableComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 18);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var row_r40 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", row_r40.device.deviceDescription, " ");
} }
function TokenTableComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 17);
    ɵɵtext(1, " Token Number ");
    ɵɵelementEnd();
} }
function TokenTableComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 18);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var row_r41 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", row_r41.tokenNumber, " ");
} }
function TokenTableComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 17);
    ɵɵtext(1, " Token Status ");
    ɵɵelementEnd();
} }
function TokenTableComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 18);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var row_r42 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", row_r42.tokenStatus.statusDescripcion, " ");
} }
function TokenTableComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 19);
} }
function TokenTableComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 20);
} }
var TokenTableComponent = /** @class */ (function () {
    function TokenTableComponent(tokenService, activatedRoute) {
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
        this.subs = new SubSink();
        this.useNgRxData = false;
        this.isLoadingResults$ = new BehaviorSubject(true);
        this.refresh$ = new Subject();
    }
    TokenTableComponent.prototype.getTokens = function (customerId, cardId) {
        return this.tokenService.getTokens(customerId, cardId);
    };
    TokenTableComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    TokenTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (parametros) {
            _this.cardId = parametros.get('cardId');
            _this.customerId = parametros.get('customerId');
        });
        if (this.skipLoading) {
            return;
        }
        this.items$ = merge(this.refresh$).pipe(startWith({}), switchMap(function () {
            _this.isLoadingResults$.next(true);
            return _this.getTokens(_this.customerId, _this.cardId);
        }), 
        //map((results: { message: { response: IToken[] } } ) => {
        map(function (results) {
            _this.isLoadingResults$.next(false);
            _this.hasError = false;
            //return results.message.response;
            return results.data;
        }), catchError(function (err) {
            _this.isLoadingResults$.next(false);
            _this.hasError = true;
            _this.errorText = err;
            return of([]);
        }));
        this.items$.subscribe();
    };
    /** @nocollapse */ TokenTableComponent.ɵfac = function TokenTableComponent_Factory(t) { return new (t || TokenTableComponent)(ɵɵdirectiveInject(TokenService), ɵɵdirectiveInject(ActivatedRoute)); };
    /** @nocollapse */ TokenTableComponent.ɵcmp = ɵɵdefineComponent({ type: TokenTableComponent, selectors: [["omnichannel2-commercial-plataform-wallet-management-token-table"]], decls: 29, vars: 10, consts: [[2, "text-align", "center"], [1, "mat-elevation-z8"], ["class", "loading-shade", 4, "ngIf"], ["mat-table", "", 1, "full-width", 3, "dataSource"], ["matColumnDef", "walletDescripcion"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "deviceType"], ["matColumnDef", "deviceDescription"], ["matColumnDef", "TokenNumber"], ["matColumnDef", "tokenStatus"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "loading-shade"], [4, "ngIf"], ["class", "error", 4, "ngIf"], [1, "error"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TokenTableComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "h1");
            ɵɵtext(2, " Gestion de Tarjetas ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(3, "h4");
            ɵɵtext(4);
            ɵɵelementEnd();
            ɵɵelementStart(5, "h4");
            ɵɵtext(6);
            ɵɵelementEnd();
            ɵɵelementStart(7, "div", 1);
            ɵɵtemplate(8, TokenTableComponent_div_8_Template, 3, 2, "div", 2);
            ɵɵpipe(9, "async");
            ɵɵelementStart(10, "table", 3);
            ɵɵpipe(11, "async");
            ɵɵelementContainerStart(12, 4);
            ɵɵtemplate(13, TokenTableComponent_th_13_Template, 2, 0, "th", 5);
            ɵɵtemplate(14, TokenTableComponent_td_14_Template, 2, 1, "td", 6);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(15, 7);
            ɵɵtemplate(16, TokenTableComponent_th_16_Template, 2, 0, "th", 5);
            ɵɵtemplate(17, TokenTableComponent_td_17_Template, 2, 1, "td", 6);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(18, 8);
            ɵɵtemplate(19, TokenTableComponent_th_19_Template, 2, 0, "th", 5);
            ɵɵtemplate(20, TokenTableComponent_td_20_Template, 2, 1, "td", 6);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(21, 9);
            ɵɵtemplate(22, TokenTableComponent_th_22_Template, 2, 0, "th", 5);
            ɵɵtemplate(23, TokenTableComponent_td_23_Template, 2, 1, "td", 6);
            ɵɵelementContainerEnd();
            ɵɵelementContainerStart(24, 10);
            ɵɵtemplate(25, TokenTableComponent_th_25_Template, 2, 0, "th", 5);
            ɵɵtemplate(26, TokenTableComponent_td_26_Template, 2, 1, "td", 6);
            ɵɵelementContainerEnd();
            ɵɵtemplate(27, TokenTableComponent_tr_27_Template, 1, 0, "tr", 11);
            ɵɵtemplate(28, TokenTableComponent_tr_28_Template, 1, 0, "tr", 12);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(4);
            ɵɵtextInterpolate1(" CustomerId: ", ctx.customerId, "\n");
            ɵɵadvance(2);
            ɵɵtextInterpolate1(" CardID: ", ctx.cardId, "\n");
            ɵɵadvance(2);
            ɵɵproperty("ngIf", ɵɵpipeBind1(9, 6, ctx.loading$));
            ɵɵadvance(2);
            ɵɵproperty("dataSource", ɵɵpipeBind1(11, 8, ctx.items$));
            ɵɵadvance(17);
            ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
            ɵɵadvance(1);
            ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [NgIf, MatTable, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRowDef, MatRowDef, MatSpinner, MatHeaderCell, MatCell, MatHeaderRow, MatRow], pipes: [AsyncPipe], styles: ["[_nghost-%COMP%]{display:block;font-family:sans-serif;min-width:300px;max-width:600px;margin:50px auto}h1[_ngcontent-%COMP%]{text-align:center;margin-left:18px;font-size:24px}h2[_ngcontent-%COMP%]{text-align:center;font-size:20px;margin:40px 0 10px}.loading-shade[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:56px;right:0;background:rgba(0,0,0,.15);z-index:1;display:flex;align-items:center;justify-content:center}.full-width[_ngcontent-%COMP%]{width:100%}.mat-column-TokenNumber[_ngcontent-%COMP%]{flex:0 0 28%!important;width:28%!important}"] });
    return TokenTableComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TokenTableComponent, [{
        type: Component,
        args: [{
                selector: 'omnichannel2-commercial-plataform-wallet-management-token-table',
                templateUrl: './token-table.component.html',
                styleUrls: ['./token-table.component.css']
            }]
    }], function () { return [{ type: TokenService }, { type: ActivatedRoute }]; }, null); })();

var routes = [
    {
        path: '',
        component: TokenTableComponent
    }
];
var FrontCommonModule = /** @class */ (function () {
    function FrontCommonModule() {
    }
    /** @nocollapse */ FrontCommonModule.ɵmod = ɵɵdefineNgModule({ type: FrontCommonModule });
    /** @nocollapse */ FrontCommonModule.ɵinj = ɵɵdefineInjector({ factory: function FrontCommonModule_Factory(t) { return new (t || FrontCommonModule)(); }, imports: [[
                CommonModule,
                BusinessApiModule,
                TokenMaterialModule,
                RouterModule.forChild(routes)
            ]] });
    return FrontCommonModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FrontCommonModule, { declarations: [TokenTableComponent], imports: [CommonModule,
        BusinessApiModule,
        TokenMaterialModule, RouterModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(FrontCommonModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    BusinessApiModule,
                    TokenMaterialModule,
                    RouterModule.forChild(routes)
                ],
                declarations: [TokenTableComponent]
            }]
    }], null, null); })();

var Token = /** @class */ (function () {
    function Token(tokenId, tokenNumber, tokenStatus, device, wallet) {
        if (tokenId === void 0) { tokenId = ''; }
        if (tokenNumber === void 0) { tokenNumber = ''; }
        if (tokenStatus === void 0) { tokenStatus = {
            statusId: '',
            statusDescripcion: '',
        }; }
        if (device === void 0) { device = {
            deviceId: '',
            deviceNumber: '',
            deviceType: '',
            deviceDescription: '',
        }; }
        if (wallet === void 0) { wallet = {
            walleId: '',
            walleDescripcion: '',
        }; }
        this.tokenId = tokenId;
        this.tokenNumber = tokenNumber;
        this.tokenStatus = tokenStatus;
        this.device = device;
        this.wallet = wallet;
    }
    Token.Build = function (token) {
        if (!token) {
            return new Token();
        }
        return new Token(token.tokenId, token.tokenNumber, token.tokenStatus, token.device, token.wallet);
    };
    Token.prototype.toJSON = function () {
        var serialized = Object.assign(this);
        return serialized;
    };
    return Token;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { BusinessApiModule, FrontCommonModule, Token, TokenMaterialModule, TokenService, TokenTableComponent };
//# sourceMappingURL=omnichannel2-commercial-plataform-wallet-management-front-common.js.map
