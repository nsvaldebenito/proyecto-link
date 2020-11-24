import { RouterModule } from '@angular/router';
import { BusinessApiModule } from './business-api';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TokenMaterialModule } from './token-material.module';
import { TokenTableComponent } from './components';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
var routes = [
    {
        path: '',
        component: TokenTableComponent
    }
];
var FrontCommonModule = /** @class */ (function () {
    function FrontCommonModule() {
    }
    /** @nocollapse */ FrontCommonModule.ɵmod = i0.ɵɵdefineNgModule({ type: FrontCommonModule });
    /** @nocollapse */ FrontCommonModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FrontCommonModule_Factory(t) { return new (t || FrontCommonModule)(); }, imports: [[
                CommonModule,
                BusinessApiModule,
                TokenMaterialModule,
                RouterModule.forChild(routes)
            ]] });
    return FrontCommonModule;
}());
export { FrontCommonModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FrontCommonModule, { declarations: [TokenTableComponent], imports: [CommonModule,
        BusinessApiModule,
        TokenMaterialModule, i1.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FrontCommonModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    BusinessApiModule,
                    TokenMaterialModule,
                    RouterModule.forChild(routes)
                ],
                declarations: [TokenTableComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnQtY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BvbW5pY2hhbm5lbDItY29tbWVyY2lhbC1wbGF0YWZvcm0td2FsbGV0LW1hbmFnZW1lbnQvZnJvbnQtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Zyb250LWNvbW1vbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBRXZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7O0FBRW5ELElBQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsbUJBQW1CO0tBQy9CO0NBQ0YsQ0FBQztBQUVGO0lBQUE7S0FTaUM7eURBQXBCLGlCQUFpQjtxSEFBakIsaUJBQWlCLGtCQVJuQjtnQkFDUCxZQUFZO2dCQUNaLGlCQUFpQjtnQkFDakIsbUJBQW1CO2dCQUNuQixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUM5Qjs0QkFyQkg7Q0F3QmlDLEFBVGpDLElBU2lDO1NBQXBCLGlCQUFpQjt3RkFBakIsaUJBQWlCLG1CQUZiLG1CQUFtQixhQUxoQyxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLG1CQUFtQjtrREFLVixpQkFBaUI7Y0FUN0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGlCQUFpQjtvQkFDakIsbUJBQW1CO29CQUNuQixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztpQkFDOUI7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEJ1c2luZXNzQXBpTW9kdWxlIH0gZnJvbSAnLi9idXNpbmVzcy1hcGknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb2tlbk1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi90b2tlbi1tYXRlcmlhbC5tb2R1bGUnO1xuaW1wb3J0IHsgVG9rZW5UYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBUb2tlblRhYmxlQ29tcG9uZW50XG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQnVzaW5lc3NBcGlNb2R1bGUsXG4gICAgVG9rZW5NYXRlcmlhbE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtUb2tlblRhYmxlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBGcm9udENvbW1vbk1vZHVsZSB7fVxuIl19