import { ArquivoModule } from './../../../util/arquivo/arquivo.module';
import { ConfirmDialogModule } from '../confirm-dialog/confirm-dialog.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormContaComponent } from './form-conta.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material-util.module';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ConfirmDialogModule,
    MaterialModule,
    ArquivoModule,
    MatCheckboxModule
  ],
  exports: [FormContaComponent],
  declarations: [FormContaComponent],
  providers: [MatSnackBar],
})
export class FormContaModule {}
