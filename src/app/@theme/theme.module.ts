import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ButtonDirective } from './directives/button.directive';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
];

const DECLARATIONS = [ButtonDirective];

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [CommonModule, ...MATERIAL_MODULES],
  exports: [...DECLARATIONS, ...MATERIAL_MODULES],
})
export class ThemeModule {}
