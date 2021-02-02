import { PesquisaContaDTO } from './../../../../model/pesquisa-conta.dto';
import { PagadorDataService } from './../pagador.data-service';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogService } from 'src/app/components/shared/confirm-dialog/confirm-dialog.service';
import { FormContaComponent } from 'src/app/components/shared/form-conta/form-conta.component';
import { ListagemDeContaDTO } from 'src/app/model/listagem-de-conta.dto';
import { ContaPagarService } from 'src/app/services/boleto.service';
import { ComentarioComponent } from 'src/app/components/shared/comentario/comentario.component';
import { ViewPDFComponent } from 'src/app/components/shared/pdf/view-pdf.component';
import { ContaPagamentoComponent } from 'src/app/components/shared/conta-pagamento/conta-pagamento.component';
import { of } from 'rxjs';

@Component({
  selector: 'pagador-list',
  templateUrl: './pagador-list.component.html',
  styleUrls: ['./pagador-list.component.css'],
})
export class PagadorListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'descricaoConta',
    'vencimento',
    'situacaoConta',
    'acoes',
  ];
  dataSource: Array<ListagemDeContaDTO>;

  constructor(
    private dialog: MatDialog,
    private _boleto: ContaPagarService,
    private _cd: ConfirmDialogService,
    private _pagadorDS: PagadorDataService
  ) {}

  ngOnInit() {
    this._pagadorDS.observarComandoDeAtualizarLista().subscribe((pesquisa) => {
      this.obterListaDeConta(pesquisa as PesquisaContaDTO);
    });
  }

  obterListaDeConta(pesquisa?: PesquisaContaDTO) {
    this._boleto.obterContas(pesquisa).subscribe((listaDeContas) => {
      this.dataSource = listaDeContas;
    });
  }

  deletar(id: number, descricao: string) {
    this._cd
      .showConfirmDialog(
        `DESEJA EXCLUIR CONTA COM ID: ${id}, \n DESCRIÇÃO: ${descricao} ?`
      )
      .pipe(
        switchMap((excluir: Boolean) => {
          if (excluir) {
            return this._boleto.deletar(id);
          }
          return of(null);
        })
      )
      .subscribe(() => {
        this.obterListaDeConta();
      });
  }

  verComentario(addConta: string, pagamento: string) {
    this.dialog.open(ComentarioComponent, {
      data: { addConta: addConta, pagamento: pagamento },
    });
  }

  visualizar(idArquivo: number, nomeArquivo: string) {
    this.dialog.open(ViewPDFComponent, {
      height: '90%',
      width: '80%',
      data: { nome: nomeArquivo, idArquivo: idArquivo },
    });
  }

  pagar(idConta: number, descricaoConta: string, vencimento: Date) {
    const dialog = this.dialog.open(ContaPagamentoComponent, {
      width: '50%',
      height: '52%',
      data: {
        idConta: idConta,
        descricaoConta: descricaoConta,
        vencimento: vencimento,
      },
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
}
