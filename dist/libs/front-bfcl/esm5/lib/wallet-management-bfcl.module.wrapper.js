import { BASE_ROUTE } from '@omnichannel2-commercial-plataform-wallet-management/front-common/config';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WalletManagementBfclModule } from './wallet-management-bfcl.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
var WalletManagementBfclModuleWrapper = /** @class */ (function () {
    function WalletManagementBfclModuleWrapper() {
    }
    WalletManagementBfclModuleWrapper.forLazy = function () {
        return WalletManagementBfclModule;
    };
    /** @nocollapse */ WalletManagementBfclModuleWrapper.ɵmod = i0.ɵɵdefineNgModule({ type: WalletManagementBfclModuleWrapper });
    /** @nocollapse */ WalletManagementBfclModuleWrapper.ɵinj = i0.ɵɵdefineInjector({ factory: function WalletManagementBfclModuleWrapper_Factory(t) { return new (t || WalletManagementBfclModuleWrapper)(); }, imports: [[
                RouterModule.forChild([{
                        path: BASE_ROUTE.concat('/:customerId/:cardId'),
                        loadChildren: function () { return WalletManagementBfclModule; }
                    }])
            ]] });
    return WalletManagementBfclModuleWrapper;
}());
export { WalletManagementBfclModuleWrapper };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(WalletManagementBfclModuleWrapper, { imports: [i1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WalletManagementBfclModuleWrapper, [{
        type: NgModule,
        args: [{
                imports: [
                    RouterModule.forChild([{
                            path: BASE_ROUTE.concat('/:customerId/:cardId'),
                            loadChildren: (function () { return WalletManagementBfclModule; })
                        }])
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LW1hbmFnZW1lbnQtYmZjbC5tb2R1bGUud3JhcHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BvbW5pY2hhbm5lbDItY29tbWVyY2lhbC1wbGF0YWZvcm0td2FsbGV0LW1hbmFnZW1lbnQvZnJvbnQtYmZjbC8iLCJzb3VyY2VzIjpbImxpYi93YWxsZXQtbWFuYWdlbWVudC1iZmNsLm1vZHVsZS53cmFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7O0FBRTdFO0lBQUE7S0FZQztJQUhPLHlDQUFPLEdBQWQ7UUFDQyxPQUFRLDBCQUEwQixDQUFDO0lBQ3BDLENBQUM7eUVBSFcsaUNBQWlDO3FKQUFqQyxpQ0FBaUMsa0JBUHBDO2dCQUNSLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDdEIsSUFBSSxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUM7d0JBQy9DLFlBQVksRUFBRSxjQUFNLE9BQUEsMEJBQTBCLEVBQTFCLENBQTBCO3FCQUM5QyxDQUFDLENBQUM7YUFDSDs0Q0FYRjtDQWlCQyxBQVpELElBWUM7U0FKWSxpQ0FBaUM7d0ZBQWpDLGlDQUFpQztrREFBakMsaUNBQWlDO2NBUjdDLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUN0QixJQUFJLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQzs0QkFDL0MsWUFBWSxHQUFFLGNBQU0sT0FBQSwwQkFBMEIsRUFBMUIsQ0FBMEIsQ0FBQTt5QkFDOUMsQ0FBQyxDQUFDO2lCQUNIO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCQVNFX1JPVVRFIH0gZnJvbSAnQG9tbmljaGFubmVsMi1jb21tZXJjaWFsLXBsYXRhZm9ybS13YWxsZXQtbWFuYWdlbWVudC9mcm9udC1jb21tb24vY29uZmlnJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgV2FsbGV0TWFuYWdlbWVudEJmY2xNb2R1bGUgfSBmcm9tICcuL3dhbGxldC1tYW5hZ2VtZW50LWJmY2wubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Um91dGVyTW9kdWxlLmZvckNoaWxkKFt7XHJcblx0XHRcdHBhdGg6IEJBU0VfUk9VVEUuY29uY2F0KCcvOmN1c3RvbWVySWQvOmNhcmRJZCcpLFxyXG5cdFx0XHRsb2FkQ2hpbGRyZW46ICgpID0+IFdhbGxldE1hbmFnZW1lbnRCZmNsTW9kdWxlXHJcblx0XHR9XSlcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXYWxsZXRNYW5hZ2VtZW50QmZjbE1vZHVsZVdyYXBwZXIge1xyXG5cdHN0YXRpYyBmb3JMYXp5KCkge1xyXG5cdFx0cmV0dXJuICBXYWxsZXRNYW5hZ2VtZW50QmZjbE1vZHVsZTtcclxuXHR9XHJcbn1cclxuIl19