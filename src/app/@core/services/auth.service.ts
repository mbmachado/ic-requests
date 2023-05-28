import { Injectable } from '@angular/core';
import { BaseService } from './base/base.service';
import { SignInDTO } from '../models/dtos/sign-in.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  signIn(data: SignInDTO) {
    return this.http.post(`${this.apiUrl}/auth/login`, data);
  }

  setCsrfCookie() {
    return this.http.get(`${this.apiUrl}/sanctum/csrf-cookie`);
  }
}
