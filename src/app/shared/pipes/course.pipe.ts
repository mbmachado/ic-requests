import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../@core/models/enums/course.enum';

@Pipe({
  name: 'course',
})
export class CoursePipe implements PipeTransform {
  transform(value: Course): string {
    switch (value) {
      case Course.ComputerScience:
        return 'Ciência da Computação';
      case Course.ComputationDegree:
        return 'Licenciatura em Computação';
      case Course.InformationSystems:
        return 'Sistemas de Informação';
      default:
        return '--';
    }
  }
}
