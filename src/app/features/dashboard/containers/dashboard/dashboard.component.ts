import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { delay, map } from 'rxjs/operators';

import { User } from '@core/models/user.model';
import { UserRole } from '@core/models/enums/user-role.enum';
import * as fromUserContextSelectors from '@core/state/user-context/user-context.selectors';
import * as fromUserContextActions from '@core/state/user-context/user-context.actions';
import * as fromDashboardActions from '../../shared/state/dashboard/dashboard.actions';
import * as fromDashboadSelectors from '../../shared/state/dashboard/dashboard.selectors';

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
  tabs$!: Observable<boolean>;
  menu$!: Observable<MenuItem[]>;

  isDarkTheme: boolean;

  readonly role = UserRole;

  constructor(breakpointObserver: BreakpointObserver, private store: Store) {
    this.mobile$ = breakpointObserver.observe(['(max-width: 640px)']).pipe(map(result => result.matches));

    this.isDarkTheme =
      localStorage['theme'] === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  ngOnInit(): void {
    this.title$ = this.store.select(fromDashboadSelectors.selectTitle).pipe(delay(0));
    this.user$ = this.store.select(fromUserContextSelectors.selectUser);
    this.tabs$ = this.store.select(fromDashboadSelectors.selectTabsVisible);

    this.menu$ = this.user$.pipe(
      map(user => {
        if (user?.role === UserRole.Admin) {
          return [
            {
              icon: 'inbox',
              label: 'Início',
              link: '/dashboard/workspace',
            },
            {
              icon: 'arrows-turn-to-dots',
              label: 'Fluxos de Trabalho',
              link: '/dashboard/workflows',
            },
            {
              icon: 'clipboard-list',
              label: 'Modelos de Solicitação',
              link: '/dashboard/request-tpls',
            },
            {
              icon: 'users',
              label: 'Usuários',
              link: '/dashboard/users',
            },
            {
              icon: 'gear',
              label: 'Configurações',
              link: '/dashboard/settings',
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
