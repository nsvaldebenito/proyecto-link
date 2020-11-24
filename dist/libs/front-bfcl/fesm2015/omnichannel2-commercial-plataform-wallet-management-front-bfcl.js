import { BASE_ROUTE } from '@omnichannel2-commercial-plataform-wallet-management/front-common/config';
export { walletManagementConfigProvider } from '@omnichannel2-commercial-plataform-wallet-management/front-common/config';
import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FrontCommonModule } from '@omnichannel2-commercial-plataform-wallet-management/front-common';

class WalletManagementBfclModule {
}
/** @nocollapse */ WalletManagementBfclModule.ɵmod = ɵɵdefineNgModule({ type: WalletManagementBfclModule });
/** @nocollapse */ WalletManagementBfclModule.ɵinj = ɵɵdefineInjector({ factory: function WalletManagementBfclModule_Factory(t) { return new (t || WalletManagementBfclModule)(); }, imports: [[
            FrontCommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(WalletManagementBfclModule, { imports: [FrontCommonModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(WalletManagementBfclModule, [{
        type: NgModule,
        args: [{
                imports: [
                    FrontCommonModule
                ],
            }]
    }], null, null); })();

class WalletManagementBfclModuleWrapper {
    static forLazy() {
        return WalletManagementBfclModule;
    }
}
/** @nocollapse */ WalletManagementBfclModuleWrapper.ɵmod = ɵɵdefineNgModule({ type: WalletManagementBfclModuleWrapper });
/** @nocollapse */ WalletManagementBfclModuleWrapper.ɵinj = ɵɵdefineInjector({ factory: function WalletManagementBfclModuleWrapper_Factory(t) { return new (t || WalletManagementBfclModuleWrapper)(); }, imports: [[
            RouterModule.forChild([{
                    path: BASE_ROUTE.concat('/:customerId/:cardId'),
                    loadChildren: () => WalletManagementBfclModule
                }])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(WalletManagementBfclModuleWrapper, { imports: [RouterModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(WalletManagementBfclModuleWrapper, [{
        type: NgModule,
        args: [{
                imports: [
                    RouterModule.forChild([{
                            path: BASE_ROUTE.concat('/:customerId/:cardId'),
                            loadChildren: (() => WalletManagementBfclModule)
                        }])
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { WalletManagementBfclModuleWrapper as WalletManagementBfclModule };
//# sourceMappingURL=omnichannel2-commercial-plataform-wallet-management-front-bfcl.js.map
