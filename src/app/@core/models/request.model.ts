import { BaseEntityModel } from './base/base-entity.model';
import { Comment } from './comment.model';
import { RequestType } from './enums/request-type.enum';
import { User } from './user.model';

export interface _Request extends BaseEntityModel {
  title: string;
  type: RequestType;
  details?: string;
  attachments?: string[];
  comments?: Comment[];
  user_id?: string;
  user?: User;
  created_at?: string;
  updated_at?: string;
}
