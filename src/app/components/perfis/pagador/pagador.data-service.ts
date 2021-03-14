import { PesquisaContaDTO } from './../../../model/pesquisa-conta.dto';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ListagemDeContaDTO } from 'src/app/model/listagem-de-conta.dto';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({ providedIn: 'root' })
export class PagadorDataService {
  private atualizarPagadorList = new Subject<PesquisaContaDTO>();
  selection = new SelectionModel<ListagemDeContaDTO>(true, []);
  ultimaPesquisa: PesquisaContaDTO | undefined;
  dataSource = new MatTableDataSource<ListagemDeContaDTO>();

  constructor() {}

  observarComandoDeAtualizarLista() {
    return this.atualizarPagadorList.asObservable();
  }

  atualizarLista(object?: PesquisaContaDTO) {
    this.ultimaPesquisa = object;
    this.atualizarPagadorList.next(object);
  }

  atualizarComUltimoFiltro() {
    this.atualizarPagadorList.next(this.ultimaPesquisa);
  }
  
  limparSelecao(){
      this.selection.clear();      
  }

  removerContaDaListaPorId(id: number) {
    if(id > 0){
        this.dataSource.data = this.dataSource.data.filter((item)=> item.idConta !== id );
        this.limparSelecao();        
    }
  }
}
