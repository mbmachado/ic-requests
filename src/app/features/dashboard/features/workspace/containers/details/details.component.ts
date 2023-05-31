import { Component } from '@angular/core';
import { StepStage } from '../../../../../../@core/models/enums/step-stage.enum';
import { StepStatus } from '../../../../../../@core/models/enums/step-status.enum';

@Component({
  selector: 'icr-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  steps = [
    {
      stage: StepStage.Initial,
      status: StepStatus.Active,
      name: 'Aguardando',
    },
    {
      stage: StepStage.Intermediate,
      status: StepStatus.Inactive,
      name: 'Gerar Documento',
    },
    {
      stage: StepStage.Intermediate,
      status: StepStatus.Inactive,
      name: 'Assinar',
    },
    {
      stage: StepStage.Final,
      status: StepStatus.Inactive,
      name: 'Finalizado',
    },
  ];
}
