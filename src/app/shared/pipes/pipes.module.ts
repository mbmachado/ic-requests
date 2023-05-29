import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePipe } from './course.pipe';

@NgModule({
  declarations: [CoursePipe],
  imports: [CommonModule],
  exports: [CoursePipe],
})
export class PipesModule {}
