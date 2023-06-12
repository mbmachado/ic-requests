import { createReducer, on } from '@ngrx/store';
import { _Request } from '../../../../../@core/models/request.model';
import * as fromDashboardActions from './dashboard.actions';

export const dashboardKey = 'dashboard';

export interface DashboardState {
  error: boolean;
  loading: boolean;
  requests: _Request[];
  title: string;
  details: {
    request?: _Request;
    loading: boolean;
  };
}

const dashboardInitialState: DashboardState = {
  error: false,
  loading: false,
  requests: [],
  title: 'Início',
  details: {
    request: undefined,
    loading: false,
  },
};

export const dashboardReducer = createReducer(
  dashboardInitialState,
  on(fromDashboardActions.setTitle, (state, { title }): DashboardState => {
    return {
      ...state,
      title,
      details: {
        ...state.details,
      },
    };
  }),
  on(
    fromDashboardActions.loadRequests,
    (state): DashboardState => ({
      ...state,
      error: false,
      loading: true,
    })
  ),
  on(
    fromDashboardActions.loadRequestsSuccess,
    (state, { requests }): DashboardState => ({
      ...state,
      error: false,
      loading: false,
      requests,
    })
  ),
  on(
    fromDashboardActions.loadRequestsFailure,
    (state): DashboardState => ({
      ...state,
      error: true,
      loading: false,
    })
  ),
  on(
    fromDashboardActions.createRequest,
    (state): DashboardState => ({
      ...state,
      error: false,
      loading: true,
    })
  ),
  on(
    fromDashboardActions.createRequestSuccess,
    (state, { request }): DashboardState => ({
      ...state,
      error: false,
      loading: false,
      requests: [request, ...state.requests],
    })
  ),
  on(
    fromDashboardActions.createRequestFailure,
    (state): DashboardState => ({
      ...state,
      error: true,
      loading: false,
    })
  ),

  on(
    fromDashboardActions.loadRequest,
    (state): DashboardState => ({
      ...state,
      details: {
        ...state.details,
        loading: true,
      },
    })
  ),
  on(
    fromDashboardActions.loadRequestSuccess,
    (state, { request }): DashboardState => ({
      ...state,
      details: {
        request,
        loading: false,
      },
    })
  ),
  on(
    fromDashboardActions.createCommentSuccess,
    (state, { comment }): DashboardState => ({
      ...state,
      details: {
        ...state.details,
        request: {
          ...state.details.request,
          type: state.details!.request!.type,
          title: state.details!.request!.title,
          comments: [...(state.details?.request?.comments || []), comment],
        },
      },
    })
  )
);
