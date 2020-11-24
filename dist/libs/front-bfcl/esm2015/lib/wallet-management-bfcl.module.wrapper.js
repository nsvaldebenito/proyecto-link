import { BASE_ROUTE } from '@omnichannel2-commercial-plataform-wallet-management/front-common/config';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WalletManagementBfclModule } from './wallet-management-bfcl.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class WalletManagementBfclModuleWrapper {
    static forLazy() {
        return WalletManagementBfclModule;
    }
}
/** @nocollapse */ WalletManagementBfclModuleWrapper.ɵmod = i0.ɵɵdefineNgModule({ type: WalletManagementBfclModuleWrapper });
/** @nocollapse */ WalletManagementBfclModuleWrapper.ɵinj = i0.ɵɵdefineInjector({ factory: function WalletManagementBfclModuleWrapper_Factory(t) { return new (t || WalletManagementBfclModuleWrapper)(); }, imports: [[
            RouterModule.forChild([{
                    path: BASE_ROUTE.concat('/:customerId/:cardId'),
                    loadChildren: () => WalletManagementBfclModule
                }])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(WalletManagementBfclModuleWrapper, { imports: [i1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WalletManagementBfclModuleWrapper, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LW1hbmFnZW1lbnQtYmZjbC5tb2R1bGUud3JhcHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BvbW5pY2hhbm5lbDItY29tbWVyY2lhbC1wbGF0YWZvcm0td2FsbGV0LW1hbmFnZW1lbnQvZnJvbnQtYmZjbC8iLCJzb3VyY2VzIjpbImxpYi93YWxsZXQtbWFuYWdlbWVudC1iZmNsLm1vZHVsZS53cmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7O0FBVTdFLE1BQU0sT0FBTyxpQ0FBaUM7SUFDN0MsTUFBTSxDQUFDLE9BQU87UUFDYixPQUFRLDBCQUEwQixDQUFDO0lBQ3BDLENBQUM7O3FFQUhXLGlDQUFpQztpSkFBakMsaUNBQWlDLGtCQVBwQztZQUNSLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUM7b0JBQy9DLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQywwQkFBMEI7aUJBQzlDLENBQUMsQ0FBQztTQUNIO3dGQUVXLGlDQUFpQztrREFBakMsaUNBQWlDO2NBUjdDLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUN0QixJQUFJLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQzs0QkFDL0MsWUFBWSxHQUFFLEdBQUcsRUFBRSxDQUFDLDBCQUEwQixDQUFBO3lCQUM5QyxDQUFDLENBQUM7aUJBQ0g7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJBU0VfUk9VVEUgfSBmcm9tICdAb21uaWNoYW5uZWwyLWNvbW1lcmNpYWwtcGxhdGFmb3JtLXdhbGxldC1tYW5hZ2VtZW50L2Zyb250LWNvbW1vbi9jb25maWcnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBXYWxsZXRNYW5hZ2VtZW50QmZjbE1vZHVsZSB9IGZyb20gJy4vd2FsbGV0LW1hbmFnZW1lbnQtYmZjbC5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW3tcclxuXHRcdFx0cGF0aDogQkFTRV9ST1VURS5jb25jYXQoJy86Y3VzdG9tZXJJZC86Y2FyZElkJyksXHJcblx0XHRcdGxvYWRDaGlsZHJlbjogKCkgPT4gV2FsbGV0TWFuYWdlbWVudEJmY2xNb2R1bGVcclxuXHRcdH1dKVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFdhbGxldE1hbmFnZW1lbnRCZmNsTW9kdWxlV3JhcHBlciB7XHJcblx0c3RhdGljIGZvckxhenkoKSB7XHJcblx0XHRyZXR1cm4gIFdhbGxldE1hbmFnZW1lbnRCZmNsTW9kdWxlO1xyXG5cdH1cclxufVxyXG4iXX0=