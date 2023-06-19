import { BaseEntityModel } from './base/base-entity.model';
import { UserType } from './enums/user-type.enum';
import { UserCourse } from './enums/user-course.enum';
import { UserRole } from './enums/user-role.enum';

export interface User extends BaseEntityModel {
  name: string;
  email: string;
  password?: string;
  course?: UserCourse;
  enrollment_number?: string;
  cellphone?: string;
  role: UserRole;
  type: UserType;
  createdAt?: string;
  updatedAt?: string;
}
