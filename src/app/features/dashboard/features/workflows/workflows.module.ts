import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowsRoutingModule } from './workflows-routing.module';
import { WorkflowsComponent } from './containers/workflows/workflows.component';

@NgModule({
  declarations: [WorkflowsComponent],
  imports: [CommonModule, WorkflowsRoutingModule],
})
export class WorkflowsModule {}
