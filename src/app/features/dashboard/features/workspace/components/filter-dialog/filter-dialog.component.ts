import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'icr-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styles: [
    `
      .root-filters {
        grid-template-rows: min-content minmax(0, 1fr) min-content;
      }
    `,
  ],
})
export class FilterDialogComponent {
  constructor(private dialogRef: DialogRef) {}

  onClose() {
    this.dialogRef.close();
  }
}
