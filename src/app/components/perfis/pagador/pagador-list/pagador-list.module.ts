import { SituacaoPipe } from './../../../../util/situacao.pipe';
import { PagadorListComponent } from './pagador-list.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/components/shared/material-util.module';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [CommonModule, MaterialModule],
    exports: [PagadorListComponent],
    declarations: [PagadorListComponent, SituacaoPipe],
    providers: [],
})
export class PagadorListModule { }
