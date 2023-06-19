import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromUserContextSelectors from '@core/state/user-context/user-context.selectors';
import { fullName } from '@core/utils/patterns.utils';
import { UserCourse } from '@core/models/enums/user-course.enum';
import { signUp } from '@core/state/user-context/user-context.actions';

interface SignUpForm {
  name: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  enrollment_number: FormControl<string>;
  course: FormControl<UserCourse>;
}

@Component({
  selector: 'icr-sign-up',
  templateUrl: './sign-up.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  loading$: Observable<boolean>;

  form: FormGroup<SignUpForm>;
  hide = true;

  readonly couses = Object.values(UserCourse);

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.loading$ = this.store.select(fromUserContextSelectors.selectLoading);

    this.form = this.formBuilder.nonNullable.group({
      name: ['', [Validators.required, Validators.pattern(fullName)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      enrollment_number: ['', [Validators.required, Validators.pattern(/^[0-9]{6,15}$/)]],
      course: [UserCourse.ComputerScience, [Validators.required]],
    });
  }

  get name(): AbstractControl | null {
    return this.form.get('name');
  }

  get email(): AbstractControl | null {
    return this.form.get('email');
  }

  get password(): AbstractControl | null {
    return this.form.get('password');
  }

  get enrollment_number(): AbstractControl | null {
    return this.form.get('enrollment_number');
  }

  get course(): AbstractControl | null {
    return this.form.get('course');
  }

  get icon() {
    return this.hide ? 'visibility' : 'visibility_off';
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      const data = this.form.getRawValue();
      this.store.dispatch(signUp({ data }));
    }
  }
}
