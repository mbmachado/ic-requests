import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { _Request } from '@core/models/request.model';
import { UserRole } from '@core/models/enums/user-role.enum';
import * as fromUserContextSelectors from '@core/state/user-context/user-context.selectors';
import * as fromDashboadSelectors from '../../../../shared/state/dashboard/dashboard.selectors';
import * as fromDashboardActions from '../../../../shared/state/dashboard/dashboard.actions';
import { Dialog } from '@angular/cdk/dialog';
import { FilterDialogComponent } from '../../components/filter-dialog/filter-dialog.component';

@Component({
  selector: 'icr-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent implements OnInit {
  requests$!: Observable<_Request[]>;
  loading$!: Observable<boolean>;
  role$!: Observable<UserRole | undefined>;

  readonly userRole = UserRole;

  constructor(private dialog: Dialog, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(fromDashboardActions.setTitle({ title: 'Início' }));

    this.requests$ = this.store.select(fromDashboadSelectors.selectRequests);
    this.loading$ = this.store.select(fromDashboadSelectors.selectLoading);
    this.role$ = this.store.select(fromUserContextSelectors.selectRole);
  }

  onOpenFilters() {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      panelClass: 'small-dialog',
      hasBackdrop: true,
    });

    dialogRef.closed.subscribe(() => {
      console.log('closed');
    });
  }

  trackByFn(index: number, item: _Request) {
    return item.id;
  }
}
