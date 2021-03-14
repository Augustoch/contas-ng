import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material-util.module';

import { LogoutComponent } from './logout.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [LogoutComponent],
  declarations: [LogoutComponent],
  providers: [],
})
export class LogoutModule {}
