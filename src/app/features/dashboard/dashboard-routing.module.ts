import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { authGuard } from '../../@core/guards/auth.guard';
import { permissionGuard } from '../../@core/guards/permission.guard';
import { Role } from '../../@core/models/enums/role.enum';

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
            path: 'request',
            loadChildren: () => import('./features/new-request/new-request.module').then(m => m.NewRequestModule),
            outlet: 'popup',
          },
          {
            path: 'workspace',
            loadChildren: () => import('./features/workspace/workspace.module').then(m => m.WorkspaceModule),
          },
          {
            path: 'workflows',
            loadChildren: () => import('./features/workflows/workflows.module').then(m => m.WorkflowsModule),
            canActivate: [permissionGuard([Role.Admin])],
          },
          {
            path: 'request-tpls',
            loadChildren: () => import('./features/request-tpls/request-tpls.module').then(m => m.RequestTplsModule),
            canActivate: [permissionGuard([Role.Admin])],
          },
          {
            path: 'users',
            loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule),
            canActivate: [permissionGuard([Role.Admin])],
          },
          {
            path: 'settings',
            loadChildren: () => import('./features/settings/settings.module').then(m => m.SettingsModule),
            canActivate: [permissionGuard([Role.Admin])],
          },
          {
            path: 'profile',
            loadChildren: () => import('./features/my-profile/my-profile.module').then(m => m.MyProfileModule),
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
