import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../../../@core/services/auth.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'icr-reset-password',
  templateUrl: './reset-password.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordComponent implements OnInit {
  hide = true;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.setCsrfCookie().subscribe();
  }

  get email(): AbstractControl | null {
    return this.form.get('email');
  }

  get password(): AbstractControl | null {
    return this.form.get('password');
  }

  get passwordConfirmation(): AbstractControl | null {
    return this.form.get('passwordConfirmation');
  }

  get icon() {
    return this.hide ? 'visibility' : 'visibility_off';
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
