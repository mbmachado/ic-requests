import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePipe } from './course.pipe';
import { RequestTypePipe } from './request-type.pipe';

@NgModule({
  declarations: [CoursePipe, RequestTypePipe],
  imports: [CommonModule],
  exports: [CoursePipe, RequestTypePipe],
})
export class PipesModule {}
