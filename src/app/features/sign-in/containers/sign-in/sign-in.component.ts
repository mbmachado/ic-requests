import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { signIn } from '../../../../@core/state/user-context/user-context.actions';
import { Observable } from 'rxjs';
import * as fromUserContextSelectors from '../../../../@core/state/user-context/user-context.selectors';
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
  loading$: Observable<boolean>;

  form: FormGroup<SignUpForm>;
  hide = true;

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.loading$ = this.store.select(fromUserContextSelectors.selectLoading);

    this.form = this.formBuilder.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
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
