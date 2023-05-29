import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
  private signInUrl = '/sign-in';

  private errorHandler = {
    error: (error: HttpErrorResponse): void => {
      if (error.status === 401 && this.router.url !== this.signInUrl) {
        this.router.navigateByUrl(this.signInUrl);
      }
    },
  };

  constructor(private router: Router, private store: Store) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(tap(this.errorHandler));
  }
}
