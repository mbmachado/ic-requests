import { Component, Input, forwardRef } from '@angular/core';
import { FileUploadData } from '../../../@core/models/media.model';
import { MediaService } from '../../../@core/services/data/media.service';

import { forkJoin } from 'rxjs';
import { take } from 'rxjs/operators';
import { FileUploadStatus, UploadResponse } from '../../../@core/models/media.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'icr-uploader',
  templateUrl: './uploader.component.html',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => UploaderComponent), multi: true }],
})
export class UploaderComponent implements ControlValueAccessor {
  @Input() disabled = false;

  files: string[] = [];
  filesUnderUpload: FileUploadData[] = [];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = (files: string[]) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched = () => {};

  constructor(private mediaService: MediaService) {}

  writeValue(files: string[]): void {
    this.files = files;
    this.onChange(files);
  }
  registerOnChange(fn: (files: string[]) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  fileChangeEvent(files: FileList): void {
    const filesArray = Array.from(files);
    const index = this.filesUnderUpload.length;

    const observables = filesArray.map(file => this.mediaService.upload(file, 'upload').pipe(take(1)));

    const newFiles = filesArray.map(file => {
      return {
        originalName: file.name,
        status: FileUploadStatus.Loading,
      };
    });

    this.filesUnderUpload = [...this.filesUnderUpload, ...newFiles];

    forkJoin(observables).subscribe(response => {
      const paths = response.reduce((total: string[], current: UploadResponse) => {
        return [...total, ...current.path];
      }, []);

      (this.files = [...paths, ...this.files]),
        (this.filesUnderUpload = this.updateFilesStatus(this.filesUnderUpload, response, index));

      this.onChange(this.files);
    });
  }

  updateFilesStatus(files: FileUploadData[], response: UploadResponse[], index: number): FileUploadData[] {
    const aux = Array.from(files);
    const status = response.map(_ => _.status);
    const namesAfterUpload = response.map(_ => (_.path.length > 0 ? _.path[0].split('/').pop() : ''));

    for (let j = 0; j < status.length; j++) {
      aux[index + j].status = status[j];
      aux[index + j].nameAfterUpload = namesAfterUpload[j];
    }

    return Array.from(aux);
  }
}
