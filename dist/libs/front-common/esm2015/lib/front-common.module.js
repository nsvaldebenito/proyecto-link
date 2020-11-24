import { RouterModule } from '@angular/router';
import { BusinessApiModule } from './business-api';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TokenMaterialModule } from './token-material.module';
import { TokenTableComponent } from './components';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        component: TokenTableComponent
    }
];
export class FrontCommonModule {
}
/** @nocollapse */ FrontCommonModule.ɵmod = i0.ɵɵdefineNgModule({ type: FrontCommonModule });
/** @nocollapse */ FrontCommonModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FrontCommonModule_Factory(t) { return new (t || FrontCommonModule)(); }, imports: [[
            CommonModule,
            BusinessApiModule,
            TokenMaterialModule,
            RouterModule.forChild(routes)
        ]] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnQtY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BvbW5pY2hhbm5lbDItY29tbWVyY2lhbC1wbGF0YWZvcm0td2FsbGV0LW1hbmFnZW1lbnQvZnJvbnQtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Zyb250LWNvbW1vbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBRXZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7O0FBRW5ELE1BQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsbUJBQW1CO0tBQy9CO0NBQ0YsQ0FBQztBQVdGLE1BQU0sT0FBTyxpQkFBaUI7O3FEQUFqQixpQkFBaUI7aUhBQWpCLGlCQUFpQixrQkFSbkI7WUFDUCxZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLG1CQUFtQjtZQUNuQixZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUM5Qjt3RkFHVSxpQkFBaUIsbUJBRmIsbUJBQW1CLGFBTGhDLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsbUJBQW1CO2tEQUtWLGlCQUFpQjtjQVQ3QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osaUJBQWlCO29CQUNqQixtQkFBbUI7b0JBQ25CLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2lCQUM5QjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQnVzaW5lc3NBcGlNb2R1bGUgfSBmcm9tICcuL2J1c2luZXNzLWFwaSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRva2VuTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL3Rva2VuLW1hdGVyaWFsLm1vZHVsZSc7XG5pbXBvcnQgeyBUb2tlblRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IFRva2VuVGFibGVDb21wb25lbnRcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCdXNpbmVzc0FwaU1vZHVsZSxcbiAgICBUb2tlbk1hdGVyaWFsTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1Rva2VuVGFibGVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEZyb250Q29tbW9uTW9kdWxlIHt9XG4iXX0=