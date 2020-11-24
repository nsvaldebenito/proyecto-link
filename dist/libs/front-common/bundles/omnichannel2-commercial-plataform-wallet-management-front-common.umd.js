(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/router'), require('@angular/core'), require('@angular/common/http'), require('@omnichannel2-commercial-plataform-wallet-management/front-common/config'), require('rxjs'), require('rxjs/operators'), require('@angular/common'), require('@angular/material/progress-spinner'), require('@angular/material/table'), require('subsink')) :
    typeof define === 'function' && define.amd ? define('@omnichannel2-commercial-plataform-wallet-management/front-common', ['exports', '@angular/router', '@angular/core', '@angular/common/http', '@omnichannel2-commercial-plataform-wallet-management/front-common/config', 'rxjs', 'rxjs/operators', '@angular/common', '@angular/material/progress-spinner', '@angular/material/table', 'subsink'], factory) :
    (global = global || self, factory((global['omnichannel2-commercial-plataform-wallet-management'] = global['omnichannel2-commercial-plataform-wallet-management'] || {}, global['omnichannel2-commercial-plataform-wallet-management']['front-common'] = {}), global.ng.router, global.ng.core, global.ng.common.http, global['omnichannel2-commercial-plataform-wallet-management']['front-common'].config, global.rxjs, global.rxjs.operators, global.ng.common, global.ng.material.progressSpinner, global.ng.material.table, global.subsink));
}(this, (function (exports, router, core, http, config, rxjs, operators, common, progressSpinner, table, subsink) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var EndpointResolverInterceptor = /** @class */ (function () {
        function EndpointResolverInterceptor(config) {
            this.config = config;
        }
        EndpointResolverInterceptor.prototype.intercept = function (req, next) {
            return next.handle(req.clone({
                url: this.config.apiDomain + "/omnichannel2/wallet-management" + req.url
            }));
        };
        /** @nocollapse */ EndpointResolverInterceptor.ɵfac = function EndpointResolverInterceptor_Factory(t) { return new (t || EndpointResolverInterceptor)(core.ɵɵinject(config.WalletManagementConfig)); };
        /** @nocollapse */ EndpointResolverInterceptor.ɵprov = core.ɵɵdefineInjectable({ token: EndpointResolverInterceptor, factory: EndpointResolverInterceptor.ɵfac });
        return EndpointResolverInterceptor;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(EndpointResolverInterceptor, [{
            type: core.Injectable
        }], function () { return [{ type: config.WalletManagementConfig }]; }, null); })();

    var ErrorHandlerInterceptor = /** @class */ (function () {
        function ErrorHandlerInterceptor() {
        }
        ErrorHandlerInterceptor.prototype.intercept = function (req, next) {
            return next.handle(req).pipe(operators.mergeMap(function (event) { return rxjs.iif(function () { return event instanceof http.HttpResponse; }, rxjs.of(event).pipe(operators.mergeMap(function (response) {
                var _a, _b, _c, _d;
                return ((_a = response.body) === null || _a === void 0 ? void 0 : _a.code) === 'ok' && ((_c = (_b = response.body) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.responseCode) === 'OK' ?
                    rxjs.of(response) : rxjs.throwError((_d = response.body) === null || _d === void 0 ? void 0 : _d.message.respuesta);
            })), rxjs.of(event)); }));
        };
        /** @nocollapse */ ErrorHandlerInterceptor.ɵfac = function ErrorHandlerInterceptor_Factory(t) { return new (t || ErrorHandlerInterceptor)(); };
        /** @nocollapse */ ErrorHandlerInterceptor.ɵprov = core.ɵɵdefineInjectable({ token: ErrorHandlerInterceptor, factory: ErrorHandlerInterceptor.ɵfac });
        return ErrorHandlerInterceptor;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ErrorHandlerInterceptor, [{
            type: core.Injectable
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
        /** @nocollapse */ BackendHeadersInterceptor.ɵprov = core.ɵɵdefineInjectable({ token: BackendHeadersInterceptor, factory: BackendHeadersInterceptor.ɵfac });
        return BackendHeadersInterceptor;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(BackendHeadersInterceptor, [{
            type: core.Injectable
        }], null, null); })();

    var HTTP_INTERCEPTORS = new core.InjectionToken('HTTP_INTERCEPTORS');
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
        /** @nocollapse */ BusinessApiModule.ɵmod = core.ɵɵdefineNgModule({ type: BusinessApiModule });
        /** @nocollapse */ BusinessApiModule.ɵinj = core.ɵɵdefineInjector({ factory: function BusinessApiModule_Factory(t) { return new (t || BusinessApiModule)(); }, providers: __spread([{
                    provide: http.HttpClient,
                    useClass: http.HttpClient
                }, {
                    provide: http.HttpHandler,
                    useClass: http.ɵHttpInterceptingHandler
                }, {
                    provide: http.HTTP_INTERCEPTORS,
                    deps: [core.Injector, HTTP_INTERCEPTORS],
                    useFactory: (function (injector, interceptors) { return __spread(interceptors, injector.parent.get(http.HTTP_INTERCEPTORS)); })
                }], INTERCEPTORS_PROVIDERS) });
        return BusinessApiModule;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(BusinessApiModule, [{
            type: core.NgModule,
            args: [{
                    providers: __spread([{
                            provide: http.HttpClient,
                            useClass: http.HttpClient
                        }, {
                            provide: http.HttpHandler,
                            useClass: http.ɵHttpInterceptingHandler
                        }, {
                            provide: http.HTTP_INTERCEPTORS,
                            deps: [core.Injector, HTTP_INTERCEPTORS],
                            useFactory: (function (injector, interceptors) { return __spread(interceptors, injector.parent.get(http.HTTP_INTERCEPTORS)); })
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
                return rxjs.throwError('Customer id is not set');
            }
            if (cardId === null) {
                return rxjs.throwError('Card id is not set');
            }
            this.itemsTokens$ = rxjs.of(this.tokens);
            return this.itemsTokens$;
            // return this.httpClient.get<ITokens>('/customers/${customerId}/${cardId}/card-tokens')
        };
        /** @nocollapse */ TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(core.ɵɵinject(http.HttpClient), core.ɵɵinject(config.WalletManagementConfig)); };
        /** @nocollapse */ TokenService.ɵprov = core.ɵɵdefineInjectable({ token: TokenService, factory: TokenService.ɵfac, providedIn: BusinessApiModule });
        return TokenService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(TokenService, [{
            type: core.Injectable,
            args: [{
                    providedIn: BusinessApiModule
                }]
        }], function () { return [{ type: http.HttpClient }, { type: config.WalletManagementConfig }]; }, null); })();

    var modules = [
        table.MatTableModule,
        progressSpinner.MatProgressSpinnerModule
    ];
    var TokenMaterialModule = /** @class */ (function () {
        function TokenMaterialModule() {
        }
        /** @nocollapse */ TokenMaterialModule.ɵmod = core.ɵɵdefineNgModule({ type: TokenMaterialModule });
        /** @nocollapse */ TokenMaterialModule.ɵinj = core.ɵɵdefineInjector({ factory: function TokenMaterialModule_Factory(t) { return new (t || TokenMaterialModule)(); }, imports: [table.MatTableModule,
                progressSpinner.MatProgressSpinnerModule] });
        return TokenMaterialModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(TokenMaterialModule, { exports: [table.MatTableModule,
            progressSpinner.MatProgressSpinnerModule] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(TokenMaterialModule, [{
            type: core.NgModule,
            args: [{
                    exports: modules,
                }]
        }], null, null); })();

    function TokenTableComponent_div_8_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "mat-spinner");
    } }
    function TokenTableComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 16);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r37 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r37.errorText, " ");
    } }
    function TokenTableComponent_div_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 13);
        core.ɵɵtemplate(1, TokenTableComponent_div_8_mat_spinner_1_Template, 1, 0, "mat-spinner", 14);
        core.ɵɵtemplate(2, TokenTableComponent_div_8_div_2_Template, 2, 1, "div", 15);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var loading_r35 = ctx.ngIf;
        var ctx_r22 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", loading_r35);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r22.hasError);
    } }
    function TokenTableComponent_th_13_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "th", 17);
        core.ɵɵtext(1, " Wallet Descripcion ");
        core.ɵɵelementEnd();
    } }
    function TokenTableComponent_td_14_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "td", 18);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r38 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", row_r38.wallet.walleDescripcion, " ");
    } }
    function TokenTableComponent_th_16_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "th", 17);
        core.ɵɵtext(1, " Device Type ");
        core.ɵɵelementEnd();
    } }
    function TokenTableComponent_td_17_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "td", 18);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r39 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", row_r39.device.deviceType, " ");
    } }
    function TokenTableComponent_th_19_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "th", 17);
        core.ɵɵtext(1, " Device Description ");
        core.ɵɵelementEnd();
    } }
    function TokenTableComponent_td_20_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "td", 18);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r40 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", row_r40.device.deviceDescription, " ");
    } }
    function TokenTableComponent_th_22_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "th", 17);
        core.ɵɵtext(1, " Token Number ");
        core.ɵɵelementEnd();
    } }
    function TokenTableComponent_td_23_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "td", 18);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r41 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", row_r41.tokenNumber, " ");
    } }
    function TokenTableComponent_th_25_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "th", 17);
        core.ɵɵtext(1, " Token Status ");
        core.ɵɵelementEnd();
    } }
    function TokenTableComponent_td_26_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "td", 18);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r42 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", row_r42.tokenStatus.statusDescripcion, " ");
    } }
    function TokenTableComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "tr", 19);
    } }
    function TokenTableComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "tr", 20);
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
            this.subs = new subsink.SubSink();
            this.useNgRxData = false;
            this.isLoadingResults$ = new rxjs.BehaviorSubject(true);
            this.refresh$ = new rxjs.Subject();
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
            this.items$ = rxjs.merge(this.refresh$).pipe(operators.startWith({}), operators.switchMap(function () {
                _this.isLoadingResults$.next(true);
                return _this.getTokens(_this.customerId, _this.cardId);
            }), 
            //map((results: { message: { response: IToken[] } } ) => {
            operators.map(function (results) {
                _this.isLoadingResults$.next(false);
                _this.hasError = false;
                //return results.message.response;
                return results.data;
            }), operators.catchError(function (err) {
                _this.isLoadingResults$.next(false);
                _this.hasError = true;
                _this.errorText = err;
                return rxjs.of([]);
            }));
            this.items$.subscribe();
        };
        /** @nocollapse */ TokenTableComponent.ɵfac = function TokenTableComponent_Factory(t) { return new (t || TokenTableComponent)(core.ɵɵdirectiveInject(TokenService), core.ɵɵdirectiveInject(router.ActivatedRoute)); };
        /** @nocollapse */ TokenTableComponent.ɵcmp = core.ɵɵdefineComponent({ type: TokenTableComponent, selectors: [["omnichannel2-commercial-plataform-wallet-management-token-table"]], decls: 29, vars: 10, consts: [[2, "text-align", "center"], [1, "mat-elevation-z8"], ["class", "loading-shade", 4, "ngIf"], ["mat-table", "", 1, "full-width", 3, "dataSource"], ["matColumnDef", "walletDescripcion"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "deviceType"], ["matColumnDef", "deviceDescription"], ["matColumnDef", "TokenNumber"], ["matColumnDef", "tokenStatus"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "loading-shade"], [4, "ngIf"], ["class", "error", 4, "ngIf"], [1, "error"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TokenTableComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementStart(1, "h1");
                core.ɵɵtext(2, " Gestion de Tarjetas ");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(3, "h4");
                core.ɵɵtext(4);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(5, "h4");
                core.ɵɵtext(6);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(7, "div", 1);
                core.ɵɵtemplate(8, TokenTableComponent_div_8_Template, 3, 2, "div", 2);
                core.ɵɵpipe(9, "async");
                core.ɵɵelementStart(10, "table", 3);
                core.ɵɵpipe(11, "async");
                core.ɵɵelementContainerStart(12, 4);
                core.ɵɵtemplate(13, TokenTableComponent_th_13_Template, 2, 0, "th", 5);
                core.ɵɵtemplate(14, TokenTableComponent_td_14_Template, 2, 1, "td", 6);
                core.ɵɵelementContainerEnd();
                core.ɵɵelementContainerStart(15, 7);
                core.ɵɵtemplate(16, TokenTableComponent_th_16_Template, 2, 0, "th", 5);
                core.ɵɵtemplate(17, TokenTableComponent_td_17_Template, 2, 1, "td", 6);
                core.ɵɵelementContainerEnd();
                core.ɵɵelementContainerStart(18, 8);
                core.ɵɵtemplate(19, TokenTableComponent_th_19_Template, 2, 0, "th", 5);
                core.ɵɵtemplate(20, TokenTableComponent_td_20_Template, 2, 1, "td", 6);
                core.ɵɵelementContainerEnd();
                core.ɵɵelementContainerStart(21, 9);
                core.ɵɵtemplate(22, TokenTableComponent_th_22_Template, 2, 0, "th", 5);
                core.ɵɵtemplate(23, TokenTableComponent_td_23_Template, 2, 1, "td", 6);
                core.ɵɵelementContainerEnd();
                core.ɵɵelementContainerStart(24, 10);
                core.ɵɵtemplate(25, TokenTableComponent_th_25_Template, 2, 0, "th", 5);
                core.ɵɵtemplate(26, TokenTableComponent_td_26_Template, 2, 1, "td", 6);
                core.ɵɵelementContainerEnd();
                core.ɵɵtemplate(27, TokenTableComponent_tr_27_Template, 1, 0, "tr", 11);
                core.ɵɵtemplate(28, TokenTableComponent_tr_28_Template, 1, 0, "tr", 12);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(4);
                core.ɵɵtextInterpolate1(" CustomerId: ", ctx.customerId, "\n");
                core.ɵɵadvance(2);
                core.ɵɵtextInterpolate1(" CardID: ", ctx.cardId, "\n");
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", core.ɵɵpipeBind1(9, 6, ctx.loading$));
                core.ɵɵadvance(2);
                core.ɵɵproperty("dataSource", core.ɵɵpipeBind1(11, 8, ctx.items$));
                core.ɵɵadvance(17);
                core.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                core.ɵɵadvance(1);
                core.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            } }, directives: [common.NgIf, table.MatTable, table.MatColumnDef, table.MatHeaderCellDef, table.MatCellDef, table.MatHeaderRowDef, table.MatRowDef, progressSpinner.MatSpinner, table.MatHeaderCell, table.MatCell, table.MatHeaderRow, table.MatRow], pipes: [common.AsyncPipe], styles: ["[_nghost-%COMP%]{display:block;font-family:sans-serif;min-width:300px;max-width:600px;margin:50px auto}h1[_ngcontent-%COMP%]{text-align:center;margin-left:18px;font-size:24px}h2[_ngcontent-%COMP%]{text-align:center;font-size:20px;margin:40px 0 10px}.loading-shade[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:56px;right:0;background:rgba(0,0,0,.15);z-index:1;display:flex;align-items:center;justify-content:center}.full-width[_ngcontent-%COMP%]{width:100%}.mat-column-TokenNumber[_ngcontent-%COMP%]{flex:0 0 28%!important;width:28%!important}"] });
        return TokenTableComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(TokenTableComponent, [{
            type: core.Component,
            args: [{
                    selector: 'omnichannel2-commercial-plataform-wallet-management-token-table',
                    templateUrl: './token-table.component.html',
                    styleUrls: ['./token-table.component.css']
                }]
        }], function () { return [{ type: TokenService }, { type: router.ActivatedRoute }]; }, null); })();

    var routes = [
        {
            path: '',
            component: TokenTableComponent
        }
    ];
    var FrontCommonModule = /** @class */ (function () {
        function FrontCommonModule() {
        }
        /** @nocollapse */ FrontCommonModule.ɵmod = core.ɵɵdefineNgModule({ type: FrontCommonModule });
        /** @nocollapse */ FrontCommonModule.ɵinj = core.ɵɵdefineInjector({ factory: function FrontCommonModule_Factory(t) { return new (t || FrontCommonModule)(); }, imports: [[
                    common.CommonModule,
                    BusinessApiModule,
                    TokenMaterialModule,
                    router.RouterModule.forChild(routes)
                ]] });
        return FrontCommonModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(FrontCommonModule, { declarations: [TokenTableComponent], imports: [common.CommonModule,
            BusinessApiModule,
            TokenMaterialModule, router.RouterModule] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(FrontCommonModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        BusinessApiModule,
                        TokenMaterialModule,
                        router.RouterModule.forChild(routes)
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

    exports.BusinessApiModule = BusinessApiModule;
    exports.FrontCommonModule = FrontCommonModule;
    exports.Token = Token;
    exports.TokenMaterialModule = TokenMaterialModule;
    exports.TokenService = TokenService;
    exports.TokenTableComponent = TokenTableComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=omnichannel2-commercial-plataform-wallet-management-front-common.umd.js.map
