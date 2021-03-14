import { UsuarioDTO } from './../../../model/usuario.dto';
import { PerfilService } from './../../../services/perfil.service';
import { Perfil } from './../../../model/perfil';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'cadastrar-usuario',
  templateUrl: 'cadastrar-usuario.component.html',
  styleUrls: ['cadastrar-usuario.component.css'],
})
export class CadastrarUsuarioComponent implements OnInit {
  formUser: FormGroup;
  perfis: Array<Perfil>;
  regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  senhaEspelho: FormControl;

  senhasBatendo: boolean;

  constructor(
    private fb: FormBuilder,
    private perfilService: PerfilService,
    private usuarioService: UsuarioService,
    public dialogRef: MatDialogRef<CadastrarUsuarioComponent>
  ) {}

  ngOnInit() {
    this.formUser = this.fb.group({
      usuario: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ]),
      ],
      senha: null,
      senhaEspelho: null,
      perfis: [null, Validators.required],
    });

    this.formUser.controls.senha.setValidators(
      Validators.compose([
        Validators.required,
        Validators.pattern(this.regexSenha),
      ])
    );
    this.formUser.controls.senhaEspelho.setValidators(
      Validators.compose([
        Validators.required,
        Validators.pattern(this.regexSenha),
      ])
    );

    this.perfilService.obterPerfis().subscribe((perfis) => {
      this.perfis = perfis;
    });
  }

  checarSenha() {
    if (
      this.formUser.controls.senha.value !==
      this.formUser.controls.senhaEspelho.value
    ) {
      this.formUser.controls.senhaEspelho.setErrors({ senhasNaoBatem: true });
    } else {
      this.formUser.controls.senhaEspelho.setErrors(null);
    }
  }

  salvar() {
    this.usuarioService.salvarUsuario(this.formUser.value).subscribe(()=>{
      this.dialogRef.close();
    });
  }
}
