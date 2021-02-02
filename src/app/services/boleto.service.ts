
import { PesquisaContaDTO } from './../model/pesquisa-conta.dto';
import { SalvarPagamentoDTO } from './../model/salvar-pagamento.dto';
import { ContaDTO } from './../model/conta.dto';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment, apendApi } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { ListagemDeContaDTO } from '../model/listagem-de-conta.dto';
import { URLSearchParams } from 'url';

@Injectable({providedIn: 'root'})
export class ContaPagarService {
    
    path = apendApi('contas-a-pagar/');
    
    constructor(private http: HttpClient) { }    
    
    
    salvar(conta: ContaDTO){
       const data = new FormData();
       
       data.append('boleto', conta.boleto);
       data.append('descricao', conta.descricao);
       data.append('comentarios', conta.comentarios);
       data.append('vencimento', conta.vencimento);
       
       
       return this.http.post( this.path,data);
    }
    
    obterContas(pesquisa?: PesquisaContaDTO){
        let params = new HttpParams();
        
        for (const key in pesquisa) {
            if(Boolean(pesquisa[key]) || pesquisa[key] === ""){
                params = params.append(key, pesquisa[key])                
            }
        }
        return this.http.get<Array<ListagemDeContaDTO>>(this.path, {params: params})
    }
    
    deletar(id: number){
        return this.http.delete(this.path.concat(`${id}`))  
    }
    
    salvarPagamento(pagamento: SalvarPagamentoDTO){
        const data = new FormData();
        for (const key in pagamento) {
            if(pagamento[key]){
                data.append(key, pagamento[key])
            }
        }
        
        return this.http.put(this.path, data);
    }
    
    
}