import { ActivatedRoute } from '@angular/router';
import { AfterViewInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITokens, TokenService } from '../../business-api/token/token.service';
import { IToken } from '../../models/token';
import * as i0 from "@angular/core";
export declare class TokenTableComponent implements OnDestroy, AfterViewInit {
    private tokenService;
    private activatedRoute;
    displayedColumns: string[];
    items$: Observable<IToken[]>;
    hasError: boolean;
    errorText: string;
    private skipLoading;
    private subs;
    useNgRxData: boolean;
    readonly isLoadingResults$: BehaviorSubject<boolean>;
    loading$: Observable<boolean>;
    refresh$: Subject<unknown>;
    constructor(tokenService: TokenService, activatedRoute: ActivatedRoute);
    cardId: string;
    customerId: string;
    getTokens(customerId: string, cardId: string): Observable<ITokens>;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<TokenTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TokenTableComponent, "omnichannel2-commercial-plataform-wallet-management-token-table", never, {}, {}, never, never>;
}
