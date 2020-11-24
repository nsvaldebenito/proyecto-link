import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var BackendHeadersInterceptor = /** @class */ (function () {
    function BackendHeadersInterceptor() {
        this.buildHeaders = function () {
            var headers = {};
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
    BackendHeadersInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req.clone({
            setHeaders: this.buildHeaders()
        }));
    };
    /** @nocollapse */ BackendHeadersInterceptor.ɵfac = function BackendHeadersInterceptor_Factory(t) { return new (t || BackendHeadersInterceptor)(); };
    /** @nocollapse */ BackendHeadersInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: BackendHeadersInterceptor, factory: BackendHeadersInterceptor.ɵfac });
    return BackendHeadersInterceptor;
}());
export { BackendHeadersInterceptor };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BackendHeadersInterceptor, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC1oZWFkZXJzLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG9tbmljaGFubmVsMi1jb21tZXJjaWFsLXBsYXRhZm9ybS13YWxsZXQtbWFuYWdlbWVudC9mcm9udC1jb21tb24vIiwic291cmNlcyI6WyJsaWIvYnVzaW5lc3MtYXBpL2ludGVyY2VwdG9ycy9iYWNrZW5kLWhlYWRlcnMuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0M7SUFBQTtRQVNDLGlCQUFZLEdBQUc7WUFDZCxJQUFJLE9BQU8sR0FBUSxFQUFFLENBQUM7WUFDdEIsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDeEIsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDdkIsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7WUFDM0IsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUFFO2dCQUM1QyxPQUFPLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDaEU7WUFDRCxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQzNDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsU0FBUyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDM0U7WUFDRCxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3ZDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN0RDtZQUNELElBQUksY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDdkMsT0FBTyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3JEO1lBQ0QsT0FBTyxPQUFPLENBQUM7UUFDaEIsQ0FBQyxDQUFBO0tBQ0Q7SUExQkEsNkNBQVMsR0FBVCxVQUFVLEdBQXFCLEVBQUUsSUFBaUI7UUFDakQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDNUIsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUU7U0FDL0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO3NHQU5XLHlCQUF5QjtxRUFBekIseUJBQXlCLFdBQXpCLHlCQUF5QjtvQ0FOdEM7Q0FrQ0MsQUE3QkQsSUE2QkM7U0E1QlkseUJBQXlCO2tEQUF6Qix5QkFBeUI7Y0FEckMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJhY2tlbmRIZWFkZXJzSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG5cclxuXHRpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuXHRcdHJldHVybiBuZXh0LmhhbmRsZShyZXEuY2xvbmUoe1xyXG5cdFx0XHRzZXRIZWFkZXJzOiB0aGlzLmJ1aWxkSGVhZGVycygpXHJcblx0XHR9KSk7XHJcblx0fVxyXG5cclxuXHRidWlsZEhlYWRlcnMgPSAoKSA9PiB7XHJcblx0XHRsZXQgaGVhZGVyczogYW55ID0ge307XHJcblx0XHRoZWFkZXJzLnZlcnNpb24gPSAnMS4wJztcclxuXHRcdGhlYWRlcnMuY291bnRyeSA9ICdDTCc7XHJcblx0XHRoZWFkZXJzLmNvbW1lcmNlID0gJ0JhbmNvJztcclxuXHRcdGhlYWRlcnMuY2hhbm5lbCA9ICdXZWInO1xyXG5cdFx0aWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2V4ZWN1dGl2ZUNvZGUnKSkge1xyXG5cdFx0XHRoZWFkZXJzLmV4ZWN1dGl2ZUNvZGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdleGVjdXRpdmVDb2RlJyk7XHJcblx0XHR9XHJcblx0XHRpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJykpIHtcclxuXHRcdFx0aGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0JlYXJlciAnICsgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJyk7XHJcblx0XHR9XHJcblx0XHRpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnb2ZmaWNlSWQnKSkge1xyXG5cdFx0XHRoZWFkZXJzLnN1Y3Vyc2FsID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnb2ZmaWNlSWQnKTtcclxuXHRcdH1cclxuXHRcdGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpKSB7XHJcblx0XHRcdGhlYWRlcnMudXN1YXJpbyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaGVhZGVycztcclxuXHR9XHJcbn1cclxuIl19