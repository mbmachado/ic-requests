import { createReducer, on } from '@ngrx/store';
import { TokenPayload } from '../../models/token-payload.model';
import * as fromUserContextActions from './user-context.actions';

export const userContextKey = 'userContext';

export interface UserContextState {
  error: boolean;
  loading: boolean;
  loggedIn: boolean;
  token: {
    payload?: TokenPayload;
    raw?: string;
  };
}

const userContextInitialState: UserContextState = {
  error: false,
  loading: false,
  loggedIn: false,
  token: {
    payload: undefined,
    raw: undefined,
  },
};

export const userContextReducer = createReducer(
  userContextInitialState,
  on(
    fromUserContextActions.signIn,
    fromUserContextActions.signUp,
    (state): UserContextState => ({
      ...state,
      error: false,
      loading: true,
      token: {
        ...state.token,
      },
    })
  ),
  on(
    fromUserContextActions.signInSuccess,
    fromUserContextActions.signUpSuccess,
    fromUserContextActions.restoreSignIn,
    (state, { payload, raw }): UserContextState => ({
      ...state,
      loading: false,
      loggedIn: true,
      token: {
        raw,
        payload: payload ?? undefined,
      },
    })
  ),
  on(
    fromUserContextActions.signInFailure,
    fromUserContextActions.signUpFailure,
    (state): UserContextState => ({
      ...state,
      error: true,
      loading: false,
      token: {
        ...state.token,
      },
    })
  ),
  on(
    fromUserContextActions.signOutSuccess,
    (): UserContextState => ({
      ...userContextInitialState,
      token: {
        ...userContextInitialState.token,
      },
    })
  )
);
