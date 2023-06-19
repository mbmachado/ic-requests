import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { permissionGuard } from '@core/guards/permission.guard';
import { UserRole } from '@core/models/enums/user-role.enum';
import { WorkspaceComponent } from './containers/workspace/workspace.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DetailsComponent } from './containers/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: WorkspaceComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'requests/:id',
        component: DetailsComponent,
      },
    ],
  },
  {
    path: 'board',
    loadChildren: () => import('./features/board/board.module').then(m => m.BoardModule),
    canActivate: [permissionGuard([UserRole.Admin])],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkspaceRoutingModule {}
