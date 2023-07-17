import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { _Request } from '../../../../../../@core/models/request.model';

@Component({
  selector: 'icr-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.scss'],
})
export class DetailsDialogComponent {
  constructor(
    @Inject(DIALOG_DATA) public request: _Request,
    public dialogRef: DialogRef<string>,
    private router: Router
  ) {}

  onClose() {
    this.router.navigate(['../']).then(() => this.dialogRef.close());
  }
}
