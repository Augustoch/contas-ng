import { PesquisaContaDTO } from './../../../../model/pesquisa-conta.dto';
import { MatSnackBar } from '@angular/material/snack-bar';
import { stringVazia } from './../../../../util/utils';
import { DadoContaBancaria } from './../../../../model/dado-conta-bancaria';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PagadorDataService } from '../pagador.data-service';
import { ContaBancoService } from 'src/app/services/conta-banco.service';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'pesquisa-form',
    templateUrl: './pesquisa-form.component.html',
    styleUrls: ['./pesquisa-form.component.css']
})

export class PesquisaFormComponent implements OnInit {
    dcb: Array<DadoContaBancaria> = new Array();
    pesquisaContaDTO: FormGroup;
    sitaucoes = [{ id:'AGUARDANDO_PAGAMENTO', desc: 'AGUARDANDO PAGAMENTO'}, {id:'PAGO', desc: 'PAGO'},{id:'AGUARDANDO_AUTORIZACAO', desc: 'AGUARDANDO AUTORIZAÇÃO'}];
    
    constructor(private _fb: FormBuilder, private _pagadorDS: PagadorDataService,
        private cb: ContaBancoService,
        private _snackBar: MatSnackBar,
    ) { }

    ngOnInit() { 
        this.pesquisaContaDTO = this._fb.group({
            id: null,
            descricao: null,
            vencInicial: [null, stringVazia],
            vencFinal: [null, stringVazia],
            pagInicial: [null, stringVazia],
            pagFinal: [null, stringVazia],
            situacaoConta: null,
            idContaSaida: null
          })
          this.obterContaBancaria();
    }
    
    obterContaBancaria() {
        this.cb.obterContasBancarias().subscribe((dado) => {
          this.dcb = dado;
          this.dcb = [{id: null, descricao: 'Nenhuma Opção'}, ...this.dcb];
        });
      }
    
    pesquisar(){
        if(this.pesquisaContaDTO.valid){
            this._pagadorDS.atualizarLista(new PesquisaContaDTO(this.pesquisaContaDTO.value));            
        }else{
            this._snackBar.open('Verifique os campos!', 'X');
        }
    }
    
    limpar(){
        this.pesquisaContaDTO.reset();
    }
}