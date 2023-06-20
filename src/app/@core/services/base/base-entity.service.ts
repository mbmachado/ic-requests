import { Observable, catchError, map } from 'rxjs';
import { BaseEntityModel } from '../../models/base/base-entity.model';
import { BaseService } from './base.service';
import { Pageable } from '../../models/pageable.model';

export abstract class BaseEntityService<T extends BaseEntityModel> extends BaseService {
  constructor(protected path: string) {
    super();
  }

  getAll(filters?: string): Observable<T[]> {
    const url = `${this.apiUrl}/${this.path}${filters ? `?${filters}` : ''}`;

    return this.http.get<Pageable<T>>(url).pipe(
      map(pageableEntities => pageableEntities.data),
      catchError(this.handleError)
    );
  }

  getById(id: number): Observable<T> {
    const url = `${this.apiUrl}/${this.path}/${id}`;

    return this.http.get<T>(url).pipe(catchError(this.handleError));
  }

  create(entity: T): Observable<T> {
    const url = `${this.apiUrl}/${this.path}`;

    return this.http.post<T>(url, entity).pipe(catchError(this.handleError));
  }

  update(entity: T): Observable<T> {
    const url = `${this.apiUrl}/${this.path}/${entity.id}`;

    return this.http.put<T>(url, entity).pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<null> {
    const url = `${this.apiUrl}/${this.path}/${id}`;

    return this.http.delete(url).pipe(
      map(() => null),
      catchError(this.handleError)
    );
  }
}
