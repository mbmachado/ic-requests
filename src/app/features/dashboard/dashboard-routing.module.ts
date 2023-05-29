import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { authGuard } from '../../@core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        children: [
          { path: '', redirectTo: 'workspace', pathMatch: 'full' },
          {
            path: 'profile',
            loadChildren: () => import('./features/my-profile/my-profile.module').then(m => m.MyProfileModule),
          },
          {
            path: 'workspace',
            loadChildren: () => import('./features/workspace/workspace.module').then(m => m.WorkspaceModule),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
