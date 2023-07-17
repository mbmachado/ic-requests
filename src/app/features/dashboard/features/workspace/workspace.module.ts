import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LetModule } from '@ngrx/component';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { ThemeModule } from '../../../../@theme/theme.module';
import { PipesModule } from '../../../../shared/pipes/pipes.module';
import { AvatarComponent } from '../../../../shared/avatar/avatar.component';
import { StepComponent } from '../../../../shared/step/step.component';
import { WorkspaceComponent } from './containers/workspace/workspace.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DetailsComponent } from './containers/details/details.component';
import { CommentComponent } from './components/comment/comment.component';
import { TagComponent } from '../../../../shared/tag/tag.component';
import { PriorityComponent } from '../../../../shared/priority/priority.component';
import { SearchComponent } from '../../../../shared/search/search.component';
import { FilterDialogComponent } from './components/filter-dialog/filter-dialog.component';
import { DialogModule } from '@angular/cdk/dialog';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DetailsDialogComponent } from './components/details-dialog/details-dialog.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    WorkspaceComponent,
    WelcomeComponent,
    DetailsComponent,
    CommentComponent,
    FilterDialogComponent,
    DetailsDialogComponent,
  ],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    DialogModule,
    LetModule,
    ThemeModule,
    PipesModule,
    AvatarComponent,
    PriorityComponent,
    StepComponent,
    SearchComponent,
    TagComponent,
    MatTabsModule,
  ],
})
export class WorkspaceModule {}
