import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LancadorComponent } from './lancador.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormContaModule } from '../../shared/form-conta/form-conta.module';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    FormContaModule
  ],
  exports: [LancadorComponent],
  declarations: [LancadorComponent],
  providers: [],
})
export class LancadorModule {}
