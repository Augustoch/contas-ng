import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArquivoService } from './../../../services/arquivo.service';
import { Component, OnInit, Inject } from '@angular/core';
import { PDFDesc } from 'src/app/model/pdfdesc';

@Component({
  selector: 'view-pdf',
  templateUrl: './view-pdf.component.html',
  styleUrls: ['./view-pdf.component.css'],
})
export class ViewPDFComponent implements OnInit {
  pdfSrc;

  initalFile;

  arquivo: FormControl = new FormControl(null, Validators.required);

  constructor(
    private as: ArquivoService,
    @Inject(MAT_DIALOG_DATA) public data: PDFDesc,
    public dialogRef: MatDialogRef<ViewPDFComponent>
  ) {}

  ngOnInit() {
    this.as.obterArquivo(this.data.idArquivo).subscribe((arquivo) => {
      this.initalFile = arquivo;
      this.pdfSrc = arquivo;
    });

    this.arquivo.valueChanges.subscribe((value) => {
      if (value) {
        this.pdfSrc = value;
        const fr = new FileReader();
        fr.readAsArrayBuffer(value);
        fr.onload = () => {
          var data = fr.result as ArrayBuffer;
          this.pdfSrc = new Int8Array(data);
        };
      }
    });
  }

  download() {
    const blob = new Blob([this.pdfSrc as ArrayBuffer], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    var anchor = document.createElement('a');
    anchor.download = this.data.nome;
    anchor.href = url;
    anchor.click();
  }

  temArquivoNovo() {
    return Boolean(this.arquivo.value);
  }

  cancelar() {
    this.pdfSrc = this.initalFile;
    this.arquivo.reset(null, { emitEvent: false });
  }

  atualizarPDF() {
    this.as.atualizar(this.data.idArquivo, this.arquivo.value).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
