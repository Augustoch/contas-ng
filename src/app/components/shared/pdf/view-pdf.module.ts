import { ReactiveFormsModule } from '@angular/forms';
import { ArquivoModule } from './../../../util/arquivo/arquivo.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ViewPDFComponent } from './view-pdf.component';
import { MaterialModule } from '../material-util.module';


@NgModule({
    imports: [CommonModule,PdfViewerModule, MaterialModule,ArquivoModule, ReactiveFormsModule],
    exports: [],
    declarations: [ViewPDFComponent],
    providers: [],
})
export class ViewPDFModule { }
