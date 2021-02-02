import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { Comentario } from 'src/app/model/coment';

@Component({
    selector: 'comentario',
    templateUrl: './comentario.component.html',
    styleUrls: ['./comentario.component.css']
})

export class ComentarioComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public comentario: Comentario) { 
    }

    ngOnInit() { }
}