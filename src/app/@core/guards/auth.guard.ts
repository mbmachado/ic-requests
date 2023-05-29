import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { map } from 'rxjs/operators';
import { selectLoggedIn } from '../state/user-context/user-context.selectors';

export const authGuard = () => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(selectLoggedIn).pipe(
    map(loggedIn => {
      if (!loggedIn) {
        return router.parseUrl('/sign-in');
      }

      return true;
    })
  );
};
