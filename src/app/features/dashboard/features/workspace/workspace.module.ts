import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './containers/workspace/workspace.component';
import { ThemeModule } from '../../../../@theme/theme.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DetailsComponent } from './containers/details/details.component';

@NgModule({
  declarations: [WorkspaceComponent, WelcomeComponent, DetailsComponent],
  imports: [CommonModule, WorkspaceRoutingModule, ThemeModule],
})
export class WorkspaceModule {}
