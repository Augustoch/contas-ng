import { ContaBancoComponent } from './../../shared/conta-banco/conta-banco.component';
import { ContaPagamentoComponent } from './../../shared/conta-pagamento/conta-pagamento.component';
import { ViewPDFComponent } from './../../shared/pdf/view-pdf.component';
import { ConfirmDialogService } from './../../shared/confirm-dialog/confirm-dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormContaComponent } from '../../shared/form-conta/form-conta.component';
import { ContaPagarService } from 'src/app/services/boleto.service';
import { ListagemDeContaDTO } from 'src/app/model/listagem-de-conta.dto';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ComentarioComponent } from '../../shared/comentario/comentario.component';



@Component({
    selector: 'pagador',
    templateUrl: './pagador.component.html',
    styleUrls: ['./pagador.component.css']
})

export class PagadorComponent implements OnInit {
    
    displayedColumns: string[] = [ 'id', 'descricaoConta', 'vencimento', 'situacaoConta', 'acoes' ];
  dataSource: Array<ListagemDeContaDTO>;
    
    constructor(private dialog: MatDialog, private _boleto: ContaPagarService, private _cd: ConfirmDialogService) { }

    ngOnInit() { this.obterListaDeConta() }
    
    abrirFormConta(){
        const contaForm = this.dialog.open(FormContaComponent, {width: '40%', height: '50%', disableClose: true})
        
        contaForm.componentInstance.onClose().subscribe(this.afterClose);
    }
    
    afterClose = (foiSalvo)=>{
        if(foiSalvo){
            this.obterListaDeConta();
        }
    }
    
    obterListaDeConta(){
        this._boleto.obterContas().subscribe((listaDeContas)=>{
            this.dataSource = listaDeContas;
        })
    }
    
    deletar(id: number, descricao: string){
        this._cd.showConfirmDialog(`Deseja excluir conta com id:${id}, descrição: ${descricao} ?`).pipe(switchMap((excluir: Boolean)=>{
            if(excluir){
                return this._boleto.deletar(id);                
            }
            return of(null);
        })).subscribe(()=>{
            this.obterListaDeConta();
        });
        
    }
    
    verComentario(coment: string){
        this.dialog.open(ComentarioComponent, {data: {descricao: coment}});
    }
    
    visualizar(idArquivo: number, nomeArquivo: string){
        this.dialog.open(ViewPDFComponent, {height: '90%', width: '80%', data: {nome: nomeArquivo, idArquivo: idArquivo}})
    }
    
    pagar(idConta: number, descricaoConta: string, vencimento: Date){
        const dialog = this.dialog.open(ContaPagamentoComponent, { width: '50%', height: '50%', data: {idConta: idConta, descricaoConta: descricaoConta, vencimento: vencimento } });
        dialog.componentInstance.onClose().subscribe(this.afterClose);
    }
    
    cadastrarConta(){
         this.dialog.open(ContaBancoComponent, { width: '50%', height: '50%'})
        
    }
    
    
}