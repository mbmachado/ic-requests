import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { selectRawTokenWithLoggedIn } from '../state/user-context/user-context.selectors';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.store.select(selectRawTokenWithLoggedIn).pipe(
      take(1),
      mergeMap(({ token, loggedIn }) => {
        if (loggedIn) {
          const authReq = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + token),
          });

          return next.handle(authReq);
        }

        return next.handle(req);
      })
    );
  }
}
