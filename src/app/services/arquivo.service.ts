import { formData } from './../util/utils';
import { apendApi } from './../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    
    obterBoletoComprovante(idBoleto: number, idComprovante: number){
        let params = new HttpParams().append('idBoleto', idBoleto.toString()).append('idComprovante', idComprovante.toString());
        return this.http.get(this.path.concat(`boleto-comprovante`), {responseType: 'arraybuffer', params: params});
    }
    
    atualizar(idArquivo: number, file){
        return this.http.put(this.path, formData({idArquivo, file}))
    }
    
}