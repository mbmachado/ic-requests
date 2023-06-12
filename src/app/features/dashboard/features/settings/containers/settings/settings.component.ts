import { Component, OnInit } from '@angular/core';

import * as fromDashboardActions from '../../../../shared/state/dashboard/dashboard.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'icr-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fromDashboardActions.setTitle({ title: 'Configurações' }));
  }
}
