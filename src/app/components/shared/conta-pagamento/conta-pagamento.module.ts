import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContaPagamentoComponent } from './conta-pagamento.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatSelectModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatIconModule],
  exports: [ContaPagamentoComponent],
  declarations: [ContaPagamentoComponent],
  providers: [],
})
export class ContaPagamentoModule {}
