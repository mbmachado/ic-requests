import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './containers/workspace/workspace.component';
import { ThemeModule } from '../../../../@theme/theme.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DetailsComponent } from './containers/details/details.component';
import { StepComponent } from '../../../../shared/step/step.component';
import { LetModule } from '@ngrx/component';
import { PipesModule } from '../../../../shared/pipes/pipes.module';

import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [WorkspaceComponent, WelcomeComponent, DetailsComponent],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    ReactiveFormsModule,
    LetModule,
    ThemeModule,
    PipesModule,
    StepComponent,
  ],
})
export class WorkspaceModule {}
