// import * as actions from './actionTypes';

import {
  FETCH_DONORS,
  LOGIN,
  FETCH_REQUESTS,
  FETCH_MY_ADMIN_APPROVED_REQUESTS,
  FETCH_MY_ADMIN_REJECTED_REQUESTS,
  FETCH_MY_DONOR_APPROVED_REQUESTS,
  FETCH_MY_DONOR_REJECTED_REQUESTS,
  FETCH_ADMIN_REQUESTS,
  FETCH_DONOR_REQUESTS,
} from './actionTypes';

const initialUserState = {
  user: {},
  error: null,
  loading: false,
  message: '',
  status: false,
};
const initialDonorsState = {
  donors: [],
  error: null,
  loading: false,
  message: '',
  status: false,
};
const initialRequestsState = {
  requests: [],
  error: null,
  loading: false,
  message: '',
  status: false,
};
const initialMyAdminApprovedRequestsState = {
  requests: [],
  error: null,
  loading: false,
  message: '',
  status: false,
};
const initialMyAdminRejectedRequestsState = {
  requests: [],
  error: null,
  loading: false,
  message: '',
  status: false,
};
const initialMyDonorApprovedRequestsState = {
  requests: [],
  error: null,
  loading: false,
  message: '',
  status: false,
};
const initialMyDonorRejectedRequestsState = {
  requests: [],
  error: null,
  loading: false,
  message: '',
  status: false,
};
const initialAdminRequestsState = {
  requests: [],
  error: null,
  loading: false,
  message: '',
  status: false,
};
const initialDonorRequestsState = {
  requests: [],
  error: null,
  loading: false,
  message: '',
  status: false,
};
const loginReducer = (state = initialUserState, action = {}) => {
  switch (action.type) {
    case LOGIN.REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
        message: '',
        status: false,
      };

    case LOGIN.SUCCESS:
      return {
        ...state,
        user: action.user,
        loading: false,
        error: '',
        message: action.message,
        status: action.status,
      };
    case LOGIN.FAIL:
      return {
        ...state,
        user: {},
        loading: false,
        error: action.error,
        message: action.message,
        status: false,
      };

    default:
      return state;
  }
};
const donorsReducer = (state = initialDonorsState, action = {}) => {
  switch (action.type) {
    case FETCH_DONORS.REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
        message: '',
        status: false,
      };

    case FETCH_DONORS.SUCCESS:
      return {
        ...state,
        donors: action.donors,
        loading: false,
        error: '',
        message: action.message,
        status: action.status,
      };
    case FETCH_DONORS.FAIL:
      return {
        ...state,
        donors: [],
        loading: false,
        error: action.error,
        message: action.message,
        status: false,
      };

    default:
      return state;
  }
};
const allMyRequestsReducer = (state = initialRequestsState, action = {}) => {
  switch (action.type) {
    case FETCH_REQUESTS.REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
        message: '',
        status: false,
      };

    case FETCH_REQUESTS.SUCCESS:
      return {
        ...state,
        requests: action.requests,
        loading: false,
        error: '',
        message: action.message,
        status: action.status,
      };
    case FETCH_REQUESTS.FAIL:
      return {
        ...state,
        requests: [],
        loading: false,
        error: action.error,
        message: action.message,
        status: false,
      };

    default:
      return state;
  }
};
const myAdminApprovedRequestsReducer = (
  state = initialMyAdminApprovedRequestsState,
  action = {}
) => {
  switch (action.type) {
    case FETCH_MY_ADMIN_APPROVED_REQUESTS.REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
        message: '',
        status: false,
      };

    case FETCH_MY_ADMIN_APPROVED_REQUESTS.SUCCESS:
      return {
        ...state,
        requests: action.requests,
        loading: false,
        error: '',
        message: action.message,
        status: action.status,
      };
    case FETCH_MY_ADMIN_APPROVED_REQUESTS.FAIL:
      return {
        ...state,
        requests: [],
        loading: false,
        error: action.error,
        message: action.message,
        status: false,
      };

    default:
      return state;
  }
};
const myAdminRejectedRequestsReducer = (
  state = initialMyAdminRejectedRequestsState,
  action = {}
) => {
  switch (action.type) {
    case FETCH_MY_ADMIN_REJECTED_REQUESTS.REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
        message: '',
        status: false,
      };

    case FETCH_MY_ADMIN_REJECTED_REQUESTS.SUCCESS:
      return {
        ...state,
        requests: action.requests,
        loading: false,
        error: '',
        message: action.message,
        status: action.status,
      };
    case FETCH_MY_ADMIN_REJECTED_REQUESTS.FAIL:
      return {
        ...state,
        requests: [],
        loading: false,
        error: action.error,
        message: action.message,
        status: false,
      };

    default:
      return state;
  }
};
const myDonorApprovedRequestsReducer = (
  state = initialMyDonorApprovedRequestsState,
  action = {}
) => {
  switch (action.type) {
    case FETCH_MY_DONOR_APPROVED_REQUESTS.REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
        message: '',
        status: false,
      };

    case FETCH_MY_DONOR_APPROVED_REQUESTS.SUCCESS:
      return {
        ...state,
        requests: action.requests,
        loading: false,
        error: '',
        message: action.message,
        status: action.status,
      };
    case FETCH_MY_DONOR_APPROVED_REQUESTS.FAIL:
      return {
        ...state,
        requests: [],
        loading: false,
        error: action.error,
        message: action.message,
        status: false,
      };

    default:
      return state;
  }
};
const myDonorRejectedRequestsReducer = (
  state = initialMyDonorRejectedRequestsState,
  action = {}
) => {
  switch (action.type) {
    case FETCH_MY_DONOR_REJECTED_REQUESTS.REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
        message: '',
        status: false,
      };

    case FETCH_MY_DONOR_REJECTED_REQUESTS.SUCCESS:
      return {
        ...state,
        requests: action.requests,
        loading: false,
        error: '',
        message: action.message,
        status: action.status,
      };
    case FETCH_MY_DONOR_REJECTED_REQUESTS.FAIL:
      return {
        ...state,
        requests: [],
        loading: false,
        error: action.error,
        message: action.message,
        status: false,
      };

    default:
      return state;
  }
};
const adminRequestsReducer = (
  state = initialAdminRequestsState,
  action = {}
) => {
  switch (action.type) {
    case FETCH_ADMIN_REQUESTS.REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
        message: '',
        status: false,
      };

    case FETCH_ADMIN_REQUESTS.SUCCESS:
      return {
        ...state,
        requests: action.requests,
        loading: false,
        error: '',
        message: action.message,
        status: action.status,
      };
    case FETCH_ADMIN_REQUESTS.FAIL:
      return {
        ...state,
        requests: [],
        loading: false,
        error: action.error,
        message: action.message,
        status: false,
      };

    default:
      return state;
  }
};
const donorRequestsReducer = (
  state = initialDonorRequestsState,
  action = {}
) => {
  switch (action.type) {
    case FETCH_DONOR_REQUESTS.REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
        message: '',
        status: false,
      };

    case FETCH_DONOR_REQUESTS.SUCCESS:
      return {
        ...state,
        requests: action.requests,
        loading: false,
        error: '',
        message: action.message,
        status: action.status,
      };
    case FETCH_DONOR_REQUESTS.FAIL:
      return {
        ...state,
        requests: [],
        loading: false,
        error: action.error,
        message: action.message,
        status: false,
      };

    default:
      return state;
  }
};

export {
  loginReducer,
  donorsReducer,
  allMyRequestsReducer,
  myAdminApprovedRequestsReducer,
  myAdminRejectedRequestsReducer,
  myDonorApprovedRequestsReducer,
  myDonorRejectedRequestsReducer,
  adminRequestsReducer,
  donorRequestsReducer,
};
