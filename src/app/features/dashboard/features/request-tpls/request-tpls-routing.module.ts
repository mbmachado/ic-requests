import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestTplsComponent } from './containers/request-tpls/request-tpls.component';

const routes: Routes = [{ path: '', component: RequestTplsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestTplsRoutingModule {}
