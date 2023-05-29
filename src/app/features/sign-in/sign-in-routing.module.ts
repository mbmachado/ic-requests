import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './containers/sign-in/sign-in.component';
import { RequestPasswordComponent } from './containers/request-password/request-password.component';
import { ResetPasswordComponent } from './containers/reset-password/reset-password.component';
import { guestGuard } from '../../@core/guards/guest.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [guestGuard],
    children: [
      { path: '', component: SignInComponent },
      { path: 'request-password', component: RequestPasswordComponent },
      { path: 'reset-password/:token', component: ResetPasswordComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignInRoutingModule {}
