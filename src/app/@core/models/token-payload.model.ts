import { Course } from './enums/course.enum';
import { Role } from './enums/role.enum';
import { Type } from './enums/type.enum';

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
    type: Type;
  };
}
