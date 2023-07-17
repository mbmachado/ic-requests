import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { ThemeModule } from '@theme/theme.module';
import { BoardComponent } from './containers/board/board.component';
import { FiltersBarComponent } from './components/filters-bar/filters-bar.component';
import { SearchComponent } from '../../../../../../shared/search/search.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AvatarComponent } from '../../../../../../shared/avatar/avatar.component';
import { PriorityComponent } from '../../../../../../shared/priority/priority.component';
import { TagComponent } from '../../../../../../shared/tag/tag.component';

@NgModule({
  declarations: [BoardComponent, FiltersBarComponent],
  imports: [
    CommonModule,
    BoardRoutingModule,
    DragDropModule,
    ThemeModule,
    SearchComponent,
    AvatarComponent,
    PriorityComponent,
    TagComponent,
  ],
})
export class BoardModule {}
