import { createAction, props } from '@ngrx/store';
import { SignInDTO } from '../../models/dtos/sign-in.dto';

export const signIn = createAction('[Sign In Page] Sign In', props<{ data: SignInDTO }>());

export const signInSuccess = createAction('[IC-Requests API] Sign In Success');
export const signInFailure = createAction('[IC-Requests API] Sign In Failure');
