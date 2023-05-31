import { createAction, props } from '@ngrx/store';
import { _Request } from '../../../../../@core/models/request.model';

export const setTitle = createAction('[Dashboard Page] Set Title', props<{ title: string }>());

export const loadRequests = createAction('[Workspace Page] Load Requests');
export const loadRequestsSuccess = createAction(
  '[IC-Requests API] Load Requests Success',
  props<{ requests: _Request[] }>()
);
export const loadRequestsFailure = createAction('[IC-Requests API]  Load Requests Failure');

export const createRequest = createAction('[New Request Page] Create Request', props<{ request: Partial<_Request> }>());
export const createRequestSuccess = createAction(
  '[IC-Requests API] Create Request Success',
  props<{ request: _Request }>()
);
export const createRequestFailure = createAction('[IC-Requests API] Create Request Failure');
