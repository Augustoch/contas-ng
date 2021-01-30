import { BehaviorSubject } from 'rxjs';
import { ConfirmDialogService } from '../confirm-dialog/confirm-dialog.service';
import { ContaDTO } from '../../../model/conta.dto';
import { ContaPagarService } from '../../../services/boleto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'form-conta',
  templateUrl: './form-conta.component.html',
  styleUrls: ['./form-conta.component.css'],
})
export class FormContaComponent implements OnInit {
  arquivo: any;
  conta: FormGroup;
  foiSalvo = new BehaviorSubject<boolean>(false);

  constructor(
    private _fb: FormBuilder,
    private _boleto: ContaPagarService,
    private _snackBar: MatSnackBar,
    private _cd: ConfirmDialogService,
    public dialogRef: MatDialogRef<FormContaComponent>
  ) {}

  ngOnInit() {
    this.conta = this._fb.group({
      descricao: [null, Validators.required],
      comentarios: null,
      vencimento: [null, Validators.required],
      boleto: [null, Validators.required],
    });
    
  }

  handleFileInput(event: any) {
    this.arquivo = event.target.files[0];
  }

  salvar() {
    if (this.conta.valid && this.arquivo) {
      const conta = new ContaDTO(this.conta.value);
      conta.boleto = this.arquivo;

      this._boleto.salvar(conta).subscribe(()=>{
        this._snackBar.open('Salvo com sucesso!', 'X')
        this.dialogRef.close();
        this.foiSalvo.next(true);
      }, (responseErro) => this._snackBar.open(responseErro.error.message, 'X'));
    } else {
      this._snackBar.open('Dados incompletos, verifique os campos!', 'X');
    }
  }
  
  cancelar() {
    this._cd.showConfirmDialog('Deseja cancelar ?').subscribe((cancelar)=>{
      if(cancelar){
        this.dialogRef.close();
        this.foiSalvo.next(false);
      }
    });
  }
  
  onClose(){
    return this.foiSalvo.asObservable();
  }
}
