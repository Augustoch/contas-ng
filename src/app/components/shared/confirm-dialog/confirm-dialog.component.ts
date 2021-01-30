import { BehaviorSubject } from 'rxjs';
import { ConfirmDialogService } from './confirm-dialog.service';
import { Mensagem } from './../../../model/mensagem';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.css']
})

export class ConfirmDialogComponent implements OnInit {
    
    public subject :BehaviorSubject<Boolean>;
    
    constructor(
        public dialogRef: MatDialogRef<ConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public mensagem: Mensagem, ) {
        }

    ngOnInit() { }
    
    sim(){
        this.fechar();
        this.subject.next(true);
    }
    
    nao(){
        this.fechar();
        this.subject.next(false);
    }
    
    private fechar() {
        this.dialogRef.close();
    }
}