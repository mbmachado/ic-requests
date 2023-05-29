import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { Observable, map, shareReplay } from 'rxjs';
import { Store } from '@ngrx/store';

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
export class DashboardComponent {
  public mobile$: Observable<boolean>;
  public isDarkTheme: boolean;

  public menuItems: MenuItem[] = [
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

  constructor(
    breakpointObserver: BreakpointObserver,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private store: Store
  ) {
    this.registerIcons(iconRegistry, sanitizer);

    this.isDarkTheme =
      localStorage['theme'] === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

    this.mobile$ = breakpointObserver.observe(['(max-width: 600px)']).pipe(
      map(result => result.matches),
      shareReplay()
    );
  }

  onChangeTheme() {
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

  private registerIcons(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'house-chimney',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/house-chimney-solid.svg')
    );
    iconRegistry.addSvgIcon(
      'caret-down',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/caret-down-solid.svg')
    );

    iconRegistry.addSvgIcon('plus', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/plus-solid.svg'));
    iconRegistry.addSvgIcon('user', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/user-solid.svg'));
    iconRegistry.addSvgIcon('moon', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/moon-solid.svg'));
    iconRegistry.addSvgIcon('sun', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/sun-solid.svg'));
  }
}
