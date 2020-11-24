import { throwError } from 'rxjs';
import { BusinessApiModule } from '../business-api.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WalletManagementConfig } from '@omnichannel2-commercial-plataform-wallet-management/front-common/config';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@omnichannel2-commercial-plataform-wallet-management/front-common/config";
export class TokenService {
    constructor(httpClient, config) {
        this.httpClient = httpClient;
        this.config = config;
        this.token = [
            {
                tokenId: '5f69383669459f5f63709a15',
                tokenNumber: '5589848000025353',
                tokenStatus: { statusId: 'A', statusDescripcion: 'Activo' },
                device: {
                    deviceId: '8UNIEHKFXIYSR1E4PLNYO2-AXPKJ_TJKJEAJXOM6M46UFS4N',
                    deviceNumber: '8882992123',
                    deviceType: 'Celular',
                    deviceDescription: 'samsung!'
                },
                wallet: { walleId: '216', walleDescripcion: 'Google Pay' }
            },
            {
                tokenId: '5f69383669459f5f63709a15',
                tokenNumber: '5589848000026575',
                tokenStatus: { statusId: 'D', statusDescripcion: 'Borrado' },
                device: {
                    deviceId: '8UNIEHKFXIYSR1E4PLNYO2-AXPKJ_TJKJEAJXOM6M46UFS4N',
                    deviceNumber: '8882992123',
                    deviceType: 'Celular',
                    deviceDescription: 'samsung!'
                },
                wallet: { walleId: '216', walleDescripcion: 'Google Pay' }
            }
        ];
        this.tokens = { data: this.token, total: 1 };
    }
    getTokens(customerId, cardId) {
        if (customerId === null) {
            return throwError('Customer id is not set');
        }
        if (cardId === null) {
            return throwError('Card id is not set');
        }
        this.itemsTokens$ = of(this.tokens);
        return this.itemsTokens$;
        // return this.httpClient.get<ITokens>('/customers/${customerId}/${cardId}/card-tokens')
    }
}
/** @nocollapse */ TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.WalletManagementConfig)); };
/** @nocollapse */ TokenService.ɵprov = i0.ɵɵdefineInjectable({ token: TokenService, factory: TokenService.ɵfac, providedIn: BusinessApiModule });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TokenService, [{
        type: Injectable,
        args: [{
                providedIn: BusinessApiModule
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.WalletManagementConfig }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BvbW5pY2hhbm5lbDItY29tbWVyY2lhbC1wbGF0YWZvcm0td2FsbGV0LW1hbmFnZW1lbnQvZnJvbnQtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2J1c2luZXNzLWFwaS90b2tlbi90b2tlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFOUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDbEgsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQXNCMUIsTUFBTSxPQUFPLFlBQVk7SUFJdkIsWUFDVSxVQUFzQixFQUN0QixNQUE4QjtRQUQ5QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQXdCO1FBRXRDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWDtnQkFDRSxPQUFPLEVBQUUsMEJBQTBCO2dCQUNuQyxXQUFXLEVBQUUsa0JBQWtCO2dCQUMvQixXQUFXLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRTtnQkFDM0QsTUFBTSxFQUFFO29CQUNOLFFBQVEsRUFBRSxrREFBa0Q7b0JBQzVELFlBQVksRUFBRSxZQUFZO29CQUMxQixVQUFVLEVBQUUsU0FBUztvQkFDckIsaUJBQWlCLEVBQUUsVUFBVTtpQkFDOUI7Z0JBQ0QsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUU7YUFDM0Q7WUFDRDtnQkFDRSxPQUFPLEVBQUUsMEJBQTBCO2dCQUNuQyxXQUFXLEVBQUUsa0JBQWtCO2dCQUMvQixXQUFXLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRTtnQkFDNUQsTUFBTSxFQUFFO29CQUNOLFFBQVEsRUFBRSxrREFBa0Q7b0JBQzVELFlBQVksRUFBRSxZQUFZO29CQUMxQixVQUFVLEVBQUUsU0FBUztvQkFDckIsaUJBQWlCLEVBQUUsVUFBVTtpQkFDOUI7Z0JBQ0QsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUU7YUFDM0Q7U0FDVSxDQUFDO1FBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQWEsQ0FBQztJQUMxRCxDQUFDO0lBRUQsU0FBUyxDQUFDLFVBQWtCLEVBQUUsTUFBYztRQUMxQyxJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDdkIsT0FBTyxVQUFVLENBQUMsd0JBQXdCLENBQUMsQ0FBQztTQUM3QztRQUNELElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUNuQixPQUFPLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMxQix3RkFBd0Y7SUFDekYsQ0FBQzs7d0VBL0NVLFlBQVk7b0RBQVosWUFBWSxXQUFaLFlBQVksbUJBRlgsaUJBQWlCO2tEQUVsQixZQUFZO2NBSHhCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsaUJBQWlCO2FBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBCdXNpbmVzc0FwaU1vZHVsZSB9IGZyb20gJy4uL2J1c2luZXNzLWFwaS5tb2R1bGUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IElUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXYWxsZXRNYW5hZ2VtZW50Q29uZmlnIH0gZnJvbSAnQG9tbmljaGFubmVsMi1jb21tZXJjaWFsLXBsYXRhZm9ybS13YWxsZXQtbWFuYWdlbWVudC9mcm9udC1jb21tb24vY29uZmlnJztcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRva2VucyB7XG4gIGRhdGE6IElUb2tlbltdO1xuICB0b3RhbDogbnVtYmVyO1xufVxuXG4vKmV4cG9ydCBpbnRlcmZhY2UgSVRva2VucyB7XG4gIGNvZGU6ICdPSycgfCAnb2snO1xuXHRtZXNzYWdlOiB7XG5cdFx0cmVzcG9uc2VDb2RlOiAnT0snXG5cdFx0cmVzcG9uc2U6IElUb2tlbltdO1xuXHR9XG59Ki9cblxuZXhwb3J0IGludGVyZmFjZSBJVG9rZW5TZXJ2aWNlIHtcbiAgZ2V0VG9rZW5zKGN1c3RvbWVySWQ6IHN0cmluZywgY2FyZElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElUb2tlbnM+O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IEJ1c2luZXNzQXBpTW9kdWxlXG59KVxuZXhwb3J0IGNsYXNzIFRva2VuU2VydmljZSBpbXBsZW1lbnRzIElUb2tlblNlcnZpY2Uge1xuICB0b2tlbjogSVRva2VuW107XG4gIHRva2VuczogSVRva2VucztcbiAgaXRlbXNUb2tlbnMkOiBPYnNlcnZhYmxlPElUb2tlbnM+O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBjb25maWc6IFdhbGxldE1hbmFnZW1lbnRDb25maWdcbiAgKSB7XG4gICAgdGhpcy50b2tlbiA9IFtcbiAgICAgIHtcbiAgICAgICAgdG9rZW5JZDogJzVmNjkzODM2Njk0NTlmNWY2MzcwOWExNScsXG4gICAgICAgIHRva2VuTnVtYmVyOiAnNTU4OTg0ODAwMDAyNTM1MycsXG4gICAgICAgIHRva2VuU3RhdHVzOiB7IHN0YXR1c0lkOiAnQScsIHN0YXR1c0Rlc2NyaXBjaW9uOiAnQWN0aXZvJyB9LFxuICAgICAgICBkZXZpY2U6IHtcbiAgICAgICAgICBkZXZpY2VJZDogJzhVTklFSEtGWElZU1IxRTRQTE5ZTzItQVhQS0pfVEpLSkVBSlhPTTZNNDZVRlM0TicsXG4gICAgICAgICAgZGV2aWNlTnVtYmVyOiAnODg4Mjk5MjEyMycsXG4gICAgICAgICAgZGV2aWNlVHlwZTogJ0NlbHVsYXInLFxuICAgICAgICAgIGRldmljZURlc2NyaXB0aW9uOiAnc2Ftc3VuZyEnXG4gICAgICAgIH0sXG4gICAgICAgIHdhbGxldDogeyB3YWxsZUlkOiAnMjE2Jywgd2FsbGVEZXNjcmlwY2lvbjogJ0dvb2dsZSBQYXknIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRva2VuSWQ6ICc1ZjY5MzgzNjY5NDU5ZjVmNjM3MDlhMTUnLFxuICAgICAgICB0b2tlbk51bWJlcjogJzU1ODk4NDgwMDAwMjY1NzUnLFxuICAgICAgICB0b2tlblN0YXR1czogeyBzdGF0dXNJZDogJ0QnLCBzdGF0dXNEZXNjcmlwY2lvbjogJ0JvcnJhZG8nIH0sXG4gICAgICAgIGRldmljZToge1xuICAgICAgICAgIGRldmljZUlkOiAnOFVOSUVIS0ZYSVlTUjFFNFBMTllPMi1BWFBLSl9USktKRUFKWE9NNk00NlVGUzROJyxcbiAgICAgICAgICBkZXZpY2VOdW1iZXI6ICc4ODgyOTkyMTIzJyxcbiAgICAgICAgICBkZXZpY2VUeXBlOiAnQ2VsdWxhcicsXG4gICAgICAgICAgZGV2aWNlRGVzY3JpcHRpb246ICdzYW1zdW5nISdcbiAgICAgICAgfSxcbiAgICAgICAgd2FsbGV0OiB7IHdhbGxlSWQ6ICcyMTYnLCB3YWxsZURlc2NyaXBjaW9uOiAnR29vZ2xlIFBheScgfVxuICAgICAgfVxuICAgIF0gYXMgSVRva2VuW107XG4gICAgdGhpcy50b2tlbnMgPSB7IGRhdGE6IHRoaXMudG9rZW4sIHRvdGFsOiAxIH0gYXMgSVRva2VucztcbiAgfVxuXG4gIGdldFRva2VucyhjdXN0b21lcklkOiBzdHJpbmcsIGNhcmRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJVG9rZW5zPiB7XG4gICAgaWYgKGN1c3RvbWVySWQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKCdDdXN0b21lciBpZCBpcyBub3Qgc2V0Jyk7XG4gICAgfVxuICAgIGlmIChjYXJkSWQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKCdDYXJkIGlkIGlzIG5vdCBzZXQnKTtcbiAgICB9XG4gICAgdGhpcy5pdGVtc1Rva2VucyQgPSBvZih0aGlzLnRva2Vucyk7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXNUb2tlbnMkO1xuICAgLy8gcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8SVRva2Vucz4oJy9jdXN0b21lcnMvJHtjdXN0b21lcklkfS8ke2NhcmRJZH0vY2FyZC10b2tlbnMnKVxuICB9XG59XG4iXX0=