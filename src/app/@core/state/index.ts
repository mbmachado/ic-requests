import { isDevMode } from '@angular/core';

import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';

import { userContextKey, userContextReducer, UserContextState } from './user-context/user-context.reducer';

export interface AppState {
  [userContextKey]: UserContextState;
  router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<AppState> = {
  [userContextKey]: userContextReducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
