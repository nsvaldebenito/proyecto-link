import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { iif, of, throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
var ErrorHandlerInterceptor = /** @class */ (function () {
    function ErrorHandlerInterceptor() {
    }
    ErrorHandlerInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(mergeMap(function (event) { return iif(function () { return event instanceof HttpResponse; }, of(event).pipe(mergeMap(function (response) {
            var _a, _b, _c, _d;
            return ((_a = response.body) === null || _a === void 0 ? void 0 : _a.code) === 'ok' && ((_c = (_b = response.body) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.responseCode) === 'OK' ?
                of(response) : throwError((_d = response.body) === null || _d === void 0 ? void 0 : _d.message.respuesta);
        })), of(event)); }));
    };
    /** @nocollapse */ ErrorHandlerInterceptor.ɵfac = function ErrorHandlerInterceptor_Factory(t) { return new (t || ErrorHandlerInterceptor)(); };
    /** @nocollapse */ ErrorHandlerInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: ErrorHandlerInterceptor, factory: ErrorHandlerInterceptor.ɵfac });
    return ErrorHandlerInterceptor;
}());
export { ErrorHandlerInterceptor };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ErrorHandlerInterceptor, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaGFuZGxlci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BvbW5pY2hhbm5lbDItY29tbWVyY2lhbC1wbGF0YWZvcm0td2FsbGV0LW1hbmFnZW1lbnQvZnJvbnQtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2J1c2luZXNzLWFwaS9pbnRlcmNlcHRvcnMvZXJyb3ItaGFuZGxlci5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBd0QsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUcsT0FBTyxFQUFFLEdBQUcsRUFBYyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFLMUM7SUFBQTtLQWlCQztJQWRBLDJDQUFTLEdBQVQsVUFBVSxHQUFxQixFQUFFLElBQWlCO1FBQ2pELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQzNCLFFBQVEsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEdBQUcsQ0FDcEIsY0FBTSxPQUFBLEtBQUssWUFBWSxZQUFZLEVBQTdCLENBQTZCLEVBQ25DLEVBQUUsQ0FBQyxLQUFvQyxDQUFDLENBQUMsSUFBSSxDQUM1QyxRQUFRLENBQUMsVUFBQSxRQUFROztZQUNoQixPQUFBLE9BQUEsUUFBUSxDQUFDLElBQUksMENBQUUsSUFBSSxNQUFLLElBQUksSUFBSSxhQUFBLFFBQVEsQ0FBQyxJQUFJLDBDQUFFLE9BQU8sMENBQUUsWUFBWSxNQUFLLElBQUksQ0FBQyxDQUFDO2dCQUM5RSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsT0FBQyxRQUFRLENBQUMsSUFBSSwwQ0FBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7U0FBQSxDQUFDLENBQzlELEVBQ0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUNULEVBUmlCLENBUWpCLENBQUMsQ0FDRixDQUFDO0lBQ0gsQ0FBQztrR0FkVyx1QkFBdUI7bUVBQXZCLHVCQUF1QixXQUF2Qix1QkFBdUI7a0NBVHBDO0NBeUJDLEFBakJELElBaUJDO1NBaEJZLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBRG5DLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgaWlmLCBPYnNlcnZhYmxlLCBvZiwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFcnJvckhhbmRsZXJJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcblxyXG5cdGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG5cdFx0cmV0dXJuIG5leHQuaGFuZGxlKHJlcSkucGlwZShcclxuXHRcdFx0bWVyZ2VNYXAoZXZlbnQgPT4gaWlmKFxyXG5cdFx0XHRcdCgpID0+IGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlLFxyXG5cdFx0XHRcdG9mKGV2ZW50IGFzIEh0dHBSZXNwb25zZTxSZXNwb25zZTxhbnk+PikucGlwZShcclxuXHRcdFx0XHRcdG1lcmdlTWFwKHJlc3BvbnNlID0+XHJcblx0XHRcdFx0XHRcdHJlc3BvbnNlLmJvZHk/LmNvZGUgPT09ICdvaycgJiYgcmVzcG9uc2UuYm9keT8ubWVzc2FnZT8ucmVzcG9uc2VDb2RlID09PSAnT0snID9cclxuXHRcdFx0XHRcdFx0XHRvZihyZXNwb25zZSkgOiB0aHJvd0Vycm9yKHJlc3BvbnNlLmJvZHk/Lm1lc3NhZ2UucmVzcHVlc3RhKSlcclxuXHRcdFx0XHQpLFxyXG5cdFx0XHRcdG9mKGV2ZW50KVxyXG5cdFx0XHQpKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==