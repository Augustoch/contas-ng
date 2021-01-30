import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArquivoService } from './../../../services/arquivo.service';
import { Component, OnInit, Inject } from '@angular/core';
import { PDFDesc } from 'src/app/model/pdfdesc';

@Component({
    selector: 'view-pdf',
    templateUrl: './view-pdf.component.html',
    styleUrls:['./view-pdf.component.css']
})

export class ViewPDFComponent implements OnInit {
    
    pdfSrc = {};
    
    constructor(private as: ArquivoService,  @Inject(MAT_DIALOG_DATA) public data: PDFDesc) { }

    ngOnInit() {
        
        this.as.obterArquivo(this.data.idArquivo).subscribe((arquivo =>{
            this.pdfSrc = arquivo;
        }))
     }
     
     download(){
        const blob = new Blob([this.pdfSrc as ArrayBuffer], { type: 'text/csv' });
        const url= window.URL.createObjectURL(blob);        
        var anchor = document.createElement("a");
        anchor.download = this.data.nome;
        anchor.href = url;
        anchor.click();
     }
    
}