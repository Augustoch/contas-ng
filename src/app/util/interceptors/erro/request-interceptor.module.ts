import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RequestInterceptor } from './request-interceptor';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [RequestInterceptor, {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}],
})
export class RequestInterceptorModule { }
