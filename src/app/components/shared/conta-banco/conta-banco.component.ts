import { DadoContaBancaria } from './../../../model/dado-conta-bancaria';
import { uppercase } from './../../../util/utils';
import { ContaBancoService } from './../../../services/conta-banco.service';
import { FormControl, FormControlName, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'conta-banco',
  templateUrl: './conta-banco.component.html',
  styleUrls: ['./conta-banco.component.css'],
})
export class ContaBancoComponent implements OnInit {
  displayedColumns: string[] = ['Id.', 'Conta', 'Ações'];
  dataSource = new Array<DadoContaBancaria>();

  descricao = new FormControl('', Validators.required);

  constructor(private cb: ContaBancoService) {}

  ngOnInit() {
    this.obterContaBancaria()
  }

  salvarConta() {
    if (this.descricao.valid)
      this.cb
        .salvarContaBanco((this.descricao.value as string).toUpperCase())
        .subscribe(() => {
          this.descricao.reset('');
          this.obterContaBancaria()
        });
  }

  obterContaBancaria() {
    this.cb.obterContasBancarias().subscribe((dado)=>{
      this.dataSource = dado;
    })
  }
  
  deletar(id: number){
    this.cb.deletar(id).subscribe(()=> this.obterContaBancaria())
  }
}
