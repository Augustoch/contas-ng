import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { Coment } from 'src/app/model/coment';

@Component({
    selector: 'comentario',
    templateUrl: './comentario.component.html'
})

export class ComentarioComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public data: Coment) { 
        console.log(data);
    }

    ngOnInit() { }
}