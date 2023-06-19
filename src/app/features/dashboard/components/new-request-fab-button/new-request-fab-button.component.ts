import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RequestType } from '@core/models/enums/request-type.enum';

@Component({
  selector: 'icr-new-request-fab-button',
  templateUrl: './new-request-fab-button.component.html',
  styles: [
    `
      div.fab {
        grid-template-columns: repeat(2, min-content);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewRequestFabButtonComponent {
  readonly requestType = RequestType;
}
