import { MaterialModule } from 'src/app/components/shared/material-util.module';

import { CommonModule } from '@angular/common';
import { ArquivoComponent } from './arquivo.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule, MaterialModule],
    exports: [ArquivoComponent],
    declarations: [ArquivoComponent],
    providers: [],
})
export class ArquivoModule { }
