import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromDashboardActions from '../../../../shared/state/dashboard/dashboard.actions';
import { Observable } from 'rxjs';
import { _Request } from '../../../../../../@core/models/request.model';
import * as fromDashboadSelectors from '../../../../shared/state/dashboard/dashboard.selectors';

@Component({
  selector: 'icr-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent implements OnInit {
  requests$?: Observable<_Request[]>;
  loading$?: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(fromDashboardActions.setTitle({ title: 'Início' }));
    this.requests$ = this.store.select(fromDashboadSelectors.selectRequests);
    this.loading$ = this.store.select(fromDashboadSelectors.selectLoading);
  }

  trackByFn(index: number, item: _Request) {
    return item.id;
  }
}
