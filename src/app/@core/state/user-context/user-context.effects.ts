import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromUserContextActions from './user-context.actions';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class UserContextEffects {
  signIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUserContextActions.signIn),
      exhaustMap(({ data }) => {
        return this.authService.setCsrfCookie().pipe(
          switchMap(() =>
            this.authService.signIn(data).pipe(
              map(() => fromUserContextActions.signInSuccess()),
              catchError(() => of(fromUserContextActions.signInFailure()))
            )
          )
        );
      })
    );
  });

  constructor(private actions$: Actions, private authService: AuthService) {}
}
