import { Injectable } from '@angular/core';
import { BaseEntityService } from '../base/base-entity.service';
import { _Request } from '../../models/request.model';

@Injectable({
  providedIn: 'root',
})
export class RequestService extends BaseEntityService<_Request> {
  constructor() {
    super('requests');
  }
}
