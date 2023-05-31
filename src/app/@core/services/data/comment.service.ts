import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Comment } from '../../models/comment.model';
import { BaseService } from '../base/base.service';
@Injectable({
  providedIn: 'root',
})
export class CommentService extends BaseService {
  constructor() {
    super();
  }

  create(requestId: number, data: { value: string }): Observable<Comment> {
    return this.http
      .post<Comment>(`${this.apiUrl}/requests/${requestId}/comments`, data)
      .pipe(catchError(this.handleError));
  }
}
