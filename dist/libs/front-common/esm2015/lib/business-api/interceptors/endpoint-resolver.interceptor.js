import { Injectable } from '@angular/core';
import { WalletManagementConfig } from '@omnichannel2-commercial-plataform-wallet-management/front-common/config';
import * as i0 from "@angular/core";
import * as i1 from "@omnichannel2-commercial-plataform-wallet-management/front-common/config";
export class EndpointResolverInterceptor {
    constructor(config) {
        this.config = config;
    }
    intercept(req, next) {
        return next.handle(req.clone({
            url: `${this.config.apiDomain}/omnichannel2/wallet-management${req.url}`
        }));
    }
}
/** @nocollapse */ EndpointResolverInterceptor.ɵfac = function EndpointResolverInterceptor_Factory(t) { return new (t || EndpointResolverInterceptor)(i0.ɵɵinject(i1.WalletManagementConfig)); };
/** @nocollapse */ EndpointResolverInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: EndpointResolverInterceptor, factory: EndpointResolverInterceptor.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EndpointResolverInterceptor, [{
        type: Injectable
    }], function () { return [{ type: i1.WalletManagementConfig }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kcG9pbnQtcmVzb2x2ZXIuaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ab21uaWNoYW5uZWwyLWNvbW1lcmNpYWwtcGxhdGFmb3JtLXdhbGxldC1tYW5hZ2VtZW50L2Zyb250LWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9idXNpbmVzcy1hcGkvaW50ZXJjZXB0b3JzL2VuZHBvaW50LXJlc29sdmVyLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEVBQTBFLENBQUM7OztBQUdsSCxNQUFNLE9BQU8sMkJBQTJCO0lBRXZDLFlBQW9CLE1BQThCO1FBQTlCLFdBQU0sR0FBTixNQUFNLENBQXdCO0lBQUcsQ0FBQztJQUV0RCxTQUFTLENBQUMsR0FBcUIsRUFBRSxJQUFpQjtRQUNqRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUN6QixHQUFHLEVBQUUsR0FBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVUsa0NBQW1DLEdBQUcsQ0FBQyxHQUFJLEVBQUU7U0FDL0UsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztzR0FSVywyQkFBMkI7bUVBQTNCLDJCQUEyQixXQUEzQiwyQkFBMkI7a0RBQTNCLDJCQUEyQjtjQUR2QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBXYWxsZXRNYW5hZ2VtZW50Q29uZmlnIH0gZnJvbSAnQG9tbmljaGFubmVsMi1jb21tZXJjaWFsLXBsYXRhZm9ybS13YWxsZXQtbWFuYWdlbWVudC9mcm9udC1jb21tb24vY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVuZHBvaW50UmVzb2x2ZXJJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBXYWxsZXRNYW5hZ2VtZW50Q29uZmlnKSB7fVxyXG5cclxuXHRpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuXHRcdHJldHVybiBuZXh0LmhhbmRsZShyZXEuY2xvbmUoe1xyXG4gICAgICB1cmw6IGAkeyB0aGlzLmNvbmZpZy5hcGlEb21haW4gfS9vbW5pY2hhbm5lbDIvd2FsbGV0LW1hbmFnZW1lbnQkeyByZXEudXJsIH1gXHJcblx0XHR9KSk7XHJcblx0fVxyXG59XHJcbiJdfQ==