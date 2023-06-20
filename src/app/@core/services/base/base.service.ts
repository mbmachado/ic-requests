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
    let message = errorResponse?.error?.message || 'Algo deu errado.';
    let cause = errorResponse?.message;

    if (errorResponse?.status === 422) {
      message = `Dados inválidos. ${message}`;
      cause = errorResponse?.error?.errors;
    }

    throw new Error(message, { cause });
  }
}
