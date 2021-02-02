import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ComentarioComponent } from './comentario.component';
import { MaterialModule } from '../material-util.module';

@NgModule({
    imports: [MaterialModule],
    exports: [],
    declarations: [ComentarioComponent],
    providers: [],
})
export class ComentarioModule { }
