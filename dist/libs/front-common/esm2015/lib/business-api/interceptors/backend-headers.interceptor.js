import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class BackendHeadersInterceptor {
    constructor() {
        this.buildHeaders = () => {
            let headers = {};
            headers.version = '1.0';
            headers.country = 'CL';
            headers.commerce = 'Banco';
            headers.channel = 'Web';
            if (sessionStorage.getItem('executiveCode')) {
                headers.executiveCode = sessionStorage.getItem('executiveCode');
            }
            if (sessionStorage.getItem('access_token')) {
                headers.Authorization = 'Bearer ' + sessionStorage.getItem('access_token');
            }
            if (sessionStorage.getItem('officeId')) {
                headers.sucursal = sessionStorage.getItem('officeId');
            }
            if (sessionStorage.getItem('username')) {
                headers.usuario = sessionStorage.getItem('username');
            }
            return headers;
        };
    }
    intercept(req, next) {
        return next.handle(req.clone({
            setHeaders: this.buildHeaders()
        }));
    }
}
/** @nocollapse */ BackendHeadersInterceptor.ɵfac = function BackendHeadersInterceptor_Factory(t) { return new (t || BackendHeadersInterceptor)(); };
/** @nocollapse */ BackendHeadersInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: BackendHeadersInterceptor, factory: BackendHeadersInterceptor.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BackendHeadersInterceptor, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC1oZWFkZXJzLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG9tbmljaGFubmVsMi1jb21tZXJjaWFsLXBsYXRhZm9ybS13YWxsZXQtbWFuYWdlbWVudC9mcm9udC1jb21tb24vIiwic291cmNlcyI6WyJsaWIvYnVzaW5lc3MtYXBpL2ludGVyY2VwdG9ycy9iYWNrZW5kLWhlYWRlcnMuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0MsTUFBTSxPQUFPLHlCQUF5QjtJQUR0QztRQVNDLGlCQUFZLEdBQUcsR0FBRyxFQUFFO1lBQ25CLElBQUksT0FBTyxHQUFRLEVBQUUsQ0FBQztZQUN0QixPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUN4QixPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUN2QixPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztZQUMzQixPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQzVDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNoRTtZQUNELElBQUksY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDM0MsT0FBTyxDQUFDLGFBQWEsR0FBRyxTQUFTLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUMzRTtZQUNELElBQUksY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDdkMsT0FBTyxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3REO1lBQ0QsSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUN2QyxPQUFPLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDckQ7WUFDRCxPQUFPLE9BQU8sQ0FBQztRQUNoQixDQUFDLENBQUE7S0FDRDtJQTFCQSxTQUFTLENBQUMsR0FBcUIsRUFBRSxJQUFpQjtRQUNqRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUM1QixVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRTtTQUMvQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2tHQU5XLHlCQUF5QjtpRUFBekIseUJBQXlCLFdBQXpCLHlCQUF5QjtrREFBekIseUJBQXlCO2NBRHJDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCYWNrZW5kSGVhZGVyc0ludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHJcblx0aW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcblx0XHRyZXR1cm4gbmV4dC5oYW5kbGUocmVxLmNsb25lKHtcclxuXHRcdFx0c2V0SGVhZGVyczogdGhpcy5idWlsZEhlYWRlcnMoKVxyXG5cdFx0fSkpO1xyXG5cdH1cclxuXHJcblx0YnVpbGRIZWFkZXJzID0gKCkgPT4ge1xyXG5cdFx0bGV0IGhlYWRlcnM6IGFueSA9IHt9O1xyXG5cdFx0aGVhZGVycy52ZXJzaW9uID0gJzEuMCc7XHJcblx0XHRoZWFkZXJzLmNvdW50cnkgPSAnQ0wnO1xyXG5cdFx0aGVhZGVycy5jb21tZXJjZSA9ICdCYW5jbyc7XHJcblx0XHRoZWFkZXJzLmNoYW5uZWwgPSAnV2ViJztcclxuXHRcdGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdleGVjdXRpdmVDb2RlJykpIHtcclxuXHRcdFx0aGVhZGVycy5leGVjdXRpdmVDb2RlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZXhlY3V0aXZlQ29kZScpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpKSB7XHJcblx0XHRcdGhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCZWFyZXIgJyArIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ29mZmljZUlkJykpIHtcclxuXHRcdFx0aGVhZGVycy5zdWN1cnNhbCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ29mZmljZUlkJyk7XHJcblx0XHR9XHJcblx0XHRpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcm5hbWUnKSkge1xyXG5cdFx0XHRoZWFkZXJzLnVzdWFyaW8gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGhlYWRlcnM7XHJcblx0fVxyXG59XHJcbiJdfQ==