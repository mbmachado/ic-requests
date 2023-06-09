import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRequestRoutingModule } from './new-request-routing.module';
import { RequestDialogComponent } from './components/request-dialog/request-dialog.component';
import { DialogModule } from '@angular/cdk/dialog';
import { DialogEntryComponent } from './containers/dialog-entry/dialog-entry.component';
import { ThemeModule } from '../../../../@theme/theme.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../../../../shared/pipes/pipes.module';
import { UploaderModule } from '../../../../shared/uploader/uploader.module';
import { DialogToolbarComponent } from './components/dialog-toolbar/dialog-toolbar.component';

@NgModule({
  declarations: [RequestDialogComponent, DialogEntryComponent, DialogToolbarComponent],
  imports: [
    CommonModule,
    NewRequestRoutingModule,
    DialogModule,
    ReactiveFormsModule,
    ThemeModule,
    PipesModule,
    UploaderModule,
  ],
})
export class NewRequestModule {}
