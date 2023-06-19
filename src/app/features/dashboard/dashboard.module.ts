import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LetModule } from '@ngrx/component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ThemeModule } from '@theme/theme.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { LogoComponent } from '../../shared/logo/logo.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { dashboardKey, dashboardReducer } from './shared/state/dashboard/dashboard.reducer';
import { DashboardEffects } from './shared/state/dashboard/dashboard.effects';
import { IconButtonDirective } from './components/icon-button/icon-button.directive';
import { TabButtonDirective } from './components/tab-button/tab-button.directive';
import { NewRequestFabButtonComponent } from './components/new-request-fab-button/new-request-fab-button.component';

@NgModule({
  declarations: [DashboardComponent, NewRequestFabButtonComponent, IconButtonDirective, TabButtonDirective],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(dashboardKey, dashboardReducer),
    EffectsModule.forFeature([DashboardEffects]),
    LetModule,
    LogoComponent,
    ThemeModule,
    PipesModule,
  ],
})
export class DashboardModule {}
