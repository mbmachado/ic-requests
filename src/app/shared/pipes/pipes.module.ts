import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCoursePipe } from './user-course.pipe';
import { RequestTypePipe } from './request-type.pipe';
import { UserTypePipe } from './user-type.pipe';
import { AssigneeTypePipe } from './assignee-type.pipe';
import { RequestPriorityPipe } from './request-priority.pipe';
import { RequestStatusPipe } from './request-status.pipe';
import { RequestTemplateStatusPipe } from './request-template-status.pipe';

@NgModule({
  declarations: [
    UserCoursePipe,
    RequestTypePipe,
    UserTypePipe,
    AssigneeTypePipe,
    RequestPriorityPipe,
    RequestStatusPipe,
    RequestTemplateStatusPipe,
  ],
  imports: [CommonModule],
  exports: [
    UserCoursePipe,
    RequestTypePipe,
    UserTypePipe,
    AssigneeTypePipe,
    RequestPriorityPipe,
    RequestStatusPipe,
    RequestTemplateStatusPipe,
  ],
  providers: [
    UserCoursePipe,
    RequestTypePipe,
    UserTypePipe,
    AssigneeTypePipe,
    RequestPriorityPipe,
    RequestStatusPipe,
    RequestTemplateStatusPipe,
  ],
})
export class PipesModule {}
