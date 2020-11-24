import { BASE_ROUTE } from '@omnichannel2-commercial-plataform-wallet-management/front-common/config';
export { walletManagementConfigProvider } from '@omnichannel2-commercial-plataform-wallet-management/front-common/config';
import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

var WalletManagementBfclModuleLazy = /** @class */ (function () {
    function WalletManagementBfclModuleLazy() {
    }
    /** @nocollapse */ WalletManagementBfclModuleLazy.ɵmod = ɵɵdefineNgModule({ type: WalletManagementBfclModuleLazy });
    /** @nocollapse */ WalletManagementBfclModuleLazy.ɵinj = ɵɵdefineInjector({ factory: function WalletManagementBfclModuleLazy_Factory(t) { return new (t || WalletManagementBfclModuleLazy)(); }, imports: [[
                RouterModule.forChild([{
                        path: BASE_ROUTE.concat('/:customerId/:cardId'),
                        loadChildren: function () { return import('@omnichannel2-commercial-plataform-wallet-management/front-bfcl').then(function (m) { return m.WalletManagementBfclModule.forLazy(); }); }
                    }])
            ]] });
    return WalletManagementBfclModuleLazy;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(WalletManagementBfclModuleLazy, { imports: [RouterModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(WalletManagementBfclModuleLazy, [{
        type: NgModule,
        args: [{
                imports: [
                    RouterModule.forChild([{
                            path: BASE_ROUTE.concat('/:customerId/:cardId'),
                            loadChildren: (function () { return import('@omnichannel2-commercial-plataform-wallet-management/front-bfcl').then((function (m) { return m.WalletManagementBfclModule.forLazy(); })); })
                        }])
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { WalletManagementBfclModuleLazy };
//# sourceMappingURL=omnichannel2-commercial-plataform-wallet-management-front-bfcl-lazy.js.map
