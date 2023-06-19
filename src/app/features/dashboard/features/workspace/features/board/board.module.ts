import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { ThemeModule } from '@theme/theme.module';
import { BoardComponent } from './containers/board/board.component';
import { FiltersBarComponent } from './components/filters-bar/filters-bar.component';
import { SearchComponent } from '../../../../../../shared/search/search.component';

@NgModule({
  declarations: [BoardComponent, FiltersBarComponent],
  imports: [CommonModule, BoardRoutingModule, ThemeModule, SearchComponent],
})
export class BoardModule {}
