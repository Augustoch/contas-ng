import { Injectable, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { ConfirmDialogComponent } from './confirm-dialog.component';

@Injectable({providedIn: 'root'})
export class ConfirmDialogService {
    
     private dialogRef: MatDialogRef<ConfirmDialogComponent>;
     private subject :BehaviorSubject<Boolean>;
     //private subject = new BehaviorSubject<Boolean>(false);
    
    constructor(private dialog: MatDialog) {
     }
    
    
    showConfirmDialog(mensagemConfirmacao: string){
        this.dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: 'fit-content',
            height: '150px',
            data:{descricao: mensagemConfirmacao}
          });
        this.dialogRef.componentInstance.subject = new BehaviorSubject<Boolean>(false);
          
        return this.dialogRef.componentInstance.subject.asObservable();
    }
    
    
    
}