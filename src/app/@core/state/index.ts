import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { userContextKey, userContextReducer, UserContextState } from './user-context/user-context.reducer';

export interface AppState {
  [userContextKey]: UserContextState;
}

export const reducers: ActionReducerMap<AppState> = {
  [userContextKey]: userContextReducer,
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
