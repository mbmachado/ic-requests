import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropDirective } from './drag-drop.directive';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { ThemeModule } from '../../@theme/theme.module';
import { UploaderComponent } from './uploader/uploader.component';

@NgModule({
  declarations: [DragDropDirective, DragDropComponent, UploaderComponent],
  imports: [CommonModule, ThemeModule],
  exports: [UploaderComponent],
})
export class UploaderModule {}
