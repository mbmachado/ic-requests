import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromDashboardActions from '../../../../shared/state/dashboard/dashboard.actions';

@Component({
  selector: 'icr-request-tpls',
  templateUrl: './request-tpls.component.html',
  styleUrls: ['./request-tpls.component.scss'],
})
export class RequestTplsComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fromDashboardActions.setTitle({ title: 'Modelos de Solicitação' }));
  }
}
