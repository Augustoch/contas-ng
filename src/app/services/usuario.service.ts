import { apendApi } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UsuarioDTO } from './../model/usuario.dto';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class UsuarioService {
    
    path = apendApi('usuarios')
    
    constructor(private httpClient: HttpClient) { }
    
    public salvarUsuario(usuarioDTO: UsuarioDTO){
        return this.httpClient.post(this.path, usuarioDTO)
    }
    
    
}