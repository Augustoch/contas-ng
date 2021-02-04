import { Empresa } from './../../../model/empresa';
import { EmpresaService } from './../../../services/empresa.service';
import { PagadorDataService } from './../../perfis/pagador/pagador.data-service';
import { BehaviorSubject } from 'rxjs';
import { ConfirmDialogService } from '../confirm-dialog/confirm-dialog.service';
import { ContaDTO } from '../../../model/conta.dto';
import { ContaPagarService } from '../../../services/boleto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'form-conta',
  templateUrl: './form-conta.component.html',
  styleUrls: ['./form-conta.component.css'],
})
export class FormContaComponent implements OnInit {
  conta: FormGroup;
  empresas: Array<Empresa>

  constructor(
    private _fb: FormBuilder,
    private _boleto: ContaPagarService,
    private _snackBar: MatSnackBar,
    private _cd: ConfirmDialogService,
    public dialogRef: MatDialogRef<FormContaComponent>,
    private _pagadoDS: PagadorDataService,
    private _empresaService: EmpresaService
  ) {}

  ngOnInit() {
    this.conta = this._fb.group({
      descricao: [null, Validators.required],
      comentarios: null,
      vencimento: [null, Validators.required],
      boleto: [null, Validators.required],
      idEmpresaResposavel: [null, Validators.required]
    });
    this.obterEmpresas();
  }

  private obterEmpresas() {
    this._empresaService.obterEmpresas().subscribe((empresas) => {
      this.empresas = empresas;
    });
  }

  salvar() {
    if (this.conta.valid) {
      const conta = new ContaDTO(this.conta.value);
      this._boleto.salvar(conta).subscribe(()=>{
        this.fecharDialog();
      });
    } else {
      this._snackBar.open('Dados incompletos, verifique os campos!', 'X');
    }
  }
  
  private fecharDialog() {
    this._pagadoDS.atualizarLista();
    this.dialogRef.close();
  }

  cancelar() {
    this._cd.showConfirmDialog('Deseja cancelar ?').subscribe((cancelar)=>{
      if(cancelar){
        this.fecharDialog()
      }
    });
  }
}
