import { inject } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';

import { map } from 'rxjs/operators';
import { selectRole } from '../state/user-context/user-context.selectors';
import { Role } from '../models/enums/role.enum';

export const permissionGuard = () => {
  const store = inject(Store);
  const router = inject(Router);
  const route = inject(ActivatedRouteSnapshot);

  return store.select(selectRole).pipe(
    map(role => {
      if (route.data['roles'].indexOf(role ?? Role.Requester) === -1) {
        return router.parseUrl('/dashboard');
      }

      return true;
    })
  );
};
