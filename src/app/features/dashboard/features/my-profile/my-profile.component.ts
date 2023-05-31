import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromDashboardActions from '../../shared/state/dashboard/dashboard.actions';

@Component({
  selector: 'icr-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(fromDashboardActions.setTitle({ title: 'Minha conta' }));
  }
}
