import { PesquisaContaDTO } from './../../../model/pesquisa-conta.dto';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PagadorDataService {
    
    private atualizarPagadorList = new BehaviorSubject<Object>({});
        
    constructor() { }
    
    observarComandoDeAtualizarLista(){
        return this.atualizarPagadorList.asObservable();
    }
    
    
    atualizarLista(object?: PesquisaContaDTO){
        this.atualizarPagadorList.next(object as Object);
    }
    
        
    
}