import { ConfirmDialogModule } from '../confirm-dialog/confirm-dialog.module';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormContaComponent } from './form-conta.component';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    ConfirmDialogModule
  ],
  exports: [FormContaComponent],
  declarations: [FormContaComponent],
  providers: [MatSnackBar],
})
export class FormContaModule {}
