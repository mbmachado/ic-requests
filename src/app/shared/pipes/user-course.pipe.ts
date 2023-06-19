import { Pipe, PipeTransform } from '@angular/core';
import { UserCourse } from '../../@core/models/enums/user-course.enum';

@Pipe({
  name: 'userCourse',
})
export class UserCoursePipe implements PipeTransform {
  transform(value?: UserCourse): string {
    switch (value) {
      case UserCourse.ComputerScience:
        return 'Ciência da Computação';
      case UserCourse.ComputationDegree:
        return 'Licenciatura em Computação';
      case UserCourse.InformationSystems:
        return 'Sistemas de Informação';
      default:
        return '--';
    }
  }
}
