import { CadastrarUsuarioModule } from './../../shared/cadastrar-usuario/cadastrar-usuario.module';
import { LogoutModule } from './../../shared/logout/logout.module';
import { AdministradorComponent } from './administrador.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../shared/material-util.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, MaterialModule, LogoutModule, /* CadastrarUsuarioModule */],
  exports: [AdministradorComponent],
  declarations: [AdministradorComponent],
  providers: [],
})
export class AdministradorModule {}
