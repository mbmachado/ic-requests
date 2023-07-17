import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromDashboardSelectors from '../../../../../../shared/state/dashboard/dashboard.selectors';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { _Request } from '../../../../../../../../@core/models/request.model';

@UntilDestroy()
@Component({
  selector: 'icr-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  todo: _Request[] = [];
  generatingDocument: _Request[] = [];
  signingDocument: _Request[] = [];
  done: _Request[] = [];

  constructor(private store: Store) {}

  ngOnInit() {
    this.store
      .select(fromDashboardSelectors.selectRequests)
      .pipe(untilDestroyed(this))
      .subscribe(requests => (this.todo = requests.filter(request => request.step?.name === 'Aguardando')));
  }

  drop(event: CdkDragDrop<_Request[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
