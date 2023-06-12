import { Course } from './enums/course.enum';
import { Role } from './enums/role.enum';
import { UserType } from './enums/user-type.enum';

export interface TokenPayload {
  exp: number;
  iat: number;
  iss: string;
  jti: string;
  nbf: number;
  prv: string;
  sub: string;
  user: {
    name: string;
    course: Course;
    role: Role;
    type: UserType;
  };
}
