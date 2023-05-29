import { Dialog } from '@angular/cdk/dialog';
import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestDialogComponent } from '../../components/request-dialog/request-dialog.component';

@Component({
  selector: 'icr-dialog-entry',
  template: '',
})
export class DialogEntryComponent implements AfterViewInit {
  constructor(public dialog: Dialog, private router: Router) {}

  ngAfterViewInit(): void {
    const dialogRef = this.dialog.open(RequestDialogComponent, {
      panelClass: 'fullscreen-dialog',
      hasBackdrop: true,
    });

    dialogRef.closed.subscribe(() => {
      this.router.navigate(['/dashboard', { outlets: { popup: null } }]);
    });
  }
}
