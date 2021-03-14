import { EmpresaComponent } from './../../shared/empresa/empresa.component';
import { AuthenticationService } from './../../../services/authentication.service';
import { PagadorDataService } from './pagador.data-service';
import { ContaBancoComponent } from './../../shared/conta-banco/conta-banco.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pagador',
  templateUrl: './pagador.component.html',
  styleUrls: ['./pagador.component.css'],
})
export class PagadorComponent implements OnInit {
  constructor(public authenticationService: AuthenticationService) {}

  ngOnInit() {}

  logOut() {
    this.authenticationService.logout();
  }
}
