import { ListagemDeContaDTO } from './../../../../model/listagem-de-conta.dto';
import { PagadorDataService } from './../pagador.data-service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormContaComponent } from 'src/app/components/shared/form-conta/form-conta.component';
import { ConfirmDialogService } from 'src/app/components/shared/confirm-dialog/confirm-dialog.service';
import { mergeMap, map } from 'rxjs/operators';
import { ContaPagarService } from 'src/app/services/boleto.service';
import { of } from 'rxjs';
import { ComentarioComponent } from 'src/app/components/shared/comentario/comentario.component';
import { ViewPDFComponent } from 'src/app/components/shared/pdf/view-pdf.component';
import { ContaPagamentoComponent } from 'src/app/components/shared/conta-pagamento/conta-pagamento.component';
import { ArquivoService } from 'src/app/services/arquivo.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'pagador-botoes',
  templateUrl: 'pagador-botoes.component.html',
  styleUrls: ['./pagador-botoes.component.css'],
})
export class PagadorBotoesComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private pagadorDS: PagadorDataService,
    private _cd: ConfirmDialogService,
    private _boleto: ContaPagarService,
    private arquivoService: ArquivoService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {}

  abrirFormConta() {
    const contaForm = this.dialog.open(FormContaComponent, {
      width: '40%',
      height: '50%',
      disableClose: true,
    });
  }

  desabilitaParaMultiplasSelecoes() {
    return this.pagadorDS.selection.selected.length !== 1;
  }

  deletar() {
    this._cd
      .showConfirmDialog(
        `DESEJA EXCLUIR CONTA COM ID: ${this.contaSelecionada.idConta}, \n DESCRIÇÃO: ${this.contaSelecionada.descricaoConta} ?`
      )
      .pipe(
        mergeMap((excluir: Boolean) => {
          if (excluir) {
            return this._boleto.deletar(this.contaSelecionada.idConta);
          }
          return of(0);
        })
      )
      .subscribe((idContaDeletado) => {
        this.pagadorDS.removerContaDaListaPorId(idContaDeletado);
      });
  }

  verComentario() {
    this.dialog.open(ComentarioComponent, {
      data: {
        addConta: this.contaSelecionada.comentarios,
        pagamento: this.contaSelecionada.comentarioDePagamento,
      },
    });
  }

  visualizarBoleto() {
    this.dialog.open(ViewPDFComponent, {
      height: '90%',
      width: '80%',
      data: {
        nome: this.contaSelecionada.nomeBoleto,
        idArquivo: this.contaSelecionada.idBoleto,
      },
    });
  }
  visualizarComprovante() {
    this.dialog.open(ViewPDFComponent, {
      height: '90%',
      width: '80%',
      data: {
        nome: this.contaSelecionada.nomeComprovante,
        idArquivo: this.contaSelecionada.idComprovante,
      },
    });
  }

  pagar() {
    const dialog = this.dialog.open(ContaPagamentoComponent, {
      width: 'fit-content',
      height: 'fit-content',
      data: {
        idConta: this.contaSelecionada.idConta,
        descricaoConta: this.contaSelecionada.descricaoConta,
        vencimento: this.contaSelecionada.vencimento,
      },
    });
  }

  get contaSelecionada() {
    return this.pagadorDS.selection.selected[0];
  }

  eSituacaoContaPaga() {
    if (this.contaSelecionada)
      return this.contaSelecionada.situacaoConta === 'PAGO';
    return false;
  }

  eSituacaoContaAguardandoPagamento() {
    if (this.contaSelecionada)
      return this.contaSelecionada.situacaoConta === 'AGUARDANDO_PAGAMENTO';
    return false;
  }

  desabilitaBtnPagar() {
    return this.desabilitaParaMultiplasSelecoes() || this.eSituacaoContaPaga();
  }

  desabilitaBtnComprovante() {
    return (
      this.desabilitaParaMultiplasSelecoes() ||
      this.eSituacaoContaAguardandoPagamento()
    );
  }

  baixarBoletosComprovante() {
    this.pagadorDS.selection.selected.map((itemConta: ListagemDeContaDTO) => {
      if (itemConta.situacaoConta === 'PAGO') {
        this.arquivoService
          .obterBoletoComprovante(itemConta.idBoleto, itemConta.idComprovante)
          .subscribe((file) => {
            const blob = new Blob([file], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            var anchor = document.createElement('a');
            anchor.download = `${
              itemConta.descricaoConta
            }-boleto-comprovante-venc-${this.datePipe.transform(
              itemConta.vencimento,
              'dd-MM-yyyy'
            )}.pdf`;
            anchor.href = url;
            anchor.click();
          });
      }
    });
  }

  desabilitarBtnDownload() {
    return !this.pagadorDS.selection.selected.some(
      (item) => item.situacaoConta == 'PAGO'
    );
  }
}
