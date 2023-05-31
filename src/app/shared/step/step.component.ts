import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepStage } from '../../@core/models/enums/step-stage.enum';
import { StepStatus } from '../../@core/models/enums/step-status.enum';

@Component({
  selector: 'icr-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent {
  @Input() stage: StepStage = StepStage.Initial;
  @Input() status: StepStatus = StepStatus.Active;
  @Input() text = 'Etapa';

  readonly progressTabStatus = StepStatus;
  readonly progressTabStage = StepStage;
}
