import { BaseEntityModel } from './base/base-entity.model';
import { _Request } from './request.model';
import { User } from './user.model';

export interface Comment extends BaseEntityModel {
  value: string;
  user_id: string;
  request_id: string;
  request?: _Request;
  user?: User;
  created_at: string;
  updated_at: string;
}
