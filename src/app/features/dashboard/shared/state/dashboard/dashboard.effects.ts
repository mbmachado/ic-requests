import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import * as fromDashboardActions from './dashboard.actions';
import { RequestService } from '../../../../../@core/services/data/request.service';
import { ToastrService } from '../../../../../@core/services/misc/toastr.service';

@Injectable()
export class DashboardEffects {
  loadRequests$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromDashboardActions.loadRequests),
      exhaustMap(() => {
        return this.requestService.getAll().pipe(
          map(requests => {
            return fromDashboardActions.loadRequestsSuccess({
              requests,
            });
          }),
          catchError((error: Error) => {
            this.toastr.error(error.message);

            return of(fromDashboardActions.loadRequestsFailure());
          })
        );
      })
    );
  });

  constructor(private actions$: Actions, private requestService: RequestService, private toastr: ToastrService) {}
}
