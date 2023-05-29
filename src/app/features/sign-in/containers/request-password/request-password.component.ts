import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from '../../../../@core/services/misc/toastr.service';

@Component({
  selector: 'icr-request-password',
  templateUrl: './request-password.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestPasswordComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private toastr: ToastrService) {}

  get email(): AbstractControl | null {
    return this.form.get('email');
  }

  onSubmit() {
    this.toastr.error('Não implementado.');
  }
}
