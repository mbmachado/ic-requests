import { Component } from '@angular/core';

@Component({
  selector: 'icr-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent {
  requests = Array.from({ length: 3 }).map((_, i) => `Item #${i}`);
}
