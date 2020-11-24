import { Injectable } from '@angular/core';
import { WalletManagementConfig } from '@omnichannel2-commercial-plataform-wallet-management/front-common/config';
import * as i0 from "@angular/core";
import * as i1 from "@omnichannel2-commercial-plataform-wallet-management/front-common/config";
var EndpointResolverInterceptor = /** @class */ (function () {
    function EndpointResolverInterceptor(config) {
        this.config = config;
    }
    EndpointResolverInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req.clone({
            url: this.config.apiDomain + "/omnichannel2/wallet-management" + req.url
        }));
    };
    /** @nocollapse */ EndpointResolverInterceptor.ɵfac = function EndpointResolverInterceptor_Factory(t) { return new (t || EndpointResolverInterceptor)(i0.ɵɵinject(i1.WalletManagementConfig)); };
    /** @nocollapse */ EndpointResolverInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: EndpointResolverInterceptor, factory: EndpointResolverInterceptor.ɵfac });
    return EndpointResolverInterceptor;
}());
export { EndpointResolverInterceptor };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EndpointResolverInterceptor, [{
        type: Injectable
    }], function () { return [{ type: i1.WalletManagementConfig }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kcG9pbnQtcmVzb2x2ZXIuaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ab21uaWNoYW5uZWwyLWNvbW1lcmNpYWwtcGxhdGFmb3JtLXdhbGxldC1tYW5hZ2VtZW50L2Zyb250LWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9idXNpbmVzcy1hcGkvaW50ZXJjZXB0b3JzL2VuZHBvaW50LXJlc29sdmVyLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEVBQTBFLENBQUM7OztBQUVsSDtJQUdDLHFDQUFvQixNQUE4QjtRQUE5QixXQUFNLEdBQU4sTUFBTSxDQUF3QjtJQUFHLENBQUM7SUFFdEQsK0NBQVMsR0FBVCxVQUFVLEdBQXFCLEVBQUUsSUFBaUI7UUFDakQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDekIsR0FBRyxFQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyx1Q0FBb0MsR0FBRyxDQUFDLEdBQU07U0FDL0UsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzBHQVJXLDJCQUEyQjt1RUFBM0IsMkJBQTJCLFdBQTNCLDJCQUEyQjtzQ0FQeEM7Q0FnQkMsQUFWRCxJQVVDO1NBVFksMkJBQTJCO2tEQUEzQiwyQkFBMkI7Y0FEdkMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgV2FsbGV0TWFuYWdlbWVudENvbmZpZyB9IGZyb20gJ0BvbW5pY2hhbm5lbDItY29tbWVyY2lhbC1wbGF0YWZvcm0td2FsbGV0LW1hbmFnZW1lbnQvZnJvbnQtY29tbW9uL2NvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFbmRwb2ludFJlc29sdmVySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogV2FsbGV0TWFuYWdlbWVudENvbmZpZykge31cclxuXHJcblx0aW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcblx0XHRyZXR1cm4gbmV4dC5oYW5kbGUocmVxLmNsb25lKHtcclxuICAgICAgdXJsOiBgJHsgdGhpcy5jb25maWcuYXBpRG9tYWluIH0vb21uaWNoYW5uZWwyL3dhbGxldC1tYW5hZ2VtZW50JHsgcmVxLnVybCB9YFxyXG5cdFx0fSkpO1xyXG5cdH1cclxufVxyXG4iXX0=