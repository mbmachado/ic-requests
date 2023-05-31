import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[icrDragDrop]',
})
export class DragDropDirective {
  @Output() fileDropped = new EventEmitter<FileList>();

  @HostBinding('style.border-color') border = 'var(--blue)';

  @HostListener('dragover', ['$event']) onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.border = 'var(--emerald)';
  }

  @HostListener('dragleave', ['$event']) onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.border = 'var(--yellow)';
  }

  @HostListener('drop', ['$event']) onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.border = 'var(--blue)';

    const files = event.dataTransfer?.files;

    if (!!files && files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}
