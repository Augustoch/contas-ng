import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ViewPDFComponent } from './view-pdf.component';


@NgModule({
    imports: [CommonModule,PdfViewerModule, MatButtonModule, MatIconModule],
    exports: [],
    declarations: [ViewPDFComponent],
    providers: [],
})
export class ViewPDFModule { }
