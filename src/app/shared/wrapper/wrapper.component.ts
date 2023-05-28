import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'icr-wrapper',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  styles: [':host > div { grid-template-rows: min-content 1fr min-content; }'],
  templateUrl: './wrapper.component.html',
})
export class WrapperComponent {
  readonly currentYear = new Date().getFullYear();
}
