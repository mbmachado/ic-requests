import { Course } from '../enums/course.enum';

export interface SignUpDTO {
  name: string;
  email: string;
  password: string;
  enrollment_number: string;
  course: Course;
}
