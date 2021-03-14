import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/components/shared/material-util.module';
import { CadastrarUsuarioComponent } from './cadastrar-usuario.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [CadastrarUsuarioComponent],
  declarations: [CadastrarUsuarioComponent],
  providers: [],
})
export class CadastrarUsuarioModule {}
