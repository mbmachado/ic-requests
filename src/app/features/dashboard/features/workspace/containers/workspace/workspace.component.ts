import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { _Request } from '@core/models/request.model';
import { Role } from '@core/models/enums/role.enum';
import * as fromUserContextSelectors from '@core/state/user-context/user-context.selectors';
import * as fromDashboadSelectors from '../../../../shared/state/dashboard/dashboard.selectors';
import * as fromDashboardActions from '../../../../shared/state/dashboard/dashboard.actions';

@Component({
  selector: 'icr-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent implements OnInit {
  requests$?: Observable<_Request[]>;
  loading$?: Observable<boolean>;
  role$?: Observable<Role | undefined>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(fromDashboardActions.setTitle({ title: 'Início' }));

    this.requests$ = this.store.select(fromDashboadSelectors.selectRequests);
    this.loading$ = this.store.select(fromDashboadSelectors.selectLoading);
    this.role$ = this.store.select(fromUserContextSelectors.selectRole);
  }

  trackByFn(index: number, item: _Request) {
    return item.id;
  }
}
