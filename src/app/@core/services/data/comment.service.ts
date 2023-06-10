import { Injectable } from '@angular/core';

import { Observable, catchError } from 'rxjs';
import { Comment } from '../../models/comment.model';
import { BaseService } from '../base/base.service';
import { CommentDTO } from '../../models/dtos/comment.dto';

@Injectable({
  providedIn: 'root',
})
export class CommentService extends BaseService {
  constructor() {
    super();
  }

  create(requestId: number, data: CommentDTO): Observable<Comment> {
    return this.http
      .post<Comment>(`${this.apiUrl}/requests/${requestId}/comments`, data)
      .pipe(catchError(this.handleError));
  }
}
