import { Injector, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS as BASE_HTTP_INTERCEPTORS, HttpClient, HttpHandler, ɵHttpInterceptingHandler } from '@angular/common/http';
import { HTTP_INTERCEPTORS, INTERCEPTORS_PROVIDERS } from './interceptors/providers';
import * as i0 from "@angular/core";
export class BusinessApiModule {
}
/** @nocollapse */ BusinessApiModule.ɵmod = i0.ɵɵdefineNgModule({ type: BusinessApiModule });
/** @nocollapse */ BusinessApiModule.ɵinj = i0.ɵɵdefineInjector({ factory: function BusinessApiModule_Factory(t) { return new (t || BusinessApiModule)(); }, providers: [{
            provide: HttpClient,
            useClass: HttpClient
        }, {
            provide: HttpHandler,
            useClass: ɵHttpInterceptingHandler
        }, {
            provide: BASE_HTTP_INTERCEPTORS,
            deps: [Injector, HTTP_INTERCEPTORS],
            useFactory: ((injector, interceptors) => [
                ...interceptors,
                ...injector.parent.get(BASE_HTTP_INTERCEPTORS)
            ])
        },
        ...INTERCEPTORS_PROVIDERS
    ] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BusinessApiModule, [{
        type: NgModule,
        args: [{
                providers: [{
                        provide: HttpClient,
                        useClass: HttpClient
                    }, {
                        provide: HttpHandler,
                        useClass: ɵHttpInterceptingHandler
                    }, {
                        provide: BASE_HTTP_INTERCEPTORS,
                        deps: [Injector, HTTP_INTERCEPTORS],
                        useFactory: ((injector, interceptors) => [
                            ...interceptors,
                            ...injector.parent.get(BASE_HTTP_INTERCEPTORS)
                        ])
                    },
                    ...INTERCEPTORS_PROVIDERS
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MtYXBpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BvbW5pY2hhbm5lbDItY29tbWVyY2lhbC1wbGF0YWZvcm0td2FsbGV0LW1hbmFnZW1lbnQvZnJvbnQtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2J1c2luZXNzLWFwaS9idXNpbmVzcy1hcGkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxpQkFBaUIsSUFBSSxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFdEksT0FBTyxFQUFFLGlCQUFpQixFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBcUJyRixNQUFNLE9BQU8saUJBQWlCOztxREFBakIsaUJBQWlCO2lIQUFqQixpQkFBaUIsbUJBakJsQixDQUFDO1lBQ1gsT0FBTyxFQUFFLFVBQVU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7U0FDcEIsRUFBRTtZQUNGLE9BQU8sRUFBRSxXQUFXO1lBQ3BCLFFBQVEsRUFBRSx3QkFBd0I7U0FDbEMsRUFBRTtZQUNGLE9BQU8sRUFBRSxzQkFBc0I7WUFDL0IsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLGlCQUFpQixDQUFDO1lBQ25DLFVBQVUsR0FBRSxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDO2dCQUN2QyxHQUFHLFlBQVk7Z0JBQ2YsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQzthQUM5QyxDQUFBO1NBQ0Q7UUFDRCxHQUFHLHNCQUFzQjtLQUN4QjtrREFFVyxpQkFBaUI7Y0FsQjdCLFFBQVE7ZUFBQztnQkFDVCxTQUFTLEVBQUUsQ0FBQzt3QkFDWCxPQUFPLEVBQUUsVUFBVTt3QkFDbkIsUUFBUSxFQUFFLFVBQVU7cUJBQ3BCLEVBQUU7d0JBQ0YsT0FBTyxFQUFFLFdBQVc7d0JBQ3BCLFFBQVEsRUFBRSx3QkFBd0I7cUJBQ2xDLEVBQUU7d0JBQ0YsT0FBTyxFQUFFLHNCQUFzQjt3QkFDL0IsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLGlCQUFpQixDQUFDO3dCQUNuQyxVQUFVLEdBQUUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQzs0QkFDdkMsR0FBRyxZQUFZOzRCQUNmLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7eUJBQzlDLENBQUE7cUJBQ0Q7b0JBQ0QsR0FBRyxzQkFBc0I7aUJBQ3hCO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgYXMgQkFTRV9IVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudCwgSHR0cEhhbmRsZXIsIMm1SHR0cEludGVyY2VwdGluZ0hhbmRsZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUywgSU5URVJDRVBUT1JTX1BST1ZJREVSUyB9IGZyb20gJy4vaW50ZXJjZXB0b3JzL3Byb3ZpZGVycyc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRwcm92aWRlcnM6IFt7XHJcblx0XHRwcm92aWRlOiBIdHRwQ2xpZW50LFxyXG5cdFx0dXNlQ2xhc3M6IEh0dHBDbGllbnRcclxuXHR9LCB7XHJcblx0XHRwcm92aWRlOiBIdHRwSGFuZGxlcixcclxuXHRcdHVzZUNsYXNzOiDJtUh0dHBJbnRlcmNlcHRpbmdIYW5kbGVyXHJcblx0fSwge1xyXG5cdFx0cHJvdmlkZTogQkFTRV9IVFRQX0lOVEVSQ0VQVE9SUyxcclxuXHRcdGRlcHM6IFtJbmplY3RvciwgSFRUUF9JTlRFUkNFUFRPUlNdLFxyXG5cdFx0dXNlRmFjdG9yeTogKGluamVjdG9yLCBpbnRlcmNlcHRvcnMpID0+IFtcclxuXHRcdFx0Li4uaW50ZXJjZXB0b3JzLFxyXG5cdFx0XHQuLi5pbmplY3Rvci5wYXJlbnQuZ2V0KEJBU0VfSFRUUF9JTlRFUkNFUFRPUlMpXHJcblx0XHRdXHJcblx0fSxcclxuXHQuLi5JTlRFUkNFUFRPUlNfUFJPVklERVJTXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnVzaW5lc3NBcGlNb2R1bGUgeyB9XHJcbiJdfQ==