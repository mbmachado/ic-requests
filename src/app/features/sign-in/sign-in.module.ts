import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './containers/sign-in/sign-in.component';
import { ThemeMinimalModule } from '../../@theme/theme-minimal.module';
import { ReactiveFormsModule } from '@angular/forms';
import { WrapperComponent } from '../../shared/wrapper/wrapper.component';

import { ResetPasswordComponent } from './containers/reset-password/reset-password.component';
import { RequestPasswordComponent } from './containers/request-password/request-password.component';
import { LetModule } from '@ngrx/component';

@NgModule({
  declarations: [SignInComponent, RequestPasswordComponent, ResetPasswordComponent],
  imports: [CommonModule, SignInRoutingModule, ReactiveFormsModule, LetModule, WrapperComponent, ThemeMinimalModule],
})
export class SignInModule {}
