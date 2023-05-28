import { createReducer } from '@ngrx/store';
import { User } from '../../models/user.model';

export const userContextKey = 'userContext';

export interface UserContextState {
  user?: Partial<User>;
  login: {
    erros: string[];
    loading: boolean;
    loggedIn: boolean;
  };
}

const userContextInitialState: UserContextState = {
  user: undefined,
  login: {
    erros: [],
    loading: false,
    loggedIn: false,
  },
};

export const userContextReducer = createReducer(userContextInitialState);
