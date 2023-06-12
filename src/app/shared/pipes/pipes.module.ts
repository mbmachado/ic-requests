import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursePipe } from './course.pipe';
import { RequestTypePipe } from './request-type.pipe';
import { UserTypePipe } from './user-type.pipe';

@NgModule({
  declarations: [CoursePipe, RequestTypePipe, UserTypePipe],
  imports: [CommonModule],
  exports: [CoursePipe, RequestTypePipe, UserTypePipe],
  providers: [CoursePipe, RequestTypePipe, UserTypePipe],
})
export class PipesModule {}
