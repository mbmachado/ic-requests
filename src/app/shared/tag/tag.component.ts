import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type TagSchema = 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'orange' | 'gray';

@Component({
  selector: 'icr-tag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent {
  @Input() schema: TagSchema = 'gray';
}
