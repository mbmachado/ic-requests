import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'icr-dialog-toolbar',
  templateUrl: './dialog-toolbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogToolbarComponent {
  @Output() closeDialog = new EventEmitter<void>();

  onClose() {
    this.closeDialog.emit();
  }
}
