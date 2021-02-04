import { FormContaModule } from './../../../shared/form-conta/form-conta.module';
import { CommonModule } from '@angular/common';
import { PagadorBotoesComponent } from './pagador-botoes.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/components/shared/material-util.module';

@NgModule({
  imports: [CommonModule, MaterialModule, FormContaModule],
  exports: [PagadorBotoesComponent],
  declarations: [PagadorBotoesComponent],
  providers: [],
})
export class PagadorBotoesModule {}
