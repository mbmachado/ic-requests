import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LetModule } from '@ngrx/component';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { ThemeMinimalModule } from '../../@theme/theme-minimal.module';

import { WrapperComponent } from '../../shared/wrapper/wrapper.component';

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, SignUpRoutingModule, ReactiveFormsModule, LetModule, WrapperComponent, ThemeMinimalModule],
})
export class SignUpModule {}
