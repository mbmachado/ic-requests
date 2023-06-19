import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { RequestService } from '@core/services/data/request.service';
import { ToastrService } from '@core/services/misc/toastr.service';
import * as fromDashboardActions from './dashboard.actions';

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

  private readonly icons: string[] = [
    'arrows-turn-to-dots',
    'right-from-bracket',
    'file-circle-check',
    'file-circle-check',
    'clipboard-list',
    'house-chimney',
    'circle-xmark',
    'magical-wand',
    'paper-plane',
    'chalkboard',
    'caret-down',
    'angle-left',
    'paperclip',
    'user-plus',
    'calendar',
    'box-open',
    'list-ul',
    'search',
    'upload',
    'filter',
    'clock',
    'inbox',
    'check',
    'xmark',
    'users',
    'play',
    'bell',
    'file',
    'gear',
    'flag',
    'bars',
    'plus',
    'plus',
    'user',
    'moon',
    'sun',
  ];

  constructor(
    private actions$: Actions,
    private requestService: RequestService,
    private toastr: ToastrService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    this.registerIcons(iconRegistry, sanitizer);
  }

  private registerIcons(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.icons.forEach(icon => {
      iconRegistry.addSvgIcon(icon, sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon}.svg`));
    });
  }
}
