import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError } from 'rxjs/operators';
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

  loadRequest$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromDashboardActions.loadRequest),
      exhaustMap(({ id }) => {
        return this.requestService.getById(id).pipe(
          map(request => {
            return fromDashboardActions.loadRequestSuccess({
              request,
            });
          }),
          catchError((error: Error) => {
            this.toastr.error(error.message);

            return of(fromDashboardActions.loadRequestFailure());
          })
        );
      })
    );
  });

  constructor(private actions$: Actions, private requestService: RequestService, private toastr: ToastrService) {}
}
