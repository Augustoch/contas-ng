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
import { MaterialModule } from '../material-util.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ConfirmDialogModule,
    MaterialModule
  ],
  exports: [FormContaComponent],
  declarations: [FormContaComponent],
  providers: [MatSnackBar],
})
export class FormContaModule {}
