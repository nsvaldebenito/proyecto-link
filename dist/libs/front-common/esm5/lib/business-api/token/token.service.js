import { throwError } from 'rxjs';
import { BusinessApiModule } from '../business-api.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WalletManagementConfig } from '@omnichannel2-commercial-plataform-wallet-management/front-common/config';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@omnichannel2-commercial-plataform-wallet-management/front-common/config";
var TokenService = /** @class */ (function () {
    function TokenService(httpClient, config) {
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
    TokenService.prototype.getTokens = function (customerId, cardId) {
        if (customerId === null) {
            return throwError('Customer id is not set');
        }
        if (cardId === null) {
            return throwError('Card id is not set');
        }
        this.itemsTokens$ = of(this.tokens);
        return this.itemsTokens$;
        // return this.httpClient.get<ITokens>('/customers/${customerId}/${cardId}/card-tokens')
    };
    /** @nocollapse */ TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.WalletManagementConfig)); };
    /** @nocollapse */ TokenService.ɵprov = i0.ɵɵdefineInjectable({ token: TokenService, factory: TokenService.ɵfac, providedIn: BusinessApiModule });
    return TokenService;
}());
export { TokenService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TokenService, [{
        type: Injectable,
        args: [{
                providedIn: BusinessApiModule
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.WalletManagementConfig }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BvbW5pY2hhbm5lbDItY29tbWVyY2lhbC1wbGF0YWZvcm0td2FsbGV0LW1hbmFnZW1lbnQvZnJvbnQtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2J1c2luZXNzLWFwaS90b2tlbi90b2tlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFOUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDbEgsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQW1CMUI7SUFPRSxzQkFDVSxVQUFzQixFQUN0QixNQUE4QjtRQUQ5QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQXdCO1FBRXRDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWDtnQkFDRSxPQUFPLEVBQUUsMEJBQTBCO2dCQUNuQyxXQUFXLEVBQUUsa0JBQWtCO2dCQUMvQixXQUFXLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRTtnQkFDM0QsTUFBTSxFQUFFO29CQUNOLFFBQVEsRUFBRSxrREFBa0Q7b0JBQzVELFlBQVksRUFBRSxZQUFZO29CQUMxQixVQUFVLEVBQUUsU0FBUztvQkFDckIsaUJBQWlCLEVBQUUsVUFBVTtpQkFDOUI7Z0JBQ0QsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUU7YUFDM0Q7WUFDRDtnQkFDRSxPQUFPLEVBQUUsMEJBQTBCO2dCQUNuQyxXQUFXLEVBQUUsa0JBQWtCO2dCQUMvQixXQUFXLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRTtnQkFDNUQsTUFBTSxFQUFFO29CQUNOLFFBQVEsRUFBRSxrREFBa0Q7b0JBQzVELFlBQVksRUFBRSxZQUFZO29CQUMxQixVQUFVLEVBQUUsU0FBUztvQkFDckIsaUJBQWlCLEVBQUUsVUFBVTtpQkFDOUI7Z0JBQ0QsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUU7YUFDM0Q7U0FDVSxDQUFDO1FBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQWEsQ0FBQztJQUMxRCxDQUFDO0lBRUQsZ0NBQVMsR0FBVCxVQUFVLFVBQWtCLEVBQUUsTUFBYztRQUMxQyxJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDdkIsT0FBTyxVQUFVLENBQUMsd0JBQXdCLENBQUMsQ0FBQztTQUM3QztRQUNELElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUNuQixPQUFPLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMxQix3RkFBd0Y7SUFDekYsQ0FBQzs0RUEvQ1UsWUFBWTt3REFBWixZQUFZLFdBQVosWUFBWSxtQkFGWCxpQkFBaUI7dUJBM0IvQjtDQTZFQyxBQW5ERCxJQW1EQztTQWhEWSxZQUFZO2tEQUFaLFlBQVk7Y0FIeEIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxpQkFBaUI7YUFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEJ1c2luZXNzQXBpTW9kdWxlIH0gZnJvbSAnLi4vYnVzaW5lc3MtYXBpLm1vZHVsZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSVRva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rva2VuJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdhbGxldE1hbmFnZW1lbnRDb25maWcgfSBmcm9tICdAb21uaWNoYW5uZWwyLWNvbW1lcmNpYWwtcGxhdGFmb3JtLXdhbGxldC1tYW5hZ2VtZW50L2Zyb250LWNvbW1vbi9jb25maWcnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJVG9rZW5zIHtcbiAgZGF0YTogSVRva2VuW107XG4gIHRvdGFsOiBudW1iZXI7XG59XG5cbi8qZXhwb3J0IGludGVyZmFjZSBJVG9rZW5zIHtcbiAgY29kZTogJ09LJyB8ICdvayc7XG5cdG1lc3NhZ2U6IHtcblx0XHRyZXNwb25zZUNvZGU6ICdPSydcblx0XHRyZXNwb25zZTogSVRva2VuW107XG5cdH1cbn0qL1xuXG5leHBvcnQgaW50ZXJmYWNlIElUb2tlblNlcnZpY2Uge1xuICBnZXRUb2tlbnMoY3VzdG9tZXJJZDogc3RyaW5nLCBjYXJkSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SVRva2Vucz47XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogQnVzaW5lc3NBcGlNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgVG9rZW5TZXJ2aWNlIGltcGxlbWVudHMgSVRva2VuU2VydmljZSB7XG4gIHRva2VuOiBJVG9rZW5bXTtcbiAgdG9rZW5zOiBJVG9rZW5zO1xuICBpdGVtc1Rva2VucyQ6IE9ic2VydmFibGU8SVRva2Vucz47XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGNvbmZpZzogV2FsbGV0TWFuYWdlbWVudENvbmZpZ1xuICApIHtcbiAgICB0aGlzLnRva2VuID0gW1xuICAgICAge1xuICAgICAgICB0b2tlbklkOiAnNWY2OTM4MzY2OTQ1OWY1ZjYzNzA5YTE1JyxcbiAgICAgICAgdG9rZW5OdW1iZXI6ICc1NTg5ODQ4MDAwMDI1MzUzJyxcbiAgICAgICAgdG9rZW5TdGF0dXM6IHsgc3RhdHVzSWQ6ICdBJywgc3RhdHVzRGVzY3JpcGNpb246ICdBY3Rpdm8nIH0sXG4gICAgICAgIGRldmljZToge1xuICAgICAgICAgIGRldmljZUlkOiAnOFVOSUVIS0ZYSVlTUjFFNFBMTllPMi1BWFBLSl9USktKRUFKWE9NNk00NlVGUzROJyxcbiAgICAgICAgICBkZXZpY2VOdW1iZXI6ICc4ODgyOTkyMTIzJyxcbiAgICAgICAgICBkZXZpY2VUeXBlOiAnQ2VsdWxhcicsXG4gICAgICAgICAgZGV2aWNlRGVzY3JpcHRpb246ICdzYW1zdW5nISdcbiAgICAgICAgfSxcbiAgICAgICAgd2FsbGV0OiB7IHdhbGxlSWQ6ICcyMTYnLCB3YWxsZURlc2NyaXBjaW9uOiAnR29vZ2xlIFBheScgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdG9rZW5JZDogJzVmNjkzODM2Njk0NTlmNWY2MzcwOWExNScsXG4gICAgICAgIHRva2VuTnVtYmVyOiAnNTU4OTg0ODAwMDAyNjU3NScsXG4gICAgICAgIHRva2VuU3RhdHVzOiB7IHN0YXR1c0lkOiAnRCcsIHN0YXR1c0Rlc2NyaXBjaW9uOiAnQm9ycmFkbycgfSxcbiAgICAgICAgZGV2aWNlOiB7XG4gICAgICAgICAgZGV2aWNlSWQ6ICc4VU5JRUhLRlhJWVNSMUU0UExOWU8yLUFYUEtKX1RKS0pFQUpYT002TTQ2VUZTNE4nLFxuICAgICAgICAgIGRldmljZU51bWJlcjogJzg4ODI5OTIxMjMnLFxuICAgICAgICAgIGRldmljZVR5cGU6ICdDZWx1bGFyJyxcbiAgICAgICAgICBkZXZpY2VEZXNjcmlwdGlvbjogJ3NhbXN1bmchJ1xuICAgICAgICB9LFxuICAgICAgICB3YWxsZXQ6IHsgd2FsbGVJZDogJzIxNicsIHdhbGxlRGVzY3JpcGNpb246ICdHb29nbGUgUGF5JyB9XG4gICAgICB9XG4gICAgXSBhcyBJVG9rZW5bXTtcbiAgICB0aGlzLnRva2VucyA9IHsgZGF0YTogdGhpcy50b2tlbiwgdG90YWw6IDEgfSBhcyBJVG9rZW5zO1xuICB9XG5cbiAgZ2V0VG9rZW5zKGN1c3RvbWVySWQ6IHN0cmluZywgY2FyZElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPElUb2tlbnM+IHtcbiAgICBpZiAoY3VzdG9tZXJJZCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRocm93RXJyb3IoJ0N1c3RvbWVyIGlkIGlzIG5vdCBzZXQnKTtcbiAgICB9XG4gICAgaWYgKGNhcmRJZCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRocm93RXJyb3IoJ0NhcmQgaWQgaXMgbm90IHNldCcpO1xuICAgIH1cbiAgICB0aGlzLml0ZW1zVG9rZW5zJCA9IG9mKHRoaXMudG9rZW5zKTtcbiAgICByZXR1cm4gdGhpcy5pdGVtc1Rva2VucyQ7XG4gICAvLyByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldDxJVG9rZW5zPignL2N1c3RvbWVycy8ke2N1c3RvbWVySWR9LyR7Y2FyZElkfS9jYXJkLXRva2VucycpXG4gIH1cbn1cbiJdfQ==