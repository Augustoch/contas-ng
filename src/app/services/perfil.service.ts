import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apendApi } from 'src/environments/environment';
import { Perfil } from '../model/perfil';

@Injectable({providedIn: 'root'})
export class PerfilService {
    
    path = apendApi('perfis/');
    
    constructor(private httpClient: HttpClient) { }
    
    public obterPerfis(){
        return this.httpClient.get<Array<Perfil>>(this.path);
    }
    
}