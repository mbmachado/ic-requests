import { UserCourse } from './enums/user-course.enum';
import { UserRole } from './enums/user-role.enum';
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
    course: UserCourse;
    role: UserRole;
    type: UserType;
  };
}
