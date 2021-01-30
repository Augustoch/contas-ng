import { uppercase } from './../../../util/utils';
import { ContaPagarService } from 'src/app/services/boleto.service';
import { SalvarPagamentoDTO } from './../../../model/salvar-pagamento.dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadoContaBancaria } from './../../../model/dado-conta-bancaria';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { Conta } from 'src/app/model/conta';
import { ContaBancoService } from 'src/app/services/conta-banco.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'conta-pagamento',
  templateUrl: './conta-pagamento.component.html',
  styleUrls: ['./conta-pagamento.component.css'],
})
export class ContaPagamentoComponent implements OnInit {
  dcb: Array<DadoContaBancaria> = new Array();
  arquivo: any;
  contaPagamento: FormGroup;
  private foiSalvo = new BehaviorSubject<boolean>(false);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Conta,
    private cb: ContaBancoService,
    private fb: FormBuilder,
    private _cp: ContaPagarService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ContaPagamentoComponent>
  ) {}

  ngOnInit() {
    this.contaPagamento = this.fb.group({
      idContaSaida: [null, Validators.required],
      comentarioDePagamento: null,
      comprovante: null,
    });
    this.obterContaBancaria();
  }

  obterContaBancaria() {
    this.cb.obterContasBancarias().subscribe((dado) => {
      this.dcb = dado;
    });
  }

  handleFileInput(event: any) {
    this.arquivo = event.target.files[0];
  }

  salvar() {
    if (this.contaPagamento.valid && this.arquivo) {
      const value = this.contaPagamento.value as SalvarPagamentoDTO;
      value.comprovante = this.arquivo;
      value.idContaPagar = this.data.idConta;
      uppercase(value);
      this._cp.salvarPagamento(value).subscribe(()=>{
        this.foiSalvo.next(true);
        this.dialogRef.close();
      });
    } else {
      this._snackBar.open('Dados incompletos, verifique os campos!', 'X');
    }
  }
  
  onClose(){
    return this.foiSalvo.asObservable();
  }
}
