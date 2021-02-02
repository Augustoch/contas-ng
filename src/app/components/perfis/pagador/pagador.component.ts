import { AuthenticationService } from './../../../services/authentication.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PagadorDataService } from './pagador.data-service';
import { ContaBancoComponent } from './../../shared/conta-banco/conta-banco.component';
import { ContaPagamentoComponent } from './../../shared/conta-pagamento/conta-pagamento.component';
import { ViewPDFComponent } from './../../shared/pdf/view-pdf.component';
import { ConfirmDialogService } from './../../shared/confirm-dialog/confirm-dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormContaComponent } from '../../shared/form-conta/form-conta.component';
import { ContaPagarService } from 'src/app/services/boleto.service';
import { ListagemDeContaDTO } from 'src/app/model/listagem-de-conta.dto';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ComentarioComponent } from '../../shared/comentario/comentario.component';
import { DadoContaBancaria } from 'src/app/model/dado-conta-bancaria';
import { ContaBancoService } from 'src/app/services/conta-banco.service';

@Component({
  selector: 'pagador',
  templateUrl: './pagador.component.html',
  styleUrls: ['./pagador.component.css'],
})
export class PagadorComponent implements OnInit {
  
  
  constructor(
    private dialog: MatDialog,
    private _pagadorDS: PagadorDataService,
    public authenticationService: AuthenticationService
    ) {}

  ngOnInit() {
    this._pagadorDS.atualizarLista();}

  abrirFormConta() {
    const contaForm = this.dialog.open(FormContaComponent, {
      width: '40%',
      height: '50%',
      disableClose: true,
    });
  }
  
  cadastrarConta() {
    this.dialog.open(ContaBancoComponent, { width: '50%', height: '50%' });
  }
  
  logOut(){
    this.authenticationService.logout();
  }
  
}
