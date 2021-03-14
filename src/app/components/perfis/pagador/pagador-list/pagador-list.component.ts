import { PesquisaContaDTO } from './../../../../model/pesquisa-conta.dto';
import { PagadorDataService } from './../pagador.data-service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ListagemDeContaDTO } from 'src/app/model/listagem-de-conta.dto';
import { ContaPagarService } from 'src/app/services/boleto.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'pagador-list',
  templateUrl: './pagador-list.component.html',
  styleUrls: ['./pagador-list.component.css'],
})
export class PagadorListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'select',
    'idConta',
    'descricaoConta',
    'vencimento',
    'situacaoConta'
  ];
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _boleto: ContaPagarService,
    public pagadorDS: PagadorDataService
  ) {}

  ngOnInit() {
    this.pagadorDS.observarComandoDeAtualizarLista().subscribe((pesquisa) => {
      this.obterListaDeConta(pesquisa as PesquisaContaDTO);
    });
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  private obterListaDeConta(pesquisa?: PesquisaContaDTO) {
  
    pesquisa.preecherDataComRange60Dias();
    
    this._boleto.obterContas(pesquisa).subscribe((listaDeContas) => {
      this.pagadorDS.limparSelecao();
      this.pagadorDS.dataSource.data = listaDeContas;
    });
  }
  
  getClass(listagemDeContaDTO: ListagemDeContaDTO) {
    if (listagemDeContaDTO.situacaoConta === 'AGUARDANDO_PAGAMENTO') {
      if (listagemDeContaDTO.estaVencida) {
        return 'vencida';
      } else if (listagemDeContaDTO.venceHoje) {
        return 'vence-hoje';
      }
    }

    return '';
  }
  
  masterToggle() {
    this.isAllSelected() ?
        this.pagadorDS.selection.clear() :
        this.pagadorDS.dataSource.data.forEach(row => this.pagadorDS.selection.select(row));
  }
  
  isAllSelected() {
    const numSelected = this.pagadorDS.selection.selected.length;
    const numRows = this.pagadorDS.dataSource.data.length;
    return numSelected === numRows;
  }
  
  get dataSource(){
    return this.pagadorDS.dataSource;
  }
  
  get selection(){
    return this.pagadorDS.selection;
  }
}
