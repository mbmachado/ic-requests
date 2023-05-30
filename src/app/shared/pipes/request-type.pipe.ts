import { Pipe, PipeTransform } from '@angular/core';
import { RequestType } from '../../@core/models/enums/request-type.enum';

@Pipe({
  name: 'requestType',
})
export class RequestTypePipe implements PipeTransform {
  transform(value: RequestType): string {
    switch (value) {
      case RequestType.Question:
        return 'Dúvida';
      case RequestType.WorkloadClaim:
        return 'Aproveitamento de C.H.';
      case RequestType.EnrollmentProof:
        return 'Comprovante de Matrícula';
      case RequestType.InternshipTermSigning:
        return 'Assinatura de Termo de Estágio';
      default:
        return '--';
    }
  }
}
