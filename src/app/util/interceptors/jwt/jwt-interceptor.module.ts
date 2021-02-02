import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { JWTInterceptor } from './jwt-interceptor';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [JWTInterceptor, {provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true}],
})
export class JWTInterceptorModule { }
