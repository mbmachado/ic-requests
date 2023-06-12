import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromDashboardActions from '../../../../shared/state/dashboard/dashboard.actions';

@Component({
  selector: 'icr-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fromDashboardActions.setTitle({ title: 'Usuários' }));
  }
}
