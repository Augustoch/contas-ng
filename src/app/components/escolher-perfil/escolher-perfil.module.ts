import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EscolherPerfilComponent } from './escolher-perfil.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  exports: [],
  declarations: [EscolherPerfilComponent],
  providers: [],
})
export class EscolherPerfilModule {}
