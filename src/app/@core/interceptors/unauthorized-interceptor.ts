import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
  private signInUrl = '/sign-in';

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        error: (error: HttpErrorResponse): void => {
          if (error.status === 401 && this.router.url !== this.signInUrl) {
            console.log('UnauthorizedInterceptor', error);
            this.router.navigateByUrl(this.signInUrl);
          }
        },
      })
    );
  }
}
