import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { SignInDTO } from '../../models/dtos/sign-in.dto';
import { TokenDTO } from '../../models/dtos/token.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  getUser() {
    return this.http.get(`${this.apiUrl}/me`);
  }

  signIn(data: SignInDTO): Observable<TokenDTO> {
    return this.http.post<TokenDTO>(`${this.apiUrl}/login`, data);
  }

  signOut(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/logout`, null);
  }
}
