import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';

import { signIn } from '../../../../@core/state/user-context/user-context.actions';

interface SignUpForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'icr-sing-in',
  templateUrl: './sign-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  form: FormGroup<SignUpForm>;
  hide = true;

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.form = this.formBuilder.nonNullable.group({
      email: '',
      password: '',
    });
  }

  get email(): AbstractControl | null {
    return this.form.get('email');
  }

  get password(): AbstractControl | null {
    return this.form.get('password');
  }

  get icon() {
    return this.hide ? 'visibility' : 'visibility_off';
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      const data = this.form.getRawValue();
      this.store.dispatch(signIn({ data }));
    }
  }
}
