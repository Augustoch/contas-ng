import { CommonModule } from '@angular/common';
import { EmpresaComponent } from './empresa.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material-util.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule,ReactiveFormsModule, MaterialModule],
    exports: [],
    declarations: [EmpresaComponent],
    providers: [],
})
export class EmpresaModule { }
