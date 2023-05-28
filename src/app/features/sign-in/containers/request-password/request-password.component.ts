import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'icr-request-password',
  templateUrl: './request-password.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestPasswordComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get email(): AbstractControl | null {
    return this.form.get('email');
  }

  onSubmit() {
    window.alert('Não implementado.');
  }
}
