import { TokenDTO } from './../../../model/token.dto';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../../services/authentication.service';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
    
    constructor(private authenticationService: AuthenticationService) { }
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token: TokenDTO = this.authenticationService.tokenValue;
        
        if (token && token.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `${token.tipo} ${token.token}`
                }
            });
        }
        return next.handle(request);
    }
}