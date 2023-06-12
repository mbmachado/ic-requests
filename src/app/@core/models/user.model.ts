import { BaseEntityModel } from './base/base-entity.model';
import { UserType } from './enums/user-type.enum';
import { Course } from './enums/course.enum';
import { Role } from './enums/role.enum';

export interface User extends BaseEntityModel {
  name: string;
  email: string;
  password?: string;
  course?: Course;
  enrollment_number?: string;
  cellphone?: string;
  role: Role;
  type: UserType;
  createdAt?: string;
  updatedAt?: string;
}
