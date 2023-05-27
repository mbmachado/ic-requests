import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

enum Orientation {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

@Component({
  selector: 'icr-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  @Input() orientation: Orientation = Orientation.Horizontal;
}
