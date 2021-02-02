import { TokenDTO } from './../model/token.dto';
import { environment } from './../../environments/environment';
import { User } from './../model/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
    private tokenSubject: BehaviorSubject<any>;
    public tokenUser: Observable<User>;

    constructor(private http: HttpClient, private router: Router) {
        this.tokenSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('token') as string));
        this.tokenUser = this.tokenSubject.asObservable();
    }

    public get tokenValue(): TokenDTO {
        return this.tokenSubject.getValue();
    }

    login(usuario: string, senha: string) {
        return this.http.post<any>(`${environment.API_URL}/auth`, { usuario, senha })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', JSON.stringify(user));
                this.tokenSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        this.tokenSubject.next(null);
        this.router.navigate([''])
    }

    //set name user new in storage
    setUserName(username:string){

        localStorage.setItem('username', JSON.stringify(username));
        
    }

    getUserName(): string{
        return JSON.parse(localStorage.getItem('username') as string);
    }
    
}