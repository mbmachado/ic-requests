import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestTplsRoutingModule } from './request-tpls-routing.module';
import { RequestTplsComponent } from './containers/request-tpls/request-tpls.component';

@NgModule({
  declarations: [RequestTplsComponent],
  imports: [CommonModule, RequestTplsRoutingModule],
})
export class RequestTplsModule {}
