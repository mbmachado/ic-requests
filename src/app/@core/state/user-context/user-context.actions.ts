import { createAction, props } from '@ngrx/store';
import { SignInDTO } from '../../models/dtos/sign-in.dto';
import { TokenPayload } from '../../models/token-payload.model';

export const signIn = createAction('[Sign In Page] Sign In', props<{ data: SignInDTO }>());

export const signInSuccess = createAction(
  '[IC-Requests API] Sign In Success',
  props<{ payload: TokenPayload | null; encoded: string }>()
);

export const signInFailure = createAction('[IC-Requests API] Sign In Failure');

export const restoreSignIn = createAction(
  '[App Initializer] Restore SignIn',
  props<{ payload: TokenPayload | null; encoded: string }>()
);

export const signOut = createAction('[Dashboard Page] Sign Out');
export const signOutSuccess = createAction('[IC-Requests API] Sign Out Success');
export const signOutFailure = createAction('[IC-Requests API] Sign Out Failure');
