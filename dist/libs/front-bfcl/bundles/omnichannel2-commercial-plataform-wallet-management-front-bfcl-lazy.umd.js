(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@omnichannel2-commercial-plataform-wallet-management/front-common/config'), require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('@omnichannel2-commercial-plataform-wallet-management/front-bfcl/lazy', ['exports', '@omnichannel2-commercial-plataform-wallet-management/front-common/config', '@angular/core', '@angular/router'], factory) :
    (global = global || self, factory((global['omnichannel2-commercial-plataform-wallet-management'] = global['omnichannel2-commercial-plataform-wallet-management'] || {}, global['omnichannel2-commercial-plataform-wallet-management']['front-bfcl'] = global['omnichannel2-commercial-plataform-wallet-management']['front-bfcl'] || {}, global['omnichannel2-commercial-plataform-wallet-management']['front-bfcl'].lazy = {}), global.config, global.ng.core, global.ng.router));
}(this, (function (exports, config, core, router) { 'use strict';

    var WalletManagementBfclModuleLazy = /** @class */ (function () {
        function WalletManagementBfclModuleLazy() {
        }
        /** @nocollapse */ WalletManagementBfclModuleLazy.ɵmod = core.ɵɵdefineNgModule({ type: WalletManagementBfclModuleLazy });
        /** @nocollapse */ WalletManagementBfclModuleLazy.ɵinj = core.ɵɵdefineInjector({ factory: function WalletManagementBfclModuleLazy_Factory(t) { return new (t || WalletManagementBfclModuleLazy)(); }, imports: [[
                    router.RouterModule.forChild([{
                            path: config.BASE_ROUTE.concat('/:customerId/:cardId'),
                            loadChildren: function () { return import('@omnichannel2-commercial-plataform-wallet-management/front-bfcl').then(function (m) { return m.WalletManagementBfclModule.forLazy(); }); }
                        }])
                ]] });
        return WalletManagementBfclModuleLazy;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(WalletManagementBfclModuleLazy, { imports: [router.RouterModule] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(WalletManagementBfclModuleLazy, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        router.RouterModule.forChild([{
                                path: config.BASE_ROUTE.concat('/:customerId/:cardId'),
                                loadChildren: (function () { return import('@omnichannel2-commercial-plataform-wallet-management/front-bfcl').then((function (m) { return m.WalletManagementBfclModule.forLazy(); })); })
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
    exports.WalletManagementBfclModuleLazy = WalletManagementBfclModuleLazy;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=omnichannel2-commercial-plataform-wallet-management-front-bfcl-lazy.umd.js.map
