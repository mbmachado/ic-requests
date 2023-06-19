import { Pipe, PipeTransform } from '@angular/core';
import { RequestPriority } from '../../@core/models/enums/request-priority.enum';

@Pipe({
  name: 'requestPriority',
})
export class RequestPriorityPipe implements PipeTransform {
  transform(value?: RequestPriority): string {
    switch (value) {
      case RequestPriority.Low:
        return 'Baixa';
      case RequestPriority.Normal:
        return 'Normal';
      case RequestPriority.High:
        return 'Alta';
      default:
        return '--';
    }
  }
}
