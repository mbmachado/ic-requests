import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromDashboardActions from './dashboard.actions';
import { RequestService } from '../../../../../@core/services/data/request.service';
import { ToastrService } from '../../../../../@core/services/misc/toastr.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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
    iconRegistry.addSvgIcon(
      'house-chimney',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/house-chimney-solid.svg')
    );
    iconRegistry.addSvgIcon(
      'caret-down',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/caret-down-solid.svg')
    );
    iconRegistry.addSvgIcon(
      'right-from-bracket',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/right-from-bracket-solid.svg')
    );
    iconRegistry.addSvgIcon(
      'angle-left',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/angle-left-solid.svg')
    );
    iconRegistry.addSvgIcon(
      'file-circle-check',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/file-circle-check-solid.svg')
    );
    iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/magnifying-glass-solid.svg')
    );
    iconRegistry.addSvgIcon(
      'paper-plane',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/paper-plane-solid.svg')
    );
    iconRegistry.addSvgIcon(
      'file-circle-check',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/file-circle-check-solid.svg')
    );
    iconRegistry.addSvgIcon(
      'magical-wand',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/wand-magic-sparkles-solid.svg')
    );
    iconRegistry.addSvgIcon(
      'arrows-turn-to-dots',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrows-turn-to-dots-solid.svg')
    );
    iconRegistry.addSvgIcon(
      'clipboard-list',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/clipboard-list-solid.svg')
    );
    iconRegistry.addSvgIcon(
      'chalkboard',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/chalkboard-solid.svg')
    );

    iconRegistry.addSvgIcon('box-open', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/box-open-solid.svg'));
    iconRegistry.addSvgIcon('list-ul', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/list-ul-solid.svg'));
    iconRegistry.addSvgIcon('upload', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/upload-solid.svg'));
    iconRegistry.addSvgIcon('inbox', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/inbox-solid.svg'));
    iconRegistry.addSvgIcon('check', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/check-solid.svg'));
    iconRegistry.addSvgIcon('xmark', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/xmark-solid.svg'));
    iconRegistry.addSvgIcon('users', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/users-solid.svg'));
    iconRegistry.addSvgIcon('file', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/file-solid.svg'));
    iconRegistry.addSvgIcon('gear', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/gear-solid.svg'));
    iconRegistry.addSvgIcon('flag', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/flag-solid.svg'));
    iconRegistry.addSvgIcon('bars', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/bars-solid.svg'));
    iconRegistry.addSvgIcon('plus', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/plus-solid.svg'));
    iconRegistry.addSvgIcon('plus', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/plus-solid.svg'));
    iconRegistry.addSvgIcon('user', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/user-solid.svg'));
    iconRegistry.addSvgIcon('moon', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/moon-solid.svg'));
    iconRegistry.addSvgIcon('sun', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/sun-solid.svg'));
  }
}
