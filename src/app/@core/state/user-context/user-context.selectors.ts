import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserContextState, userContextKey } from './user-context.reducer';

const selectUserContext = createFeatureSelector<UserContextState>(userContextKey);

export const selectAuthUser = createSelector(selectUserContext, state => state.token.payload?.user);

export const selectLoggedIn = createSelector(selectUserContext, state => state.loggedIn);

export const selectLoading = createSelector(selectUserContext, state => state.loading);

export const selectTokenPayload = createSelector(selectUserContext, state => state.token.payload);

export const selectRawToken = createSelector(selectUserContext, state => state.token.raw);

export const selectRawTokenWithLoggedIn = createSelector({
  loggedIn: selectLoggedIn,
  token: selectRawToken,
});
