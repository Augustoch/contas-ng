import { AuthenticationService } from './../../services/authentication.service';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/model/perfil';

@Component({
  selector: 'escolher-perfil',
  templateUrl: './escolher-perfil.component.html',
  styleUrls: ['./escolher-perfil.component.css'],
})
export class EscolherPerfilComponent implements OnInit {
  perfis = new Array<Perfil>(); 

  fg: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private auth: AuthenticationService) {
    this.fg = this.fb.group({
      perfilSelecionado: [null, Validators.required],
    });
  }

  ngOnInit() {
      this.perfis = this.auth.getPerfis();
  }

  irPara() {
    if (this.fg.valid) {
      this.router.navigate([
        `/${(this.fg.controls.perfilSelecionado.value as Perfil).rota}`,
      ]);
    }
  }
}
