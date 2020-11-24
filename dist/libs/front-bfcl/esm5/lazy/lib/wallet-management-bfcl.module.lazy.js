import { BASE_ROUTE } from '@omnichannel2-commercial-plataform-wallet-management/front-common/config';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
var WalletManagementBfclModuleLazy = /** @class */ (function () {
    function WalletManagementBfclModuleLazy() {
    }
    /** @nocollapse */ WalletManagementBfclModuleLazy.ɵmod = i0.ɵɵdefineNgModule({ type: WalletManagementBfclModuleLazy });
    /** @nocollapse */ WalletManagementBfclModuleLazy.ɵinj = i0.ɵɵdefineInjector({ factory: function WalletManagementBfclModuleLazy_Factory(t) { return new (t || WalletManagementBfclModuleLazy)(); }, imports: [[
                RouterModule.forChild([{
                        path: BASE_ROUTE.concat('/:customerId/:cardId'),
                        loadChildren: function () { return import('@omnichannel2-commercial-plataform-wallet-management/front-bfcl').then(function (m) { return m.WalletManagementBfclModule.forLazy(); }); }
                    }])
            ]] });
    return WalletManagementBfclModuleLazy;
}());
export { WalletManagementBfclModuleLazy };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(WalletManagementBfclModuleLazy, { imports: [i1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WalletManagementBfclModuleLazy, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LW1hbmFnZW1lbnQtYmZjbC5tb2R1bGUubGF6eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BvbW5pY2hhbm5lbDItY29tbWVyY2lhbC1wbGF0YWZvcm0td2FsbGV0LW1hbmFnZW1lbnQvZnJvbnQtYmZjbC9sYXp5LyIsInNvdXJjZXMiOlsibGliL3dhbGxldC1tYW5hZ2VtZW50LWJmY2wubW9kdWxlLmxhenkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFFL0M7SUFBQTtLQVE4QztzRUFBakMsOEJBQThCOytJQUE5Qiw4QkFBOEIsa0JBUGpDO2dCQUNOLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDeEIsSUFBSSxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUM7d0JBQy9DLFlBQVksRUFBRSxjQUFNLE9BQUEsTUFBTSxDQUFDLGlFQUFpRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLE9BQU8sRUFBRSxFQUF0QyxDQUFzQyxDQUFDLEVBQTNILENBQTJIO3FCQUMvSSxDQUFDLENBQUM7YUFDSDt5Q0FWRjtDQVk4QyxBQVI5QyxJQVE4QztTQUFqQyw4QkFBOEI7d0ZBQTlCLDhCQUE4QjtrREFBOUIsOEJBQThCO2NBUjFDLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ04sWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUN4QixJQUFJLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQzs0QkFDL0MsWUFBWSxHQUFFLGNBQU0sT0FBQSxNQUFNLENBQUMsaUVBQWlFLENBQUMsQ0FBQyxJQUFJLEVBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsMEJBQTBCLENBQUMsT0FBTyxFQUFFLEVBQXRDLENBQXNDLEVBQUMsRUFBM0gsQ0FBMkgsQ0FBQTt5QkFDL0ksQ0FBQyxDQUFDO2lCQUNIO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCQVNFX1JPVVRFIH0gZnJvbSAnQG9tbmljaGFubmVsMi1jb21tZXJjaWFsLXBsYXRhZm9ybS13YWxsZXQtbWFuYWdlbWVudC9mcm9udC1jb21tb24vY29uZmlnJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG4gICBcdFJvdXRlck1vZHVsZS5mb3JDaGlsZChbe1xyXG5cdFx0XHRwYXRoOiBCQVNFX1JPVVRFLmNvbmNhdCgnLzpjdXN0b21lcklkLzpjYXJkSWQnKSxcclxuXHRcdFx0bG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJ0BvbW5pY2hhbm5lbDItY29tbWVyY2lhbC1wbGF0YWZvcm0td2FsbGV0LW1hbmFnZW1lbnQvZnJvbnQtYmZjbCcpLnRoZW4obSA9PiBtLldhbGxldE1hbmFnZW1lbnRCZmNsTW9kdWxlLmZvckxhenkoKSlcclxuXHRcdH1dKVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFdhbGxldE1hbmFnZW1lbnRCZmNsTW9kdWxlTGF6eSB7fVxyXG5cclxuIl19