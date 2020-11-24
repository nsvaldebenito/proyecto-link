import { __read, __spread } from "tslib";
import { Injector, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS as BASE_HTTP_INTERCEPTORS, HttpClient, HttpHandler, ɵHttpInterceptingHandler } from '@angular/common/http';
import { HTTP_INTERCEPTORS, INTERCEPTORS_PROVIDERS } from './interceptors/providers';
import * as i0 from "@angular/core";
var BusinessApiModule = /** @class */ (function () {
    function BusinessApiModule() {
    }
    /** @nocollapse */ BusinessApiModule.ɵmod = i0.ɵɵdefineNgModule({ type: BusinessApiModule });
    /** @nocollapse */ BusinessApiModule.ɵinj = i0.ɵɵdefineInjector({ factory: function BusinessApiModule_Factory(t) { return new (t || BusinessApiModule)(); }, providers: __spread([{
                provide: HttpClient,
                useClass: HttpClient
            }, {
                provide: HttpHandler,
                useClass: ɵHttpInterceptingHandler
            }, {
                provide: BASE_HTTP_INTERCEPTORS,
                deps: [Injector, HTTP_INTERCEPTORS],
                useFactory: (function (injector, interceptors) { return __spread(interceptors, injector.parent.get(BASE_HTTP_INTERCEPTORS)); })
            }], INTERCEPTORS_PROVIDERS) });
    return BusinessApiModule;
}());
export { BusinessApiModule };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BusinessApiModule, [{
        type: NgModule,
        args: [{
                providers: __spread([{
                        provide: HttpClient,
                        useClass: HttpClient
                    }, {
                        provide: HttpHandler,
                        useClass: ɵHttpInterceptingHandler
                    }, {
                        provide: BASE_HTTP_INTERCEPTORS,
                        deps: [Injector, HTTP_INTERCEPTORS],
                        useFactory: (function (injector, interceptors) { return __spread(interceptors, injector.parent.get(BASE_HTTP_INTERCEPTORS)); })
                    }], INTERCEPTORS_PROVIDERS)
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MtYXBpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BvbW5pY2hhbm5lbDItY29tbWVyY2lhbC1wbGF0YWZvcm0td2FsbGV0LW1hbmFnZW1lbnQvZnJvbnQtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2J1c2luZXNzLWFwaS9idXNpbmVzcy1hcGkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLElBQUksc0JBQXNCLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXRJLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUdyRjtJQUFBO0tBa0JrQzt5REFBckIsaUJBQWlCO3FIQUFqQixpQkFBaUIsNkJBakJqQjtnQkFDWCxPQUFPLEVBQUUsVUFBVTtnQkFDbkIsUUFBUSxFQUFFLFVBQVU7YUFDcEIsRUFBRTtnQkFDRixPQUFPLEVBQUUsV0FBVztnQkFDcEIsUUFBUSxFQUFFLHdCQUF3QjthQUNsQyxFQUFFO2dCQUNGLE9BQU8sRUFBRSxzQkFBc0I7Z0JBQy9CLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQztnQkFDbkMsVUFBVSxHQUFFLFVBQUMsUUFBUSxFQUFFLFlBQVksSUFBSyxnQkFDcEMsWUFBWSxFQUNaLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLEdBRlAsQ0FHdkMsQ0FBQTthQUNELEdBQ0Usc0JBQXNCOzRCQXJCMUI7Q0F3QmtDLEFBbEJsQyxJQWtCa0M7U0FBckIsaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FsQjdCLFFBQVE7ZUFBQztnQkFDVCxTQUFTLFlBQUc7d0JBQ1gsT0FBTyxFQUFFLFVBQVU7d0JBQ25CLFFBQVEsRUFBRSxVQUFVO3FCQUNwQixFQUFFO3dCQUNGLE9BQU8sRUFBRSxXQUFXO3dCQUNwQixRQUFRLEVBQUUsd0JBQXdCO3FCQUNsQyxFQUFFO3dCQUNGLE9BQU8sRUFBRSxzQkFBc0I7d0JBQy9CLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQzt3QkFDbkMsVUFBVSxHQUFFLFVBQUMsUUFBUSxFQUFFLFlBQVksSUFBSyxnQkFDcEMsWUFBWSxFQUNaLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLEdBRlAsQ0FHdkMsQ0FBQTtxQkFDRCxHQUNFLHNCQUFzQixDQUN4QjthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIGFzIEJBU0VfSFRUUF9JTlRFUkNFUFRPUlMsIEh0dHBDbGllbnQsIEh0dHBIYW5kbGVyLCDJtUh0dHBJbnRlcmNlcHRpbmdIYW5kbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMsIElOVEVSQ0VQVE9SU19QUk9WSURFUlMgfSBmcm9tICcuL2ludGVyY2VwdG9ycy9wcm92aWRlcnMnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0cHJvdmlkZXJzOiBbe1xyXG5cdFx0cHJvdmlkZTogSHR0cENsaWVudCxcclxuXHRcdHVzZUNsYXNzOiBIdHRwQ2xpZW50XHJcblx0fSwge1xyXG5cdFx0cHJvdmlkZTogSHR0cEhhbmRsZXIsXHJcblx0XHR1c2VDbGFzczogybVIdHRwSW50ZXJjZXB0aW5nSGFuZGxlclxyXG5cdH0sIHtcclxuXHRcdHByb3ZpZGU6IEJBU0VfSFRUUF9JTlRFUkNFUFRPUlMsXHJcblx0XHRkZXBzOiBbSW5qZWN0b3IsIEhUVFBfSU5URVJDRVBUT1JTXSxcclxuXHRcdHVzZUZhY3Rvcnk6IChpbmplY3RvciwgaW50ZXJjZXB0b3JzKSA9PiBbXHJcblx0XHRcdC4uLmludGVyY2VwdG9ycyxcclxuXHRcdFx0Li4uaW5qZWN0b3IucGFyZW50LmdldChCQVNFX0hUVFBfSU5URVJDRVBUT1JTKVxyXG5cdFx0XVxyXG5cdH0sXHJcblx0Li4uSU5URVJDRVBUT1JTX1BST1ZJREVSU1xyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1c2luZXNzQXBpTW9kdWxlIHsgfVxyXG4iXX0=