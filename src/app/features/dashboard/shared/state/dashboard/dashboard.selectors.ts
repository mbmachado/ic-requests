import { createFeatureSelector, createSelector } from '@ngrx/store';

import { DashboardState, dashboardKey } from './dashboard.reducer';

import { Role } from '../../../../../@core/models/enums/role.enum';
import * as fromRouterSelectors from '../../../../../@core/state/router/router.selectors';
import * as fromUserContextSelectors from '../../../../../@core/state/user-context/user-context.selectors';

const selectDashboard = createFeatureSelector<DashboardState>(dashboardKey);

export const selectTitle = createSelector(selectDashboard, state => state.title);

export const selectTabsVisible = createSelector(
  fromRouterSelectors.selectUrl,
  fromUserContextSelectors.selectRole,
  (url: string, role: Role | undefined) => url.includes('workspace') && role === Role.Admin
);

export const selectRequests = createSelector(selectDashboard, state => state.requests);

export const selectLoading = createSelector(selectDashboard, state => state.loading);

export const selectError = createSelector(selectDashboard, state => state.error);

export const selectRequest = createSelector(selectDashboard, state => state.details.request);

export const selectRequestLoading = createSelector(selectDashboard, state => state.details.loading);
