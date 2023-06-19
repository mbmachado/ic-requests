import { Pipe, PipeTransform } from '@angular/core';

import { AssigneeType } from '@core/models/enums/assignee-type.enum';

@Pipe({
  name: 'assigneeType',
})
export class AssigneeTypePipe implements PipeTransform {
  transform(value?: AssigneeType): string {
    switch (value) {
      case AssigneeType.Office:
        return 'Técnico Administrativo';
      case AssigneeType.Committee:
        return 'Coordenador Colegiado';
      default:
        return '--';
    }
  }
}
