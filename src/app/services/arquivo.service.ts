import { apendApi } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ArquivoService {
    
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/octet-stream', 'responseType': 'text' })
    }
    
    path = apendApi('arquivos/');
    
    constructor(private http: HttpClient) { }
    
    obterArquivo(idArquivo: number){
        return this.http.get(this.path.concat(`${idArquivo}`), {responseType: 'arraybuffer'});
    }
    
}