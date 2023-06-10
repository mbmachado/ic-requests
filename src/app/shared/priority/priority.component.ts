import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

type PriorityKind = 'low' | 'normal' | 'high';
type TooltipPosition = 'above' | 'below' | 'left' | 'right';

@Component({
  selector: 'icr-priority',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTooltipModule],
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriorityComponent {
  @Input() kind: PriorityKind = 'normal';
  @Input() tooltipPosition: TooltipPosition = 'above';

  readonly priorityMap = {
    ['low']: 'baixa',
    ['normal']: 'normal',
    ['high']: 'alta',
  };

  get tooltipText(): string {
    return `Prioridade ${this.priorityMap[this.kind]}`;
  }
}
