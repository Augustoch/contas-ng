import { ArquivoModule } from './../../../util/arquivo/arquivo.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContaPagamentoComponent } from './conta-pagamento.component';
import { MaterialModule } from '../material-util.module';

@NgModule({
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, ArquivoModule],
  exports: [ContaPagamentoComponent],
  declarations: [ContaPagamentoComponent],
  providers: [],
})
export class ContaPagamentoModule {}
