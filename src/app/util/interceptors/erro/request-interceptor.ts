import { SpinnerService } from './../../../components/shared/spinner/spinner-container.service';
import { uppercase } from '../../utils';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, timeout } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from '../../../services/authentication.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  metodo: string;
  naoEAuthReques: boolean;
  naoMetodoGet: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private _snackBar: MatSnackBar,
    private spinnerService: SpinnerService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinnerService.mostrar();
    uppercase(request.body);
    this.metodo = request.method;
    this.naoMetodoGet = this.metodo !== 'GET';
    this.naoEAuthReques = !request.url.includes('auth');
    return next.handle(request).pipe(/* timeout(5000), */
      tap((res: any) => {
        if (res.status) this.spinnerService.esconder();
        if (res.status && this.naoEAuthReques && this.naoMetodoGet)
          this.handleSuccess(res);
      }),
      catchError((err) => {
        this.spinnerService.esconder();
        return this.erroHandle(err);
      })
    );
  }

  private erroHandle(err: any) {
    if (err.status === 401) {
      // auto logout if 401 response returned from api
      this.authenticationService.logout();
      location.reload();
    }
    if (err.status === 500) {
      this._snackBar.open(
        `${err.error.error} \n ${err.error.message}`,
        'Fechar',
        { duration: 3000 }
      );
    }
    if (err.status === 403) {
      this._snackBar.open(
        `${err.error.error} \n ${err.error.message}`,
        'Fechar',
        { duration: 3000 }
      );
    }
    const error = err.message || err.statusText;
    return throwError(error);
  }

  private handleSuccess(res: any) {
    if (res.status === 200 && this.metodo == 'POST') {
      this.comSucesso('Salvo');
    }
    if (res.status === 200 && this.metodo == 'PUT') {
      this.comSucesso('Atualizado');
    }
    if (res.status === 200 && this.metodo == 'DELETE') {
      this.comSucesso('Excluído');
    }
  }

  private comSucesso(prefixo: string) {
    this._snackBar.open(`${prefixo} com sucesso`, 'Fechar');
  }
}
