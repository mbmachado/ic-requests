import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FileUploadData } from '../../../@core/models/media.model';

@Component({
  selector: 'icr-drop-area',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss'],
})
export class DragDropComponent {
  @Input() text = 'Ou arraste e solte imagens aqui.';
  @Input() filesUnderUpload: FileUploadData[] = [];
  @Output() fileChangeEvent = new EventEmitter<FileList>();

  onFileDropped(files: FileList) {
    this.fileChangeEvent.emit(files ?? undefined);
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files;

    this.fileChangeEvent.emit(files ?? undefined);
  }
}
