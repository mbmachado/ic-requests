import { inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export abstract class BaseService {
  protected http: HttpClient;

  protected readonly apiUrl = environment.apiUrl;

  constructor() {
    this.http = inject(HttpClient);
  }

  protected handleError(errorResponse: HttpErrorResponse): Observable<never> {
    let message = errorResponse?.message || 'Algo deu errado.';

    if (errorResponse?.status === 422) {
      message = 'Dados inválidos.';
    }

    throw new Error(message, { cause: errorResponse });
  }
}
