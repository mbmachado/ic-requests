import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

type TooltipPosition = 'above' | 'below' | 'left' | 'right';

@Component({
  selector: 'icr-avatar',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTooltipModule],
  templateUrl: './avatar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input() tooltipPosition: TooltipPosition = 'above';

  initials?: string;

  private _name?: string;

  @Input() set name(value: string | undefined) {
    if (!value) return;

    this._name = value;
    this.initials = this.getInitials(value);
  }

  get name(): string | undefined {
    return this._name ?? '';
  }

  get hasInitials(): boolean {
    return !!this.initials;
  }

  get tooltipText(): string {
    return this.name ?? '';
  }

  get tooltipDisabled(): boolean {
    return !this.hasInitials;
  }

  private getInitials(name: string): string {
    let initials = '';

    name.split(' ').forEach(n => {
      initials += n[0].toUpperCase();
    });

    return initials;
  }
}
