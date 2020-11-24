(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@omnichannel2-commercial-plataform-wallet-management/front-common/config'), require('@angular/core'), require('@angular/router'), require('@omnichannel2-commercial-plataform-wallet-management/front-common')) :
    typeof define === 'function' && define.amd ? define('@omnichannel2-commercial-plataform-wallet-management/front-bfcl', ['exports', '@omnichannel2-commercial-plataform-wallet-management/front-common/config', '@angular/core', '@angular/router', '@omnichannel2-commercial-plataform-wallet-management/front-common'], factory) :
    (global = global || self, factory((global['omnichannel2-commercial-plataform-wallet-management'] = global['omnichannel2-commercial-plataform-wallet-management'] || {}, global['omnichannel2-commercial-plataform-wallet-management']['front-bfcl'] = {}), global.config, global.ng.core, global.ng.router, global.frontCommon));
}(this, (function (exports, config, core, router, frontCommon) { 'use strict';

    var WalletManagementBfclModule = /** @class */ (function () {
        function WalletManagementBfclModule() {
        }
        /** @nocollapse */ WalletManagementBfclModule.ɵmod = core.ɵɵdefineNgModule({ type: WalletManagementBfclModule });
        /** @nocollapse */ WalletManagementBfclModule.ɵinj = core.ɵɵdefineInjector({ factory: function WalletManagementBfclModule_Factory(t) { return new (t || WalletManagementBfclModule)(); }, imports: [[
                    frontCommon.FrontCommonModule
                ]] });
        return WalletManagementBfclModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(WalletManagementBfclModule, { imports: [frontCommon.FrontCommonModule] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(WalletManagementBfclModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        frontCommon.FrontCommonModule
                    ],
                }]
        }], null, null); })();

    var WalletManagementBfclModuleWrapper = /** @class */ (function () {
        function WalletManagementBfclModuleWrapper() {
        }
        WalletManagementBfclModuleWrapper.forLazy = function () {
            return WalletManagementBfclModule;
        };
        /** @nocollapse */ WalletManagementBfclModuleWrapper.ɵmod = core.ɵɵdefineNgModule({ type: WalletManagementBfclModuleWrapper });
        /** @nocollapse */ WalletManagementBfclModuleWrapper.ɵinj = core.ɵɵdefineInjector({ factory: function WalletManagementBfclModuleWrapper_Factory(t) { return new (t || WalletManagementBfclModuleWrapper)(); }, imports: [[
                    router.RouterModule.forChild([{
                            path: config.BASE_ROUTE.concat('/:customerId/:cardId'),
                            loadChildren: function () { return WalletManagementBfclModule; }
                        }])
                ]] });
        return WalletManagementBfclModuleWrapper;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(WalletManagementBfclModuleWrapper, { imports: [router.RouterModule] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(WalletManagementBfclModuleWrapper, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        router.RouterModule.forChild([{
                                path: config.BASE_ROUTE.concat('/:customerId/:cardId'),
                                loadChildren: (function () { return WalletManagementBfclModule; })
                            }])
                    ]
                }]
        }], null, null); })();

    Object.defineProperty(exports, 'walletManagementConfigProvider', {
        enumerable: true,
        get: function () {
            return config.walletManagementConfigProvider;
        }
    });
    exports.WalletManagementBfclModule = WalletManagementBfclModuleWrapper;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=omnichannel2-commercial-plataform-wallet-management-front-bfcl.umd.js.map
