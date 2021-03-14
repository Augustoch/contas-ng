import { LogoutModule } from './../../shared/logout/logout.module';
import { PagadorBotoesModule } from './pagador-botoes/pagador-botoes.module';
import { EmpresaModule } from './../../shared/empresa/empresa.module';
import { PesquisaFormModule } from './pesquisa-form/pesquisa-form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PagadorDataService } from './pagador.data-service';
import { PagadorListModule } from './pagador-list/pagador-list.module';
import { MaterialModule } from './../../shared/material-util.module';
import { ComentarioModule } from './../../shared/comentario/comentario.module';
import { ContaBancoModule } from './../../shared/conta-banco/conta-banco.module';
import { ContaPagamentoModule } from './../../shared/conta-pagamento/conta-pagamento.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PagadorComponent } from './pagador.component';
import { FormContaModule } from '../../shared/form-conta/form-conta.module';
import { ViewPDFModule } from '../../shared/pdf/view-pdf.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    ViewPDFModule,
    ContaPagamentoModule,
    PagadorListModule,
    ContaBancoModule,
    ComentarioModule,
    PesquisaFormModule,
    EmpresaModule,
    PagadorBotoesModule,
    LogoutModule
  ],
  exports: [PagadorComponent],
  declarations: [PagadorComponent],
  providers: [PagadorDataService],
})
export class PagadorModule {}
