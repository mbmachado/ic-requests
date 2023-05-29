import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model';
import { TokenPayload } from '../../models/token-payload.model';
import * as fromUserContextActions from './user-context.actions';

export const userContextKey = 'userContext';

export interface UserContextState {
  user?: Partial<User>;
  login: {
    error: boolean;
    loading: boolean;
    loggedIn: boolean;
  };
  token: {
    encoded?: string;
    payload?: TokenPayload;
  };
}

const userContextInitialState: UserContextState = {
  user: undefined,
  login: {
    error: false,
    loading: false,
    loggedIn: false,
  },
  token: {
    encoded: undefined,
    payload: undefined,
  },
};

export const userContextReducer = createReducer(
  userContextInitialState,
  on(
    fromUserContextActions.signIn,
    (state): UserContextState => ({
      user: {
        ...state.user,
      },
      login: {
        ...state.login,
        error: false,
        loading: true,
      },
      token: {
        ...state.token,
      },
    })
  ),
  on(
    fromUserContextActions.signInSuccess,
    fromUserContextActions.restoreSignIn,
    (state, { payload, encoded }): UserContextState => ({
      ...state,
      user: {
        ...state.user,
        id: Number(payload?.sub),
        name: payload?.user?.name,
        role: payload?.user?.role,
        type: payload?.user?.type,
        course: payload?.user?.course,
      },
      login: {
        ...state.login,
        loading: false,
        loggedIn: true,
      },
      token: {
        encoded,
        payload: payload ?? undefined,
      },
    })
  ),
  on(
    fromUserContextActions.signInFailure,
    (state): UserContextState => ({
      user: {
        ...state.user,
      },
      login: {
        ...state.login,
        error: true,
        loading: false,
      },
      token: {
        ...state.token,
      },
    })
  ),
  on(
    fromUserContextActions.signOutSuccess,
    (state): UserContextState => ({
      ...state,
      user: {
        ...userContextInitialState.user,
      },
      login: {
        ...userContextInitialState.login,
      },
      token: {
        ...userContextInitialState.token,
      },
    })
  )
);
