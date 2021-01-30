import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/model/perfil';

@Component({
    selector: 'escolher-perfil',
    templateUrl: './escolher-perfil.component.html',
    styleUrls: ['./escolher-perfil.component.css']
    
})

export class EscolherPerfilComponent implements OnInit {
     perfis: Perfil[] = [{nome: 'LANÇADOR', rota: 'lancador'}, {nome: 'AUTORIZADOR', rota: 'autorizador'}, {nome: 'PAGADOR', rota: 'pagador'}]
     
     
     
     
     fg: FormGroup ;
    
    constructor(private router: Router, private fb: FormBuilder) {
        this.fg = this.fb.group({
            perfilSelecionado: [null, Validators.required]
        });
     }

    ngOnInit() { 
        
    }
    
    irPara(){
        if(this.fg.valid){
            this.router.navigate([`/${(this.fg.controls.perfilSelecionado.value as Perfil).rota}`])            
        }
    }
}