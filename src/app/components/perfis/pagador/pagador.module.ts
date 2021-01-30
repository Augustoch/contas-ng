import { ContaBancoModule } from './../../shared/conta-banco/conta-banco.module';
import { ContaPagamentoModule } from './../../shared/conta-pagamento/conta-pagamento.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { PagadorComponent } from './pagador.component';
import { FormContaModule } from '../../shared/form-conta/form-conta.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ViewPDFModule } from '../../shared/pdf/view-pdf.module';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    FormContaModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    ViewPDFModule,
    ContaPagamentoModule,
    MatMenuModule,
    ContaBancoModule
  ],
  exports: [PagadorComponent],
  declarations: [PagadorComponent],
  providers: [],
})
export class PagadorModule {}
