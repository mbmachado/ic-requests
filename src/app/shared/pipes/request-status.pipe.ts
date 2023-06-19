import { Pipe, PipeTransform } from '@angular/core';
import { RequestStatus } from '../../@core/models/enums/request-status.enum';

@Pipe({
  name: 'requestStatus',
})
export class RequestStatusPipe implements PipeTransform {
  transform(value?: RequestStatus): string {
    switch (value) {
      case RequestStatus.Open:
        return 'Aberto';
      case RequestStatus.InProgress:
        return 'Em andamento';
      case RequestStatus.Closed:
        return 'Fechado';
      case RequestStatus.Blocked:
        return 'Bloqueado';
      case RequestStatus.Completed:
        return 'Concluído';
      case RequestStatus.OnHold:
        return 'Em espera';
      default:
        return '--';
    }
  }
}
