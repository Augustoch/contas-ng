import { CadastrarUsuarioComponent } from './../../shared/cadastrar-usuario/cadastrar-usuario.component';
import { MatDialog } from '@angular/material/dialog';
import { EmpresaComponent } from './../../shared/empresa/empresa.component';
import { Component, OnInit } from '@angular/core';
import { ContaBancoComponent } from '../../shared/conta-banco/conta-banco.component';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'administrador',
  templateUrl: 'administrador.component.html',
  styleUrls: ['administrador.component.css'],
})
export class AdministradorComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    public authenticationService: AuthenticationService
  ) {}

  ngOnInit() {}

  cadastrarConta() {
    this.dialog.open(ContaBancoComponent, { width: '50%', height: '50%' });
  }

  cadastrarEmpresa() {
    this.dialog.open(EmpresaComponent, { width: '50%', height: '50%' });
  }

  logOut() {
    this.authenticationService.logout();
  }
  
  cadastrarUsuario(){
    this.dialog.open(CadastrarUsuarioComponent, { width: '50%', height: '50%' });
  }
}
