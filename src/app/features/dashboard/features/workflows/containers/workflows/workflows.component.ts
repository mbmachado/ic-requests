import { Component, OnInit } from '@angular/core';

import * as fromDashboardActions from '../../../../shared/state/dashboard/dashboard.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'icr-workflows',
  templateUrl: './workflows.component.html',
  styleUrls: ['./workflows.component.scss'],
})
export class WorkflowsComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fromDashboardActions.setTitle({ title: 'Workflows' }));
  }
}
