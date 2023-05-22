import { Observable, catchError, map } from "rxjs";
import { BaseResourceModel } from "../../models/base/base.model";
import { BaseService } from "./base.service";

export abstract class SimpleResourceService<T extends BaseResourceModel> extends BaseService {

  constructor(
    protected path: string,
  ) {
    super();
  }

  getAll(filters?: string): Observable<T[]> {
    const url = `${this.apiUrl}/${this.path}${filters ? `?${filters}` : ''}`;

    return this.http.get<T[]>(url).pipe(
      catchError(this.handleError),
    );
  }

  getById(id: number): Observable<T> {
    const url = `${this.apiUrl}/${this.path}/${id}`;

    return this.http.get<T>(url).pipe(
      catchError(this.handleError),
    );
  }

  create(resource: T): Observable<T> {
    const url = `${this.apiUrl}/${this.path}`;

    return this.http.post<T>(url, resource).pipe(
      catchError(this.handleError),
    );
  }

  update(resource: T): Observable<T> {
    const url = `${this.apiUrl}/${this.path}/${resource.id}`;

    return this.http.put<T>(url, resource).pipe(
      catchError(this.handleError),
    );
  }

  delete(id: number): Observable<null> {
    const url = `${this.apiUrl}/${this.path}/${id}`;

    return this.http.delete(url).pipe(
      map(() => null),
      catchError(this.handleError),
    );
  }
}
