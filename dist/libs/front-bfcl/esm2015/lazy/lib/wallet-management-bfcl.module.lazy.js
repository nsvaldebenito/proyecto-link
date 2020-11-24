import { BASE_ROUTE } from '@omnichannel2-commercial-plataform-wallet-management/front-common/config';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class WalletManagementBfclModuleLazy {
}
/** @nocollapse */ WalletManagementBfclModuleLazy.ɵmod = i0.ɵɵdefineNgModule({ type: WalletManagementBfclModuleLazy });
/** @nocollapse */ WalletManagementBfclModuleLazy.ɵinj = i0.ɵɵdefineInjector({ factory: function WalletManagementBfclModuleLazy_Factory(t) { return new (t || WalletManagementBfclModuleLazy)(); }, imports: [[
            RouterModule.forChild([{
                    path: BASE_ROUTE.concat('/:customerId/:cardId'),
                    loadChildren: () => import('@omnichannel2-commercial-plataform-wallet-management/front-bfcl').then(m => m.WalletManagementBfclModule.forLazy())
                }])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(WalletManagementBfclModuleLazy, { imports: [i1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WalletManagementBfclModuleLazy, [{
        type: NgModule,
        args: [{
                imports: [
                    RouterModule.forChild([{
                            path: BASE_ROUTE.concat('/:customerId/:cardId'),
                            loadChildren: (() => import('@omnichannel2-commercial-plataform-wallet-management/front-bfcl').then((m => m.WalletManagementBfclModule.forLazy())))
                        }])
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LW1hbmFnZW1lbnQtYmZjbC5tb2R1bGUubGF6eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BvbW5pY2hhbm5lbDItY29tbWVyY2lhbC1wbGF0YWZvcm0td2FsbGV0LW1hbmFnZW1lbnQvZnJvbnQtYmZjbC9sYXp5LyIsInNvdXJjZXMiOlsibGliL3dhbGxldC1tYW5hZ2VtZW50LWJmY2wubW9kdWxlLmxhenkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFVL0MsTUFBTSxPQUFPLDhCQUE4Qjs7a0VBQTlCLDhCQUE4QjsySUFBOUIsOEJBQThCLGtCQVBqQztZQUNOLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUM7b0JBQy9DLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsaUVBQWlFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsMEJBQTBCLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQy9JLENBQUMsQ0FBQztTQUNIO3dGQUVXLDhCQUE4QjtrREFBOUIsOEJBQThCO2NBUjFDLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ04sWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUN4QixJQUFJLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQzs0QkFDL0MsWUFBWSxHQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLEVBQUUsRUFBQyxDQUFBO3lCQUMvSSxDQUFDLENBQUM7aUJBQ0g7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJBU0VfUk9VVEUgfSBmcm9tICdAb21uaWNoYW5uZWwyLWNvbW1lcmNpYWwtcGxhdGFmb3JtLXdhbGxldC1tYW5hZ2VtZW50L2Zyb250LWNvbW1vbi9jb25maWcnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcbiAgIFx0Um91dGVyTW9kdWxlLmZvckNoaWxkKFt7XHJcblx0XHRcdHBhdGg6IEJBU0VfUk9VVEUuY29uY2F0KCcvOmN1c3RvbWVySWQvOmNhcmRJZCcpLFxyXG5cdFx0XHRsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnQG9tbmljaGFubmVsMi1jb21tZXJjaWFsLXBsYXRhZm9ybS13YWxsZXQtbWFuYWdlbWVudC9mcm9udC1iZmNsJykudGhlbihtID0+IG0uV2FsbGV0TWFuYWdlbWVudEJmY2xNb2R1bGUuZm9yTGF6eSgpKVxyXG5cdFx0fV0pXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2FsbGV0TWFuYWdlbWVudEJmY2xNb2R1bGVMYXp5IHt9XHJcblxyXG4iXX0=