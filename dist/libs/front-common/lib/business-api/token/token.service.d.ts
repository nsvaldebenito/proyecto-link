import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IToken } from '../../models/token';
import { WalletManagementConfig } from '@omnichannel2-commercial-plataform-wallet-management/front-common/config';
import * as i0 from "@angular/core";
export interface ITokens {
    data: IToken[];
    total: number;
}
export interface ITokenService {
    getTokens(customerId: string, cardId: string): Observable<ITokens>;
}
export declare class TokenService implements ITokenService {
    private httpClient;
    private config;
    token: IToken[];
    tokens: ITokens;
    itemsTokens$: Observable<ITokens>;
    constructor(httpClient: HttpClient, config: WalletManagementConfig);
    getTokens(customerId: string, cardId: string): Observable<ITokens>;
    static ɵfac: i0.ɵɵFactoryDef<TokenService, never>;
    static ɵprov: i0.ɵɵInjectableDef<TokenService>;
}
