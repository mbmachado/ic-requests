import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { map } from 'rxjs/operators';
import { selectRole } from '../state/user-context/user-context.selectors';
import { UserRole } from '../models/enums/user-role.enum';

export const permissionGuard = (roles: UserRole[]) => {
  return () => {
    const store = inject(Store);
    const router = inject(Router);

    return store.select(selectRole).pipe(
      map(role => {
        if (roles.indexOf(role ?? UserRole.Requester) === -1) {
          return router.parseUrl('/dashboard');
        }

        return true;
      })
    );
  };
};
