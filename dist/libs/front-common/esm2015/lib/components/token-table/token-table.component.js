import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { BehaviorSubject, Subject, merge, of } from 'rxjs';
import { TokenService } from '../../business-api/token/token.service';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { SubSink } from 'subsink';
import * as i0 from "@angular/core";
import * as i1 from "../../business-api/token/token.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/table";
import * as i5 from "@angular/material/progress-spinner";
function TokenTableComponent_div_8_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner");
} }
function TokenTableComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r15.errorText, " ");
} }
function TokenTableComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, TokenTableComponent_div_8_mat_spinner_1_Template, 1, 0, "mat-spinner", 14);
    i0.ɵɵtemplate(2, TokenTableComponent_div_8_div_2_Template, 2, 1, "div", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const loading_r13 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", loading_r13);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.hasError);
} }
function TokenTableComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 17);
    i0.ɵɵtext(1, " Wallet Descripcion ");
    i0.ɵɵelementEnd();
} }
function TokenTableComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r16.wallet.walleDescripcion, " ");
} }
function TokenTableComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 17);
    i0.ɵɵtext(1, " Device Type ");
    i0.ɵɵelementEnd();
} }
function TokenTableComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r17 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r17.device.deviceType, " ");
} }
function TokenTableComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 17);
    i0.ɵɵtext(1, " Device Description ");
    i0.ɵɵelementEnd();
} }
function TokenTableComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r18.device.deviceDescription, " ");
} }
function TokenTableComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 17);
    i0.ɵɵtext(1, " Token Number ");
    i0.ɵɵelementEnd();
} }
function TokenTableComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r19.tokenNumber, " ");
} }
function TokenTableComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 17);
    i0.ɵɵtext(1, " Token Status ");
    i0.ɵɵelementEnd();
} }
function TokenTableComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r20.tokenStatus.statusDescripcion, " ");
} }
function TokenTableComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 19);
} }
function TokenTableComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
export class TokenTableComponent {
    constructor(tokenService, activatedRoute) {
        this.tokenService = tokenService;
        this.activatedRoute = activatedRoute;
        this.displayedColumns = [
            'walletDescripcion',
            'deviceType',
            'deviceDescription',
            'TokenNumber',
            'tokenStatus'
        ];
        this.hasError = false;
        this.errorText = '';
        this.skipLoading = false;
        this.subs = new SubSink();
        this.useNgRxData = false;
        this.isLoadingResults$ = new BehaviorSubject(true);
        this.refresh$ = new Subject();
    }
    getTokens(customerId, cardId) {
        return this.tokenService.getTokens(customerId, cardId);
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    ngAfterViewInit() {
        this.activatedRoute.paramMap.subscribe((parametros) => {
            this.cardId = parametros.get('cardId');
            this.customerId = parametros.get('customerId');
        });
        if (this.skipLoading) {
            return;
        }
        this.items$ = merge(this.refresh$).pipe(startWith({}), switchMap(() => {
            this.isLoadingResults$.next(true);
            return this.getTokens(this.customerId, this.cardId);
        }), 
        //map((results: { message: { response: IToken[] } } ) => {
        map((results) => {
            this.isLoadingResults$.next(false);
            this.hasError = false;
            //return results.message.response;
            return results.data;
        }), catchError(err => {
            this.isLoadingResults$.next(false);
            this.hasError = true;
            this.errorText = err;
            return of([]);
        }));
        this.items$.subscribe();
    }
}
/** @nocollapse */ TokenTableComponent.ɵfac = function TokenTableComponent_Factory(t) { return new (t || TokenTableComponent)(i0.ɵɵdirectiveInject(i1.TokenService), i0.ɵɵdirectiveInject(i2.ActivatedRoute)); };
/** @nocollapse */ TokenTableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TokenTableComponent, selectors: [["omnichannel2-commercial-plataform-wallet-management-token-table"]], decls: 29, vars: 10, consts: [[2, "text-align", "center"], [1, "mat-elevation-z8"], ["class", "loading-shade", 4, "ngIf"], ["mat-table", "", 1, "full-width", 3, "dataSource"], ["matColumnDef", "walletDescripcion"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "deviceType"], ["matColumnDef", "deviceDescription"], ["matColumnDef", "TokenNumber"], ["matColumnDef", "tokenStatus"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "loading-shade"], [4, "ngIf"], ["class", "error", 4, "ngIf"], [1, "error"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TokenTableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h1");
        i0.ɵɵtext(2, " Gestion de Tarjetas ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "h4");
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "h4");
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 1);
        i0.ɵɵtemplate(8, TokenTableComponent_div_8_Template, 3, 2, "div", 2);
        i0.ɵɵpipe(9, "async");
        i0.ɵɵelementStart(10, "table", 3);
        i0.ɵɵpipe(11, "async");
        i0.ɵɵelementContainerStart(12, 4);
        i0.ɵɵtemplate(13, TokenTableComponent_th_13_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(14, TokenTableComponent_td_14_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(15, 7);
        i0.ɵɵtemplate(16, TokenTableComponent_th_16_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(17, TokenTableComponent_td_17_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(18, 8);
        i0.ɵɵtemplate(19, TokenTableComponent_th_19_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(20, TokenTableComponent_td_20_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(21, 9);
        i0.ɵɵtemplate(22, TokenTableComponent_th_22_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(23, TokenTableComponent_td_23_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(24, 10);
        i0.ɵɵtemplate(25, TokenTableComponent_th_25_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(26, TokenTableComponent_td_26_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(27, TokenTableComponent_tr_27_Template, 1, 0, "tr", 11);
        i0.ɵɵtemplate(28, TokenTableComponent_tr_28_Template, 1, 0, "tr", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1(" CustomerId: ", ctx.customerId, "\n");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" CardID: ", ctx.cardId, "\n");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(9, 6, ctx.loading$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("dataSource", i0.ɵɵpipeBind1(11, 8, ctx.items$));
        i0.ɵɵadvance(17);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i3.NgIf, i4.MatTable, i4.MatColumnDef, i4.MatHeaderCellDef, i4.MatCellDef, i4.MatHeaderRowDef, i4.MatRowDef, i5.MatSpinner, i4.MatHeaderCell, i4.MatCell, i4.MatHeaderRow, i4.MatRow], pipes: [i3.AsyncPipe], styles: ["[_nghost-%COMP%]{display:block;font-family:sans-serif;min-width:300px;max-width:600px;margin:50px auto}h1[_ngcontent-%COMP%]{text-align:center;margin-left:18px;font-size:24px}h2[_ngcontent-%COMP%]{text-align:center;font-size:20px;margin:40px 0 10px}.loading-shade[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:56px;right:0;background:rgba(0,0,0,.15);z-index:1;display:flex;align-items:center;justify-content:center}.full-width[_ngcontent-%COMP%]{width:100%}.mat-column-TokenNumber[_ngcontent-%COMP%]{flex:0 0 28%!important;width:28%!important}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TokenTableComponent, [{
        type: Component,
        args: [{
                selector: 'omnichannel2-commercial-plataform-wallet-management-token-table',
                templateUrl: './token-table.component.html',
                styleUrls: ['./token-table.component.css']
            }]
    }], function () { return [{ type: i1.TokenService }, { type: i2.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4tdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG9tbmljaGFubmVsMi1jb21tZXJjaWFsLXBsYXRhZm9ybS13YWxsZXQtbWFuYWdlbWVudC9mcm9udC1jb21tb24vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90b2tlbi10YWJsZS90b2tlbi10YWJsZS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy90b2tlbi10YWJsZS90b2tlbi10YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFZLE1BQU0saUJBQWlCLENBQUM7QUFDM0QsT0FBTyxFQUVMLFNBQVMsRUFJVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFjLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZFLE9BQU8sRUFBVyxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRSxPQUFPLEVBQ0wsVUFBVSxFQUVWLEdBQUcsRUFDSCxTQUFTLEVBQ1QsU0FBUyxFQUNWLE1BQU0sZ0JBQWdCLENBQUM7QUFJeEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7Ozs7SUNQOUIsOEJBQTJDOzs7SUFDM0MsK0JBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQU07OztJQURKLGVBQ0Y7SUFERSxrREFDRjs7O0lBSkYsK0JBQ0U7SUFBQSwyRkFBNkI7SUFDN0IsMkVBQ0U7SUFFSixpQkFBTTs7OztJQUpTLGVBQWU7SUFBZixrQ0FBZTtJQUNULGVBQWdCO0lBQWhCLHNDQUFnQjs7O0lBTWpDLDhCQUF3QztJQUFBLG9DQUFtQjtJQUFBLGlCQUFLOzs7SUFDaEUsOEJBQW9DO0lBQUEsWUFBa0M7SUFBQSxpQkFBSzs7O0lBQXZDLGVBQWtDO0lBQWxDLGdFQUFrQzs7O0lBR3RFLDhCQUF3QztJQUFBLDZCQUFZO0lBQUEsaUJB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QUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBQYXJhbU1hcCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QsIG1lcmdlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSVRva2VucywgVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYnVzaW5lc3MtYXBpL3Rva2VuL3Rva2VuLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgZGVib3VuY2VUaW1lLFxuICBtYXAsXG4gIHN0YXJ0V2l0aCxcbiAgc3dpdGNoTWFwXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9rZW4nO1xuaW1wb3J0IHsgU3ViU2luayB9IGZyb20gJ3N1YnNpbmsnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvbW5pY2hhbm5lbDItY29tbWVyY2lhbC1wbGF0YWZvcm0td2FsbGV0LW1hbmFnZW1lbnQtdG9rZW4tdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9rZW4tdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b2tlbi10YWJsZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9rZW5UYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIGRpc3BsYXllZENvbHVtbnMgPSBbXG4gICAgJ3dhbGxldERlc2NyaXBjaW9uJyxcbiAgICAnZGV2aWNlVHlwZScsXG4gICAgJ2RldmljZURlc2NyaXB0aW9uJyxcbiAgICAnVG9rZW5OdW1iZXInLFxuICAgICd0b2tlblN0YXR1cydcbiAgXTtcbiAgaXRlbXMkOiBPYnNlcnZhYmxlPElUb2tlbltdPjtcbiAgaGFzRXJyb3IgPSBmYWxzZTtcbiAgZXJyb3JUZXh0ID0gJyc7XG4gIHByaXZhdGUgc2tpcExvYWRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzdWJzID0gbmV3IFN1YlNpbmsoKTtcbiAgdXNlTmdSeERhdGEgPSBmYWxzZTtcbiAgcmVhZG9ubHkgaXNMb2FkaW5nUmVzdWx0cyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRydWUpO1xuICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcmVmcmVzaCQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdG9rZW5TZXJ2aWNlOiBUb2tlblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7fVxuICBjYXJkSWQ6IHN0cmluZztcbiAgY3VzdG9tZXJJZDogc3RyaW5nO1xuXG4gIGdldFRva2VucyhjdXN0b21lcklkOiBzdHJpbmcsIGNhcmRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJVG9rZW5zPiB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5TZXJ2aWNlLmdldFRva2VucyhjdXN0b21lcklkLCBjYXJkSWQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbU1hcC5zdWJzY3JpYmUoKHBhcmFtZXRyb3M6IFBhcmFtTWFwKSA9PiB7XG4gICAgICB0aGlzLmNhcmRJZCA9IHBhcmFtZXRyb3MuZ2V0KCdjYXJkSWQnKTtcbiAgICAgIHRoaXMuY3VzdG9tZXJJZCA9IHBhcmFtZXRyb3MuZ2V0KCdjdXN0b21lcklkJyk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5za2lwTG9hZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaXRlbXMkID0gbWVyZ2UodGhpcy5yZWZyZXNoJCkucGlwZShcbiAgICAgIHN0YXJ0V2l0aCh7fSksXG5cbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nUmVzdWx0cyQubmV4dCh0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VG9rZW5zKHRoaXMuY3VzdG9tZXJJZCwgdGhpcy5jYXJkSWQpO1xuICAgICAgfSksXG4gICAgICAvL21hcCgocmVzdWx0czogeyBtZXNzYWdlOiB7IHJlc3BvbnNlOiBJVG9rZW5bXSB9IH0gKSA9PiB7XG4gICAgICAgIG1hcCgocmVzdWx0czogeyB0b3RhbDogbnVtYmVyOyBkYXRhOiBJVG9rZW5bXSB9KSA9PiB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nUmVzdWx0cyQubmV4dChmYWxzZSk7XG4gICAgICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgLy9yZXR1cm4gcmVzdWx0cy5tZXNzYWdlLnJlc3BvbnNlO1xuICAgICAgICByZXR1cm4gcmVzdWx0cy5kYXRhO1xuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nUmVzdWx0cyQubmV4dChmYWxzZSk7XG4gICAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmVycm9yVGV4dCA9IGVycjtcbiAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLml0ZW1zJC5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiPGRpdiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+XG4gIDxoMT5cbiAgICBHZXN0aW9uIGRlIFRhcmpldGFzXG4gIDwvaDE+XG48L2Rpdj5cbjxoND5cbiAgQ3VzdG9tZXJJZDoge3sgY3VzdG9tZXJJZCB9fVxuPC9oND5cbjxoND5cbiAgQ2FyZElEOiB7eyBjYXJkSWQgfX1cbjwvaDQ+XG48ZGl2IGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OFwiPlxuICA8ZGl2IGNsYXNzPVwibG9hZGluZy1zaGFkZVwiICpuZ0lmPVwibG9hZGluZyQgfCBhc3luYyBhcyBsb2FkaW5nXCI+XG4gICAgPG1hdC1zcGlubmVyICpuZ0lmPVwibG9hZGluZ1wiPjwvbWF0LXNwaW5uZXI+XG4gICAgPGRpdiBjbGFzcz1cImVycm9yXCIgKm5nSWY9XCJoYXNFcnJvclwiPlxuICAgICAge3sgZXJyb3JUZXh0IH19XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8dGFibGUgbWF0LXRhYmxlIGNsYXNzPVwiZnVsbC13aWR0aFwiIFtkYXRhU291cmNlXT1cIml0ZW1zJCB8IGFzeW5jXCIgPlxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwid2FsbGV0RGVzY3JpcGNpb25cIj5cbiAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgPiBXYWxsZXQgRGVzY3JpcGNpb24gPC90aD5cbiAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj4ge3sgcm93LndhbGxldC53YWxsZURlc2NyaXBjaW9uIH19IDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJkZXZpY2VUeXBlXCI+XG4gICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmID4gRGV2aWNlIFR5cGUgPC90aD5cbiAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj4ge3sgcm93LmRldmljZS5kZXZpY2VUeXBlIH19IDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJkZXZpY2VEZXNjcmlwdGlvblwiPlxuICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiA+IERldmljZSBEZXNjcmlwdGlvbiA8L3RoPlxuICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPiB7eyByb3cuZGV2aWNlLmRldmljZURlc2NyaXB0aW9uIH19IDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJUb2tlbk51bWJlclwiPlxuICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiA+IFRva2VuIE51bWJlciA8L3RoPlxuICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPiB7eyByb3cudG9rZW5OdW1iZXIgfX1cbiAgICAgIDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInRva2VuU3RhdHVzXCI+XG4gICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgPiBUb2tlbiBTdGF0dXMgPC90aD5cbiAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPiB7eyByb3cudG9rZW5TdGF0dXMuc3RhdHVzRGVzY3JpcGNpb24gfX0gPC90ZD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1uc1wiPiA8L3RyPlxuICA8L3RhYmxlPlxuXG5cbjwvZGl2PlxuIl19