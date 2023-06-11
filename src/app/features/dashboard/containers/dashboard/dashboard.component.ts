import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { User } from '../../../../@core/models/user.model';
import { RequestType } from '../../../../@core/models/enums/request-type.enum';
import { Role } from '../../../../@core/models/enums/role.enum';
import * as fromDashboardActions from '../../shared/state/dashboard/dashboard.actions';
import * as fromDashboadSelectors from '../../shared/state/dashboard/dashboard.selectors';
import * as fromUserContextSelectors from '../../../../@core/state/user-context/user-context.selectors';
import * as fromUserContextActions from '../../../../@core/state/user-context/user-context.actions';

interface MenuItem {
  icon: string;
  label: string;
  link: string;
}

@Component({
  selector: 'icr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  mobile$: Observable<boolean>;
  title$!: Observable<string>;

  user$!: Observable<Partial<User> | undefined>;
  menuItems$!: Observable<MenuItem[]>;

  isDarkTheme: boolean;

  readonly requestType = RequestType;
  readonly role = Role;

  constructor(breakpointObserver: BreakpointObserver, private store: Store) {
    this.mobile$ = breakpointObserver.observe(['(max-width: 640px)']).pipe(map(result => result.matches));

    this.isDarkTheme =
      localStorage['theme'] === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  ngOnInit(): void {
    this.title$ = this.store.select(fromDashboadSelectors.selectTitle);
    this.user$ = this.store.select(fromUserContextSelectors.selectUser);

    this.menuItems$ = this.user$.pipe(
      map(user => {
        if (user?.role === Role.Admin) {
          return [
            {
              icon: 'inbox',
              label: 'Workspace',
              link: '/dashboard/workspace',
            },
            {
              icon: 'arrows-turn-to-dots',
              label: 'Workflows',
              link: '/dashboard/workflows',
            },
            {
              icon: 'clipboard-list',
              label: 'Solicitações',
              link: '/dashboard/requests',
            },
            {
              icon: 'users',
              label: 'Usuários',
              link: '/dashboard/profile',
            },
            {
              icon: 'gear',
              label: 'Configurações',
              link: '/dashboard/profile',
            },
            {
              icon: 'user',
              label: 'Conta',
              link: '/dashboard/profile',
            },
          ];
        }

        return [
          {
            icon: 'house-chimney',
            label: 'Início',
            link: '/dashboard/workspace',
          },
          {
            icon: 'user',
            label: 'Conta',
            link: '/dashboard/profile',
          },
        ];
      })
    );

    this.store.dispatch(fromDashboardActions.loadRequests());
  }

  onThemeChanged() {
    this.isDarkTheme = !this.isDarkTheme;

    if (this.isDarkTheme) {
      localStorage['theme'] = 'dark';
      document.documentElement.classList.add('dark-theme');
    } else {
      localStorage['theme'] = 'light';
      document.documentElement.classList.remove('dark-theme');
    }
  }

  onSignOut() {
    this.store.dispatch(fromUserContextActions.signOut());
  }
}
