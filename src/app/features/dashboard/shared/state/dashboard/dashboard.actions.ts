import { createAction, props } from '@ngrx/store';
import { _Request } from '../../../../../@core/models/request.model';
import { Comment } from '../../../../../@core/models/comment.model';

export const setTitle = createAction('[Dashboard Page] Set Title', props<{ title: string }>());

export const loadRequests = createAction('[Workspace Page] Load Requests');
export const loadRequestsSuccess = createAction(
  '[IC-Requests API] Load Requests Success',
  props<{ requests: _Request[] }>()
);
export const loadRequestsFailure = createAction('[IC-Requests API]  Load Requests Failure');

export const loadRequest = createAction('[Workspace Page] Load Request', props<{ id: number }>());
export const loadRequestSuccess = createAction(
  '[IC-Requests API] Load Request Success',
  props<{ request: _Request }>()
);
export const loadRequestFailure = createAction('[IC-Requests API]  Load Request Failure');

export const createRequest = createAction('[New Request Page] Create Request', props<{ request: Partial<_Request> }>());
export const createRequestSuccess = createAction(
  '[IC-Requests API] Create Request Success',
  props<{ request: _Request }>()
);
export const createRequestFailure = createAction('[IC-Requests API] Create Request Failure');

export const createCommentSuccess = createAction(
  '[IC-Requests API] Create Comment Success',
  props<{ comment: Comment }>()
);
