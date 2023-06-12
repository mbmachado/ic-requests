import { Pipe, PipeTransform } from '@angular/core';
import { UserType } from '../../@core/models/enums/user-type.enum';

@Pipe({
  name: 'userType',
})
export class UserTypePipe implements PipeTransform {
  transform(value?: UserType): string {
    switch (value) {
      case UserType.Office:
        return 'Técnico Administrativo';
      case UserType.Committee:
        return 'Coordenador Colegiado';
      case UserType.Student:
        return 'Estudante';
      default:
        return '--';
    }
  }
}
