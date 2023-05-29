import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRequestRoutingModule } from './new-request-routing.module';
import { RequestDialogComponent } from './components/request-dialog/request-dialog.component';
import { DialogModule } from '@angular/cdk/dialog';
import { DialogEntryComponent } from './containers/dialog-entry/dialog-entry.component';

@NgModule({
  declarations: [RequestDialogComponent, DialogEntryComponent],
  imports: [CommonModule, NewRequestRoutingModule, DialogModule],
})
export class NewRequestModule {}
