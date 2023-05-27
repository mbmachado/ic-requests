import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingInRoutingModule } from './sing-in-routing.module';
import { SingInComponent } from './sing-in.component';
import { LogoComponent } from '../../shared/logo/logo.component';

@NgModule({
  declarations: [SingInComponent],
  imports: [CommonModule, SingInRoutingModule, LogoComponent],
})
export class SingInModule {}
