import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  { path: 'sign-in', loadChildren: () => import('./features/sing-in/sing-in.module').then(m => m.SingInModule) },
  { path: 'sign-up', loadChildren: () => import('./features/sing-up/sing-up.module').then(m => m.SingUpModule) },
  { path: '**', redirectTo: 'sign-in' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
