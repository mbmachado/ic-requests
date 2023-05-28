import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  { path: 'sign-in', loadChildren: () => import('./features/sign-in/sign-in.module').then(m => m.SignInModule) },
  { path: 'sign-up', loadChildren: () => import('./features/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: '**', redirectTo: 'sign-in' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
