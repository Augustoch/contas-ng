import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerContainerComponent } from './spinner-container.component';


@NgModule({
    imports: [CommonModule, MatProgressSpinnerModule],
    exports: [SpinnerContainerComponent],
    declarations: [SpinnerContainerComponent],
    providers: [],
})
export class SpinnerContainerModule { }
