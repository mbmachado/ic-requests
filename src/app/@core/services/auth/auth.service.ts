import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { BaseService } from '../base/base.service';
import { SignInDTO } from '../../models/dtos/sign-in.dto';
import { TokenDTO } from '../../models/dtos/token.dto';
import { SignUpDTO } from '../../models/dtos/sign-up.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  getUser() {
    return this.http.get(`${this.apiUrl}/me`);
  }

  signIn(data: SignInDTO): Observable<TokenDTO> {
    return this.http.post<TokenDTO>(`${this.apiUrl}/sign-in`, data);
  }

  signOut(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/sign-out`, null);
  }

  signUp(data: SignUpDTO): Observable<TokenDTO> {
    return this.http.post<TokenDTO>(`${this.apiUrl}/sign-up`, data).pipe(catchError(this.handleError));
  }
}
