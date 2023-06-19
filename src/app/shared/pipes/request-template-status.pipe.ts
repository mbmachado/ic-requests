import { Pipe, PipeTransform } from '@angular/core';
import { RequestTemplateStatus } from '../../@core/models/enums/request-template-status.enum';

@Pipe({
  name: 'requestTemplateStatus',
})
export class RequestTemplateStatusPipe implements PipeTransform {
  transform(value?: RequestTemplateStatus): string {
    switch (value) {
      case RequestTemplateStatus.Active:
        return 'Ativo';
      case RequestTemplateStatus.Inactive:
        return 'Inativo';
      default:
        return '--';
    }
  }
}
