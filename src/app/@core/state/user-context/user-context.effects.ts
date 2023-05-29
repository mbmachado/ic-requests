import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import * as fromUserContextActions from './user-context.actions';
import { AuthService } from '../../services/auth/auth.service';
import { TokenDTO } from '../../models/dtos/token.dto';
import { environment } from '../../../../environments/environment';
import { JwtHelperService } from '../../services/auth/jwt-helper.service';
import { TokenPayload } from '../../models/token-payload.model';
import { ToastrService } from '../../services/misc/toastr.service';

@Injectable()
export class UserContextEffects {
  signIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUserContextActions.signIn),
      exhaustMap(({ data }) => {
        return this.authService.signIn(data).pipe(
          map(({ access_token }: TokenDTO) => {
            localStorage.setItem(environment.tokenKey, access_token);
            this.toastr.success('Login realizado com sucesso.');

            return fromUserContextActions.signInSuccess({
              payload: this.jwtHelper.decodeToken<TokenPayload>(access_token),
              raw: access_token,
            });
          }),
          catchError(() => {
            this.toastr.error('Não foi possível realizar o login.');

            return of(fromUserContextActions.signInFailure());
          })
        );
      })
    );
  });

  redirectAfterSignIn$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(fromUserContextActions.signInSuccess),
        tap(() => {
          this.router.navigateByUrl('/dashboard');
        })
      );
    },
    { dispatch: false }
  );

  signOut$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUserContextActions.signOut),
      exhaustMap(() => {
        return this.authService.signOut().pipe(
          map(() => {
            localStorage.removeItem(environment.tokenKey);

            return fromUserContextActions.signOutSuccess();
          }),
          catchError(() => {
            this.toastr.error('Não foi possível realizar o logout.');

            return of(fromUserContextActions.signOutFailure());
          })
        );
      })
    );
  });

  redirectAfterSignOut$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(fromUserContextActions.signOutSuccess),
        tap(() => {
          this.router.navigateByUrl('/sign-in');
        })
      );
    },
    { dispatch: false }
  );

  signUp$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUserContextActions.signUp),
      exhaustMap(({ data }) => {
        return this.authService.signUp(data).pipe(
          map(({ access_token }: TokenDTO) => {
            localStorage.setItem(environment.tokenKey, access_token);
            this.toastr.success('Cadastro realizado com sucesso.');

            return fromUserContextActions.signInSuccess({
              payload: this.jwtHelper.decodeToken<TokenPayload>(access_token),
              raw: access_token,
            });
          }),
          catchError((error: Error) => {
            this.toastr.error(error.message);

            return of(fromUserContextActions.signInFailure());
          })
        );
      })
    );
  });

  redirectAfterSignUp$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(fromUserContextActions.signUpSuccess),
        tap(() => {
          this.router.navigateByUrl('/dashboard');
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private jwtHelper: JwtHelperService,
    private router: Router,
    private toastr: ToastrService
  ) {}
}
