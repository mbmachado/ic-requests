import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserContextState, userContextKey } from './user-context.reducer';

const selectUserContext = createFeatureSelector<UserContextState>(userContextKey);

export const selectAuthUser = createSelector(selectUserContext, state => state.user);

export const selectLoggedIn = createSelector(selectUserContext, state => state.login.loggedIn);

export const selectSignInLoading = createSelector(selectUserContext, state => state.login.loading);

export const selectTokenPayload = createSelector(selectUserContext, state => state.token.payload);

export const selectRawToken = createSelector(selectUserContext, state => state.token.encoded);

export const selectRawTokenWithLoggedIn = createSelector({
  loggedIn: selectLoggedIn,
  token: selectRawToken,
});
