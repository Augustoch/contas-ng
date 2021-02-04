
import { PesquisaContaDTO } from './../model/pesquisa-conta.dto';
import { SalvarPagamentoDTO } from './../model/salvar-pagamento.dto';
import { ContaDTO } from './../model/conta.dto';
import { HttpClient, HttpParams } from '@angular/common/http';
import { apendApi } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { ListagemDeContaDTO } from '../model/listagem-de-conta.dto';
import { formData, httpParams } from '../util/utils';

@Injectable({providedIn: 'root'})
export class ContaPagarService {
    
    path = apendApi('contas-a-pagar/');
    
    constructor(private http: HttpClient) { }    
    
    
    salvar(conta: ContaDTO){
       return this.http.post( this.path,formData(conta));
    }
    
    obterContas(pesquisa?: PesquisaContaDTO){
        return this.http.get<Array<ListagemDeContaDTO>>(this.path, httpParams(pesquisa))
    }
    
    deletar(id: number){
        return this.http.delete<number>(this.path.concat(`${id}`))  
    }
    
    salvarPagamento(pagamento: SalvarPagamentoDTO){
        return this.http.put(this.path, formData(pagamento));
    }
    
    
}