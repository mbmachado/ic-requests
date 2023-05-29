import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogEntryComponent } from './containers/dialog-entry/dialog-entry.component';

const routes: Routes = [{ path: '', component: DialogEntryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewRequestRoutingModule {}
