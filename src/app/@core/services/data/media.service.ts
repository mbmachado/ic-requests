import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FileUploadStatus, UploadResponse } from '../../models/media.model';

@Injectable({
  providedIn: 'root',
})
export class MediaService extends BaseService {
  upload(file: File, path = 'files'): Observable<UploadResponse> {
    const formData = new FormData();

    formData.set('content', file);

    return this.http.post<string[]>(`${this.apiUrl}/${path}`, formData).pipe(
      map(array => ({ status: FileUploadStatus.Success, path: array })),
      catchError(() => of({ status: FileUploadStatus.Fail, path: [] }))
    );
  }
}
