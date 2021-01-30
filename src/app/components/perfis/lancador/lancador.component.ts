import { FormContaComponent } from '../../shared/form-conta/form-conta.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'lancador',
    templateUrl: './lancador.component.html',
    styleUrls: ['./lancador.component.css']
})

export class LancadorComponent implements OnInit {
    constructor(private dialog: MatDialog) { }

    ngOnInit() { }
    
    abrirFormConta(){
        const contaForm = this.dialog.open(FormContaComponent, {width: '40%', height: '50%', disableClose: true})
    }
}