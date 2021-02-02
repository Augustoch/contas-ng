import { MatToolbarModule } from '@angular/material/toolbar';
import { ConfirmDialogService } from './confirm-dialog.service';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';

import { ConfirmDialogComponent } from './confirm-dialog.component';
import { MaterialModule } from '../material-util.module';

@NgModule({
    imports: [MaterialModule],
    exports: [ConfirmDialogComponent],
    declarations: [ConfirmDialogComponent],
    providers: [ConfirmDialogService],
})
export class ConfirmDialogModule { }
