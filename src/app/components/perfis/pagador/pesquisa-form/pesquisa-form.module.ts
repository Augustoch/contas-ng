import { PesquisaFormComponent } from './pesquisa-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/components/shared/material-util.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [CommonModule, MaterialModule,ReactiveFormsModule],
    exports: [PesquisaFormComponent],
    declarations: [PesquisaFormComponent],
    providers: [],
})
export class PesquisaFormModule { }
