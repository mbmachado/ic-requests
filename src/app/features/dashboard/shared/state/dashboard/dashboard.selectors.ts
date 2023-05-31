import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState, dashboardKey } from './dashboard.reducer';

const selectDashboard = createFeatureSelector<DashboardState>(dashboardKey);

export const selectTitle = createSelector(selectDashboard, state => state.title);

export const selectRequests = createSelector(selectDashboard, state => state.requests);

export const selectLoading = createSelector(selectDashboard, state => state.loading);

export const selectError = createSelector(selectDashboard, state => state.error);

export const selectRequest = createSelector(selectDashboard, state => state.details.request);

export const selectRequestLoading = createSelector(selectDashboard, state => state.details.loading);
