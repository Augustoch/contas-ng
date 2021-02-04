import { EmpresaService } from './../../../services/empresa.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Empresa } from 'src/app/model/empresa';

@Component({
    selector: 'empresa',
    templateUrl: 'empresa.component.html',
    styleUrls: ['./empresa.component.css']
})

export class EmpresaComponent implements OnInit {
    
    displayedColumns: string[] = ['Id.', 'Empresa', 'Ações'];
  dataSource = new Array<Empresa>();

  descricao = new FormControl('', Validators.required);
    
    constructor(private empresaService: EmpresaService) { }

    ngOnInit() { 
        this.obterEmpresas();
    }
    
    salvarEmpresa(){
        if (this.descricao.valid)
        this.empresaService.salvarEmpresa((this.descricao.value as string).toUpperCase()).subscribe(()=>{
            this.descricao.reset('');
            this.obterEmpresas();
            
        });
    }
    
    obterEmpresas(){
        this.empresaService.obterEmpresas().subscribe((empresas)=>{
            this.dataSource = empresas
        })
    }
    
    deletar(id: number){
        this.empresaService.deletar(id).subscribe(()=> this.obterEmpresas())
    }
}