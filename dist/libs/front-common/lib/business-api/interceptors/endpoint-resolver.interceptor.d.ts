import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WalletManagementConfig } from '@omnichannel2-commercial-plataform-wallet-management/front-common/config';
import * as i0 from "@angular/core";
export declare class EndpointResolverInterceptor implements HttpInterceptor {
    private config;
    constructor(config: WalletManagementConfig);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDef<EndpointResolverInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDef<EndpointResolverInterceptor>;
}
