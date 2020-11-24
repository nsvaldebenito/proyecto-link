import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class BackendHeadersInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    buildHeaders: () => any;
    static ɵfac: i0.ɵɵFactoryDef<BackendHeadersInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDef<BackendHeadersInterceptor>;
}
